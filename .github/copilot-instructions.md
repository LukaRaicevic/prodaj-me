# Copilot Instructions for prodaj-me

## Project Overview
**prodaj-me** is a Next.js 16 application with React 19, using TypeScript, Tailwind CSS, and PostCSS. This is a fresh Next.js App Router project following modern React patterns.

## Architecture & Structure

### Core Stack
- **Framework**: Next.js 16.0.8 (App Router)
- **UI Library**: React 19.2.1
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript 5 (strict mode enabled)
- **Package Manager**: pnpm (lock file present)

### Directory Layout
```
app/              # Next.js App Router pages and layouts
  layout.tsx      # Root layout with font optimization (Geist Sans/Mono)
  page.tsx        # Home page component
  globals.css     # Global Tailwind styles
public/           # Static assets
```

## Development Workflow

### Essential Commands
```bash
pnpm dev      # Start dev server (localhost:3000)
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint (eslint-config-next rules)
```

### Key Configuration Files
- `tsconfig.json` - TypeScript config with strict mode and path alias `@/*` pointing to root
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals and TypeScript presets
- `next.config.ts` - Minimal Next.js config (ready for additions)

## Patterns & Conventions

### Component Style
- Use functional components with TypeScript
- Example structure from `app/page.tsx`:
  - Leverage React 19 hooks natively (no `.use()` wrapper needed yet for Server Components)
  - Use Next.js `Image` component for optimization
  - Apply Tailwind classes directly in JSX with responsive utilities (e.g., `sm:items-start`)

### Styling Approach
- **Utility-first CSS**: Use Tailwind classes directly in components
- Dark mode support available: use `dark:` prefix for dark theme variants
- Responsive design: `sm:`, `md:`, `lg:` breakpoints in Tailwind

### Metadata & Layout
- Use `export const metadata: Metadata` in layout/page files for Next.js metadata
- Root layout in `app/layout.tsx` sets up font variables and global structure

## Cross-Component Communication
- Pages/layouts are co-located in `app/` directory (Next.js App Router convention)
- No API routes defined yet—add under `app/api/` when needed
- Props-based communication for React components

## Important Notes
- Strict TypeScript enforced (`strict: true`)
- ESLint uses Next.js recommended rules via `eslint-config-next`
- Font optimization uses Geist fonts from `next/font/google`
- Baseurl configured as `./` with `@/*` alias—use `@/` for root imports when organizing components

## Common Tasks
1. **Add a page**: Create `app/new-page/page.tsx` or nested route folder
2. **Style components**: Import from `globals.css` or use Tailwind classes directly
3. **Check linting**: `pnpm lint` (configured with Next.js defaults)
