export type LeetCodeStats = {
  ok: boolean;
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number | null;
  contestRating: number | null;
  contestGlobalRanking: number | null;
  attendedContestsCount: number | null;
  topPercentage: number | null;
  lastUpdated: string | null;
  stale: boolean;
  error?: string;
};
