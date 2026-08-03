import FadeIn from '../shared/FadeIn';
import { journey } from '../../data/content';

export default function Journey() {
  return (
    <section className="relative border-y border-white/8 bg-surface/40 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">05 / Journey</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            From first client to enterprise platform.
          </h2>
        </FadeIn>

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-electric via-violet to-cyan" />
          <div className="flex flex-col gap-14">
            {journey.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08} x={-10} y={0} className="relative">
                <div className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-electric to-cyan sm:-left-[2.65rem]" />
                <span className="font-mono text-xs uppercase tracking-widest text-cyan">{item.year}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-offwhite sm:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
