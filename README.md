# Nitesh — Founder Portfolio

A cinematic, motion-rich portfolio site for Nitesh, Founder & CEO of Leptron Technologies.
Built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## File structure

```
src/
  data/content.ts             # all copy: stats, tech stack, projects, journey, testimonials
  components/
    shared/
      FadeIn.tsx              # scroll-triggered reveal wrapper (used everywhere)
      Magnetic.tsx            # mouse-following magnetic hover effect
      TextReveal.tsx          # word-by-word scroll-reveal paragraph
      AnimatedCounter.tsx     # spring-animated number counter
      Buttons.tsx             # PrimaryButton (gradient) + GhostButton (outline)
    sections/
      Loader.tsx              # cinematic intro / progress reveal
      Hero.tsx                # full-screen hero, rotating role text, orbit-node motif
      About.tsx                # identity section, scroll-revealed narrative
      Achievements.tsx        # animated metric cards
      TechStack.tsx           # floating tech tag cloud
      Projects.tsx            # tilt-on-hover project cards
      Journey.tsx             # founder timeline
      Testimonials.tsx        # trust / quote cards
      GitHubSection.tsx       # coding-credibility section (github.com/NITZZZYY)
      Contact.tsx             # closing CTA
    Footer.tsx
  App.tsx                     # wires loader + sections together
  index.css                   # design tokens, gradients, noise overlay, reduced-motion support
tailwind.config.js             # color palette, fonts, custom gradients/shadows
```

## Design tokens

- Background: `#0B0B0F` (void) / `#111116` (surface)
- Text: `#F3F3F5` (offwhite) / `#8B8B95` (muted)
- Accents: electric blue `#3D7FFF`, violet `#8B5CF6`, cyan `#22D3EE`, gold `#E8B75A`
- Display type: Space Grotesk · Body: Inter · Mono/labels: IBM Plex Mono

## Notes for extending

- **Real project images**: swap the description-only project cards in `Projects.tsx` /
  `data/content.ts` for real screenshots once you have them — the card layout has room
  for a visual area if you want to add one.
- **Metrics**: the numbers in `data/content.ts` (`stats`) are placeholders styled like
  real figures — replace with your actual counts whenever ready.
- **GitHub activity**: `GitHubSection.tsx` currently links out to
  `github.com/NITZZZYY` with static credibility cards. If you want live repo/activity
  data, wire it to the GitHub REST API (`/users/NITZZZYY/repos`) — no fake data is
  hardcoded in the meantime.
- **Testimonials**: currently placeholder quotes styled as real client testimonials —
  swap in verified quotes before shipping publicly.
- Respect for `prefers-reduced-motion` is built into `index.css`.
