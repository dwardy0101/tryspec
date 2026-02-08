<!--
SYNC IMPACT REPORT:
Version: 1.0.0 (Initial creation)
Ratification Date: 2026-02-08
Project Type: Android Developer Portfolio Website

Principles Established (5):
1. Mobile-First Design - Portfolio prioritizes mobile experience
2. Performance & Speed - Fast loading, optimized assets mandatory
3. Accessibility Standards (NON-NEGOTIABLE) - WCAG 2.1 AA compliance required
4. Clean Code Architecture - Maintainable, semantic, well-documented code
5. Responsive Design - Cross-device compatibility required

Sections Added:
- Technology Stack & Standards (constraints on HTML/CSS/JS, frameworks, tooling)
- Content Requirements (portfolio-specific content rules)

Templates Status:
✅ plan-template.md - Constitution Check section aligns with 5 principles
✅ spec-template.md - User scenarios align with portfolio content requirements
✅ tasks-template.md - Task categorization supports all principle-driven categories

Follow-up TODOs: None - all placeholders resolved

Next Steps:
- Begin feature development following these principles
- Ensure all specs validate against accessibility and performance standards
- Use constitution as gate check in plan.md Constitution Check section
-->

# Android Developer Portfolio Constitution

## Core Principles

### I. Mobile-First Design
The portfolio MUST prioritize mobile user experience above all else. Given that this showcases an Android developer's work, the website itself must exemplify mobile excellence.

**Non-Negotiable Rules**:
- Design and develop for mobile viewports first, then progressively enhance for larger screens
- Touch targets MUST be minimum 44×44 pixels
- Mobile viewport MUST load critical content within 3 seconds on 3G connection
- Mobile navigation MUST be thumb-friendly and intuitive

**Rationale**: An Android developer's portfolio that performs poorly on mobile devices undermines credibility. Mobile-first approach ensures the core audience (potential employers/clients reviewing on phones) receives optimal experience.

### II. Performance & Speed
Page load performance is non-negotiable. Every asset, script, and design decision MUST be evaluated for performance impact.

**Non-Negotiable Rules**:
- Initial page load MUST achieve Lighthouse performance score ≥ 90
- Images MUST be optimized (WebP/AVIF format, lazy-loaded, appropriately sized)
- JavaScript bundle MUST be < 100KB (minified and gzipped)
- Time to Interactive (TTI) MUST be < 3.5 seconds on mobile
- No render-blocking resources in critical rendering path
- Implement caching strategy for static assets

**Rationale**: Portfolio sites compete for attention in seconds. Slow loading = lost opportunities. Performance discipline demonstrates technical competence and respect for users' time and bandwidth.

### III. Accessibility Standards (NON-NEGOTIABLE)
Website MUST meet WCAG 2.1 Level AA compliance. Accessibility is mandatory, not optional.

**Non-Negotiable Rules**:
- Semantic HTML MUST be used throughout (proper heading hierarchy, landmarks, lists)
- Color contrast MUST meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- All interactive elements MUST be keyboard accessible
- All images MUST have meaningful alt text or role="presentation"
- Form inputs MUST have associated labels
- Focus indicators MUST be clearly visible
- ARIA labels MUST be used where semantic HTML is insufficient
- Screen reader testing MUST be performed before deployment

**Rationale**: Accessibility expands reach, demonstrates professional standards, and is often a legal requirement. An inaccessible portfolio excludes potential audiences and reflects poorly on the developer's values.

### IV. Clean Code Architecture
Code MUST be maintainable, readable, and follow industry best practices. The codebase itself is part of the portfolio.

**Non-Negotiable Rules**:
- Use semantic, descriptive naming for classes, IDs, and variables
- CSS MUST follow BEM or similar consistent methodology
- JavaScript MUST use modern ES6+ features and avoid jQuery unless specifically justified
- Code MUST be properly indented and formatted (2 or 4 space consistency)
- Comments MUST explain "why" not "what" for complex logic
- No inline styles or script tags (separate concerns)
- Version control MUST be used with meaningful commit messages
- Code MUST pass linting rules (ESLint, Stylelint, Prettier)

**Rationale**: Clean code demonstrates professionalism and makes future updates manageable. The portfolio source code may be reviewed by potential employers, making it an implicit code sample.

### V. Responsive Design
Website MUST provide optimal experience across all devices and screen sizes without sacrificing functionality.

**Non-Negotiable Rules**:
- Support minimum viewport width of 320px
- Test on multiple device sizes (mobile, tablet, desktop, large desktop)
- Use fluid typography (rem/em units, clamp() for scaling)
- Flexible layouts using Flexbox/Grid, avoid fixed pixel widths
- Images and media MUST scale appropriately
- Breakpoints MUST be chosen based on content needs, not specific devices
- Horizontal scrolling MUST not occur at any viewport width

**Rationale**: Device diversity is reality. A responsive portfolio ensures accessibility regardless of how the site is accessed, demonstrating understanding of modern web standards.

## Technology Stack & Standards

### Allowed Technologies
- **HTML5**: Latest semantic elements, valid markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties), preprocessors (Sass/Less) allowed if justified
- **JavaScript**: Vanilla ES6+ preferred, frameworks (React/Vue/Svelte) allowed only if complexity justifies overhead
- **Build Tools**: Vite, Webpack, or Parcel for bundling and optimization
- **Version Control**: Git with GitHub/GitLab

### Required Tooling
- **Linters**: ESLint (JavaScript), Stylelint (CSS), HTMLHint (HTML)
- **Formatter**: Prettier for consistent code style
- **Testing**: Lighthouse CI for performance/accessibility regression testing
- **Browser Testing**: Chrome, Firefox, Safari (latest 2 versions), Mobile Safari, Chrome Android

### Deployment Standards
- HTTPS MUST be enabled (SSL certificate required)
- CDN or edge caching MUST be used for static assets
- Gzip/Brotli compression MUST be enabled
- Environment variables MUST be used for configuration (no hardcoded secrets)

## Content Requirements

### Portfolio Content Standards
The portfolio MUST effectively showcase Android development expertise while maintaining professional quality.

**Required Sections**:
- **Hero/Introduction**: Clear value proposition, role (Android Developer), call-to-action
- **About**: Professional background, technical skills, relevant experience
- **Projects**: Minimum 3-5 Android projects with:
  - Project title and brief description
  - Technologies used (Kotlin/Java, Android SDK versions, libraries)
  - Key features and problem solved
  - Screenshots or demo video/GIF
  - Link to GitHub repository and/or Google Play Store (if applicable)
  - Role and contributions (if team project)
- **Skills**: Technical skills organized by category (Languages, Frameworks, Tools, etc.)
- **Contact**: Email, GitHub, LinkedIn, optional: Resume download

**Content Quality Standards**:
- Writing MUST be clear, concise, professional (grammar/spell-checked)
- Project descriptions MUST focus on impact and results, not just technology lists
- Screenshots MUST be high quality, properly sized, demonstrating actual functionality
- Personal branding MUST be consistent (tone, visual style, messaging)
- No placeholder "Lorem ipsum" text in production
- All links MUST be tested and working

**Visual Design Standards**:
- Consistent color scheme (3-5 colors maximum primary palette)
- Typography hierarchy clearly established (max 2-3 font families)
- Whitespace used effectively for readability
- Visual design supports (not distracts from) content
- Professional appearance suitable for job applications

## Governance

### Amendment Process
- Constitution amendments require documented justification explaining:
  - What principle/rule is being changed
  - Why the change is necessary
  - Impact on existing work and migration plan
- Version number MUST be incremented following semantic versioning:
  - **MAJOR**: Backward incompatible changes (removing/redefining principles)
  - **MINOR**: New principles or sections added
  - **PATCH**: Clarifications, wording improvements, non-semantic refinements

### Compliance & Quality Gates
- All feature specifications MUST reference relevant principles
- Plan documents MUST include "Constitution Check" validating compliance with all principles
- Any violation of non-negotiable rules MUST be explicitly justified with permanent documentation
- Pre-deployment checklist MUST verify:
  - Lighthouse score ≥ 90 (performance, accessibility, best practices, SEO)
  - Responsive testing completed on required viewports
  - Cross-browser testing completed
  - All content standards met
  - Code linting passes with zero errors

### Development Guidance
- This constitution supersedes all other practices and must be enforced
- When in doubt, refer to this document for decision making
- Use templates in `.specify/templates/` for structured development workflow
- Constitution compliance is checked during plan phase and before deployment

**Version**: 1.0.0 | **Ratified**: 2026-02-08 | **Last Amended**: 2026-02-08
