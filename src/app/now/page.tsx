import PageLayout from '@/components/layout/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now · Hasib Khodayar',
  description: 'What I am currently focused on.',
};

const lastUpdated = 'October 2026';

const now = [
  {
    heading: 'Working on',
    items: [
      'The Test Management Platform at Ranovus, a C# and Blazor system for tests, requirements, and coverage',
      'Validating ODIN8P firmware builds through regression suites and root-cause analysis with the firmware and hardware teams',
    ],
  },
  {
    heading: 'Thinking about',
    items: [
      'How to make device qualification testing faster without cutting corners',
      'Where the boundary between software and hardware tooling should actually sit on a test system',
    ],
  },
];

export default function NowPage() {
  return (
    <PageLayout>
      <div className="page-container">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-warm-white/50 font-light tracking-widest uppercase mb-4" style={{ fontSize: '12px' }}>now</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-4">
            what I&apos;m doing now.
          </h1>
          <p className="text-warm-white/50 font-light" style={{ fontSize: '14px' }}>
            Last updated {lastUpdated} · inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-accent/80 hover:text-accent transition-colors underline underline-offset-2">nownownow.com</a>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {now.map((section) => (
            <section key={section.heading}>
              <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-5" style={{ fontSize: '11px' }}>
                {section.heading}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[9px]" />
                    <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
