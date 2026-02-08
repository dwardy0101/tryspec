# Implementation Plan: Interactive Portfolio Website with Mini-Game

**Branch**: `001-portfolio-with-game` | **Date**: 2026-02-08 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-portfolio-with-game/spec.md`

## Summary

This feature implements a modern, responsive portfolio website for an Android developer with an integrated mini-game. The portfolio showcases professional information across five key sections (Hero, About, Projects, Skills, Contact) with mobile-first design, strict performance budgets (Lighthouse ≥90, <3.5s TTI), and WCAG 2.1 AA accessibility compliance. A lightweight (<50KB) mini-game provides interactive engagement. The implementation uses vanilla HTML5, CSS3, and JavaScript as a static site deployable to any hosting platform.

**Technical Approach**: Static single-page application (SPA) with semantic HTML5 structure, CSS Grid/Flexbox layouts, and progressive enhancement. Game built with HTML5 Canvas API for smooth 60fps performance. No backend or build system required for MVP; optional build tools (Vite/Webpack) can be added for optimization phase.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (targeting evergreen browsers: Chrome/Firefox/Safari/Edge latest 2 versions)  
**Primary Dependencies**: None for core functionality (vanilla implementation); Optional: Google Fonts for typography  
**Storage**: No persistent storage required; game state is session-only (in-memory)  
**Testing**: Lighthouse CI for performance/accessibility validation, manual cross-browser testing, optional: Playwright for E2E tests  
**Target Platform**: Static web hosting (GitHub Pages, Netlify, Vercel, AWS S3/CloudFront, or similar CDN)  
**Project Type**: Single-page web application (static site, no backend)  
**Performance Goals**: Lighthouse score ≥90 all categories, Time to Interactive <3.5s on 3G, 60fps game performance  
**Constraints**: Total page size <1MB, JavaScript bundle <100KB (minified+gzipped), game code <50KB, mobile-first with 44×44px touch targets  
**Scale/Scope**: Single-user portfolio (no concurrent users), 3-5 project showcases, one mini-game, ~5 sections, static content only

## Constitution Check

*GATE: Must pass before implementation. Validates compliance with Android Developer Portfolio Constitution.*

### ✅ I. Mobile-First Design
- **Requirement**: Design and develop for mobile viewports first, then progressively enhance
- **Compliance**: Spec mandates FR-007 (mobile-first design), FR-006 (320px+ support), US1 validates mobile experience first
- **Touch Targets**: ≥44×44 pixels enforced in FR-007
- **Mobile Load Time**: <3 seconds on 3G enforced in SC-002
- **Status**: ✅ PASS - Mobile-first explicitly required in user stories and acceptance criteria

### ✅ II. Performance & Speed
- **Lighthouse Score**: ≥90 required (FR-010, SC-003)
- **Time to Interactive**: <3.5s on mobile 3G (FR-010, SC-002)
- **Image Optimization**: WebP/AVIF, lazy-loading, appropriately sized (FR-018)
- **Bundle Size**: JavaScript <100KB, game <50KB (SC-010)
- **Total Page Size**: <1MB initial load (SC-009)
- **Caching**: Strategy required for static assets (FR-020)
- **Compression**: Gzip/Brotli enabled (FR-020)
- **Status**: ✅ PASS - All performance metrics explicitly defined and measurable

### ✅ III. Accessibility Standards (WCAG 2.1 AA) - NON-NEGOTIABLE
- **Semantic HTML**: Required via FR-008 (header, nav, section, article, footer)
- **Color Contrast**: 4.5:1 normal text, 3:1 large text (SC-006)
- **Keyboard Navigation**: All interactive elements accessible (FR-019, SC-005)
- **Alt Text**: Required for all images (FR-009)
- **Form Labels**: Required if contact form implemented (FR-009)
- **Focus Indicators**: Visible focus states required (FR-019)
- **Screen Reader**: Testing required before deployment (FR-009)
- **Status**: ✅ PASS - WCAG 2.1 AA compliance mandated across requirements

### ✅ IV. Clean Code Architecture
- **Semantic Naming**: Enforced through semantic HTML requirement (FR-008)
- **CSS Methodology**: BEM or similar consistent approach (constitution requirement)
- **Modern JavaScript**: ES6+ features, no jQuery (constitution requirement)
- **Code Formatting**: Consistent indentation and style
- **Comments**: Explain "why" for complex logic
- **Separation of Concerns**: No inline styles or scripts (external files)
- **Linting**: ESLint, Stylelint, HTMLHint required (constitution tooling section)
- **Status**: ✅ PASS - Clean code standards align with constitution requirements

### ✅ V. Responsive Design
- **Minimum Viewport**: 320px width support (FR-006, Edge Case 1)
- **Breakpoint Coverage**: Mobile (320px+), tablet (768px+), desktop (1024px+) tested (FR-006)
- **Fluid Typography**: rem/em units, clamp() for scaling (constitution requirement)
- **Flexible Layouts**: Flexbox/Grid, no fixed pixel widths (constitution requirement)
- **Media Scaling**: Images and media scale appropriately (FR-018)
- **Content-Based Breakpoints**: Chosen based on content needs, not devices (constitution guidance)
- **No Horizontal Scroll**: At any viewport width (SC-004, constitution requirement)
- **Status**: ✅ PASS - Responsive design fully specified across all screen sizes

### 🎯 Overall Constitution Compliance: ✅ PASS

All 5 core principles satisfied. No violations to justify. Ready to proceed with implementation.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-with-game/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification (completed)
├── checklists/
│   └── requirements.md  # Spec quality validation (completed)
└── tasks.md             # Task breakdown (to be generated)
```

### Source Code (repository root)

This is a **static single-page web application** - using Option 1 structure adapted for web:

```text
portfolio/
├── index.html           # Main HTML structure (semantic HTML5)
├── css/
│   ├── main.css        # Core styles (base, layout, typography)
│   ├── sections.css    # Section-specific styles (hero, about, projects, skills, contact)
│   ├── game.css        # Game-specific styles (overlay, canvas, controls)
│   └── responsive.css  # Media queries and responsive adjustments
├── js/
│   ├── main.js         # Core portfolio functionality (smooth scroll, animations)
│   ├── game.js         # Game logic and canvas rendering
│   └── utils.js        # Shared utilities (lazy loading, performance helpers)
├── assets/
│   ├── images/         # Optimized images (WebP/AVIF + fallbacks)
│   │   ├── hero/       # Hero section images
│   │   ├── projects/   # Project screenshots (optimized, multiple sizes)
│   │   └── game/       # Game assets (sprites, backgrounds)
│   ├── icons/          # SVG icons for skills, social links
│   └── resume/         # Resume PDF (optional)
├── tests/              # Optional testing directory
│   ├── lighthouse/     # Lighthouse CI configuration
│   └── e2e/            # Optional E2E tests (Playwright)
├── .lighthouserc.json  # Lighthouse CI configuration
├── .eslintrc.json      # ESLint configuration
├── .stylelintrc.json   # Stylelint configuration
└── README.md           # Setup and deployment instructions
```

**Structure Decision**: Single-page static site structure chosen because:
1. **No backend required**: Portfolio is content-only with no server-side processing
2. **Simpler deployment**: Single HTML file + assets deployable to any static host
3. **Performance**: Eliminates server round-trips, faster initial load
4. **Mobile-first**: Easier to optimize initial bundle and control loading sequence
5. **Constitution alignment**: Clean, maintainable structure with clear separation of concerns

**Optional Build Enhancement** (post-MVP):
If bundle optimization becomes necessary, can add:
- `package.json` for npm scripts
- `vite.config.js` or `webpack.config.js` for bundling
- Image optimization pipeline
- CSS/JS minification automation

For MVP, manual optimization (minify before deploy) keeps complexity low per constitution principle VII (Simplicity).

## Development Phases

### Phase 0: Project Setup & Infrastructure

**Goal**: Establish project structure, tooling, and baseline configuration

**Deliverables**:
- Project directory structure created
- Base HTML skeleton with semantic structure
- CSS architecture established (main, sections, responsive files)
- Linting tools configured (ESLint, Stylelint, HTMLHint)
- Lighthouse CI baseline established
- Git workflow configured

**Duration Estimate**: 1-2 hours

---

### Phase 1: User Story 1 - Portfolio Content (Priority P1) 🎯 MVP

**Goal**: Implement all portfolio content sections with mobile-first approach

**Deliverables**:
- **Hero Section**: Name, title, CTA button with semantic HTML
- **About Section**: Professional background, experience, skills overview
- **Projects Section**: 3-5 Android projects with descriptions, tech stacks, links, images
- **Skills Section**: Categorized technical skills (Languages, Frameworks, Tools)
- **Contact Section**: Email, GitHub, LinkedIn links, optional resume download
- Basic CSS for readability (minimal styling, focus on structure)
- Mobile layout (320px+) functional
- All links functional and tested
- Lighthouse accessibility score ≥90

**Success Criteria**:
- All 6 acceptance scenarios from US1 passing
- Portfolio viewable and functional on mobile devices
- Content readable without styling enhancements
- Semantic HTML validates
- Keyboard navigation works

**Duration Estimate**: 4-6 hours

**Checkpoint**: ✅ After Phase 1, you have a functional professional portfolio deployable as MVP

---

### Phase 2: User Story 2 - Modern Visual Design (Priority P2)

**Goal**: Add visual polish and modern design aesthetic

**Deliverables**:
- **Color Scheme**: Implement 3-5 color palette (inspired by Material Design)
- **Typography**: Add Google Fonts, establish hierarchy (headings, body, captions)
- **Layout Enhancement**: CSS Grid/Flexbox for project cards, skill badges
- **Animations**: Scroll-triggered fade-in/slide-up effects (Intersection Observer API)
- **Interactive States**: Hover effects, focus indicators, transitions
- **Visual Elements**: Shadows, rounded corners, modern UI patterns
- Tablet (768px+) and desktop (1024px+) responsive layouts
- Lighthouse performance score ≥90 maintained

**Success Criteria**:
- All 6 acceptance scenarios from US2 passing
- Cohesive visual design across all sections
- Smooth animations without janky performance
- Modern aesthetic comparable to contemporary portfolios
- No performance regression from Phase 1

**Duration Estimate**: 4-6 hours

**Checkpoint**: ✅ After Phase 2, portfolio has professional polish and modern design

---

### Phase 3: User Story 3 - Interactive Mini-Game (Priority P3)

**Goal**: Implement lightweight, engaging mini-game

**Deliverables**:
- **Game Selection**: Choose game type (tap-timing, memory, puzzle, or runner)
- **Game UI**: Button/icon to launch game, overlay/modal for game area
- **Canvas Setup**: HTML5 Canvas with 60fps rendering loop
- **Game Logic**: Core gameplay mechanics, score tracking, win/loss conditions
- **Controls**: Keyboard controls (desktop) + touch controls (mobile)
- **Instructions**: Clear on-screen instructions or tutorial
- **Exit Mechanism**: Close button to return to portfolio
- **Performance**: Game bundle <50KB, maintains 60fps on mid-range devices
- **Theming**: Android-themed visual style (Android robot, tech icons)

**Success Criteria**:
- All 7 acceptance scenarios from US3 passing
- Game discoverable and launchable within 5 seconds
- Smooth gameplay on mobile devices
- Game doesn't negatively impact portfolio performance
- Bundle size targets maintained (<100KB total JS)

**Duration Estimate**: 6-8 hours

**Checkpoint**: ✅ After Phase 3, portfolio has unique interactive element that differentiates from standard portfolios

---

### Phase 4: Polish & Optimization

**Goal**: Final optimization, testing, and deployment preparation

**Deliverables**:
- **Image Optimization**: Convert images to WebP/AVIF, generate multiple sizes, implement lazy loading
- **Asset Optimization**: Minify CSS/JS, combine files if beneficial
- **Caching Headers**: Configure for static hosting
- **Cross-Browser Testing**: Validate on Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Lighthouse Validation**: All scores ≥90 across all categories
- **Accessibility Audit**: Screen reader testing, keyboard navigation verification
- **Edge Case Validation**: Test all edge cases from spec
- **Documentation**: README with setup/deployment instructions

**Success Criteria**:
- All 12 success criteria from spec.md passing
- Lighthouse scores ≥90 (Performance, Accessibility, Best Practices, SEO)
- All edge cases handled gracefully
- Cross-browser compatibility verified
- Ready for production deployment

**Duration Estimate**: 3-4 hours

**Checkpoint**: ✅ Portfolio ready for production deployment

---

## Total Estimated Duration: 18-26 hours

**MVP (Phase 0-1)**: 5-8 hours - Basic functional portfolio  
**Enhanced (Phase 0-2)**: 9-14 hours - Modern, polished portfolio  
**Complete (Phase 0-4)**: 18-26 hours - Full feature with game and optimization

## Technology Decisions & Rationale

### Why Vanilla JavaScript (No Framework)?

**Decision**: Use vanilla HTML/CSS/JS without React, Vue, or other frameworks

**Rationale**:
1. **Simplicity**: Portfolio is content-focused with minimal interactivity (constitution principle: start simple)
2. **Performance**: No framework overhead means faster load times and smaller bundle
3. **Bundle Budget**: Frameworks would consume significant portion of 100KB JS budget
4. **Learning Value**: Demonstrates fundamental web development skills
5. **Maintainability**: Less dependency management, no framework version upgrades
6. **Constitution Alignment**: Clean code principle favors appropriate tool selection

**Trade-off Accepted**: Manual DOM manipulation for animations vs framework reactivity. Acceptable because:
- Limited dynamic content (game is only dynamic element)
- Intersection Observer API handles scroll animations efficiently
- Modern browser APIs provide everything needed

### Why HTML5 Canvas for Game?

**Decision**: Use HTML5 Canvas API rather than DOM-based game or WebGL

**Rationale**:
1. **Performance**: Canvas provides 60fps rendering for simple 2D games
2. **Bundle Size**: No external game library needed for simple mechanics
3. **Mobile Compatible**: Canvas works consistently across mobile browsers
4. **Drawing Control**: Full control over rendering without DOM overhead
5. **Game Flexibility**: Can implement any 2D game type (tap-timing, memory, puzzle, runner)

**Alternative Considered**: Phaser.js game library
- **Rejected Because**: Adds ~150KB to bundle (exceeds 50KB game budget), overkill for simple game

### Why No Build System for MVP?

**Decision**: Skip Webpack/Vite/Parcel for initial implementation

**Rationale**:
1. **Simplicity**: Constitution principle - start simple, add complexity only when justified
2. **Fast Start**: Can begin coding immediately without tooling setup
3. **Manual Control**: Easier to track bundle size during development
4. **Easy Deployment**: Simple drag-and-drop to any static host

**When to Add**: If bundle optimization becomes difficult or team grows beyond 1 developer

### Why Static Site (No Backend)?

**Decision**: No server-side processing, database, or API

**Rationale**:
1. **Scope**: Spec explicitly excludes contact form backend, CMS, user accounts (Out of Scope section)
2. **Cost**: Free hosting on GitHub Pages, Netlify, Vercel
3. **Performance**: No server round-trips, CDN edge caching
4. **Security**: No attack surface for server vulnerabilities
5. **Maintenance**: No server to monitor, patch, or scale

**Content Updates**: Direct file edits (acceptable for personal portfolio with infrequent updates)

## Performance Strategy

### Budget Enforcement

| Metric | Budget | Strategy |
|--------|--------|----------|
| Total Page Size | <1MB | Optimize images (WebP/AVIF), minify assets, lazy load below-fold content |
| JavaScript Bundle | <100KB | Vanilla JS (no frameworks), tree-shake unused code, defer non-critical scripts |
| Game Code | <50KB | Lightweight game mechanics, minimal assets, sprite sheets |
| Time to Interactive | <3.5s (3G) | Inline critical CSS, defer non-critical JS, optimize loading sequence |
| Lighthouse Performance | ≥90 | Follow all Lighthouse recommendations, eliminate render-blocking resources |

### Loading Strategy

**Priority 1 (Critical - Inline or Immediate)**:
- HTML structure (semantic skeleton)
- Critical CSS (above-the-fold, hero section)
- Hero image (optimized, preloaded)

**Priority 2 (Important - Deferred)**:
- Full CSS (sections, responsive)
- Main.js (smooth scroll, animations)
- Below-fold images (lazy loaded)

**Priority 3 (Enhancement - Lazy Loaded)**:
- Game.js (only if user clicks "Play Game")
- Game assets (sprites, backgrounds)
- Non-critical images (project screenshots below fold)

### Image Optimization Checklist

- [ ] Convert all images to WebP format with JPEG fallback
- [ ] Generate multiple sizes (mobile, tablet, desktop) for responsive images
- [ ] Implement `srcset` and `sizes` attributes for responsive images
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Preload hero image only (`<link rel="preload">`)
- [ ] Use SVG for icons and logos (scalable, tiny file size)
- [ ] Compress images with tools like Squoosh, ImageOptim, or Sharp

## Accessibility Implementation Checklist

Following WCAG 2.1 AA requirements (constitution non-negotiable):

### Semantic Structure
- [ ] Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` appropriately
- [ ] Implement proper heading hierarchy (h1 → h2 → h3, no skips)
- [ ] Use `<button>` for clickable actions, `<a>` for navigation
- [ ] Add ARIA landmarks where semantic HTML insufficient

### Color & Contrast
- [ ] Ensure 4.5:1 contrast for normal text
- [ ] Ensure 3:1 contrast for large text (18pt+ or 14pt+ bold)
- [ ] Use tool like Contrast Checker to validate all color combinations
- [ ] Don't rely on color alone to convey information

### Keyboard Navigation
- [ ] All interactive elements accessible via Tab key
- [ ] Visible focus indicators (outline, ring, border)
- [ ] Logical tab order (follows visual layout)
- [ ] Escape key closes game overlay
- [ ] Space/Enter activates buttons

### Images & Media
- [ ] All `<img>` tags have meaningful `alt` text
- [ ] Decorative images use `alt=""` or `role="presentation"`
- [ ] Project screenshots describe what's shown
- [ ] Icons have `aria-label` or visible text equivalent

### Game Accessibility
- [ ] Game has text instructions (not just visual)
- [ ] Game controls work with keyboard
- [ ] Game state changes announced (score updates)
- [ ] Option to pause/exit clearly visible

### Testing
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac/iOS)
- [ ] Test keyboard-only navigation (unplug mouse)
- [ ] Run Lighthouse accessibility audit (score ≥90)
- [ ] Use axe DevTools for automated accessibility testing

## Risk Assessment & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Bundle size exceeds budget | Fails constitution performance requirement | Medium | Start with vanilla JS, monitor build size continuously, lazy load game |
| Game performance poor on mobile | Degrades user experience, violates 60fps target | Medium | Test on real devices early, optimize game loop, reduce draw calls |
| Accessibility audit fails | Blocks deployment (constitution non-negotiable) | Low | Follow WCAG checklist from start, test incrementally with screen readers |
| Image optimization delayed | Slow page load, fails Lighthouse score | Low | Use automated tools (Squoosh), prioritize hero image first |
| Cross-browser inconsistencies | Portfolio breaks on Safari/Edge | Low | Test early and often, use PostCSS for vendor prefixes, polyfills for unsupported APIs |
| Scope creep (adding features) | Delays deployment, increases complexity | Medium | Stick to 3 user stories, add enhancements AFTER MVP deployment |

## Deployment Strategy

### Hosting Options (All Free Tier Eligible)

**Recommended**: **Netlify** or **Vercel**
- ✅ Automatic HTTPS
- ✅ CDN edge caching
- ✅ Gzip compression enabled
- ✅ Deploy previews for testing
- ✅ GitHub integration
- ✅ Custom domain support

**Alternative**: **GitHub Pages**
- ✅ Free for public repos
- ✅ Automatic HTTPS with custom domains
- ✅ Simple setup (push to gh-pages branch)
- ⚠️ Slightly slower than Netlify/Vercel

**Alternative**: **AWS S3 + CloudFront**
- ✅ Highly scalable
- ✅ Full control over caching
- ⚠️ Requires more configuration
- ⚠️ May incur costs beyond free tier

### Deployment Checklist

- [ ] Minify HTML/CSS/JS
- [ ] Optimize and compress all images
- [ ] Generate WebP versions of images
- [ ] Configure caching headers (1 year for immutable assets)
- [ ] Enable Gzip/Brotli compression
- [ ] Add meta tags (title, description, Open Graph for social sharing)
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Run final Lighthouse audit (all scores ≥90)
- [ ] Verify all links work
- [ ] Test game on real mobile device
- [ ] Add Google Analytics (optional)
- [ ] Configure custom domain (optional)

## Success Validation

Portfolio is **ready for production** when:

✅ All 12 success criteria from spec.md passing  
✅ All 42 acceptance scenarios verified  
✅ Lighthouse scores: Performance ≥90, Accessibility ≥90, Best Practices ≥90, SEO ≥90  
✅ Constitution compliance verified: All 5 principles satisfied  
✅ Cross-browser tested: Chrome, Firefox, Safari, Edge (latest 2 versions)  
✅ Mobile tested: Real device testing on iOS and Android  
✅ Accessibility tested: Screen reader navigation successful  
✅ Performance tested: <3.5s TTI on throttled 3G  
✅ Bundle sizes verified: <1MB total, <100KB JS, <50KB game  
✅ Edge cases handled: 6 edge cases from spec gracefully managed  
✅ Deployed to production hosting with HTTPS  
✅ README documentation complete with setup instructions

---

**Next Step**: Generate task breakdown with `/speckit.tasks` or proceed directly to implementation starting with Phase 0 setup tasks.
