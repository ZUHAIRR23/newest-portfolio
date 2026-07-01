# Development Guide

## Recommended Architecture

src/

app/
components/
features/
hooks/
lib/
animations/
data/
types/
public/

---

## Component Standards

Every component must:

- Use TypeScript
- Export default component
- Be reusable
- Be responsive
- Support animation props

---

## Animation Standards

Library:

- Framer Motion

Duration:

0.6s - 1.2s

Ease:

easeOutExpo

Avoid:

- Bounce
- Excessive rotations
- Flashy effects

---

## Tailwind Rules

Use:

- max-w-7xl
- container
- responsive spacing
- utility-first approach

Avoid:

- inline styles
- hardcoded widths

---

## Accessibility

Requirements:

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Contrast compliance

Target score:

95+

---

## SEO

Implement:

- Metadata API
- Open Graph
- Twitter Cards
- Structured Data
- Sitemap

---

## Performance

Images:

- next/image

Fonts:

- next/font

Code Splitting:

- Dynamic imports

Target:

- First Contentful Paint under 1.5s
- Lighthouse above 95

---

## Deployment

Recommended:

- Vercel

CI/CD:

- GitHub Actions

Environment:

- Production
- Staging
- Development

---

## Final Acceptance Checklist

[ ] Responsive
[ ] Smooth scrolling
[ ] Premium animations
[ ] SEO optimized
[ ] Accessible
[ ] Lighthouse > 95
[ ] Clean code
[ ] Production ready
