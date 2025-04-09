export class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.originalRadius = radius;
    this.radius = radius;
    this.maxRadius = radius * (1 + Math.random() * 0.3);
    this.alpha = 0.1 + Math.random() * 0.4;
    this.color = `rgba(255, 255, 255, ${this.alpha})`;
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
    this.life = 0;
    this.maxLife = 200 + Math.random() * 200;
    this.isPopping = false;
    this.popProgress = 0;
    this.mergeProgress = 0;
    this.isMerging = false;
    this.mergeTarget = null;
    this.damping = 0.95;
    this.springFactor = 0.01 + Math.random() * 0.01;
  }

  update(mouseX, mouseY, bubbles) {
    // Update the target position - gradually move towards cursor
    const distToMouse = Math.sqrt(
      Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
    );

    if (distToMouse < 200) {
      this.targetX = this.x + (mouseX - this.x) * 0.02;
      this.targetY = this.y + (mouseY - this.y) * 0.02;
    }

    // Spring physics
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;

    this.velocityX += dx * this.springFactor;
    this.velocityY += dy * this.springFactor;

    // Apply damping
    this.velocityX *= this.damping;
    this.velocityY *= this.damping;

    // Update position
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Increase life
    this.life++;

    // Handle popping effect
    if (this.isPopping) {
      this.popProgress += 0.1;
      this.radius = this.originalRadius * (1 + this.popProgress * 0.5);
      this.alpha = Math.max(0, this.alpha - 0.1);

      if (this.popProgress >= 1) {
        return false; // Remove bubble when pop animation is complete
      }
    }

    // Handle merging effect
    if (this.isMerging && this.mergeTarget) {
      this.mergeProgress += 0.05;
      this.x += (this.mergeTarget.x - this.x) * this.mergeProgress;
      this.y += (this.mergeTarget.y - this.y) * this.mergeProgress;
      this.radius = this.originalRadius * (1 - this.mergeProgress * 0.5);
      this.alpha = Math.max(0, this.alpha - 0.05);

      if (this.mergeProgress >= 1) {
        // Increase target bubble size when merge is complete
        if (this.mergeTarget) {
          this.mergeTarget.radius += this.radius * 0.3;
        }
        return false; // Remove bubble when merge is complete
      }
    }

    // Check if bubble should pop based on life
    if (this.life > this.maxLife && !this.isPopping && !this.isMerging) {
      this.isPopping = true;
    }

    // Check for collision with other bubbles
    if (!this.isPopping && !this.isMerging) {
      for (const bubble of bubbles) {
        if (bubble !== this && !bubble.isPopping && !bubble.isMerging) {
          const dx = bubble.x - this.x;
          const dy = bubble.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If bubbles are close enough, start merging
          if (distance < this.radius + bubble.radius) {
            // Smaller bubbles merge into larger ones
            if (this.radius < bubble.radius) {
              this.isMerging = true;
              this.mergeTarget = bubble;
              break;
            }
          }
        }
      }
    }

    // Gradually grow the bubble to its max size
    if (this.radius < this.maxRadius && !this.isPopping && !this.isMerging) {
      this.radius += 0.1;
    }

    // Update color based on current alpha
    this.color = `rgba(255, 255, 255, ${this.alpha})`;

    return true; // Keep bubble active
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    // Create radial gradient for bubble effect
    const gradient = ctx.createRadialGradient(
      this.x - this.radius * 0.3,
      this.y - this.radius * 0.3,
      0,
      this.x,
      this.y,
      this.radius
    );

    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha * 1.3})`);
    gradient.addColorStop(0.5, `rgba(210, 230, 255, ${this.alpha})`);
    gradient.addColorStop(1, `rgba(200, 220, 255, ${this.alpha * 0.5})`);

    ctx.fillStyle = gradient;

    // Add a subtle shadow
    ctx.shadowColor = 'rgba(200, 220, 255, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fill();
    ctx.closePath();

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Add highlight to create bubble effect
    ctx.beginPath();
    ctx.arc(
      this.x - this.radius * 0.3,
      this.y - this.radius * 0.3,
      this.radius * 0.3,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.7})`;
    ctx.fill();
    ctx.closePath();
  }

  pop() {
    if (!this.isPopping && !this.isMerging) {
      this.isPopping = true;
    }
  }
}
