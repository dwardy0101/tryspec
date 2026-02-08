# Tasks: Interactive Portfolio Website with Mini-Game

**Input**: Design documents from `/specs/001-portfolio-with-game/`  
**Prerequisites**: [plan.md](./plan.md) (completed), [spec.md](./spec.md) (completed)

**Tests**: Tests are OPTIONAL for this feature. Focus is on visual/functional validation via Lighthouse and manual testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a **static web application** using:
- `portfolio/` as root directory for all web files
- `portfolio/css/` for stylesheets
- `portfolio/js/` for JavaScript
- `portfolio/assets/` for images, icons, resume

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline structure

- [ ] T001 Create portfolio directory structure at `portfolio/` with subdirectories: `css/`, `js/`, `assets/images/`, `assets/icons/`, `assets/resume/`, `tests/lighthouse/`
- [ ] T002 [P] Create `.eslintrc.json` in repository root with ES6+ rules for code quality
- [ ] T003 [P] Create `.stylelintrc.json` in repository root with CSS best practices rules
- [ ] T004 [P] Create `.lighthouserc.json` in repository root with performance/accessibility thresholds (≥90 all categories)
- [ ] T005 [P] Create README.md in portfolio/ with project description and setup instructions

**Checkpoint**: Base project structure ready for development

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core HTML structure and baseline CSS that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create `portfolio/index.html` with semantic HTML5 structure: `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with meta tags (viewport, charset, description), `<body>` with `<header>`, `<main>`, `<footer>` elements
- [ ] T007 Add meta tags to `portfolio/index.html` `<head>`: viewport, charset UTF-8, description, Open Graph tags (og:title, og:description, og:image for social sharing)
- [ ] T008 Create `portfolio/css/main.css` with CSS reset/normalize, CSS custom properties for colors, root font size, box-sizing border-box
- [ ] T009 [P] Create `portfolio/css/sections.css` (empty file, will be populated in Phase 3)
- [ ] T010 [P] Create `portfolio/css/game.css` (empty file, will be populated in Phase 5)
- [ ] T011 [P] Create `portfolio/css/responsive.css` (empty file, will be populated in Phase 4)
- [ ] T012 [P] Create `portfolio/js/main.js` with basic structure and DOMContentLoaded listener
- [ ] T013 [P] Create `portfolio/js/utils.js` (empty file for shared utilities)
- [ ] T014 [P] Create `portfolio/js/game.js` (empty file, will be populated in Phase 5)
- [ ] T015 Link all CSS files in `portfolio/index.html` `<head>`: main.css, sections.css, responsive.css, game.css
- [ ] T016 Link all JS files at end of `portfolio/index.html` `<body>` with `defer` attribute: utils.js, main.js, game.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Portfolio Content Presentation (Priority: P1) 🎯 MVP

**Goal**: Implement all portfolio sections with semantic HTML and basic styling (mobile-first)

**Independent Test**: Navigate to index.html and verify all content sections are visible, readable, and functional on mobile device (320px width)

### HTML Structure (Portfolio Content)

- [ ] T017 [P] [US1] Create hero section in `portfolio/index.html`: Add `<section id="hero">` with `<h1>` for name, `<p>` for title "Android Developer", `<a>` button CTA with href="#projects" or "#contact"
- [ ] T018 [P] [US1] Create about section in `portfolio/index.html`: Add `<section id="about">` with `<h2>About Me</h2>`, `<div>` for professional background text, `<div>` for experience summary, `<ul>` for key skills
- [ ] T019 [P] [US1] Create projects section in `portfolio/index.html`: Add `<section id="projects">` with `<h2>Projects</h2>`, container `<div>` for project cards
- [ ] T020 [US1] Add 3-5 project cards in projects section: Each card in `<article class="project-card">` with `<img>` for screenshot, `<h3>` for project title, `<p>` for description, `<ul>` for tech stack tags, `<div>` for links (GitHub icon+link, Play Store icon+link if applicable)
- [ ] T021 [P] [US1] Create skills section in `portfolio/index.html`: Add `<section id="skills">` with `<h2>Skills</h2>`, multiple `<div class="skill-category">` each containing `<h3>` for category name (Languages, Frameworks, Tools) and `<ul>` for skill list
- [ ] T022 [P] [US1] Create contact section in `portfolio/index.html`: Add `<section id="contact">` with `<h2>Contact</h2>`, `<div>` for email link, `<div>` for social links (GitHub, LinkedIn icons+links), optional `<a>` button for resume download
- [ ] T023 [P] [US1] Add footer in `portfolio/index.html`: Add `<footer>` with copyright text and optional attribution

### Basic Styling (Mobile-First)

- [ ] T024 [US1] Style hero section in `portfolio/css/sections.css`: Center-aligned text, padding for mobile, CTA button with 44×44px minimum touch target, background color from CSS variables
- [ ] T025 [P] [US1] Style about section in `portfolio/css/sections.css`: Readable text width (max-width 800px), padding, font-size 16px+, line-height 1.6
- [ ] T026 [P] [US1] Style projects section in `portfolio/css/sections.css`: Project cards as stacked layout on mobile (one column), card padding, border or shadow, image max-width 100%
- [ ] T027 [P] [US1] Style skills section in `portfolio/css/sections.css`: Skill categories stacked on mobile, skill lists with adequate spacing, optional badge/pill styling for skills
- [ ] T028 [P] [US1] Style contact section in `portfolio/css/sections.css`: Links as large touch targets (44×44px), social icons sized appropriately, email and buttons clearly visible
- [ ] T029 [P] [US1] Style footer in `portfolio/css/sections.css`: Center-aligned, subtle background color, padding

### Accessibility & Links

- [ ] T030 [US1] Add alt text to all images in `portfolio/index.html`: Hero image, project screenshots with descriptive alt text, social icons with aria-label
- [ ] T031 [US1] Verify heading hierarchy in `portfolio/index.html`: Single `<h1>` for name, `<h2>` for section titles, `<h3>` for project/skill category titles, no skipped levels
- [ ] T032 [US1] Add skip-to-content link in `portfolio/index.html`: Insert `<a href="#main" class="skip-link">Skip to main content</a>` before header, style in main.css to appear on keyboard focus
- [ ] T033 [US1] Test all external links: Verify GitHub, LinkedIn, Play Store links open in new tab with `target="_blank" rel="noopener noreferrer"`

### Content Population

- [ ] T034 [US1] Add portfolio content to `portfolio/index.html`: Replace placeholder text with actual developer name, professional background, 3-5 real/sample Android projects with descriptions, technologies used, contact information
- [ ] T035 [US1] Add placeholder images to `portfolio/assets/images/`: Add hero image, 3-5 project screenshots (can be placeholders initially, optimize in Phase 6)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Portfolio is a viable MVP.

---

## Phase 4: User Story 2 - Modern Visual Design (Priority: P2)

**Goal**: Add visual polish, modern aesthetic, and responsive layouts for tablet/desktop

**Independent Test**: View portfolio on multiple screen sizes and verify modern design elements (colors, typography, animations) without any functionality breaking

### Color Scheme & Typography

- [ ] T036 [US2] Define color palette in `portfolio/css/main.css`: Add CSS custom properties for 3-5 colors (primary, secondary, accent, neutral, background) inspired by Material Design
- [ ] T037 [US2] Import Google Fonts in `portfolio/index.html` `<head>`: Add `<link>` for 1-2 font families (e.g., Inter for body, Roboto for headings) with weights 400, 600, 700
- [ ] T038 [US2] Apply typography hierarchy in `portfolio/css/main.css`: Set font-family for body and headings, define font-sizes using rem/em (h1: 2.5rem, h2: 2rem, h3: 1.5rem, body: 1rem), line-heights for readability

### Visual Enhancement

- [ ] T039 [US2] Enhance hero section in `portfolio/css/sections.css`: Add gradient or background image, adjust text colors for contrast, add subtle shadow to CTA button, increase font-size for hero text
- [ ] T040 [P] [US2] Enhance project cards in `portfolio/css/sections.css`: Add card shadows (box-shadow), rounded corners (border-radius 8-12px), hover effects (lift shadow, scale transform), transition effects for smooth hover
- [ ] T041 [P] [US2] Enhance skills section in `portfolio/css/sections.css`: Style skills as badges/pills with background colors, padding, border-radius, use icons from `portfolio/assets/icons/` for skill categories
- [ ] T042 [P] [US2] Enhance buttons and links in `portfolio/css/sections.css`: Add hover states (color change, underline, background shift), focus states with visible outline, smooth transitions (transition: all 0.3s ease)
- [ ] T043 [US2] Add spacing and layout improvements in `portfolio/css/sections.css`: Increase section padding, add margin between sections, use CSS Grid or Flexbox for better alignment

### Animations

- [ ] T044 [US2] Implement scroll animations in `portfolio/js/main.js`: Use Intersection Observer API to detect when sections enter viewport, add CSS class (e.g., "fade-in") to trigger animations
- [ ] T045 [US2] Add animation CSS in `portfolio/css/main.css`: Define keyframes for fade-in and slide-up effects, set initial state (opacity: 0, transform: translateY(20px)), animated state (opacity: 1, transform: translateY(0)), use transition for smooth effect

### Responsive Design (Tablet & Desktop)

- [ ] T046 [US2] Add tablet layout in `portfolio/css/responsive.css`: Media query `@media (min-width: 768px)` for project cards in 2-column grid, adjusted section padding, increased font sizes
- [ ] T047 [US2] Add desktop layout in `portfolio/css/responsive.css`: Media query `@media (min-width: 1024px)` for project cards in 3-column grid, max-width for content sections (1200px), horizontal navigation if applicable, larger hero text
- [ ] T048 [US2] Ensure no horizontal scroll in `portfolio/css/responsive.css`: Add `overflow-x: hidden` to body if necessary, verify all elements fit within viewport at 320px, 768px, 1024px, 1920px widths

### Icons & Visual Assets

- [ ] T049 [P] [US2] Add social icons to `portfolio/assets/icons/`: Download or create SVG icons for GitHub, LinkedIn, email, resume, Play Store (ensure proper licensing)
- [ ] T050 [US2] Use icons in HTML: Update `portfolio/index.html` contact section to use `<img>` or inline `<svg>` for icons with proper alt text or aria-label

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Portfolio has professional, modern design.

---

## Phase 5: User Story 3 - Interactive Mini-Game (Priority: P3)

**Goal**: Implement lightweight mini-game with canvas rendering

**Independent Test**: Click "Play Game" button, verify game launches in overlay, is playable on both desktop and mobile, and can be exited cleanly

### Game Selection & Setup

- [ ] T051 [US3] Choose game type: Decide on game mechanics (tap-timing game like Flappy Bird, memory matching game, simple puzzle, or endless runner) based on 30-60 second playtime and <50KB budget
- [ ] T052 [US3] Add game button to `portfolio/index.html`: Insert game launch button in hero section or as floating button with `<button id="game-btn">Play Game 🎮</button>`, style with 44×44px minimum touch target
- [ ] T053 [US3] Create game overlay structure in `portfolio/index.html`: Add hidden `<div id="game-overlay">` containing `<canvas id="game-canvas"></canvas>`, instructions `<div id="game-instructions">`, score display `<div id="game-score">`, close button `<button id="game-close">×</button>`

### Game Styling

- [ ] T054 [US3] Style game overlay in `portfolio/css/game.css`: Position fixed, full viewport (width 100vw, height 100vh), dark semi-transparent background (rgba(0,0,0,0.9)), z-index high (999), initially hidden (display: none)
- [ ] T055 [US3] Style game canvas in `portfolio/css/game.css`: Center canvas in overlay, max-width 600px, appropriate height, background color for game area
- [ ] T056 [US3] Style game UI in `portfolio/css/game.css`: Position instructions, score display, close button (fixed top-right corner), style with readable fonts and contrasting colors

### Game Logic & Rendering

- [ ] T057 [US3] Initialize game in `portfolio/js/game.js`: Create Game class or object with init(), update(), render() methods, set canvas context to 2D, define game state variables (score, player position, game objects)
- [ ] T058 [US3] Implement game loop in `portfolio/js/game.js`: Use requestAnimationFrame for 60fps loop, call update() and render() each frame, track deltaTime for frame-independent movement
- [ ] T059 [US3] Implement game mechanics in `portfolio/js/game.js`: Based on chosen game type, implement core gameplay (e.g., tap to flap, match cards, move player, avoid obstacles), collision detection, score tracking
- [ ] T060 [US3] Draw game graphics in `portfolio/js/game.js`: Use canvas 2D API (fillRect, arc, drawImage, fillText) to render player, obstacles/items, background, score display, keep graphics simple/minimal for performance
- [ ] T061 [US3] Add game assets to `portfolio/assets/images/game/`: Create or add minimal sprite images (Android robot, tech icons, obstacles) optimized for web (<50KB total for all game assets)

### Controls & Interactivity

- [ ] T062 [US3] Implement keyboard controls in `portfolio/js/game.js`: Add event listeners for keydown/keyup (Space, Arrow keys), map to game actions (jump, move, select)
- [ ] T063 [US3] Implement touch controls in `portfolio/js/game.js`: Add event listeners for touchstart/touchmove/touchend on canvas, detect tap positions, map to game actions for mobile compatibility
- [ ] T064 [US3] Implement game state management in `portfolio/js/game.js`: Track game states (START, PLAYING, PAUSED, GAMEOVER), show instructions on START, handle win/loss conditions, display score on GAMEOVER

### Game Integration

- [ ] T065 [US3] Connect game button to launch in `portfolio/js/main.js`: Add click event listener to `#game-btn`, show game overlay (change display to flex), initialize and start game
- [ ] T066 [US3] Connect close button to exit in `portfolio/js/main.js`: Add click event listener to `#game-close` and Escape key, hide game overlay, stop game loop, reset game state
- [ ] T067 [US3] Add game instructions in `portfolio/index.html`: Add text to `#game-instructions` explaining controls ("Tap to jump" or "Use arrow keys to move" etc.)

### Performance Optimization

- [ ] T068 [US3] Optimize game rendering in `portfolio/js/game.js`: Only redraw changed elements if possible, use sprite sheets instead of multiple images, minimize canvas clear/fill operations
- [ ] T069 [US3] Implement lazy loading for game in `portfolio/index.html`: Change game.js script tag to load only when needed, or defer until user clicks "Play Game" button to save initial page load

**Checkpoint**: All user stories should now be independently functional. Portfolio has unique interactive element.

---

## Phase 6: Polish & Optimization

**Purpose**: Final optimization, testing, and deployment preparation

- [ ] T070 [P] Optimize images in `portfolio/assets/images/`: Convert all images to WebP format using Squoosh or imagemin, generate multiple sizes (320w, 768w, 1024w, 1920w) for responsive images
- [ ] T071 [P] Implement responsive images in `portfolio/index.html`: Update `<img>` tags with `srcset` and `sizes` attributes to serve appropriate image size based on viewport
- [ ] T072 [P] Add lazy loading to images in `portfolio/index.html`: Add `loading="lazy"` attribute to all below-fold images (project screenshots, skill icons)
- [ ] T073 Preload critical assets in `portfolio/index.html` `<head>`: Add `<link rel="preload">` for hero image and critical CSS to speed up initial render
- [ ] T074 Minify CSS files: Create minified versions of main.css, sections.css, responsive.css, game.css (use cssnano, clean-css, or online minifier), update HTML links to .min.css versions for production
- [ ] T075 Minify JavaScript files: Create minified versions of main.js, game.js, utils.js (use terser, uglify-js, or online minifier), update HTML script tags to .min.js versions for production
- [ ] T076 Verify bundle sizes: Check total page size (<1MB), JavaScript bundle (<100KB minified+gzipped), game code (<50KB), use browser DevTools Network tab or bundlesize tool
- [ ] T077 [P] Run Lighthouse audit in Chrome DevTools: Test Performance, Accessibility, Best Practices, SEO scores, aim for ≥90 in all categories
- [ ] T078 Fix Lighthouse issues: Address any warnings or errors from Lighthouse report (contrast issues, missing alt text, render-blocking resources, etc.)
- [ ] T079 [P] Test on Chrome (latest): Verify all functionality, animations, game on desktop and mobile viewport in Chrome DevTools responsive mode
- [ ] T080 [P] Test on Firefox (latest): Verify all functionality, check for CSS inconsistencies, test game performance
- [ ] T081 [P] Test on Safari (macOS/iOS): Verify webkit-specific issues, test touch controls on iOS device or simulator
- [ ] T082 [P] Test on Edge (latest): Quick verification that everything works in Chromium-based Edge
- [ ] T083 Test on real mobile devices: At minimum, test on one Android device and one iOS device (physical or cloud testing service like BrowserStack)
- [ ] T084 Test keyboard navigation: Unplug mouse and navigate entire portfolio using only Tab, Enter, Space, Escape keys, verify all interactive elements accessible
- [ ] T085 Test with screen reader: Use NVDA (Windows) or VoiceOver (Mac) to navigate portfolio, verify all content announced properly, images have alt text, headings make sense
- [ ] T086 [P] Verify all edge cases from spec: Test 320px width (no horizontal scroll), slow device/connection (game performance), broken links (graceful handling), JS disabled (content still accessible), missing images (alt text visible), ultra-wide display (content max-width applied)
- [ ] T087 [P] Add caching headers for deployment: Create `_headers` or `.htaccess` file (depending on hosting) with cache-control headers for static assets (1 year for images/fonts, shorter for HTML/CSS/JS)
- [ ] T088 [P] Enable compression for deployment: Configure Gzip/Brotli on hosting platform (Netlify/Vercel handle automatically, GitHub Pages needs configuration)
- [ ] T089 Update README.md: Add deployment instructions, link to live site, credit any assets used (fonts, icons, images), document how to update content
- [ ] T090 Create deployment build: Copy optimized files (minified CSS/JS, WebP images, HTML) to production-ready folder or branch
- [ ] T091 Deploy to hosting platform: Push to GitHub Pages (gh-pages branch), or deploy to Netlify/Vercel, verify live site loads correctly
- [ ] T092 Configure custom domain (optional): Add custom domain in hosting settings, update DNS records with CNAME, verify HTTPS certificate
- [ ] T093 Final validation on production: Run Lighthouse on live site, verify all links work, test game on production deploy, check mobile performance on real device

**Checkpoint**: ✅ Portfolio ready for production use and sharing with employers/clients

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion - Can start after T016
- **User Story 2 (Phase 4)**: Depends on Foundational completion - Can start after T016 (can run parallel with US1)
- **User Story 3 (Phase 5)**: Depends on Foundational completion - Can start after T016 (can run parallel with US1/US2)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Independence

- **User Story 1 (T017-T035)**: Core portfolio content - **MVP**, can deploy after this
- **User Story 2 (T036-T050)**: Visual design enhancement - Adds polish but doesn't break US1
- **User Story 3 (T051-T069)**: Mini-game - Completely independent feature, doesn't affect portfolio

All three user stories are independently testable and deployable.

### Recommended Execution Order

**For Solo Developer:**
1. Complete Phase 1 (Setup): T001-T005
2. Complete Phase 2 (Foundational): T006-T016
3. Complete Phase 3 (US1 - MVP): T017-T035 → **Deploy MVP**
4. Complete Phase 4 (US2 - Design): T036-T050 → **Deploy Enhanced**
5. Complete Phase 5 (US3 - Game): T051-T069 → **Deploy Complete**
6. Complete Phase 6 (Polish): T070-T093 → **Production Ready**

**For Parallel Team:**
1. Team completes Phase 1+2 together (T001-T016)
2. Split into parallel tracks:
   - **Track A**: US1 tasks (T017-T035)
   - **Track B**: US2 tasks (T036-T050) - starts after foundational CSS exists
   - **Track C**: US3 tasks (T051-T069) - fully independent
3. Merge and test all stories together
4. Team completes Phase 6 polish together (T070-T093)

### Parallel Opportunities Within Phases

**Phase 1 (All parallel)**: T002, T003, T004, T005 can run simultaneously  
**Phase 2 (Partial parallel)**: T009-T014 can run parallel after T008; T015-T016 require all previous files  
**Phase 3 (Parallel HTML)**: T017, T018, T019, T021, T022, T023 (different sections)  
**Phase 3 (Parallel CSS)**: T025, T026, T027, T028, T029 (different section styles)  
**Phase 4 (Parallel)**: T040, T041, T042 (different components), T049 (asset creation)  
**Phase 6 (Parallel)**: T070, T071, T072 (image optimization), T079-T083 (browser testing), T086, T087, T088 (deployment prep)

---

## Implementation Strategy

### MVP First (Minimum Viable Portfolio)

**Goal**: Get a functional portfolio live as quickly as possible

**Execute**: Phases 1 → 2 → 3 → Partial Phase 6 (T077, T084, T085, T091)  
**Result**: Basic functional portfolio with all content, ready to share  
**Time**: ~8-10 hours

### Enhanced Portfolio

**Add**: Phase 4 (Modern Design)  
**Result**: Modern, polished portfolio that stands out  
**Additional Time**: +4-6 hours

### Complete Feature

**Add**: Phase 5 (Mini-Game)  
**Result**: Unique portfolio with interactive element  
**Additional Time**: +6-8 hours

### Production Ready

**Complete**: Phase 6 (All optimization and testing)  
**Result**: Fully optimized, tested, production-grade portfolio  
**Additional Time**: +3-4 hours

---

## Task Checklist Summary

**Total Tasks**: 93  
**Phase 1 (Setup)**: 5 tasks (T001-T005)  
**Phase 2 (Foundational)**: 11 tasks (T006-T016)  
**Phase 3 (User Story 1 - Portfolio Content)**: 19 tasks (T017-T035)  
**Phase 4 (User Story 2 - Modern Design)**: 15 tasks (T036-T050)  
**Phase 5 (User Story 3 - Mini-Game)**: 19 tasks (T051-T069)  
**Phase 6 (Polish & Optimization)**: 24 tasks (T070-T093)

### Progress Tracking

- [ ] **Phase 1 Complete** (Setup)
- [ ] **Phase 2 Complete** (Foundational) ← Blocks all user stories
- [ ] **Phase 3 Complete** (US1 - Portfolio Content) ← MVP ACHIEVED
- [ ] **Phase 4 Complete** (US2 - Modern Design)
- [ ] **Phase 5 Complete** (US3 - Mini-Game)
- [ ] **Phase 6 Complete** (Polish) ← PRODUCTION READY

---

## Notes

- **Mobile-first approach**: Test on mobile viewport (320px) after each phase
- **Constitution compliance**: Verify after Phase 3, 4, 5 that all principles still satisfied
- **Performance budget**: Check bundle sizes after T075, T076 before proceeding
- **Accessibility testing**: T084, T085 are non-negotiable before production (constitution requirement)
- **Version control**: Commit after each phase completion for easy rollback
- **Test independently**: After each user story phase (3, 4, 5), verify portfolio still works without other phases
- **Early deployment**: Consider deploying after Phase 3 (MVP) to get early feedback

---

**Ready to start**: Begin with Phase 1 (T001-T005) to set up project structure!
