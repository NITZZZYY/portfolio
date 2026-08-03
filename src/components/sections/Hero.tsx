import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FadeIn from '../shared/FadeIn';
import { PrimaryButton, GhostButton } from '../shared/Buttons';
import { stats } from '../../data/content';

const roles = [
  'Founder & CEO, Leptron',
  'AI Product Strategist',
  'Full-Stack Systems Builder',
  'Enterprise Software Architect',
  'Busiess Automation Consultant',
  'Business Analyst & Workflow Designer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex flex-col justify-between min-h-screen px-6 pb-10 overflow-hidden pt-28 sm:px-10 sm:pt-32">
      {/* ambient background */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grid-fade blur-3xl" />
      <OrbitNodes />

      {/* nav */}
      <FadeIn delay={0} y={-20} duration={0.8} className="relative z-10 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm">
        <span className="text-offwhite">Leptron / NITESH RAGHU</span>
        <div className="hidden gap-8 sm:flex">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition-opacity hover:opacity-60">
              {item}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* headline */}
      <div className="relative z-10 flex flex-col justify-center flex-1">
        <FadeIn delay={0.15} y={40} duration={0.9}>
          <h1 className="font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight text-gradient sm:text-[9vw] lg:text-[7.5vw]">
            Nitesh
          </h1>
        </FadeIn>
        <FadeIn delay={0.3} y={20} duration={0.8} className="h-8 mt-4 overflow-hidden sm:mt-6 sm:h-10">
          <motion.div
            key={roleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-mono text-base tracking-widest uppercase text-electric sm:text-xl"
          >
            {roles[roleIndex]}
          </motion.div>
        </FadeIn>
      </div>

      {/* bottom row */}
      <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <FadeIn delay={0.4} y={20} className="max-w-md">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Building intelligent systems that turn ambitious ideas into enterprise-grade reality —
            across AI, automation, and full-stack software.
          </p>
          <div className="flex gap-3 mt-6">
            <PrimaryButton href="#work">View Work</PrimaryButton>
            <GhostButton href="#contact" icon={false}>Book a Call</GhostButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.slice(0, 2).map((s) => (
            <div key={s.label} className="px-5 py-4 glass rounded-2xl">
              <div className="text-2xl font-semibold font-display text-offwhite sm:text-3xl">
                {s.value}{s.suffix}
              </div>
              <div className="mt-1 max-w-[140px] text-[11px] uppercase tracking-wide text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/** Subtle animated node network — the site's signature ambient motif. */
function OrbitNodes() {
  const nodes = Array.from({ length: 8 });
  return (
    <svg
      className="pointer-events-none absolute right-[-10%] top-1/2 z-0 hidden h-[600px] w-[600px] -translate-y-1/2 opacity-60 md:block lg:right-[2%]"
      viewBox="0 0 400 400"
    >
      {nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2;
        const r = 140;
        const cx = 200 + r * Math.cos(angle);
        const cy = 200 + r * Math.sin(angle);
        return (
          <g key={i}>
            <motion.line
              x1={200}
              y1={200}
              x2={cx}
              y2={cy}
              stroke="url(#lineGrad)"
              strokeWidth={0.6}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
            <motion.circle
              cx={cx}
              cy={cy}
              r={3}
              fill="#3D7FFF"
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            />
          </g>
        );
      })}
      <circle cx={200} cy={200} r={5} fill="#22D3EE" />
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D7FFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
