# VidGenAI — Specification

## 1. Concept & Vision

VidGenAI is an AI-powered video generation platform for YouTube educators and course creators. The core promise: describe a topic, receive a complete faceless video with AI voiceover, stock footage, animated captions, and background music — editable before export. The experience should feel cinematic, futuristic, and effortless. Think of it as "midjourney for video" — premium AI output without the production overhead.

**Tagline:** "Describe a topic. Get a whole video."

---

## 2. Design Language

### Aesthetic Direction
Dark cinematic premium. Think Blade Runner meets modern SaaS. The interface should feel like a high-end video production suite — not a generic AI tool.

### Color Palette
| Role        | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| Background  | #0b0e14   | Page background                |
| Surface     | #131720   | Cards, panels, nav             |
| Border      | #1e2530   | Dividers, card borders         |
| Primary     | #6366f1   | CTAs, highlights, accents      |
| Secondary   | #22d3ee   | Video-related accents, icons   |
| Success     | #22c55e   | Positive indicators            |
| Text        | #f1f5f9   | Headlines, primary text        |
| Muted       | #64748b   | Captions, secondary text       |

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (body), 500 (medium), 600 (semibold), 700 (bold)
- **Scale:** Display 72px, H1 48px, H2 36px, H3 24px, Body 16px, Small 14px

### Motion Philosophy
- Subtle entrance animations (fade-up, 400ms ease-out)
- Hover states with scale and glow transitions (200ms)
- Progress indicators for the demo mock (step-by-step reveal)
- No gratuitous motion — everything serves clarity

### Visual Assets
- **Icons:** Lucide React (consistent, clean line icons)
- **Decorative:** Gradient borders, subtle glows on primary elements
- **Images:** Mock video preview with real Pexels thumbnail placeholder

---

## 3. Layout & Structure

### Page Flow (Single Page Marketing)
1. **NavBar** — Sticky, glassmorphism surface, logo left, links center, CTA right
2. **Hero** — Full-viewport, centered, dramatic headline, subtext, dual CTA
3. **Video Preview Demo** — Dark panel showing the mock interaction flow
4. **Features Grid** — 6 features in responsive 3x2 grid
5. **How It Works** — 4 steps with numbered badges and connecting line
6. **Stats Bar** — 4 numbers with labels (videos created, creators, countries, minutes saved)
7. **Testimonials** — 3 cards from course creators
8. **Pricing** — 3-tier cards with feature lists, highlighted middle tier
9. **Final CTA** — Centered with gradient background
10. **Footer** — Links, copyright, social icons

### Responsive Strategy
- Mobile-first Tailwind breakpoints (sm, md, lg, xl)
- Nav collapses to hamburger on mobile
- Grids collapse: 3-col → 2-col → 1-col
- Pricing cards stack vertically on mobile

---

## 4. Features & Interactions

### NavBar
- Logo: "VidGenAI" with gradient primary-to-secondary text
- Links: Features, Use Cases, Pricing (smooth scroll to sections)
- Right: Login (ghost), Try Free (primary gradient button)
- Mobile: hamburger menu with slide-down drawer

### Hero
- Headline: "Describe a topic. Get a whole video."
- Subhead: "AI generates the script, voiceover, stock footage, captions and music — all in minutes. No cameras. No editors."
- CTAs: "Start Creating Free" (primary) + "Watch Demo" (ghost with play icon)
- Background: subtle radial gradient glow behind text

### Video Preview Demo
- Input field with placeholder "e.g. How to learn React in 30 days"
- "Generate" button triggers animated progress:
  - Step 1: "Writing script..." (1.5s)
  - Step 2: "Finding stock footage..." (1.5s)
  - Step 3: "Adding voiceover..." (1.5s)
  - Step 4: "Syncing captions..." (1.5s)
- Final state: video player mockup with play button overlay, "4:32" duration badge, "Tutorial" style tag

### Features Grid
Six feature cards in 3x2 layout:
1. **AI Script Generation** — "GPT-powered scripts generated from your topic description"
2. **Multi-Accent Voiceover** — "Choose from 40+ AI voices across US, UK, AU, IN accents"
3. **Stock Footage Sync** — "Automatically matched B-roll from Pexels' 35M+ library"
4. **Animated Captions** — "Dynamic captions synced to voice with kinetic typography"
5. **Background Music Engine** — "Royalty-free tracks that match your video mood"
6. **Full Editor Before Export** — "Fine-tune scenes, text, timing before downloading"

Each card: icon (cyan), title (white), description (muted), subtle border, hover glow effect.

### How It Works
4 steps connected by a horizontal line (vertical on mobile):
1. **Describe Your Topic** — Enter a title or description
2. **AI Generates Everything** — Script, footage, voiceover, music
3. **Review & Edit** — Use the built-in editor to tweak
4. **Export & Publish** — Download MP4 and publish anywhere

### Stats Bar
Four stats with large numbers and labels:
- **500K+** Videos Created
- **12K+** Course Creators
- **90+** Countries
- **2.5M** Hours Saved

### Testimonials
Three cards with avatar placeholder, name, role, company, and quote.

### Pricing
| Plan     | Price     | Videos/mo | Key features                    |
|----------|-----------|-----------|----------------------------------|
| Starter  | $19       | 5         | HD export, basic voices, 1 project|
| Creator  | $49/mo    | 25        | 4K export, all voices, commercial rights |
| Studio   | $99/mo    | Unlimited | API access, team collaboration, priority |

Middle card (Creator) is visually elevated with primary border glow.

### Footer
- Logo + tagline left
- Links: Product, Company, Legal (columns)
- Social icons: Twitter, YouTube, Discord
- Copyright line

---

## 5. Component Inventory

| Component         | States                                          |
|-------------------|-------------------------------------------------|
| NavBar            | Default, scrolled (more opaque), mobile-open   |
| Button (Primary)  | Default, hover (scale+glow), active, disabled  |
| Button (Ghost)    | Default, hover (underline), active              |
| Feature Card      | Default, hover (border glow, slight lift)       |
| Pricing Card      | Default, highlighted (Creator — primary glow)   |
| Testimonial Card  | Default only                                    |
| Input Field       | Default, focus (primary border), error          |
| Demo Progress Bar | Step 1-4 animated indicators                    |
| Video Player Mock | Idle (play button), hover (play button scales)  |

---

## 6. Technical Approach

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme {}`)
- **Icons:** Lucide React
- **Font:** Inter via Google Fonts (next/font/google)

### Architecture
- `app/` — App Router pages and layouts
- `app/layout.tsx` — Root layout with Inter font, metadata
- `app/page.tsx` — Single page with all sections as components
- `app/globals.css` — Tailwind v4 import + `@theme {}` block
- All sections in `app/page.tsx` using inline components (single-file for simplicity)

### Config Files
- `package.json` — Next.js 15, React 19, Tailwind v4, Lucide React
- `next.config.js` — Standard Next.js config
- `tsconfig.json` — Strict TypeScript
- `postcss.config.js` — Tailwind v4 PostCSS plugin
- `.gitignore` — Standard Next.js ignore

### Deployment
- Vercel CLI: `npx vercel --yes --token <token>`
- Build output: standard Next.js static/SSR hybrid