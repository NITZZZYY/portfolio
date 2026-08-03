import { Quote } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <section className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">06 / Trust</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Built with teams who needed it to actually work.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 * i}>
              <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-surface/60 p-7">
                <Quote className="text-electric/60" size={22} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-offwhite/90 sm:text-base">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-white/8 pt-4">
                  <p className="text-sm font-medium text-offwhite">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide text-muted">{t.context}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted sm:mt-12">
          <span>Trusted across</span>
          {['Hospitality', 'Real Estate', 'Healthcare', 'Retail', 'Education'].map((industry) => (
            <span key={industry} className="text-offwhite/70">{industry}</span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
