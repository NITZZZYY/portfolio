import FadeIn from '../shared/FadeIn';
import TextReveal from '../shared/TextReveal';

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">01 / Identity</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6">
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-offwhite sm:text-5xl lg:text-6xl">
            A founder-first approach to building AI &amp; software.
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-12">
          <TextReveal
            className="max-w-3xl font-body text-lg leading-relaxed text-muted sm:text-xl"
            text="Nitesh runs Leptron Technologies with one working premise: businesses don't need more demos, they need systems they can operate on. That means product design, engineering, and go-to-market handled by the same mind end to end — no handoffs, no diluted vision. Every product ships with the discipline of enterprise software and the speed of a founder who still writes code."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3">
          {[
            {
              title: 'Business-first thinking',
              body: 'Every system is judged by the revenue, hours, or risk it removes — not by how impressive the tech sounds.',
            },
            {
              title: 'Full-stack ownership',
              body: 'Design, architecture, deployment, and go-to-market sit under one roof, so nothing gets lost in translation.',
            },
            {
              title: 'AI as infrastructure',
              body: 'LLMs and automation are treated as core infrastructure — built to be reliable, not just impressive in a demo.',
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <div className="rounded-2xl border border-white/8 bg-surface/60 p-6">
                <h3 className="font-display text-lg font-semibold text-offwhite">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
