# Green Future Collective — Editorial Climate-Tech Site

A premium, editorial marketing site for Green Future Collective inspired by Carbon Direct / Pachama / Stripe Climate. Specs (colors, type, sections) are fully provided — building directly, no design exploration needed.

## Design tokens

- Background `#F5F5F0`, Primary `#103B2D` (deep forest), Accent `#38C172` (vivid green), Secondary `#E6E0D5` (warm sand)
- Headlines: **General Sans** (display, 72–120px, tight tracking, mixed-weight); Body: **Inter**
- Wired into `src/styles.css` as oklch tokens + Google Fonts `<link>` in `__root.tsx`
- Generous whitespace, 12-col grid, magazine rhythm
- Use uploaded screenshots strictly as visual inspiration.
  Do not copy layouts, illustrations, logos, wording, imagery, branding, or trademarks.
  Replicate only the design language, spacing, typography hierarchy, composition style, and editorial feel.

## Routes (TanStack file-based)

- `/` — Home (all sections below)
- `/about`, `/programs`, `/impact`, `/projects`, `/collaborate`, `/contact`
Each with its own `head()` meta. Minimal top nav, dark footer.

## Home sections

1. **Hero** — Split. Left: massive stacked headline "BUILD CIRCULAR COMMUNITIES. / EMPOWER WOMEN. / REDUCE WASTE." with accent-green emphasis on key words. Right: layered cut-out collage (women artisans + earth + organic shapes + accent green sparks), floating decorative elements.  
Organization:
  Green Future Collective (GFC)
  Founder:
  Sakshi Singh Sirari
  Location:
  Uttar Pradesh, India
  Focus:
  Waste Management, Circular Economy, Women's Empowerment, Sustainability Education, EPR Services
2. **Trusted by** — Auto-scrolling marquee of partner categories (Govt Bodies, Educational Institutions, NGOs, CSR Partners) rendered as wordmarks.
3. **Mission** — Centered editorial statement, ~64px, generous padding.
4. **Focus Areas** — 4 alternating full-width rows (Waste Management, Women's Empowerment, Circular Economy, EPR Services) with cut-out imagery + organic shape overlays + numerals (01–04).
5. **Impact** — 4 huge counter numerals (20+, 500+, 100+, 50+) animating on scroll via IntersectionObserver.
6. **Founder** — Full-width portrait left, pull-quote right with large serif-feeling display type.
7. **Projects** — Card grid (3 cards), each as a case study: Challenge / Solution / Impact stacked.
8. **CTA + Footer** — Dark forest footer with nav, contact, social.

## Image strategy

Create image placeholders and asset references.

Do not generate AI images automatically.

I will replace all imagery with Green Future Collective photographs and media assets later. using the Carbon Direct collage language: monochrome/desaturated nature + earth photography with cut-out edges, green linework overlays, orange-disc accents, layered against background. Saved to `src/assets/`.

- hero-collage.png (transparent)
- focus-waste.jpg, focus-women.jpg, focus-circular.jpg, focus-epr.jpg
- founder-portrait.jpg
- project-1/2/3.jpg

## Motion

- Fade-up on scroll (IntersectionObserver + tailwind classes)
- Counter animation on Impact
- Subtle parallax on hero collage (transform on scroll)
- Hover lift on project cards
- No carousels, no typewriter

## Technical

- All new pages as `src/routes/*.tsx` with proper `head()` meta
- Shared `<SiteHeader />` and `<SiteFooter />` components
- Reusable: `<FadeUp />`, `<Counter />`, `<MarqueeRow />`, `<FocusRow />`, `<ProjectCard />`
- Tokens in `styles.css`; no hardcoded colors in components
- Fonts loaded via `<link>` in `__root.tsx` head
- Use uploaded screenshots strictly as visual inspiration.
  Do not copy layouts, illustrations, logos, wording, imagery, branding, or trademarks.
  Replicate only the design language, spacing, typography hierarchy, composition style, and editorial feel.
- The website should feel like a premium sustainability organization operating at the intersection of environmental action, circular economy, and women's empowerment.
  Avoid common NGO design patterns such as donation-focused hero banners, generic green gradients, stock photography, and crowded information layouts.
  Prioritize storytelling, editorial design, typography, photography, and visual sophistication.

## Out of scope

- Backend / forms (Contact page is static with mailto)
- CMS
- Auth