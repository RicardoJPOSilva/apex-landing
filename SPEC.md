# APEX Landing Page — Technical Specification

## 1. Overview

- **Project**: APEX Landing Page
- **Stack**: Vite + React 18 + TypeScript + Tailwind CSS v4 + shadcn/ui + hls.js
- **Aesthetic**: Liquid glass (ultra-dark glassmorphism)
- **Accent**: Green `#121` 95% 76% (oklch)
- **Font**: Geist Sans (via `geist` npm package + `next/font` or self-hosted)
- **Videos**: 6 HLS/MP4 streams (1 hero + 5 section backgrounds)
- **Target**: Desktop + Mobile, Lighthouse >90

---

## 2. Design Tokens

### 2.1 Color Palette

| Token | oklch | hex (approx) | Usage |
|-------|-------|--------------|-------|
| `accent` | 95% 76% | `#00FF66` | Primary CTAs, highlights, borders |
| `background` | 6% 0 0 | `#0A0A0A` | Page background |
| `surface` | 12% 0 0 | `#1A1A1A` | Glass card base |
| `surface-elevated` | 16% 0 0 | `#242424` | Hover states |
| `text-primary` | 95% 0 0 | `#F5F5F5` | Headings, body |
| `text-secondary` | 65% 0 0 | `#A0A0A0` | Subtitles, captions |
| `text-muted` | 45% 0 0 | `#666666` | Disabled, placeholders |
| `border` | 20% 0 0 | `#333333` | Glass card borders |
| `glass-fill` | 12% 0 0 40% | `rgba(26,26,26,0.4)` | Glass card fill |
| `glass-border` | 100% 0 0 15% | `rgba(255,255,255,0.15)` | Glass card border |
| `overlay` | 0% 0 0 80% | `rgba(0,0,0,0.8)` | Video overlays |

### 2.2 Typography

| Token | Font | Weight | Size | Line Height |
|-------|------|--------|------|-------------|
| `display` | Geist Sans | 700 | 72px / 4.5rem | 1.1 |
| `h1` | Geist Sans | 700 | 56px / 3.5rem | 1.15 |
| `h2` | Geist Sans | 600 | 40px / 2.5rem | 1.2 |
| `h3` | Geist Sans | 600 | 28px / 1.75rem | 1.25 |
| `h4` | Geist Sans | 500 | 20px / 1.25rem | 1.3 |
| `body` | Geist Sans | 400 | 16px / 1rem | 1.6 |
| `small` | Geist Sans | 400 | 14px / 0.875rem | 1.5 |
| `caption` | Geist Sans | 400 | 12px / 0.75rem | 1.4 |

### 2.3 Spacing Scale

| Token | px | rem |
|-------|----|-----|
| `space-xs` | 4 | 0.25 |
| `space-sm` | 8 | 0.5 |
| `space-md` | 16 | 1 |
| `space-lg` | 24 | 1.5 |
| `space-xl` | 32 | 2 |
| `space-2xl` | 48 | 3 |
| `space-3xl` | 64 | 4 |
| `space-4xl` | 96 | 6 |
| `space-section` | 128 | 8 |

### 2.4 Glassmorphism System

```css
/* Base glass card */
.glass {
  background: rgba(26, 26, 26, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
}

/* Elevated glass */
.glass-elevated {
  background: rgba(36, 36, 36, 0.6);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}

/* Glass with accent glow */
.glass-accent {
  box-shadow: 0 0 40px rgba(0, 255, 102, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Video container overlay */
.video-overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
```

### 2.5 Animation Tokens

| Token | Duration | Easing |
|-------|----------|--------|
| `duration-fast` | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `duration-normal` | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `duration-slow` | 500ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-out` | — | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in-out` | — | `cubic-bezier(0.4, 0, 0.2, 1)` |

---

## 3. Component Architecture

### 3.1 Component Inventory

```
src/components/
├── ui/                    # shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   └── avatar.tsx
├── sections/             # 7 page sections
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Chess.tsx
│   ├── ReverseChess.tsx
│   ├── Numbers.tsx
│   ├── Testimonials.tsx
│   └── CTAFooter.tsx
├── video/                # Video integration
│   ├── VideoBackground.tsx
│   ├── VideoProvider.tsx
│   └── useVideoPlayer.ts
├── glass/                # Glass components
│   ├── GlassCard.tsx
│   ├── GlassButton.tsx
│   └── GlassContainer.tsx
├── stats/                # Stats/numbers
│   └── AnimatedCounter.tsx
└── layout/               # Layout components
    ├── Section.tsx
    └── Container.tsx
```

### 3.2 Section Specifications

#### Section 1: Hero
- **Purpose**: Full-screen landing with video background
- **Layout**: Centered content over full-viewport video
- **Elements**:
  - Background: HLS video (muted, autoplay, loop, `object-cover`)
  - Overlay: Dark gradient (70% opacity top, 40% center, 80% bottom)
  - Headline: `display` typography, white, max-width 800px
  - Subheadline: `body` text-secondary, max-width 600px
  - CTA Button: Accent green, `GlassButton` variant
- **Video ID**: `hero-background`
- **Min height**: `100vh`

#### Section 2: Features
- **Purpose**: Showcase 3 key features
- **Layout**: 3-column grid (1-col mobile, 2-col tablet, 3-col desktop)
- **Elements**:
  - Section title + subtitle
  - 3x `GlassCard` with feature icon, title, description
  - Staggered entrance animation (100ms delay between cards)
- **Video ID**: `features-background`

#### Section 3: Chess
- **Purpose**: Chess-themed showcase section
- **Layout**: Left content + right visual (stacked on mobile)
- **Elements**:
  - Background video (muted, loop)
  - Left: Headline + description + CTA
  - Right: Glass card with chess visual/graphic
  - Accent border on glass card (left edge glow)
- **Video ID**: `chess-background`

#### Section 4: Reverse Chess
- **Purpose**: Mirror of Chess section with reversed layout
- **Layout**: Right content + left visual
- **Elements**: Same as Chess but mirrored
- **Video ID**: `reverse-chess-background`

#### Section 5: Numbers
- **Purpose**: Animated statistics section
- **Layout**: 4-column grid of stat items
- **Elements**:
  - Background video (subtle, low opacity overlay)
  - 4x animated counters with labels
  - Numbers: `display` size, accent color
  - Labels: `small` text-secondary
  - Count-up animation triggered on scroll-into-view
- **Stats**: Users, Countries, Games, Rating
- **Video ID**: `numbers-background`

#### Section 6: Testimonials
- **Purpose**: Customer social proof
- **Layout**: 3-column grid (1-col mobile)
- **Elements**:
  - 3x `GlassCard` testimonial cards
  - Each: Avatar, quote, name, role
  - Subtle hover lift effect
- **Video ID**: `testimonials-background`

#### Section 7: CTA + Footer
- **Purpose**: Final conversion + navigation
- **Layout**: CTA top section + footer bottom
- **CTA Elements**:
  - Large headline
  - Subtext
  - Accent CTA button
  - Background video
- **Footer Elements**:
  - 4-column link grid (Product, Company, Resources, Legal)
  - Copyright + social links
  - Minimal glass styling
- **Video ID**: `cta-background`

---

## 4. Video Integration Strategy

### 4.1 HLS.js Configuration

```typescript
// src/lib/hls-config.ts
import Hls from 'hls.js';

export interface VideoConfig {
  id: string;
  src: string;
  type: 'hls' | 'mp4';
  poster?: string;
}

export const hlsConfig: Hls.Config = {
  enableWorker: true,
  lowLatencyMode: true,
  backBufferLength: 90,
  maxBufferLength: 30,
  maxMaxBufferLength: 600,
  startLevel: -1, // Auto quality
  capLevelToPlayerSize: true,
};

export const videoAssets: VideoConfig[] = [
  { id: 'hero', src: '/videos/hero.m3u8', type: 'hls', poster: '/posters/hero.jpg' },
  { id: 'features', src: '/videos/features.m3u8', type: 'hls', poster: '/posters/features.jpg' },
  { id: 'chess', src: '/videos/chess.m3u8', type: 'hls', poster: '/posters/chess.jpg' },
  { id: 'reverse-chess', src: '/videos/reverse-chess.m3u8', type: 'hls', poster: '/posters/reverse-chess.jpg' },
  { id: 'numbers', src: '/videos/numbers.m3u8', type: 'hls', poster: '/posters/numbers.jpg' },
  { id: 'testimonials', src: '/videos/testimonials.m3u8', type: 'hls', poster: '/posters/testimonials.jpg' },
  { id: 'cta', src: '/videos/cta.m3u8', type: 'hls', poster: '/posters/cta.jpg' },
];
```

### 4.2 Video Provider Hook

```typescript
// src/components/video/useVideoPlayer.ts
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { hlsConfig, VideoConfig } from '@/lib/hls-config';

interface UseVideoPlayerOptions {
  config: VideoConfig;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function useVideoPlayer({
  config,
  autoplay = true,
  muted = true,
  loop = true,
}: UseVideoPlayerOptions) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initVideo = () => {
      if (config.type === 'hls') {
        if (Hls.isSupported()) {
          const hls = new Hls(hlsConfig);
          hls.loadSource(config.src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            setIsLoaded(true);
            if (autoplay) video.play().catch(() => {});
          });
          hls.on(Hls.Events.ERROR, (_, data) => {
            if (data.fatal) {
              console.error(`HLS fatal error for ${config.id}:`, data);
            }
          });
          hlsRef.current = hls;
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          // Native HLS (Safari)
          video.src = config.src;
          video.addEventListener('loadedmetadata', () => {
            setIsLoaded(true);
            if (autoplay) video.play().catch(() => {});
          });
        } else {
          // Fallback: MP4
          const mp4Src = config.src.replace('.m3u8', '.mp4');
          video.src = mp4Src;
          video.addEventListener('loadedmetadata', () => {
            setIsLoaded(true);
            if (autoplay) video.play().catch(() => {});
          });
        }
      } else {
        // Direct MP4
        video.src = config.src;
        video.addEventListener('loadedmetadata', () => {
          setIsLoaded(true);
          if (autoplay) video.play().catch(() => {});
        });
      }
    };

    initVideo();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [config]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;
    video.loop = loop;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [muted, loop]);

  return { videoRef, isLoaded, isPlaying };
}
```

### 4.3 Video Background Component

```typescript
// src/components/video/VideoBackground.tsx
import { useVideoPlayer } from './useVideoPlayer';
import { videoAssets } from '@/lib/hls-config';

interface VideoBackgroundProps {
  videoId: string;
  className?: string;
  opacity?: number;
}

export function VideoBackground({ videoId, className = '', opacity = 0.3 }: VideoBackgroundProps) {
  const config = videoAssets.find(v => v.id === videoId);
  const { videoRef, isLoaded } = useVideoPlayer(config);

  if (!config) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
        poster={config.poster}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity }}
      />
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
}
```

---

## 5. File Structure

```
apex-landing/
├── public/
│   ├── videos/
│   │   ├── hero.m3u8
│   │   ├── hero.mp4              # Fallback
│   │   ├── features.m3u8
│   │   ├── features.mp4
│   │   ├── chess.m3u8
│   │   ├── chess.mp4
│   │   ├── reverse-chess.m3u8
│   │   ├── reverse-chess.mp4
│   │   ├── numbers.m3u8
│   │   ├── numbers.mp4
│   │   ├── testimonials.m3u8
│   │   ├── testimonials.mp4
│   │   ├── cta.m3u8
│   │   └── cta.mp4
│   ├── posters/
│   │   └── *.jpg                 # Video posters
│   ├── fonts/
│   │   └── Geist-Variable.woff2
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                   # shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── avatar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Chess.tsx
│   │   │   ├── ReverseChess.tsx
│   │   │   ├── Numbers.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTAFooter.tsx
│   │   ├── video/
│   │   │   ├── VideoBackground.tsx
│   │   │   ├── VideoProvider.tsx
│   │   │   └── useVideoPlayer.ts
│   │   ├── glass/
│   │   │   ├── GlassCard.tsx
│   │   │   ├── GlassButton.tsx
│   │   │   └── GlassContainer.tsx
│   │   ├── stats/
│   │   │   └── AnimatedCounter.tsx
│   │   └── layout/
│   │       ├── Section.tsx
│   │       └── Container.tsx
│   ├── lib/
│   │   ├── hls-config.ts
│   │   ├── utils.ts              # cn() helper
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollPosition.ts
│   ├── styles/
│   │   └── globals.css           # Tailwind base + custom
│   ├── data/
│   │   ├── features.ts
│   │   ├── testimonials.ts
│   │   └── stats.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── components.json               # shadcn/ui config
└── SPEC.md
```

---

## 6. shadcn/ui Components

### Required Components

| Component | Path | Usage |
|-----------|------|-------|
| `Button` | `src/components/ui/button.tsx` | CTAs, links |
| `Card` | `src/components/ui/card.tsx` | Glass card base |
| `CardHeader` | `src/components/ui/card.tsx` | Feature card headers |
| `CardContent` | `src/components/ui/card.tsx` | Feature descriptions |
| `Badge` | `src/components/ui/badge.tsx` | Labels, tags |
| `Avatar` | `src/components/ui/avatar.tsx` | Testimonial avatars |

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## 7. Tailwind Configuration

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'oklch(95% 0.15 145)', // #00FF66
          foreground: 'oklch(6% 0 0)',
        },
        background: 'oklch(6% 0 0)',
        surface: {
          DEFAULT: 'oklch(12% 0 0)',
          elevated: 'oklch(16% 0 0)',
        },
        foreground: {
          DEFAULT: 'oklch(95% 0 0)',
          secondary: 'oklch(65% 0 0)',
          muted: 'oklch(45% 0 0)',
        },
        border: 'oklch(20% 0 0)',
        glass: {
          fill: 'rgba(26, 26, 26, 0.4)',
          border: 'rgba(255, 255, 255, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Geist', ...fontFamily.sans],
        display: ['Geist', ...fontFamily.sans],
      },
      fontSize: {
        display: ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        h3: ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'space-xs': '4px',
        'space-sm': '8px',
        'space-md': '16px',
        'space-lg': '24px',
        'space-xl': '32px',
        'space-2xl': '48px',
        'space-3xl': '64px',
        'space-4xl': '96px',
        'space-section': '128px',
      },
      borderRadius: {
        'glass': '16px',
        'glass-lg': '20px',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-lg': '30px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-accent': '0 0 40px rgba(0, 255, 102, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
```

### globals.css

```css
@import "tailwindcss";
@import url('/fonts/Geist-Variable.woff2') format('woff2');

@theme {
  --color-accent: oklch(95% 0.15 145);
  --color-background: oklch(6% 0 0);
  --color-surface: oklch(12% 0 0);
  --color-surface-elevated: oklch(16% 0 0);
  --color-foreground: oklch(95% 0 0);
  --color-foreground-secondary: oklch(65% 0 0);
  --color-foreground-muted: oklch(45% 0 0);
  --color-border: oklch(20% 0 0);
  --color-glass-fill: rgba(26, 26, 26, 0.4);
  --color-glass-border: rgba(255, 255, 255, 0.15);

  --font-family-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
  --font-family-display: 'Geist', ui-sans-serif, system-ui, sans-serif;
}

@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-family-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: var(--color-accent);
    color: var(--color-background);
  }
}

@layer utilities {
  .glass {
    background: var(--color-glass-fill);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--color-glass-border);
    border-radius: 16px;
  }

  .glass-elevated {
    background: rgba(36, 36, 36, 0.6);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

  .glass-accent {
    box-shadow: 0 0 40px rgba(0, 255, 102, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .text-gradient-accent {
    background: linear-gradient(135deg, var(--color-accent), #00FF66 50%, #00CC55);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

---

## 8. Performance Requirements

### Metrics Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | >90 | Chrome DevTools |
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Total Blocking Time | <200ms | Lighthouse |
| Cumulative Layout Shift | <0.1 | Lighthouse |
| Speed Index | <3.0s | Lighthouse |

### Video Performance

| Requirement | Implementation |
|-------------|----------------|
| Lazy loading | Videos load on scroll-into-view with IntersectionObserver |
| Quality scaling | HLS.js `capLevelToPlayerSize` + `startLevel: -1` |
| Buffer management | `backBufferLength: 90`, `maxBufferLength: 30` |
| Fallback | MP4 fallback when HLS unsupported |
| Poster images | Placeholder shown during video load |
| Muted autoplay | All background videos autoplay muted per browser policy |

### Bundle Optimization

| Strategy | Implementation |
|----------|----------------|
| Code splitting | Route-based + component lazy loading |
| Tree shaking | ES modules + sideEffects: false |
| Font subsetting | Only used character ranges |
| Image optimization | WebP with PNG fallback |
| Video compression | H.264/AAC, multiple quality tiers |
| CDN | Vercel Edge Network |

### Resource Hints

```html
<!-- Preload critical font -->
<link rel="preload" href="/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preconnect to video CDN -->
<link rel="preconnect" href="https://apex-videos.vercel.app" crossorigin>

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://api.apex.com">
```

---

## 9. Package Dependencies

### Production

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "hls.js": "^1.5.17",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.6.3",
    "vite": "^5.4.10",
    "tailwindcss": "^3.4.14",
    "postcss": "^8.4.47",
    "autoprefixer": "^10.4.20"
  }
}
```

---

## 10. Browser Support

| Browser | Version | HLS Support |
|---------|---------|-------------|
| Chrome | 90+ | Native + hls.js |
| Firefox | 90+ | hls.js |
| Safari | 15+ | Native |
| Edge | 90+ | Native + hls.js |
| iOS Safari | 15+ | Native |
| Chrome Android | 90+ | Native + hls.js |

---

## 11. Data Structures

### Features Data

```typescript
// src/data/features.ts
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  accent?: boolean;
}

export const features: Feature[] = [
  {
    id: 'feature-1',
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Built for speed with sub-millisecond response times.',
  },
  {
    id: 'feature-2',
    icon: 'Shield',
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption keeps your data safe.',
  },
  {
    id: 'feature-3',
    icon: 'Globe',
    title: 'Global Scale',
    description: 'Deploy anywhere with our worldwide infrastructure.',
  },
];
```

### Testimonials Data

```typescript
// src/data/testimonials.ts
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'APEX transformed how we play. The experience is unmatched.',
    author: 'Magnus Carlsen',
    role: 'World Chess Champion',
    avatar: '/avatars/magnus.jpg',
  },
  // ...
];
```

### Stats Data

```typescript
// src/data/stats.ts
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 'users', value: 1000000, suffix: '+', label: 'Active Users' },
  { id: 'countries', value: 150, suffix: '', label: 'Countries' },
  { id: 'games', value: 50000000, suffix: '+', label: 'Games Played' },
  { id: 'rating', value: 2800, suffix: '', label: 'Peak Rating' },
];
```

---

## 12. Responsive Breakpoints

| Breakpoint | Min Width | Columns | Gap |
|------------|-----------|---------|-----|
| Mobile | 0px | 1 | 16px |
| Tablet | 768px | 2 | 24px |
| Desktop | 1024px | 3 | 32px |
| Wide | 1280px | 4 | 32px |

### Container Widths

| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Mobile | 100% | 16px |
| Tablet | 720px | 32px |
| Desktop | 1200px | 48px |
| Wide | 1400px | 64px |

---

## 13. Accessibility Requirements

- WCAG 2.1 AA compliance
- Color contrast ratio >4.5:1 for text
- Focus indicators on all interactive elements
- Keyboard navigation for all features
- Screen reader announcements for animated counters
- Video pause/stop controls accessible
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels on icon-only buttons

---

## 14. Deployment

| Environment | Platform | Region |
|-------------|----------|--------|
| Production | Vercel | auto (edge) |
| Preview | Vercel | auto (edge) |
| Development | Local | — |

### Environment Variables

```env
VITE_VIDEO_CDN_URL=https://apex-videos.vercel.app
VITE_API_URL=https://api.apex.com
```
