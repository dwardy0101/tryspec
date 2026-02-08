/**
 * Android Tap Challenge Game
 * Tap/click on Android robots as they appear to score points
 */

// Game state
const game = {
  canvas: null,
  ctx: null,
  isRunning: false,
  isPaused: false,
  score: 0,
  timeLeft: 30,
  robots: [],
  particles: [],
  animationFrameId: null,
  timerInterval: null
};

// Robot class
class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.lifetime = 2000; // 2 seconds
    this.createdAt = Date.now();
    this.isClicked = false;
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  }

  update(deltaTime) {
    // Move robot
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Bounce off walls
    if (this.x < this.size / 2 || this.x > game.canvas.width - this.size / 2) {
      this.angle = Math.PI - this.angle;
    }
    if (this.y < this.size / 2 || this.y > game.canvas.height - this.size / 2) {
      this.angle = -this.angle;
    }

    // Check if expired
    return Date.now() - this.createdAt < this.lifetime && !this.isClicked;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    // Android robot body
    ctx.fillStyle = this.color;
    
    // Head
    ctx.beginPath();
    ctx.arc(0, -10, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Antennae
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-10, -25);
    ctx.lineTo(-15, -35);
    ctx.moveTo(10, -25);
    ctx.lineTo(15, -35);
    ctx.stroke();
    
    // Eyes
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(-7, -12, 3, 0, Math.PI * 2);
    ctx.arc(7, -12, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Body
    ctx.fillStyle = this.color;
    ctx.fillRect(-15, 5, 30, 25);
    
    // Arms
    ctx.fillRect(-22, 8, 7, 20);
    ctx.fillRect(15, 8, 7, 20);
    
    // Legs
    ctx.fillRect(-12, 30, 7, 15);
    ctx.fillRect(5, 30, 7, 15);

    ctx.restore();
  }

  contains(x, y) {
    const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
    return distance < this.size / 2;
  }
}

// Particle class for click effects
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 2;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
    this.color = color;
    this.life = 1;
    this.decay = 0.02;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= this.decay;
    return this.life > 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/**
 * Initialize game (called from main.js)
 */
window.initGame = function() {
  game.canvas = document.getElementById('game-canvas');
  game.ctx = game.canvas.getContext('2d');
  
  // Set canvas size
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Show instructions
  showInstructions();
  
  // Setup event listeners
  setupEventListeners();
};

/**
 * Resize canvas to fit container
 */
function resizeCanvas() {
  if (!game.canvas) return;
  
  const container = game.canvas.parentElement;
  const maxWidth = Math.min(600, container.clientWidth - 40);
  const aspectRatio = 400 / 600;
  
  game.canvas.width = maxWidth;
  game.canvas.height = maxWidth * aspectRatio;
}

/**
 * Show instructions screen
 */
function showInstructions() {
  document.getElementById('game-instructions').removeAttribute('hidden');
  document.getElementById('game-canvas').setAttribute('hidden', '');
  document.getElementById('game-score').setAttribute('hidden', '');
  document.getElementById('game-timer').setAttribute('hidden', '');
  document.getElementById('game-over').setAttribute('hidden', '');
}

/**
 * Setup game event listeners
 */
function setupEventListeners() {
  const startBtn = document.getElementById('game-start');
  const restartBtn = document.getElementById('game-restart');
  
  if (startBtn) {
    startBtn.addEventListener('click', startGame);
  }
  
  if (restartBtn) {
    restartBtn.addEventListener('click', restartGame);
  }
  
  // Canvas click/touch events
  if (game.canvas) {
    game.canvas.addEventListener('click', handleCanvasClick);
    game.canvas.addEventListener('touchstart', handleCanvasTouch);
  }
}

/**
 * Start the game
 */
function startGame() {
  // Hide instructions, show game
  document.getElementById('game-instructions').setAttribute('hidden', '');
  document.getElementById('game-canvas').removeAttribute('hidden');
  document.getElementById('game-score').removeAttribute('hidden');
  document.getElementById('game-timer').removeAttribute('hidden');
  
  // Reset game state
  game.isRunning = true;
  game.score = 0;
  game.timeLeft = 30;
  game.robots = [];
  game.particles = [];
  
  updateScoreDisplay();
  updateTimerDisplay();
  
  // Start timer
  game.timerInterval = setInterval(() => {
    game.timeLeft--;
    updateTimerDisplay();
    
    if (game.timeLeft <= 0) {
      endGame();
    }
  }, 1000);
  
  // Start game loop
  gameLoop();
  
  // Spawn robots periodically
  spawnRobot();
}

/**
 * Restart the game
 */
function restartGame() {
  document.getElementById('game-over').setAttribute('hidden', '');
  startGame();
}

/**
 * Main game loop
 */
function gameLoop() {
  if (!game.isRunning) return;
  
  // Clear canvas
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  
  // Draw background gradient
  const gradient = game.ctx.createLinearGradient(0, 0, 0, game.canvas.height);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  game.ctx.fillStyle = gradient;
  game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
  
  // Update and draw particles
  game.particles = game.particles.filter(particle => {
    const alive = particle.update();
    if (alive) particle.draw(game.ctx);
    return alive;
  });
  
  // Update and draw robots
  game.robots = game.robots.filter(robot => {
    const alive = robot.update();
    if (alive) robot.draw(game.ctx);
    return alive;
  });
  
  // Spawn new robots
  if (Math.random() < 0.02 && game.robots.length < 5) {
    spawnRobot();
  }
  
  // Continue loop
  game.animationFrameId = requestAnimationFrame(gameLoop);
}

/**
 * Spawn a new robot
 */
function spawnRobot() {
  const margin = 60;
  const x = Math.random() * (game.canvas.width - margin * 2) + margin;
  const y = Math.random() * (game.canvas.height - margin * 2) + margin;
  game.robots.push(new Robot(x, y));
}

/**
 * Handle canvas click
 */
function handleCanvasClick(e) {
  if (!game.isRunning) return;
  
  const rect = game.canvas.getBoundingClientRect();
  const scaleX = game.canvas.width / rect.width;
  const scaleY = game.canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;
  
  checkRobotHit(x, y);
}

/**
 * Handle canvas touch
 */
function handleCanvasTouch(e) {
  if (!game.isRunning) return;
  e.preventDefault();
  
  const rect = game.canvas.getBoundingClientRect();
  const scaleX = game.canvas.width / rect.width;
  const scaleY = game.canvas.height / rect.height;
  const touch = e.touches[0];
  const x = (touch.clientX - rect.left) * scaleX;
  const y = (touch.clientY - rect.top) * scaleY;
  
  checkRobotHit(x, y);
}

/**
 * Check if a robot was hit
 */
function checkRobotHit(x, y) {
  for (let i = game.robots.length - 1; i >= 0; i--) {
    const robot = game.robots[i];
    if (robot.contains(x, y)) {
      // Create particles
      for (let j = 0; j < 15; j++) {
        game.particles.push(new Particle(robot.x, robot.y, robot.color));
      }
      
      // Remove robot and add score
      game.robots.splice(i, 1);
      game.score += 10;
      updateScoreDisplay();
      
      // Play success sound (if you add audio)
      playHitSound();
      
      break;
    }
  }
}

/**
 * Update score display
 */
function updateScoreDisplay() {
  const scoreElement = document.getElementById('score-value');
  if (scoreElement) {
    scoreElement.textContent = game.score;
  }
}

/**
 * Update timer display
 */
function updateTimerDisplay() {
  const timerElement = document.getElementById('timer-value');
  if (timerElement) {
    timerElement.textContent = game.timeLeft;
  }
}

/**
 * End the game
 */
function endGame() {
  game.isRunning = false;
  
  // Stop timer
  if (game.timerInterval) {
    clearInterval(game.timerInterval);
  }
  
  // Stop animation
  if (game.animationFrameId) {
    cancelAnimationFrame(game.animationFrameId);
  }
  
  // Show game over screen
  document.getElementById('game-canvas').setAttribute('hidden', '');
  document.getElementById('game-score').setAttribute('hidden', '');
  document.getElementById('game-timer').setAttribute('hidden', '');
  
  const gameOver = document.getElementById('game-over');
  const finalScore = document.getElementById('final-score-value');
  
  if (gameOver && finalScore) {
    finalScore.textContent = game.score;
    gameOver.removeAttribute('hidden');
  }
}

/**
 * Stop game (called from main.js when closing overlay)
 */
window.stopGame = function() {
  game.isRunning = false;
  
  if (game.timerInterval) {
    clearInterval(game.timerInterval);
  }
  
  if (game.animationFrameId) {
    cancelAnimationFrame(game.animationFrameId);
  }
  
  // Reset to instructions
  showInstructions();
};

/**
 * Play hit sound (placeholder - add audio if desired)
 */
function playHitSound() {
  // Could add Web Audio API sound here
  // For now, just a console log
  if (game.score % 50 === 0 && game.score > 0) {
    console.log('🎉 Score milestone:', game.score);
  }
}
