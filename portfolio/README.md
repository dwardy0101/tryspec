# Android Developer Portfolio

A modern, responsive portfolio website showcasing Android development projects with an interactive mini-game.

## Features

- 📱 **Mobile-First Design**: Optimized for all screen sizes (320px+)
- ⚡ **High Performance**: Lighthouse score ≥90, <3.5s Time to Interactive
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- 🎮 **Interactive Game**: Fun mini-game to engage visitors
- 🎨 **Modern Design**: Clean, professional aesthetic with smooth animations

## Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── main.css       # Core styles and variables
│   ├── sections.css   # Section-specific styles
│   ├── game.css       # Game styles
│   └── responsive.css # Media queries
├── js/
│   ├── main.js        # Portfolio functionality
│   ├── game.js        # Game logic
│   └── utils.js       # Shared utilities
└── assets/            # Images, icons, resume
```

## Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. For development, use a local server (e.g., `python -m http.server` or VS Code Live Server)

## Deployment

This is a static site that can be deployed to:
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repository and deploy
- **Vercel**: Connect repository and deploy
- **AWS S3 + CloudFront**: Upload files to S3 bucket

## Performance

- Total page size: <1MB
- JavaScript bundle: <100KB (minified + gzipped)
- Game code: <50KB
- Time to Interactive: <3.5s on 3G

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Personal portfolio project - feel free to use as inspiration for your own portfolio!
