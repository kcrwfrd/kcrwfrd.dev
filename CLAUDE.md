# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router, built with React 19, TypeScript, and Tailwind CSS v4. The project uses modern tooling including the React Compiler (babel-plugin-react-compiler) for automatic optimizations.

## Key Technologies

- **Next.js 16.0.3** with App Router
- **React 19.2.0** with React Compiler enabled
- **Tailwind CSS v4** with @tailwindcss/postcss
- **TypeScript 5** with strict mode enabled
- **ESLint 9** with Next.js config and Prettier integration

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration (Geist Sans & Geist Mono)
  - `page.tsx` - Homepage
  - `globals.css` - Global styles with Tailwind CSS v4 and CSS custom properties
- **`public/`** - Static assets (SVG icons)
- **Path aliases** - `@/*` maps to `./src/*` (configured in tsconfig.json)

## Styling Configuration

- **Tailwind CSS v4** uses the new `@import 'tailwindcss'` syntax in globals.css
- **CSS Variables** for theming (`--background`, `--foreground`)
- **Dark mode** via `prefers-color-scheme` media query
- **Custom theme tokens** defined using `@theme inline` directive
- **Font variables** injected via `next/font` in layout.tsx

## Code Formatting

- **Prettier** configured with:
  - No semicolons (`semi: false`)
  - Single quotes (`singleQuote: true`)
- **ESLint** uses Prettier integration (`eslint-config-prettier`)

## Important Configuration Details

- **React Compiler** is enabled in `next.config.ts` (`reactCompiler: true`)
- **TypeScript** uses `moduleResolution: "bundler"` with strict mode
- **ESLint** uses flat config format (`eslint.config.mjs`) with Next.js core-web-vitals and TypeScript presets
- **Module type** is set to `"module"` in package.json (ESM-first)
