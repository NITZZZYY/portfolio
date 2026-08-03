import { Mail, Linkedin, Github } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { PrimaryButton } from '../shared/Buttons';

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden sm:px-10 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grid-fade blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">08 / Contact</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-gradient sm:text-6xl lg:text-7xl">
            Let's build something powerful.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="max-w-xl mx-auto mt-6 text-sm leading-relaxed text-muted sm:text-base">
            Open to enterprise partnerships, AI product builds, and founders who need
            serious infrastructure — not another prototype.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col items-center gap-6 mt-10">
          <PrimaryButton href="mailto:nitesh.raghu@leptron.in">Start a Conversation</PrimaryButton>
          <div className="flex gap-6 text-muted">
            <a href="mailto:nitesh.raghu@leptron.in" className="transition-colors hover:text-offwhite" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/NITZZZYY" className="transition-colors hover:text-offwhite" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/niteshleptron/" className="transition-colors hover:text-offwhite" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
