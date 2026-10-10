# Project Rules — Astro Website

These instructions are mandatory for every change in this repository. Prefer the
smallest correct change that follows the existing architecture. Do not introduce
new patterns, dependencies, frameworks, or build tools without an explicit need
and a documented reason.

## Stack and non-negotiable defaults

- This is a native Astro project using Astro 7 and strict TypeScript. Keep it
  framework-free unless a task explicitly requires an island.
- Render content on the server/build by default. Add client-side JavaScript only
  for a real interactive requirement; choose the narrowest possible hydration
  directive.
- Use standard HTML first. Use `<a>` for navigation, semantic elements for page
  structure, and native browser features before adding JavaScript.
- Do not add packages, integrations, UI kits, CSS frameworks, analytics, or
  fonts without explicit approval. Never edit lockfiles by hand.
- Do not weaken `tsconfig.json`, bypass type errors with `any`, `@ts-ignore`, or
  `@ts-nocheck`, or silently suppress lint/build failures.

## Required project structure

Keep each concern in its designated location:

- `src/pages/` — route entry points only. Astro maps this directory directly to
  URLs; use `index.astro` for directory roots and `[param].astro` only for
  intentional dynamic routes.
- `src/layouts/` — shared document shells and page-level composition. All pages
  must use an appropriate layout unless there is a documented exception.
- `src/components/` — reusable presentational Astro components. Use
  `PascalCase.astro` names. Do not turn a component into a route.
- `src/content/` — collection content only. Keep each collection in its own
  directory and use stable, URL-safe kebab-case file names.
- `src/content.config.ts` — the single source of truth for content collection
  loaders and schemas. Every collection must define a strict schema; never use
  an empty schema for production content.
- `src/styles/` — global CSS, design tokens, resets, and shared utilities.
  Component-local styles belong in the relevant `.astro` file when they are not
  reused elsewhere.
- `src/assets/` — source-controlled, build-processed assets imported by source
  files. `public/` is only for files that must be served unchanged by URL.
- `src/lib/` — small, framework-independent utilities and typed domain helpers.
  Never put page markup, route logic, or global mutable state here.

Do not place application source files in the repository root. Do not modify
generated directories such as `dist/` or `.astro/`.

## Pages, layouts, and components

- Keep page frontmatter limited to fetching, route parameters, metadata, and
  page composition. Move repeatable markup into components.
- Every document must have one `<html>`, one `<head>`, and one `<body>`. Never
  nest a `<head>` inside `<body>` or use markup solely for visual layout where a
  semantic element exists.
- `BaseLayout.astro` owns the document skeleton, global metadata defaults, and
  the main content slot. Individual pages pass a meaningful, unique title and
  description through typed props.
- Use headings in order, provide a single descriptive `h1` per page, and avoid
  empty landmarks.
- Give interactive elements visible labels, use real `<button>` elements for
  actions, and use `<label>` for every form control.
- Use `Astro.url`, `Astro.params`, and typed data explicitly. Validate external
  or optional values at their boundary; do not rely on unsafe assertions.

## Routing and content

- Treat changes under `src/pages/` as public-URL changes. Preserve existing URLs
  and add redirects before moving or renaming published pages.
- Static dynamic routes must export a complete, typed `getStaticPaths()`.
- Keep business/content data out of page templates. Add structured content to a
  collection and query it via `astro:content`.
- Content frontmatter must be complete, validated by the collection schema, and
  use ISO dates (`YYYY-MM-DD`) when a date is required.
- Do not expose secrets in frontmatter, public assets, client code, or files
  prefixed with `PUBLIC_` unless they are intentionally public.

## Styling and assets

- Use scoped component styles by default. Use global styles only for resets,
  tokens, typography, and deliberately shared utilities.
- Prefer CSS custom properties for colors, spacing, type scale, and layout
  values. Reuse existing tokens; do not scatter unexplained magic numbers.
- Build responsive layouts mobile-first. Test keyboard focus, narrow viewports,
  and content that wraps or grows.
- Do not use inline styles, `!important`, unscoped `:global()` selectors, or
  deeply coupled selectors unless there is no maintainable alternative.
- Images must have meaningful `alt` text, or `alt=""` when decorative. Set
  dimensions or reserve space to prevent layout shift. Prefer Astro asset
  handling for local images.

## Code style and safety

- Follow the repository's existing formatting in touched files. Use tabs in
  `.astro` files and 2-space indentation in TypeScript unless local code clearly
  establishes another convention.
- Use single quotes in TypeScript and semicolons only when the surrounding file
  uses them. Keep imports minimal and remove unused code.
- Name variables and functions for their domain purpose; avoid abbreviations,
  anonymous constants, and copy-pasted logic.
- Do not commit credentials, API keys, personal data, build output, editor
  state, or debug logging. Put environment values in `.env` files that are
  ignored by Git and document required keys in `.env.example` without values.

## Definition of done

A task is complete only when the requested behavior works, all touched content
is valid, `npm run build` passes, no regressions or unrelated changes remain,
and the final response states what changed and how it was verified.
