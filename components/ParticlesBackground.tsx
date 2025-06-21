
import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 70;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(color: string) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Size between 1 and 4
        this.speedX = Math.random() * 1 - 0.5; // Horizontal speed
        this.speedY = Math.random() * 1 - 0.5; // Vertical speed
        this.color = color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check (bounce off edges)
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Reset particle if it goes too far (alternative to bounce)
        // if (this.x > canvas.width + this.size || this.x < -this.size || this.y > canvas.height + this.size || this.y < -this.size) {
        //   this.x = Math.random() * canvas.width;
        //   this.y = Math.random() * canvas.height;
        // }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      const colors = ['#06b6d4', '#22d3ee', '#67e8f9']; // Cyan shades
      for (let i = 0; i < numberOfParticles; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push(new Particle(randomColor));
      }
    };
    init();

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      // Draw lines between nearby particles (optional, can be performance intensive)
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) { // Max distance for line
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)'; // Faint cyan lines
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      setCanvasSize();
      init(); // Re-initialize particles on resize for better distribution
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50" />;
};
