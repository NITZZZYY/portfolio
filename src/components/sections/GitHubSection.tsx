import { Github, Star, GitFork, Code2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { GhostButton } from '../shared/Buttons';

export default function GitHubSection() {
  return (
    <section className="relative border-y border-white/8 bg-surface/40 px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <FadeIn className="max-w-lg">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">07 / Code</span>
          <h2 className="mt-6 font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Code is the first draft of every product.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Every system starts as working code before it becomes a pitch deck. Public
            repositories reflect the same standard shipped to clients.
          </p>
          <div className="mt-8">
            <GhostButton href="https://github.com/NITZZZYY">
              <Github size={16} /> View GitHub
            </GhostButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="grid w-full max-w-md grid-cols-3 gap-4">
          {[
            { icon: Code2, label: 'Repositories', value: 'Active' },
            { icon: Star, label: 'Focus', value: 'AI Systems' },
            { icon: GitFork, label: 'Approach', value: 'Full-stack' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/8 bg-surface2/60 p-5 text-center">
              <item.icon className="mx-auto text-electric" size={20} />
              <p className="mt-3 font-display text-sm font-semibold text-offwhite">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-muted">{item.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
