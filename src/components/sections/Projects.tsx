import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { MouseEvent as ReactMouseEvent } from 'react';
import FadeIn from '../shared/FadeIn';
import { projects } from '../../data/content';

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">04 / Work</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Products built to be operated on, not demoed once.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={0.08 * i}>
              <TiltCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-surface/60 p-7 transition-colors duration-300 hover:border-electric/40 sm:p-9"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <span className="font-display text-3xl font-bold text-white/10 sm:text-4xl">{project.number}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{project.category}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold text-offwhite sm:text-3xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-cyan">{project.impact}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-offwhite/70 transition-colors group-hover:text-electric">
        Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.div>
  );
}
