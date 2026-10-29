# Mashariq Trilingual Energy

PROJECT: Rebuild and improve the existing MASHARIQ Energy website using this reference URL:
https://mashariqenergy.amazingsite.co/

Act as a senior frontend engineer, UI/UX designer, responsive design specialist, animation developer, and technical SEO expert. First inspect the reference website, understand its structure, content, visual identity, navigation, images, animations, and functionality. Then build a complete, polished website that closely reproduces the reference while significantly improving the mobile experience.

IMPORTANT: Do not create a generic solar-energy template. Reproduce the distinctive identity and overall experience of the reference website, then improve its design quality, responsiveness, accessibility, performance, and reliability.

## 1. REFERENCE ANALYSIS AND IMPLEMENTATION
- Inspect the reference URL and every accessible section before implementation.
- Identify the existing page structure, header, hero, services, benefits, projects, process, statistics, testimonials, FAQs, contact forms, and footer.
- Preserve the original French, Arabic, and English content wherever accessible.
- Reproduce the layout, color palette, typography, visual hierarchy, spacing, buttons, cards, icons, and section transitions as closely as possible.
- Preserve the MASHARIQ Energy brand identity and premium renewable-energy aesthetic.
- Do not invent company history, certifications, customer testimonials, project results, guarantees, addresses, or technical claims.
- If reference content cannot be accessed, use clearly documented editable placeholders rather than presenting invented facts as genuine.
- Implement the actual website, not merely a design mockup or static screenshot.

## 2. PREMIUM VISUAL DESIGN
Create a distinctive, modern, cinematic solar-energy website with:
- A premium dark navy and charcoal foundation, elegant white typography, and refined solar-orange/golden accents inspired by the reference.
- Strong typography, beautiful spacing, balanced compositions, subtle gradients, sophisticated overlays, and polished buttons.
- High-quality solar-panel photography, solar installations, residential and commercial projects, and renewable-energy landscapes.
- A consistent design system for colors, typography, spacing, border radii, shadows, buttons, cards, and breakpoints.
- Beautiful transitions between sections and a visually impressive first screen.
- Professional layouts that communicate trust, engineering expertise, innovation, and sustainability.

Avoid generic layouts, excessive rounded cards, random gradients, unnecessary decorative elements, and template-like designs.

## 3. HERO SECTION
Recreate the reference hero section with:
- A cinematic, high-resolution solar-energy background.
- Carefully positioned text, a powerful headline, supporting description, and prominent call-to-action buttons.
- Readable contrast using subtle overlays where necessary.
- Responsive typography and intelligent image positioning.
- Smooth entrance animations and subtle scroll-based effects.
- A layout that remains visually impressive on mobile without hiding the headline or buttons.

Preserve the original messaging wherever possible. Do not invent company-specific claims.

## 4. ADVANCED MOBILE RESPONSIVENESS — HIGHEST PRIORITY
The current website needs a substantially better mobile experience. Design mobile layouts intentionally rather than simply shrinking the desktop version.

Test and optimize at viewport widths of 320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440, and 1920 pixels.

Fix all of the following:
- Horizontal scrolling, overflow, clipped content, overlapping elements, and broken layouts.
- Oversized headings, awkward line breaks, tiny text, and inconsistent spacing.
- Fixed-width containers, inappropriate absolute positioning, and elements extending beyond the viewport.
- Excessive vertical whitespace and sections that are too tall or cramped.
- Images and videos that crop important content or become distorted.
- Buttons that are too small, too close together, or partially hidden.
- Headers, menus, sticky elements, and floating buttons that cover page content.

MOBILE HEADER:
- Build a compact, elegant, fully functional navigation bar.
- Keep the logo visible and appropriately sized.
- Use a working hamburger menu with accessible touch targets.
- Display the language selector in a practical, uncluttered way.
- Ensure the menu opens, closes, and navigates correctly.
- Prevent the header from covering anchor targets or important content.

MOBILE HERO:
- Adjust the hero height, background positioning, text alignment, overlays, and CTA layout.
- Use fluid typography with CSS clamp().
- Stack buttons vertically when necessary.
- Ensure the headline, description, and primary CTA remain readable and visible.
- Preserve the cinematic atmosphere without making the mobile hero excessively tall.

MOBILE CONTENT:
- Convert desktop grids into appropriate one-column or two-column layouts.
- Make service cards, project galleries, statistics, FAQs, testimonials, forms, and footer sections responsive.
- Use flexible containers, max-widths, CSS Grid, Flexbox, minmax(), and sensible breakpoints.
- Set min-width: 0 where appropriate and prevent child elements from forcing horizontal overflow.
- Make forms comfortable to complete on small touchscreens.
- Use appropriate image aspect ratios and object-position values for each breakpoint.

Do not solve mobile issues by hiding important content, deleting sections, reducing functionality, or making everything excessively small.

## 5. CINEMATIC ANIMATIONS AND SCROLL EXPERIENCE
Implement refined, high-quality animations throughout the website:
- Smooth scrolling and section transitions.
- Subtle fade-in and slide-up reveals as sections enter the viewport.
- Elegant staggered animations for service cards and project galleries.
- Sophisticated hero image movement and restrained parallax effects where appropriate.
- Smooth hover states for desktop buttons, cards, and navigation links.
- Carefully controlled transitions for menus, FAQs, and interactive components.

Animations must feel premium, purposeful, and smooth rather than distracting.

On mobile, optimize or simplify expensive animation effects when necessary. Avoid scroll jank, layout shifts, excessive JavaScript work, and interactions that interfere with normal scrolling. Respect prefers-reduced-motion.

## 6. IMAGES AND VIDEO
Use high-quality, relevant visual assets that match the reference website.
- Prefer authentic-looking solar installations, photovoltaic panels, modern buildings, and renewable-energy landscapes.
- Use suitable licensed stock imagery or available image sources.
- Never pretend that stock imagery depicts actual MASHARIQ Energy projects.
- Optimize image formats, dimensions, loading behavior, and responsive delivery.
- Use lazy loading for below-the-fold images.
- Reserve image dimensions to prevent layout shifts.
- If cinematic video backgrounds are used, provide a mobile-friendly alternative, poster image, and appropriate fallback.
- Avoid unnecessary autoplay audio and oversized video downloads.

If the original assets cannot be retrieved, use appropriate alternatives without blocking implementation.

## 7. MULTILINGUAL SUPPORT: FR / AR / EN
Implement functional French, Arabic, and English language switching.
- French and English must use correct left-to-right layouts.
- Arabic must use a complete right-to-left layout with appropriate text alignment and navigation behavior.
- Translate all user-facing content consistently where translations are available.
- Preserve the selected language during navigation and page refreshes.
- Adapt icons, spacing, forms, buttons, menus, and animations to RTL layouts.
- Do not merely change the language button label while leaving the page content unchanged.
- Avoid mixing Arabic and Latin text in ways that break alignment.

## 8. FUNCTIONALITY
All visible interactive elements must work correctly:
- Navigation links and mobile menus.
- Language selector.
- Primary and secondary CTA buttons.
- Service and project links.
- FAQ accordion.
- Contact information links.
- Telephone links using tel: and email links using mailto: where appropriate.
- Quote-request and contact forms.
- Form validation, accessible error messages, loading states, and confirmation messages.
- Any existing search, filtering, or other functionality found on the reference website.

For forms, implement real submission through a properly configured backend or a suitable form service when available. If credentials or external configuration are required, document them clearly. Never fake successful delivery or claim that a message was sent when it was not.

Keep secrets and private API keys out of frontend code.

## 9. SEO, LOCAL SEO, AEO, AND GEO
Build strong technical and content foundations for discoverability.

TECHNICAL SEO:
- Give each page a unique, descriptive title and meta description.
- Use a logical heading hierarchy and semantic HTML.
- Implement canonical URLs, Open Graph metadata, and appropriate social-sharing metadata.
- Generate a valid sitemap.xml and robots.txt.
- Add descriptive image alt text and meaningful internal links.
- Use clean, readable URLs.
- Avoid duplicate metadata, broken links, and unnecessary client-side rendering limitations.
- Implement structured data only when accurate and appropriate.

LOCAL SEO:
- Naturally incorporate verified Tunisian locations and service areas when supported by company information.
- Keep business name, address, and telephone details consistent.
- Add appropriate LocalBusiness or relevant Organization structured data using verified information only.

AEO AND GEO:
- Structure useful content so search engines and AI-powered answer systems can understand it.
- Use clear, concise answers to relevant customer questions.
- Create meaningful FAQ sections and descriptive service content.
- Use semantic HTML, descriptive headings, factual statements, and properly connected entities.
- Make the company identity, services, and verified contact details easy

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/81447415-518f-4ef7-a742-4aa1f5d9722b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
