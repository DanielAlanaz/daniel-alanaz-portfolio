# Updating the portfolio

## Profile and experience

Edit `src/content/profile.ts` for email, LinkedIn, CV location, roles, skill groups, and skill evidence. Contact links and terminal commands share these values.

Replace `public/daniel-alanaz-cv.pdf` when updating the CV. Review that document's personal contact information before public publication.

## Projects

Edit `src/content/projects.ts`. Each project includes its route slug, order, category, role, short summary, context, contribution, capabilities, confirmed technologies, and delivered capability. New slugs become static routes on the next build. Keep slugs stable when sharing links.

Only include a technology in a project when its use on that project is confirmed. Global skills do not establish a project stack. Qualitative delivered capabilities are appropriate when reliable metrics are unavailable.

The diagram component currently supports the three initial projects. A new project should receive its own truthful capability map or approved media, rather than inheriting an unrelated diagram. Project categories and the total are derived from the content automatically.

When evidence becomes available, extend the typed model with architecture decisions, constraints, reflections, media, and external links, and render them in the shared project page. Do not hard-code a separate detail page for each project.

## Images and video

Place approved media under `public/`. Use explicit dimensions, informative alternative text, and responsive sizing. Lazy-load below-the-fold assets. Videos should have a poster and native controls; never autoplay audio. Label conceptual reconstructions and keep client information sanitized.

## Current editorial limits

QuantaBooks has a deliberately concise overview because implementation specifics were not supplied. The games are a short creative-practice listing, without claimed release status or engine attribution. Licensing remains part of the broader experience inventory until there is enough distinct evidence for a separate story.

No GitHub, source-code, demo, or store URLs have been guessed. Add these once Daniel supplies confirmed destinations. Do not publish the planning workbook's questions and research notes as portfolio copy.
