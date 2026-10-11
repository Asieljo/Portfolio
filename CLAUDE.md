# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React and Vite, featuring a design system based on DTCG tokens. The project emphasizes **high-fidelity visual design**, responsive implementation, and strict token usage.

**Tech Stack:**
- React 19 + Vite 8
- React Router DOM for routing
- Sass with BEM methodology
- Design system with primitive and semantic tokens
- SVG components via vite-plugin-svgr

**Base URL:** `/Portfolio/` (configured in vite.config.js and BrowserRouter)

---

## Development Commands

**Package manager:** yarn (install first if not available)

```bash
yarn dev       # Start development server
yarn build     # Build for production
yarn preview   # Preview production build
yarn lint      # Run ESLint
```

---

## Design System — CRITICAL

### Token-Based Design (STRICTLY ENFORCED)

The `src/design-system/` folder contains **all design tokens** that must be followed without exception:

- `_primitives.scss` — Raw design tokens (colors, spacing, typography, breakpoints, shadows, etc.)
- `_semantic.scss` — Semantic tokens that reference primitives (button states, text colors, backgrounds, etc.)
- `index.scss` — Public entry point

**RULES:**
1. **Never use hardcoded values** — Always use design tokens
2. **No arbitrary colors, spacing, or sizes** — If a token doesn't exist, consult before creating
3. **Maintain visual consistency** — All components must use the same token vocabulary

**Auto-injection:** All tokens are globally available in SCSS files via Vite's `additionalData` configuration. No need to import them manually.

### Design References (HIGH FIDELITY REQUIRED)

The `src/design-system/design/` folder contains **interface mockups** that must be replicated with **high fidelity**:

- `landing-mobile-sm_ 320px - 479px.jpg`
- `landing-mobile-md_ 480px - 767px.jpg`
- `landing-tablet_ 768px - 1279px.jpg`
- `landing-desktop_ 1280px - 1419px.jpg`
- `landing-desktop_ 1420px - 1919px.jpg`

**When implementing interfaces:**
1. **Analyze the design mockups carefully** — Match spacing, typography, colors, and layout exactly
2. **Use design tokens** — Map visual elements to their corresponding tokens
3. **Achieve pixel-perfect accuracy** — The implementation should match the mockup as closely as possible
4. **Maintain responsiveness** — Follow the breakpoint-specific designs

---

## Styling Architecture

### BEM Methodology

**Strict BEM** is used throughout:
- Block: `.landing`
- Element: `.landing__section`, `.landing__btn`
- Modifier: `.landing__btn--primary`

**Avoid deep nesting:**
```scss
// ✅ Good
.landing__section { }
.landing__btn { }

// ❌ Avoid
.landing__section__btn { }
```

### Shared Sass Resources

Auto-injected globally into all SCSS files:
- `src/styles/_variables.scss` — Forwards design-system tokens
- `src/styles/_mixins.scss` — Responsive mixins, button mixins, flex utilities
- `src/styles/_functions.scss` — Utility functions (e.g., `to-rem()`)

### Component Styles

Co-located with components:
```
src/components/Header/
├── Header.jsx
└── Header.styles.scss
```

### Breakpoints

Use the mixins defined in `_mixins.scss`:

```scss
@include mobile-sm   // max-width: 479px
@include mobile-md   // 480px - 767px
@include tablet      // 768px - 1279px
@include tablet-up   // min-width: 768px
@include desktop     // min-width: 1280px
@include wide        // min-width: 1920px
```

**Token values:**
- `$breakpoints-mobile-sm: 320px`
- `$breakpoints-mobile-md: 480px`
- `$breakpoints-tablet: 768px`
- `$breakpoints-desktop: 1280px`
- `$breakpoints-wide: 1920px`

---

## Design Token Categories

### Colors

**Primitives:**
- Brand: `$color-brand-primary` (#FF6B1A), `$color-brand-secondary`, `$color-brand-complementary`
- Neutral: `$color-neutral-100` through `$color-neutral-900`
- Feedback: `$color-feedback-success`, `$color-feedback-error`, etc.

**Semantic (USE THESE):**
- Backgrounds: `$color-background-default`, `$color-background-brand-primary`, etc.
- Text: `$color-text-default`, `$color-text-brand-primary`, `$color-text-inverse`, etc.
- Borders: `$color-border-default`, `$color-border-focus`, etc.
- Button states: `$color-state-default-*`, `$color-state-hover-*`, `$color-state-active-*`

### Typography

**Font families:**
- `$typography-font-family-primary` (Anton — for headings)
- `$typography-font-family-secondary` (Inter — for body)
- `$typography-font-family-complementary` (Cormorant)

**Responsive font sizes (USE SEMANTIC TOKENS):**
- H1: `$typography-heading-h1-font-size-mobile/tablet/desktop`
- H2: `$typography-heading-h2-font-size-mobile/tablet/desktop`
- H3: `$typography-heading-h3-font-size-mobile/tablet/desktop`
- Body: `$typography-body-font-size-mobile/tablet/desktop`
- Eyebrow: `$typography-eyebrow-font-size-mobile/tablet/desktop`
- Button: `$typography-button-base-font-size`

**Font weights:**
- `$typography-font-weight-regular` (400)
- `$typography-font-weight-medium` (500)
- `$typography-font-weight-semi-bold` (600)
- `$typography-font-weight-bold` (700)

**Line heights:**
- `$typography-line-height-none` (1)
- `$typography-line-height-tight` (1.05)
- `$typography-line-height-normal` (1.4)
- `$typography-line-height-relaxed` (1.6)

### Spacing

**Primitives:**
- `$spacing-none` (0px) through `$spacing-7xl` (128px)

**Semantic (USE THESE):**
- Container: `$spacing-container-mobile/tablet/desktop`
- Section: `$spacing-section-sm/md/lg`
- Article: `$spacing-article-sm/md/lg`
- Component: `$spacing-component-sm/md/lg`
- Gap: `$spacing-gap-grid-flex-xs/sm/md/lg/xl`

### Sizing

- Inputs: `$sizing-input-sm/md/lg`
- Buttons: `$sizing-button-sm/md/lg`
- Assets: `$sizing-asset-xs/sm/md/lg/xl/2xl/3xl`

### Other Tokens

- **Radius:** `$radius-none` through `$radius-full`
- **Borders:** `$border-thin`, `$border-medium`, `$border-thick`
- **Shadows:** `$shadow-card`, `$shadow-dropdown`, `$shadow-modal`
- **Motion:** `$motion-duration-fast/normal/slow`, `$motion-easing-ease-out`, etc.
- **Z-index:** `$z-index-dropdown`, `$z-index-modal`, `$z-index-overlay`, etc.

---

## Component Patterns

### Routing

React Router DOM with BrowserRouter:
- `basename="/Portfolio"` set in `main.jsx`
- Routes defined in `App.jsx`
- Use `<Link>` for internal navigation, `<a>` for external links

**Current routes:**
- `/` → Home page
- `/case-study` → Case study page
- `/prototype` → Prototype page

### Home Page Composition

Structure from `src/pages/Home/Home.jsx`:
```jsx
<Header onContactClick={openContact} />
<Landing onContactClick={openContact} />
<Ticker />
<About />
<Projects />
<Footer />
<ContactModal isOpen={isContactOpen} onClose={closeContact} />
```

### State Management

Use `useState` and `useContext` for local/shared state. Only use Redux if state complexity requires it.

### SVG Components

Import SVGs as React components using `?react` suffix:
```jsx
import DownloadIcon from '../../assets/icons/download.svg?react';
```

### Buttons

Use button mixins from `_mixins.scss`:
```scss
@include button-base           // Base button styles
@include button-complementary  // Solid black variant
@include button-outline        // Transparent with border
```

State transitions handled automatically via design-system state tokens.

---

## Naming Conventions

- **Components:** PascalCase folders and files (`Header/Header.jsx`)
- **Hooks:** Prefix with "use" (`useScrollToTop`)
- **Utilities:** camelCase
- **CSS classes:** BEM with lowercase and hyphens
- **Always use semicolons** in JavaScript

---

## Accessibility

Follow the pattern from `ContactModal.jsx`:
- Focus trap with Tab key handling
- Escape key to close
- Focus restoration on close
- Proper ARIA attributes: `aria-modal`, `aria-labelledby`, `role="dialog"`

---

## File Modification Guidelines

1. **Read before modifying** — Check existing implementation
2. **Check design mockups** — Ensure changes align with visual design
3. **Use design tokens exclusively** — No hardcoded values
4. **Maintain BEM** — Follow existing class naming
5. **Co-locate styles** — Keep SCSS alongside JSX
6. **Preserve visual consistency** — Match existing component styling patterns
7. **Prefer targeted changes** — Avoid rewriting entire files

---

## Definition of Done

Before completing a task:
1. **Build succeeds:** `yarn build`
2. **Linting passes:** `yarn lint`
3. **Design tokens used:** No hardcoded colors, spacing, or typography
4. **Visual accuracy:** Matches design mockups with high fidelity
5. **Responsive:** Works across all breakpoints (mobile, tablet, desktop)
6. **BEM methodology:** Class names follow BEM pattern
7. **Clean code:** No debugging code, unused imports, or console logs
8. **Navigation works:** Internal/external links function correctly

---

## Visual Consistency Checklist

When implementing or modifying components:
- [ ] All colors use design-system tokens
- [ ] All spacing uses design-system tokens
- [ ] Typography follows semantic token patterns
- [ ] Breakpoint behavior matches design mockups
- [ ] Button styles use provided mixins
- [ ] Shadows, borders, and radius use tokens
- [ ] Animations use motion tokens
- [ ] Component matches visual design exactly
