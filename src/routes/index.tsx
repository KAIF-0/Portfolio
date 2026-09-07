import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import portrait from "@/assets/portrait.png";
import resumePdf from "@/assets/AmanResume.pdf";
import type { LeetCodeStats } from "@/lib/leetcode-stats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Sharma | Full Stack Developer" },
      {
        name: "description",
        content:
          "Full stack developer building scalable web applications — from databases and APIs to fast, pixel-perfect frontends.",
      },
      { property: "og:title", content: "Aman Sharma | Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Designing and building full stack applications end to end — clean APIs, solid architecture, and great user experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", icon: "code", href: "https://github.com/Aman-Sharma-Dev01" },
  { label: "LinkedIn", icon: "work", href: "https://linkedin.com/in/aman-sharma-dev01" },
];

const marqueeItems = [
  "Full Stack Developer",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
  "REST APIs",
  "Cloud Native",
];

const experience = [
  {
    role: "Full Stack Development Intern (Paid)",
    company: "MR Impact",
    location: "Faridabad, India",
    period: "Sept 2025 — Nov 2025",
    points: [
      "Developed LegacyLink, an alumni and student management SaaS platform using the MERN Stack, supporting profile management, event tracking, and alumni-student networking.",
      "Built a responsive, mobile-first UI with React and Tailwind CSS; designed MongoDB schemas and REST APIs.",
      "Containerized services with Docker and set up automated build/deploy workflows using GitHub Actions CI/CD.",
    ],
  },
];

const projects = [
  {
    name: "Insight4Excellence",
    period: "Feb 2026 — Present",
    tech: ["React", "Node.js", "MongoDB", "Google Gemini", "AWS"],
    points: [
      "Built a production-ready full-stack analytics portal processing 20,000+ Google Forms responses via server-side aggregation and caching.",
      "Integrated dynamic filters, data visualization, CSV export, and AI-driven insights using Google Gemini.",
      "Containerized the application with Docker and deployed on AWS ECS (hosted on Amazon EC2 instances), with container images stored and versioned in Amazon ECR.",
    ],
  },
  {
    name: "Surveyzen.live",
    period: "Oct 2025 — Jan 2026",
    tech: ["React", "Node.js", "MongoDB", "SEO"],
    points: [
      "Built a SaaS platform for surveys and quizzes with real-time response collection and analytics using React and Node.js.",
      "Designed a flexible form-builder engine supporting multiple question types and conditional logic.",
      "Implemented SEO-optimized UI, improving search visibility and page-load performance.",
      "Automated build and deployment using GitHub Actions CI/CD, reducing manual release effort.",
    ],
  },
  {
    name: "MediCare+",
    period: "Sept 2025 — Oct 2025",
    tech: ["MERN Stack", "Socket.IO"],
    points: [
      "Developed a healthcare app with appointment booking, electronic health records (EHR), and real-time emergency alerts using Socket.IO.",
      "Designed a live queue management system to provide real-time patient flow updates.",
      "Built role-based access control for patients, doctors, and admins to secure sensitive medical data.",
    ],
  },
];

const skillGroups = [
  { group: "Languages", items: ["Java", "JavaScript", "DSA & OOP"] },
  {
    group: "Frameworks / Stack",
    items: ["React.js", "Node.js", "Express.js", "Angular", "Tailwind CSS", "MERN Stack"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, ECS, ECR)", "Docker", "GitHub Actions (CI/CD)", "Agile SDLC"],
  },
  {
    group: "Databases & Deployment",
    items: ["MongoDB", "Vercel", "Render", "Netlify", "Cloudflare"],
  },
  { group: "Tools", items: ["Git", "VS Code", "Postman"] },
];

const certifications = [
  "Design Thinking — NPTEL: Certified training in human-centered innovation",
  "Faridabad IMT Expo: Volunteered at registration and visitor coordination",
];

const awards = [
  {
    title: "NASA Space Apps Challenge",
    detail: "Noida · 1st Place",
    points: ["Developed a weather prediction app using NASA climate datasets"],
  },
  {
    title: "Google Devs Sprint '25 Hackathon",
    detail: "Top 10 Finalist",
    points: ["Built a smart healthcare platform with AI-based report summarization"],
  },
];

const education = [
  {
    school: "Manav Rachna University",
    degree: "B.Tech in Computer Science Engineering (Lateral Entry)",
    detail: "CGPA: 8.7",
    location: "Faridabad, India",
    period: "Aug 2024 — Present",
  },
  {
    school: "Sheela Devi Institute of Management & Technology",
    degree: "Diploma in Computer Science Engineering",
    detail: "74%",
    location: "India",
    period: "2021 — 2024",
  },
];

const contactLinks = [
  { label: "Phone", value: "+91 72178 96449", href: "tel:+917217896449", icon: "call" },
  {
    label: "Email",
    value: "asharma8464@gmail.com",
    href: "mailto:asharma8464@gmail.com",
    icon: "mail",
  },
  { label: "Website", value: "amansh.in", href: "https://amansh.in", icon: "language" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aman-sharma-dev01",
    href: "https://linkedin.com/in/aman-sharma-dev01",
    icon: "work",
  },
  {
    label: "GitHub",
    value: "github.com/Aman-Sharma-Dev01",
    href: "https://github.com/Aman-Sharma-Dev01",
    icon: "code",
  },
];

function SectionHeader({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="reveal grid grid-cols-12 items-end gap-6 border-b-[3px] border-border pb-8 mb-12">
      <div className="col-span-12 md:col-span-3">
        <p className="font-label-mono text-[12px] uppercase tracking-widest text-primary">
          {label}
          <span className="cursor-blink" aria-hidden="true" />
        </p>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-[40px] md:text-[64px] leading-[0.9] font-black uppercase tracking-tighter text-primary">
          {children}
        </h2>
      </div>
    </div>
  );
}

function formatLastUpdated(iso: string | null): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function useCountUp(target: number, duration = 900): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const count = useCountUp(value);
  return (
    <>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

function LeetCodeStatsRow({
  label,
  value,
  loading,
}: {
  label: string;
  value: ReactNode;
  loading: boolean;
}) {
  return (
    <li className="border-b-2 border-border pb-3 last:border-0 last:pb-0">
      <p className="font-label-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      {loading ? (
        <p className="h-5 w-24 mt-1 animate-pulse bg-border" aria-hidden="true" />
      ) : (
        <p className="text-[15px] font-bold text-primary mt-1">{value}</p>
      )}
    </li>
  );
}

function CompetitiveProgrammingCard() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch("/api/leetcode/stats", { signal: controller.signal });
        const json = (await res.json()) as LeetCodeStats;
        if (cancelled) return;
        if (!res.ok || json.ok === false) {
          setError(json.error ?? "Could not load LeetCode stats right now.");
          setStats(null);
        } else {
          setStats(json);
          setError(null);
        }
      } catch (err) {
        if (cancelled) return;
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError("Could not load LeetCode stats right now.");
        setStats(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  if (error) {
    return (
      <>
        <ul className="space-y-4">
          <li className="border-b-2 border-border pb-3">
            <p className="font-label-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Live Stats
            </p>
            <p className="text-[14px] font-medium text-on-surface mt-1">{error}</p>
          </li>
        </ul>
        <a
          href="https://leetcode.com/u/Aman_7217/"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-label-mono text-[12px] uppercase tracking-widest text-primary hover:underline"
        >
          View LeetCode Profile
          <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
        </a>
      </>
    );
  }

  const liveRows: Array<{ label: string; value: ReactNode }> = stats
    ? [
        {
          label: "Problems Solved",
          value: <CountUp value={stats.totalSolved} suffix=" on LeetCode" />,
        },
        {
          label: "Easy / Medium / Hard",
          value: (
            <>
              <CountUp value={stats.easySolved} /> / <CountUp value={stats.mediumSolved} /> /{" "}
              <CountUp value={stats.hardSolved} />
            </>
          ),
        },
        ...(stats.contestRating != null
          ? [
              {
                label: "Contest Rating",
                value: <CountUp value={stats.contestRating} decimals={2} />,
              },
            ]
          : []),
        {
          label: "Global Ranking",
          value:
            stats.ranking != null && stats.ranking > 0 ? (
              <CountUp value={stats.ranking} prefix="#" />
            ) : (
              "—"
            ),
        },
      ]
    : [
        { label: "Problems Solved", value: "" },
        { label: "Easy / Medium / Hard", value: "" },
        { label: "Contest Rating", value: "" },
        { label: "Global Ranking", value: "" },
      ];

  const staticRows = [
    { label: "Max Streak", value: "64 days" },
    { label: "Badge", value: "50 Days Badge (2026)" },
  ];

  return (
    <>
      <ul className="space-y-4">
        {liveRows.map((item) => (
          <LeetCodeStatsRow
            key={item.label}
            label={item.label}
            value={item.value}
            loading={loading}
          />
        ))}
        {staticRows.map((item) => (
          <li key={item.label} className="border-b-2 border-border pb-3 last:border-0 last:pb-0">
            <p className="font-label-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {item.label}
            </p>
            <p className="text-[15px] font-bold text-primary mt-1">{item.value}</p>
          </li>
        ))}
      </ul>
      {stats ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-label-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Updated {formatLastUpdated(stats.lastUpdated)}
          </p>
          <a
            href="https://leetcode.com/u/Aman_7217/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-label-mono text-[12px] uppercase tracking-widest text-primary hover:underline"
          >
            View Profile
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
        </div>
      ) : null}
    </>
  );
}

function Index() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-clip selection:bg-primary selection:text-primary-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 animate-slide-down bg-surface grid-line-x">
        <div className="grid grid-cols-12 h-16 w-full">
          <div className="col-span-12 md:col-span-3 flex items-center px-6 grid-line-y">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full status-glow block" />
              <span className="font-label-mono text-[12px] uppercase tracking-widest text-primary">
                Available // 2026
              </span>
            </div>
          </div>
          <div className="hidden md:flex col-span-6 items-center justify-center gap-8 grid-line-y">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-label-mono text-[14px] uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-colors active:translate-y-px active:scale-95"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex col-span-3 items-center justify-end px-0">
            <a
              href="#contact"
              className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground font-label-mono text-[14px] uppercase tracking-widest hover:bg-card hover:text-primary border-l-[3px] border-transparent hover:border-primary transition-colors group"
            >
              Let's Talk
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative w-full h-screen min-h-[800px] overflow-hidden pt-16 grid-paper">
        <div className="absolute inset-0 pt-16 grid grid-cols-12 grid-rows-6 pointer-events-none z-0 opacity-20">
          <div className="col-span-3 row-span-6 border-r-2 border-border" />
          <div className="col-span-6 row-span-6 border-r-2 border-border" />
          <div className="col-span-12 row-start-3 row-span-1 border-y-2 border-border" />
          <div className="col-span-12 row-start-5 row-span-1 border-t-2 border-border" />
        </div>

        {/* Typography layer */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
          <h1 className="absolute left-0 top-[96vh] -rotate-90 origin-top-left text-outline-primary text-[13vw] leading-[0.8] tracking-[-0.05em] uppercase font-extrabold m-0 p-0 opacity-0 animate-reveal-right">
            Aman
          </h1>
          <span className="absolute right-[-2vw] top-[40vh] md:top-[30vh] text-primary text-[18vw] leading-[0.8] tracking-[-0.08em] uppercase font-black mix-blend-exclusion z-30 opacity-0 animate-fade-up [animation-delay:300ms]">
            Sharma
          </span>
        </div>

        {/* Portrait */}
        <div className="absolute bottom-0 right-[10%] md:right-[20%] w-[90%] md:w-[60%] h-[75vh] md:h-[85vh] z-20 opacity-0 animate-fade-up [animation-delay:100ms] pointer-events-none flex items-end drop-shadow-2xl">
          <img
            src={portrait}
            alt="Portrait of Aman Sharma, Full Stack Developer"
            width={1024}
            height={1408}
            className="w-full h-full object-contain object-bottom origin-bottom float-soft"
            style={{
              maskImage: "linear-gradient(to top, transparent, black 10%)",
              WebkitMaskImage: "linear-gradient(to top, transparent, black 10%)",
              filter: "contrast(120%) grayscale(100%)",
            }}
          />
        </div>

        {/* Bio card */}
        <div className="absolute top-24 left-6 md:left-12 max-w-sm z-40 opacity-0 animate-fade-up [animation-delay:500ms] brutalist-border p-6 bg-surface/90 backdrop-blur-sm">
          <div className="border-b-[3px] border-border pb-4 mb-4">
            <h2 className="text-[36px] md:text-[44px] leading-none text-primary font-black uppercase tracking-tighter">
              Full Stack
              <br />
              Developer
            </h2>
          </div>
          <p className="font-label-mono text-[14px] leading-relaxed tracking-normal text-on-surface mb-8 font-medium">
            Building fast, scalable web applications end to end — from databases and APIs to
            pixel-perfect frontends.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-between w-full bg-primary text-primary-foreground font-label-mono text-[14px] uppercase tracking-widest px-6 py-4 hover:bg-card hover:text-primary border-[3px] border-border transition-colors group"
          >
            Collaborate
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Socials */}
        <aside className="absolute bottom-12 right-6 md:right-12 flex flex-col items-end z-40 opacity-0 animate-fade-up [animation-delay:500ms] brutalist-border bg-surface">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 border-b-2 border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-between w-48"
            >
              <span className="font-label-mono text-[13px] uppercase tracking-widest">
                {s.label}
              </span>
              <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
            </a>
          ))}
          <a
            href={resumePdf}
            download="AmanResume.pdf"
            className="px-6 py-4 flex items-center justify-between w-48 bg-primary text-primary-foreground hover:bg-card hover:text-primary transition-colors group"
          >
            <span className="font-label-mono text-[13px] uppercase tracking-widest">Resume</span>
            <span className="material-symbols-outlined text-[20px] group-hover:animate-bounce">
              download
            </span>
          </a>
        </aside>
      </main>

      {/* Marquee */}
      <div
        aria-hidden="true"
        className="border-t-[3px] border-b-[3px] border-border bg-primary text-primary-foreground overflow-hidden select-none"
      >
        <div className="marquee-track font-label-mono text-[13px] md:text-[14px] uppercase tracking-widest py-3">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="px-6">{item}</span>
              <span className="text-[12px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="scroll-mt-16 border-t-[3px] border-border grid-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <p className="font-label-mono text-[12px] uppercase tracking-widest text-primary mb-10">
            01 // About
            <span className="cursor-blink" aria-hidden="true" />
          </p>
          <p className="reveal text-[28px] md:text-[44px] leading-[1.05] font-black uppercase tracking-tighter text-primary max-w-5xl">
            Clean, scalable, production-ready code.
          </p>
          <p className="reveal mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-on-surface">
            Aspiring Software Engineer with a strong foundation in Data Structures, OOP, and
            cloud-native development. Experienced in building and deploying full-stack MERN
            applications, containerized microservices, and AI-integrated systems using AWS and CI/CD
            pipelines. Passionate about writing clean, scalable, production-ready code.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="scroll-mt-16 border-t-[3px] border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="02 // Experience">
            Work &amp;
            <br />
            Internship
          </SectionHeader>
          <div className="grid gap-8">
            {experience.map((job, i) => (
              <article
                key={job.role}
                style={{ "--stagger": i } as CSSProperties}
                className="reveal-stagger brutalist-border bg-card p-6 md:p-10 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary">
                      {job.role}
                    </h3>
                    <p className="font-label-mono text-[13px] uppercase tracking-widest text-muted-foreground mt-2">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-label-mono text-[12px] uppercase tracking-widest text-primary">
                      {job.period}
                    </p>
                    <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-1">
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-4">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1">
                        arrow_right
                      </span>
                      <p className="text-[15px] leading-relaxed text-on-surface">{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-16 border-t-[3px] border-border grid-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="03 // Projects">
            Featured
            <br />
            Projects
          </SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            {projects.map((project, i) => (
              <article
                key={project.name}
                style={{ "--stagger": i } as CSSProperties}
                className="reveal-stagger col-span-12 md:col-span-6 brutalist-border bg-card p-6 md:p-8 flex flex-col gap-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-primary)] active:translate-x-0 active:translate-y-0 active:scale-[0.99] group"
              >
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={t}
                      style={{ animationDelay: `${i * 120 + j * 60}ms` }}
                      className="font-label-mono text-[10px] md:text-[11px] uppercase tracking-widest text-primary border-2 border-border px-2 py-1 bg-surface"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary">
                    {project.name}
                  </h3>
                  <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-1 mb-5">
                    {project.period}
                  </p>
                  <ul className="space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1">
                          chevron_right
                        </span>
                        <p className="text-[14px] leading-relaxed text-on-surface">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-16 border-t-[3px] border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="04 // Skills">
            Technical
            <br />
            Arsenal
          </SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              {skillGroups.map((group, i) => (
                <div
                  key={group.group}
                  style={{ "--stagger": i } as CSSProperties}
                  className="reveal-stagger flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b-2 border-border py-5 group"
                >
                  <p className="md:w-48 shrink-0 font-label-mono text-[12px] uppercase tracking-widest text-primary">
                    {group.group}
                  </p>
                  <p className="text-[15px] leading-relaxed text-on-surface">
                    {group.items.map((item, j) => (
                      <span key={item}>
                        {j > 0 ? <span className="text-primary"> · </span> : null}
                        <span className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:px-1 hover:-mx-0.5 box-decoration-clone">
                          {item}
                        </span>
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div className="col-span-12 md:col-span-5 space-y-6">
              <div
                style={{ "--stagger": 0 } as CSSProperties}
                className="reveal-stagger brutalist-border bg-card p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-primary mb-6">
                  Competitive Programming
                </h3>
                <CompetitiveProgrammingCard />
              </div>
              <div
                style={{ "--stagger": 1 } as CSSProperties}
                className="reveal-stagger brutalist-border bg-card p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-primary mb-6">
                  Certifications &amp; Volunteering
                </h3>
                <ul className="space-y-3">
                  {certifications.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <p className="text-[14px] leading-relaxed text-on-surface">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-16 border-t-[3px] border-border grid-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="05 // Achievements">
            Awards &amp;
            <br />
            Recognition
          </SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            {awards.map((award, i) => (
              <article
                key={award.title}
                style={{ "--stagger": i } as CSSProperties}
                className="reveal-stagger col-span-12 md:col-span-6 brutalist-border bg-card p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] group"
              >
                <span className="material-symbols-outlined float-icon text-primary text-[36px] mb-6 block">
                  workspace_premium
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary">
                  {award.title}
                </h3>
                <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-2 mb-5">
                  {award.detail}
                </p>
                <ul className="space-y-3">
                  {award.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1">
                        arrow_right
                      </span>
                      <p className="text-[14px] leading-relaxed text-on-surface">{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-16 border-t-[3px] border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="06 // Education">Education</SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            {education.map((edu, i) => (
              <article
                key={edu.school}
                style={{ "--stagger": i } as CSSProperties}
                className="reveal-stagger col-span-12 md:col-span-6 brutalist-border bg-card p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] group"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="material-symbols-outlined float-icon text-primary text-[32px]">
                    school
                  </span>
                  <div className="text-right">
                    <p className="font-label-mono text-[12px] uppercase tracking-widest text-primary">
                      {edu.period}
                    </p>
                    <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary">
                  {edu.school}
                </h3>
                <p className="text-[15px] leading-relaxed text-on-surface mt-2">{edu.degree}</p>
                <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-3">
                  {edu.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t-[3px] border-border grid-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <SectionHeader label="07 // Contact">
            Let's Work
            <br />
            Together
          </SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            <div
              style={{ "--stagger": 0 } as CSSProperties}
              className="reveal-stagger col-span-12 md:col-span-7"
            >
              <div className="brutalist-border bg-card divide-y-[2px] divide-border">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                        ? undefined
                        : "noreferrer"
                    }
                    className="flex items-center gap-5 px-6 py-5 hover:bg-primary hover:text-primary-foreground transition-colors group active:translate-y-px"
                  >
                    <span className="material-symbols-outlined text-[24px]">{link.icon}</span>
                    <div className="flex-1">
                      <p className="font-label-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/70">
                        {link.label}
                      </p>
                      <p className="text-[15px] md:text-base font-bold text-primary group-hover:text-primary-foreground break-all">
                        {link.value}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_outward
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div
              style={{ "--stagger": 1 } as CSSProperties}
              className="reveal-stagger col-span-12 md:col-span-5"
            >
              <div className="brutalist-border bg-card p-6 md:p-8 h-full flex flex-col">
                <span className="material-symbols-outlined float-icon text-primary text-[40px] mb-6">
                  rocket_launch
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary leading-tight">
                  Have a project
                  <br />
                  in mind?
                </h3>
                <p className="text-[15px] leading-relaxed text-on-surface mt-4">
                  Open to full stack development roles and interesting collaborations. Let's build
                  something great together.
                </p>
                <a
                  href="mailto:asharma8464@gmail.com"
                  className="mt-auto inline-flex items-center justify-between w-full bg-primary text-primary-foreground font-label-mono text-[14px] uppercase tracking-widest px-6 py-4 hover:bg-card hover:text-primary border-[3px] border-border transition-colors group"
                >
                  Email Me
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee 2 */}
      <div
        aria-hidden="true"
        className="border-t-[3px] border-b-[3px] border-border bg-primary text-primary-foreground overflow-hidden select-none"
      >
        <div className="marquee-track marquee-reverse font-label-mono text-[13px] md:text-[14px] uppercase tracking-widest py-3">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="px-6">{item}</span>
              <span className="text-[12px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-[3px] border-border bg-surface grid-paper">
        <div className="reveal mx-auto max-w-[1400px] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-label-mono text-[12px] uppercase tracking-widest text-primary">
            © 2026 Aman Sharma
          </p>
          <p className="font-label-mono text-[12px] uppercase tracking-widest text-muted-foreground">
            Designed &amp; Built by Aman Sharma
          </p>
        </div>
      </footer>
    </div>
  );
}
