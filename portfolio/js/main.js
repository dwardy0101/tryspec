/**
 * Main Portfolio Functionality
 * Handles smooth scrolling, animations, and interactions
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollAnimations();
  initHeaderScroll();
  initGameModal();
});

/**
 * Initialize smooth scroll for navigation links
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe sections and cards
  const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category, .stat');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/**
 * Initialize header scroll behavior (hide/show on scroll)
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScroll > lastScroll && currentScroll > 100) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Initialize game modal functionality
 */
function initGameModal() {
  const gameBtn = document.getElementById('game-btn');
  const gameOverlay = document.getElementById('game-overlay');
  const gameClose = document.getElementById('game-close');
  
  // Open game
  if (gameBtn) {
    gameBtn.addEventListener('click', () => {
      openGame();
    });
  }
  
  // Close game
  if (gameClose) {
    gameClose.addEventListener('click', () => {
      closeGame();
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !gameOverlay.hasAttribute('hidden')) {
      closeGame();
    }
  });
  
  // Close when clicking outside game container
  if (gameOverlay) {
    gameOverlay.addEventListener('click', (e) => {
      if (e.target === gameOverlay) {
        closeGame();
      }
    });
  }
}

/**
 * Open game overlay
 */
function openGame() {
  const gameOverlay = document.getElementById('game-overlay');
  if (gameOverlay) {
    gameOverlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Trigger game initialization if available
    if (typeof window.initGame === 'function') {
      window.initGame();
    }
  }
}

/**
 * Close game overlay
 */
function closeGame() {
  const gameOverlay = document.getElementById('game-overlay');
  if (gameOverlay) {
    gameOverlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    
    // Stop game if available
    if (typeof window.stopGame === 'function') {
      window.stopGame();
    }
  }
}

// Add some fun console message
console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #3ddc84; font-weight: bold;');
console.log('%cThanks for checking out the code! Feel free to reach out if you want to collaborate.', 'font-size: 14px; color: #4285f4;');
