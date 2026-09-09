# Daniel Alanaz — Portfolio

A dark, editorial portfolio for a Full-Stack Architect & Engineering Team Lead. Built with Next.js App Router, strict TypeScript, Tailwind CSS, Framer Motion, Three.js / React Three Fiber, and Lucide React.

## Run locally

Use Node.js 22.13+ (Node 24 LTS is also suitable).

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. No API keys or external services are needed. Fonts are packaged locally, so visitors do not make requests to a font CDN.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npm run build
```

The build exports the homepage, three project pages, and a 404 page to `out/`. Type checking should run after the first development or production build has generated Next.js route types. Unit tests exercise terminal command handling, normalization, and rejection of arbitrary actions.

## Deploy to Vercel

Import this repository, choose the Next.js framework preset, and use `npm run build`. This project uses Next.js static export, with output in `out/`, and has no runtime secrets. If configuring a custom static deployment, serve `out/` and use `404.html` for missing routes. `trailingSlash: true` gives each project a directory index for static hosts.

The optional `.openai/hosting.json` is for the private Sites preview; it does not change the application or require Sites to run it. Vercel remains a supported deployment target. Set `NEXT_PUBLIC_SITE_URL` to your Vercel or custom domain at build time so sitemap URLs point to that deployment. See `.env.example`.

## Structure

```text
src/app/                 Page composition, routes, metadata, global design tokens
src/components/layout/   Navigation and footer
src/components/ui/       Shared headings, magnetic links, scroll progress
src/content/             Typed project, experience, profile, and skill records
src/features/            Isolated scene, project, skill, and terminal features
public/                  CV and future approved project media
tests/                   Targeted behavior tests
docs/                    Architecture and content instructions
```

The homepage is a server component. Client components are limited to navigation disclosure, the lazy-loaded 3D scene, project filters, skills exploration, scroll progress, and contact interactions. Detailed project pages use a single shared template and are statically generated.

## Content and ownership

Current copy is grounded in Daniel's supplied CV and project names. Project graphics are explicitly labeled capability maps, not screenshots or claims about deployed architectures. No client logos, performance metrics, unverified project-specific stacks, or fabricated game footage are included.

Before public employer-facing launch, review the roles listed as ongoing, employer naming, all copy, and the CV's contact details. Supply approved screenshots, gameplay recordings, detailed architecture decisions, measurable outcomes if available, and a confirmed GitHub URL. Source-code and demo links should be added only when real destinations exist.

The included CV is the original supplied file and contains the phone number listed in that document. The website's main contact surface uses email and LinkedIn.

See [content guide](docs/content-guide.md) and [architecture notes](docs/architecture.md). The planning brief and research workbook remain authoring references and are not published as website pages.

## Design

Obsidian surfaces, mint-cyan accents, a precise type scale, and a real-time wireframe torus knot form the visual identity. Native scrolling and readable HTML carry the experience; the graphics layer enhances it. The scene supports manual pause, pauses offscreen and in hidden tabs, and falls back to static geometry when reduced motion is requested or WebGL is unavailable.

The terminal accepts only a fixed list of commands. It never executes arbitrary input and never claims to send messages. Email, LinkedIn, and CV links also work without terminal commands.
