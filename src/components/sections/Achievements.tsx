import FadeIn from '../shared/FadeIn';
import AnimatedCounter from '../shared/AnimatedCounter';
import { stats } from '../../data/content';

export default function Achievements() {
  return (
    <section className="relative border-y border-white/8 bg-surface/40 px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">02 / Impact</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Execution measured in systems shipped, not slides presented.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:mt-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 + i * 0.08}>
              <div className="group rounded-2xl border border-white/8 bg-surface2/60 p-6 transition-colors duration-300 hover:border-electric/40 sm:p-8">
                <div className="font-display text-4xl font-bold text-transparent sm:text-5xl" style={{ WebkitTextStroke: '1px #F3F3F5' }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} className="bg-gradient-to-r from-electric via-violet to-cyan bg-clip-text text-transparent" />
                </div>
                <p className="mt-3 text-xs uppercase leading-relaxed tracking-wide text-muted sm:text-sm">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
