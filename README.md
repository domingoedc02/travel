# Japan Ride — Premium Japanese Travel Experiences

A modern Japan travel booking website built with Next.js 14, TypeScript, and authentic Japanese design aesthetics.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + Styled Components
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Typography:** Noto Sans JP + Inter

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Video Assets

Place your video files in `public/videos/`:
- `hero-desktop.mp4` / `hero-desktop.webm` — Desktop hero background
- `hero-mobile.mp4` / `hero-mobile.webm` — Mobile hero background

The hero section uses a gradient fallback if no videos are present.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Tour packages
│   ├── contact/page.tsx    # Booking form
│   ├── layout.tsx          # Root layout
│   ├── providers.tsx       # Theme + i18n providers
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── ui/                 # Base UI components (shadcn-style)
│   ├── layout/             # Header, Footer, Navigation
│   ├── home/               # Home page sections
│   ├── services/           # PackageCard component
│   ├── contact/            # BookingForm component
│   └── shared/             # Reusable: ScrollAnimation, VideoBackground, LanguageSwitcher
├── lib/
│   ├── i18n/               # Bilingual support (EN/JP)
│   ├── validations/        # Zod schemas
│   └── utils.ts            # Utility functions
└── styles/
    └── styled-components/  # Theme configuration
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero video, destinations, how it works, features, testimonials, gallery |
| About | `/about` | Company story, mission, values, team, cultural commitment |
| Services | `/services` | 6 tour packages with pricing and highlights |
| Contact | `/contact` | Booking inquiry form with validation + contact info |

## Design Decisions

### Japanese Aesthetic Principles
- **Ma (間):** Generous whitespace and breathing room between sections
- **Kanso (簡素):** Clean, minimal layouts without clutter
- **Shizen (自然):** Smooth, organic animations via Framer Motion
- **Wabi-sabi (侘寂):** Subtle textures and warm, natural color palette

### Color Palette
- **Sakura Pink** (`#f27d93`) — Primary, CTAs, accents
- **Deep Indigo** (`#2d3262`) — Dark sections, navigation backgrounds
- **Gold** (`#f3be3a`) — Highlights, star ratings, decorative accents
- **Washi Cream** (`#faf8f4`) — Background, paper-like warmth
- **Sumi Dark** (`#2d2c2a`) — Text, contrast

### Bilingual Support
Toggle between English and Japanese via the language switcher in the header. All content is stored in `src/lib/i18n/en.json` and `ja.json`.

## Form Handling

The booking form on the Contact page:
- Uses React Hook Form for state management
- Validates with Zod schema (name, email, phone, date, passengers, tour type)
- Logs form data to console on successful submission
- Shows success/error states with animations
- Future dates only for the date picker
