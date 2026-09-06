import React, { useEffect, useRef } from 'react';

/**
 * High-performance canvas-based shiny particle cursor trail.
 * Renders glowing starlets and diamond sparkles that drift and fade smoothly.
 */
export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const colors = ['#00F5FF', '#F59E0B', '#FDE68A', '#FFFFFF', '#67E8F9', '#D97706'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Draw diamond sparkle ✦
    const drawSparkle = (x, y, radius, color, alpha, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = radius * 2.5;

      ctx.beginPath();
      // Draw 4-point star
      const inner = radius * 0.25;
      for (let i = 0; i < 4; i++) {
        const armAngle = (i * Math.PI) / 2;
        const innerAngle = armAngle + Math.PI / 4;
        if (i === 0) {
          ctx.moveTo(Math.cos(armAngle) * radius, Math.sin(armAngle) * radius);
        } else {
          ctx.lineTo(Math.cos(armAngle) * radius, Math.sin(armAngle) * radius);
        }
        ctx.lineTo(Math.cos(innerAngle) * inner, Math.sin(innerAngle) * inner);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const addParticles = (x, y) => {
      const count = Math.floor(Math.random() * 2) + 2; // 2 to 3 particles per burst
      for (let i = 0; i < count; i++) {
        const speed = Math.random() * 1.5 + 0.5;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed * 0.7,
          vy: Math.sin(angle) * speed * 0.7 - 0.3, // slight upward float
          radius: Math.random() * 5 + 3, // 3px to 8px
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: Math.random() * 0.025 + 0.02, // fades in ~30-40 frames
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.1,
          isSparkle: Math.random() > 0.4, // 60% diamond sparkles, 40% soft orbs
        });
      }
    };

    const handlePointerMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      // Emit particles on movement
      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist > 4 || now - lastTime > 60) {
        addParticles(x, y);
        lastX = x;
        lastY = y;
        lastTime = now;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        addParticles(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;
        p.radius = Math.max(0.5, p.radius * 0.97);

        if (p.alpha <= 0 || p.radius <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isSparkle) {
          drawSparkle(p.x, p.y, p.radius, p.color, p.alpha, p.rotation);
        } else {
          // Soft circular star orb with halo
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.radius * 3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
