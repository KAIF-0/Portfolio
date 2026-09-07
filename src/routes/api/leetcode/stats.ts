import { createFileRoute } from "@tanstack/react-router";

import type { LeetCodeStats } from "@/lib/leetcode-stats";

const LEETCODE_USERNAME = "Aman_7217";
const GRAPHQL_ENDPOINT = "https://leetcode.com/graphql";
const CACHE_TTL_MS = 15 * 60 * 1000;
const FETCH_TIMEOUT_MS = 8_000;

type CachedEntry = { payload: LeetCodeStats; fetchedAt: number };

type SubmissionCount = { difficulty: string; count: number };

type ProfileResponse = {
  data?: {
    matchedUser?: {
      username?: string;
      submitStatsGlobal?: { acSubmissionNum?: SubmissionCount[] };
      profile?: { ranking?: number };
    };
  };
  errors?: Array<{ message: string }>;
};

type ContestResponse = {
  data?: {
    userContestRanking?: {
      attendedContestsCount?: number;
      rating?: number;
      globalRanking?: number;
      topPercentage?: number;
    } | null;
  };
  errors?: Array<{ message: string }>;
};

let cache: CachedEntry | null = null;

async function postGraphQL(
  query: string,
  variables: Record<string, string>,
): Promise<{ data?: unknown; errors?: Array<{ message: string }> }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        referer: "https://leetcode.com/u/Aman_7217/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`LeetCode responded with HTTP ${res.status}`);
    return (await res.json()) as { data?: unknown; errors?: Array<{ message: string }> };
  } finally {
    clearTimeout(timeout);
  }
}

function parseProfilePayload(
  json: ProfileResponse,
): Pick<LeetCodeStats, "totalSolved" | "easySolved" | "mediumSolved" | "hardSolved" | "ranking"> {
  const matchedUser = json.data?.matchedUser;
  if (!matchedUser) throw new Error("LeetCode user not found");
  const counts: Record<string, number> = {};
  for (const entry of matchedUser.submitStatsGlobal?.acSubmissionNum ?? []) {
    counts[entry.difficulty] = entry.count;
  }
  return {
    totalSolved: counts["All"] ?? 0,
    easySolved: counts["Easy"] ?? 0,
    mediumSolved: counts["Medium"] ?? 0,
    hardSolved: counts["Hard"] ?? 0,
    ranking: matchedUser.profile?.ranking ?? null,
  };
}

function parseContestPayload(
  json: ContestResponse,
): Pick<
  LeetCodeStats,
  "contestRating" | "contestGlobalRanking" | "attendedContestsCount" | "topPercentage"
> {
  const contest = json.data?.userContestRanking;
  if (!contest) {
    return {
      contestRating: null,
      contestGlobalRanking: null,
      attendedContestsCount: null,
      topPercentage: null,
    };
  }
  return {
    contestRating: contest.rating ?? null,
    contestGlobalRanking: contest.globalRanking ?? null,
    attendedContestsCount: contest.attendedContestsCount ?? null,
    topPercentage: contest.topPercentage ?? null,
  };
}

async function fetchLiveStats(): Promise<LeetCodeStats> {
  const [profileResult, contestResult] = await Promise.allSettled([
    postGraphQL(
      `query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
      }`,
      { username: LEETCODE_USERNAME },
    ),
    postGraphQL(
      `query userContestRanking($username: String!) {
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
          topPercentage
        }
      }`,
      { username: LEETCODE_USERNAME },
    ),
  ]);

  if (profileResult.status === "rejected") {
    throw profileResult.reason;
  }
  const firstError = profileResult.value.errors?.[0];
  if (firstError) {
    throw new Error(firstError.message);
  }

  const profile = parseProfilePayload(profileResult.value as ProfileResponse);
  const contest =
    contestResult.status === "fulfilled" && !contestResult.value.errors?.length
      ? parseContestPayload(contestResult.value as ContestResponse)
      : {
          contestRating: null,
          contestGlobalRanking: null,
          attendedContestsCount: null,
          topPercentage: null,
        };

  return {
    ok: true,
    username: LEETCODE_USERNAME,
    ...profile,
    ...contest,
    lastUpdated: new Date().toISOString(),
    stale: false,
  };
}

export const Route = createFileRoute("/api/leetcode/stats")({
  server: {
    handlers: {
      GET: async () => {
        const now = Date.now();
        if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
          return Response.json(cache.payload);
        }

        try {
          const payload = await fetchLiveStats();
          cache = { payload, fetchedAt: Date.now() };
          return Response.json(payload);
        } catch (error) {
          console.error("LeetCode stats fetch failed:", error);
          if (cache) {
            return Response.json({ ...cache.payload, stale: true }, { status: 502 });
          }
          return Response.json(
            {
              ok: false,
              username: LEETCODE_USERNAME,
              totalSolved: 0,
              easySolved: 0,
              mediumSolved: 0,
              hardSolved: 0,
              ranking: null,
              contestRating: null,
              contestGlobalRanking: null,
              attendedContestsCount: null,
              topPercentage: null,
              lastUpdated: null,
              stale: false,
              error: "Could not reach LeetCode right now.",
            },
            { status: 502 },
          );
        }
      },
    },
  },
});
