# Architecture decisions

## Static Next.js delivery

The portfolio has a small set of content-driven routes and no need for runtime data access. Next.js App Router renders the main page and project detail pages at build time. Static export keeps deployment portable between Vercel and the private Sites preview, with no server maintenance or secret management.

Project slugs come from the typed content array through `generateStaticParams`. Unknown routes receive a real 404. Core copy and links are included in HTML; filters and other interactive controls enhance that content after hydration.

Tradeoff: a future contact form or CMS requiring server-side requests will need a service integration or removal of static export. Direct email works now and does not simulate form delivery.

## Client boundaries

The homepage and project pages remain server components. Header disclosure, filters, skills, terminal commands, magnetic links, scroll progress, and the hero canvas are separate client features. There is no global state library because their state is local and unrelated.

The heavy scene module is loaded dynamically inside the client hero boundary, only when WebGL 2 is available and reduced motion is not requested. A React error boundary handles scene startup errors. A persistent static geometric backdrop prevents the hero from becoming empty on failure.

## Graphics budget

One canvas, capped at 1.5 device pixel ratio. The torus knot uses 180 tubular segments and 18 radial segments. It uses simple unlit materials, two orbit rings, and 120 deterministic particles. There are no external models, textures, shadows, or post-processing passes. Procedural positions avoid hydration-randomness problems and large asset downloads.

An IntersectionObserver and document visibility events switch rendering off when the scene is not visible. A pause button gives visitors explicit control. Reduced-motion users receive a static geometric treatment; native scrolling remains unchanged.

The sculpture supports mouse/touch rotation through an isolated Three.js OrbitControls adapter, with damping, bounded vertical orbit, and no zoom or pan. Arrow keys rotate the focused canvas; Home and the reset button restore the initial camera view. Pausing ambient animation switches the canvas to demand rendering, allowing direct manipulation without a continuous idle loop. Interaction-driven frames settle after damping. Controls and DOM listeners are disposed on unmount.

The hero uses a spring-smoothed scroll offset: the sculpture travels up to 48 pixels while its backdrop moves 24 pixels in the opposite direction. Small pointer offsets add another layer of depth. Reduced-motion preferences disable these effects. Touch drags are captured only inside the canvas; the surrounding page and mouse wheel retain native scrolling.

The decorative hero and SVG capability maps are authored graphics. They are not representations of unverified project architecture. Interactive 3D is isolated from readable HTML and contact actions.

## Styling and reuse

Tailwind's CSS entry provides the styling foundation, with semantic component classes and centralized CSS custom properties for the authored visual system. Shared headings and buttons standardize repeated presentation. Responsive breakpoints adapt composition, including a single-column mobile hero and stacked project cards.

Project summaries and detail routes share the same typed records. A shared visual component renders capability diagrams, not invented product screenshots. Fonts are self-hosted from Fontsource packages.

## Contact behavior

The terminal parser is a pure function over a fixed command allowlist. User input is rendered as escaped React text; there is no `eval`, raw HTML injection, network submission, or automatic navigation from input. Known commands expose explicit links. Clipboard failure leaves the actual email link available and supplies a recovery message.

## Performance and accessibility

Goals: maintain LCP <= 2.5 s, CLS <= 0.1, and INP <= 200 ms under representative conditions. These are targets, not field measurements. Source-level decisions do not establish a performance score or accessibility certification.

Semantic landmarks, a skip link, focus-visible styles, labeled controls, reduced-motion support, and native links are built in. Validate the published result with keyboard, mobile touch, zoom, and assistive technology as part of ongoing maintenance. See verification notes for checks actually performed.
