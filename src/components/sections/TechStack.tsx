import { motion } from 'framer-motion';
import FadeIn from '../shared/FadeIn';
import { techStack } from '../../data/content';

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">03 / Stack</span>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            The infrastructure behind every product.
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-wrap gap-3 sm:mt-16 sm:gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="rounded-full border border-white/10 bg-surface/60 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-offwhite/90 sm:text-sm"
            >
              <motion.span
                className="inline-block"
                whileHover={{ y: -4 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
              >
                {tech}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
