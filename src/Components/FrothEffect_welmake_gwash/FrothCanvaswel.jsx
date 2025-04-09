import React, { useRef, useEffect, useState } from 'react';
import { Bubblewel } from './Bubblewel';

const FrothCanvaswel = () => {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Add new bubbles near the cursor
      if (Math.random() > 0.5) {
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        addBubble(e.clientX + offsetX, e.clientY + offsetY);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        // Add new bubbles near the touch point
        if (Math.random() > 0.5) {
          const offsetX = (Math.random() - 0.5) * 40;
          const offsetY = (Math.random() - 0.5) * 40;
          addBubble(e.touches[0].clientX + offsetX, e.touches[0].clientY + offsetY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Add a new bubble to the canvas
  const addBubble = (x, y) => {
    const radius = 5 + Math.random() * 15;
    bubbles.current.push(new Bubblewel(x, y, radius));

    // Limit number of bubbles for performance
    if (bubbles.current.length > 500) {
      // Pop oldest bubbles when we have too many
      bubbles.current.slice(0, 10).forEach((bubble) => bubble.pop());
    }
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const animate = () => {
      // Clear canvas with a semi-transparent layer to create trail effect
      ctx.fillStyle = 'rgba(240, 248, 255, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the hazy background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(235, 245, 255, 0.5)');
      bgGradient.addColorStop(1, 'rgba(235, 245, 255, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and filter active bubbles
      bubbles.current = bubbles.current.filter((bubble) =>
        bubble.update(mousePosition.current.x, mousePosition.current.y, bubbles.current)
      );

      // Draw all bubbles
      bubbles.current.forEach((bubble) => bubble.draw(ctx));

      // Add random bubbles occasionally
      if (Math.random() > 0.95 && bubbles.current.length < 500) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        addBubble(x, y);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Clean up
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
    //   className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-blue-50 to-white"
    />
  );
};

export default FrothCanvaswel;
