# Digital Agency React Template

A minimalist, highly performant React layout built with TypeScript, Tailwind v4, and integrated smooth scrolling.

## Tech Stack

- **Framework:** React + TypeScript (Vite)
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP (GreenSock Animation Platform) + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

---

## Getting Started

### Install Dependencies

Run the following commands in your project root:

```bash
pnpm add gsap lenis lucide-react
pnpm install --save-dev @types/react @types/react-dom

```

---

## Directory Structure

```text
src/
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   └── WhoWeWorkWith.tsx
│   └── layout/
│       ├── Footer.tsx
│       └── Header.tsx
├── hooks/
│   └── useGsapAnimations.ts
├── App.tsx
├── global.css
└── main.tsx

```

---

## Architecture Lifecycle

### Animation Architecture (`src/hooks/useGsapAnimations.ts`)

The animation subsystem uses a dedicated TypeScript hook tracking elements reactively via a standard `gsap.context()`.

- **Initialization**: Lenis and GSAP's global ticker intercept native scrolls synchronously.
- **Targeting**: Trigger elements are tracked implicitly via scoped selectors (`.hero-elem`, `.reveal-up`, `.project-card`).
- **Cleanup**: Component unmounting calls `ctx.revert()` and `lenis.destroy()` automatically to clean frame instances and prevent detached DOM listeners.
