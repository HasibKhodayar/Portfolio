import PageLayout from '@/components/layout/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | hasibkhodayar',
  description: 'Software Engineer at Ranovus, Carleton University Software Engineering graduate.',
};

const interests = [
  'Test automation & tooling',
  'Hardware-software interfaces',
  'Systems & concurrency',
  'Clean architecture',
  'Linux & embedded tooling',
  'Open-source tinkering',
];


export default function AboutPage() {
  return (
    <PageLayout>
        <div className="page-container">
          {/* Header */}
          <div className="mb-10 sm:mb-16">
            <p className="text-warm-white/50 font-light tracking-widest uppercase mb-4" style={{ fontSize: '12px' }}>about</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-8">
              a bit about me :)
            </h1>
            <div className="space-y-4 max-w-2xl">
              <p className="text-warm-white/75 font-light" style={{ fontSize: '17px', lineHeight: 1.85 }}>
                Hey! My name is Hasib. I&apos;m a Software Engineer at Ranovus on the System Verification Team, and a recent Software Engineering graduate from Carleton University in Ottawa.
              </p>
              <p className="text-warm-white/75 font-light" style={{ fontSize: '17px', lineHeight: 1.85 }}>
                My work sits at the boundary between software and hardware: building the test automation, tooling, and interfaces that let a team trust what their devices are actually doing. Outside of that I like pulling things apart to understand how they&apos;re built, whether that&apos;s a codebase, a piece of hardware, or a bug nobody else wants to touch.
              </p>
            </div>
          </div>

          {/* Interests */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-6" style={{ fontSize: '11px' }}>interests</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-5 py-2.5 bg-accent text-fg rounded text-sm font-medium hover:opacity-75 transition-opacity"
            >
              get in touch
            </a>
            <a
              href="/Hasib_Khodayar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-subtle text-warm-white/65 rounded text-sm hover:border-accent hover:text-accent transition-colors"
            >
              resume
            </a>
          </section>
        </div>

    </PageLayout>
  );
}
