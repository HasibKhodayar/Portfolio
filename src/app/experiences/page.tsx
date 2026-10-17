import PageLayout from '@/components/layout/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience · hasibkhodayar',
  description: 'Work experience and projects by Hasib Khodayar.',
};

const experience = [
  {
    role: 'Software Engineer',
    company: 'Ranovus',
    org: null,
    location: 'Ottawa, ON',
    period: 'Sep 2024 – Present',
    bullets: [
      'Built and maintain CMISInterface, a Python wheel giving high-level access to an optical engine’s CMIS-defined registers over I2C, shipped to Ranovus customers',
      'Built a Python Flask API bridging Raspberry Pi devices to the ML4079EN BERT instrument, lifting the vendor API’s Windows-only restriction and opening up FEC monitoring across the team’s platforms',
      'Designed and implemented the ILS Soak System with the VP of Platform Engineering: continuous automated optical-power testing with data logging, graph generation, and automated reporting that now qualifies every device before it ships',
      'Validated ODIN8P firmware builds through targeted regression suites and root-cause analysis alongside the firmware and hardware teams',
      'Build and maintain C# .NET web applications for internal Ranovus tooling',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Environment and Climate Change Canada',
    org: null,
    location: 'Gatineau, QC',
    period: 'Jan 2024 – Aug 2024',
    bullets: [
      'Resolved front-end and back-end defects in the Canadian Notification and Movement Tracking System (CNMTS), improving performance and functionality across subsequent releases',
      'Built enforcement-officer-facing pages within CNMTS using C# and ASP.NET, enhancing internal operations, accessibility, and efficiency',
      'Delivered a full front-end remodel of the Greenhouse Gas Reporting Program (GHG) application, alongside an extensive database schema refactor for data integrity and query performance',
      'Engineered xUnit test suites for GHG API endpoints and automated front-end regression coverage with Selenium',
    ],
  },
];

const projects = [
  {
    name: 'Firefighting Drone Swarm Simulator',
    label: null,
    tech: 'Java, Multithreading, UDP, Distributed Systems',
    github: undefined,
    website: undefined,
    bullets: [
      'Built a real-time, fault-tolerant drone dispatch simulator using Java threads and UDP across 3 subsystems',
      'Implemented a multithreaded scheduler using the State Pattern for drone coordination, messaging, and task flow control',
    ],
  },
  {
    name: 'Sysc.ca',
    label: null,
    tech: 'JavaScript, React',
    github: undefined,
    website: 'https://hajar-assim.github.io/sysc-site/',
    bullets: [
      'Developed a comprehensive React-based website for Carleton software engineering students providing centralized access to class materials, a GPA calculator, and program resources',
      'Led the design and development of a user-friendly FAQ section, serving as a knowledge hub for program-related queries',
      'Collaborated with a team to integrate the GPA calculator feature, letting students track academic progress',
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <PageLayout>
      <div className="page-container">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-warm-white/50 font-light tracking-widest uppercase mb-4" style={{ fontSize: '12px' }}>portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            experience &amp; projects.
          </h1>
        </div>

        {/* ── Education ───────────────────────── */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            education
          </h2>
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 mb-1">
              <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                B.Software Engineering (Co-op)
              </h3>
              <span className="text-warm-white/40 font-normal shrink-0" style={{ fontSize: '14px' }}>
                Sep 2021 – May 2026
              </span>
            </div>
            <p className="text-warm-white/60 font-normal mb-4" style={{ fontSize: '15px' }}>
              Carleton University · Ottawa, ON
            </p>
            <ul className="space-y-2.5">
              {[
                'GPA: 3.9/4.0 · Golden Key International Honour Society (Top 15% of program) · Dean’s Honour List, 2021–2024',
                'Relevant coursework: Algorithms & Data Structures, Operating Systems, Computer & Software Architecture and Design',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                  <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* ── Experience ───────────────────────── */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            experience
          </h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <article key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 mb-1">
                  <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                    {job.role}
                  </h3>
                  <span className="text-warm-white/40 font-normal shrink-0" style={{ fontSize: '14px' }}>
                    {job.period}
                  </span>
                </div>
                <p className="text-warm-white/60 font-normal mb-4" style={{ fontSize: '15px' }}>
                  {job.company}{job.org ? ` | ${job.org}` : ''} · {job.location}
                </p>
                <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                      <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Projects ─────────────────────────── */}
        <section>
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            projects
          </h2>
          <div className="space-y-12">
            {projects.map((p) => (
              <article key={p.name}>
                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-x-6 mb-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                      {p.name}
                    </h3>
                    {p.label && (
                      <span className="text-accent/80 font-normal" style={{ fontSize: '14px' }}>
                        {p.label}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-5">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="text-warm-white font-semibold hover:text-accent hover:underline underline-offset-4 transition-colors"
                        style={{ fontSize: '15px' }}>
                        github
                      </a>
                    )}
                    {p.website && p.website !== p.github && (
                      <a href={p.website} target="_blank" rel="noopener noreferrer"
                        className="text-warm-white font-semibold hover:text-accent hover:underline underline-offset-4 transition-colors"
                        style={{ fontSize: '15px' }}>
                        website
                      </a>
                    )}
                  </div>
                </div>
                {/* Tech stack */}
                <p className="text-warm-white/55 font-normal mb-4" style={{ fontSize: '14px' }}>
                  {p.tech}
                </p>
                <ul className="space-y-2.5">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                      <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
