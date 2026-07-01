# Software Engineer Portfolio - Project Brief

## Reference
https://majd-portfolio.framer.website/

## Goal
Membangun portfolio premium untuk Software Engineer yang memiliki kualitas visual setara website Majd Portfolio.

### Tujuan Utama
- Menampilkan expertise software engineering
- Meningkatkan personal branding
- Menarik recruiter
- Menarik client freelance
- Menampilkan project dengan storytelling yang kuat

---

# Design Direction

## Visual Style

Inspirasi:
- Majd Portfolio
- Linear
- Vercel
- Stripe Press
- Rauno Portfolio

Keywords:
- Minimal
- Premium
- Modern
- Editorial
- Luxury Tech
- Motion First

## Color System

### Primary
```css
#FFFFFF
#0A0A0A
```

### Secondary
```css
#A1A1AA
#52525B
```

### Accent
```css
#2563EB
```
atau
```css
#7C3AED
```

## Typography

### Headings
- Geist
- Satoshi
- Inter Tight

### Body
- Inter

### Font Weight
- 700
- 800
- 900

### Hero Font Size
```css
clamp(72px, 12vw, 180px)
```

---

# User Experience Flow

## Hero Section
- Full viewport
- Availability badge
- Current location
- Scroll indicator
- Large typography

### Animation
- Character reveal
- Blur to sharp
- Fade up
- Stagger text

---

## Introduction Section

Content:
- Personal introduction
- Professional summary
- Core expertise

### Animation
- Scroll reveal
- Text mask animation

---

## Experience Section

Timeline layout:

- Year
- Position
- Company
- Description

### Animation
- Progress line grows on scroll
- Cards slide in

---

## Tech Stack Section

### Frontend
- React
- Next.js
- TypeScript

### Backend
- Node.js
- Laravel
- Express

### Database
- PostgreSQL
- MySQL
- MongoDB

### Tools
- Docker
- Git
- AWS

### Animation
- Hover elevation
- Magnetic effect

---

## Featured Projects

Setiap project harus memiliki:

- Project Name
- Description
- Technologies
- Live Demo
- GitHub Repository
- Impact / Results

### Animation
- Image scale
- Scroll parallax
- Hover zoom

---

## Project Showcase

Bento Grid Layout

Menampilkan:
- Screenshot
- Metrics
- Tech Stack
- Impact

---

## Testimonials

Horizontal scroll section

### Animation
- Infinite marquee
- Smooth auto-scroll

---

## Blog / Thoughts

Menampilkan:
- Articles
- Technical insights
- Lessons learned

---

## Contact Section

Headline:
"Let's Build Something Great."

CTA:
- Email
- LinkedIn
- GitHub

---

# Animation Guide

## Libraries

```bash
Framer Motion
GSAP
Lenis
```

## Global Animation Rules

Duration:
```txt
0.6s - 1.2s
```

Ease:
```txt
easeOutExpo
```

Target:
```txt
60 FPS
```

## Hero Animation Sequence

1. Background Fade
2. Title Reveal
3. Subtitle Reveal
4. Availability Badge
5. Scroll Indicator

## Scroll Animations

Gunakan:
- Fade Up
- Scale
- Parallax
- Mask Reveal

Hindari:
- Bounce
- Excessive rotation
- Flashy effects

---

# Development Guide

## Tech Stack

```txt
Next.js 15
TypeScript
Tailwind CSS
Framer Motion
Lenis
Lucide React
```

## Folder Structure

```txt
src/
├── app/
├── components/
│   ├── Hero
│   ├── About
│   ├── Experience
│   ├── TechStack
│   ├── Projects
│   ├── Testimonials
│   ├── Blog
│   └── Contact
├── animations/
├── hooks/
├── data/
└── public/
```

## Performance Requirements

Target Lighthouse:

```txt
Performance > 95
Accessibility > 95
SEO > 95
Best Practices > 95
```

## Responsive Breakpoints

```txt
320px
768px
1024px
1440px
1920px
```

---

# AI Agent Prompt

Create a premium software engineer portfolio website.

The website should visually match the quality, pacing, animations, typography scale, spacing system, and storytelling style of the Majd Portfolio reference.

Tech Stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis Smooth Scroll

Requirements:
- Dark luxury design
- Large editorial typography
- Scroll-driven storytelling
- Smooth animations
- Bento grid project showcase
- Interactive tech stack section
- Timeline experience section
- Featured projects section
- Testimonials section
- Contact CTA

Focus heavily on:
- Motion design
- Smooth scrolling
- Premium spacing
- Micro interactions
- Performance optimization

Generate production-ready code.
