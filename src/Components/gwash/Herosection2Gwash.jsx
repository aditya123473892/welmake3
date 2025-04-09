import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gwash from "../../assets/g wash.png";
import { Bubblewel } from "../FrothEffect_welmake_gwash/Bubblewel";
function HeroSection2Gwash() {
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
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
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
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }, []);
  
    // Add a new bubble to the canvas
    const addBubble = (x, y) => {
      const radius = window.innerWidth < 768 ? 3 + Math.random() * 10 : 5 + Math.random() * 15; // Smaller bubbles for mobile
      bubbles.current.push(new Bubblewel(x, y, radius));
  
      // Limit number of bubbles for performance
      const maxBubbles = window.innerWidth < 768 ? 200 : 500; // Fewer bubbles for mobile
      if (bubbles.current.length > maxBubbles) {
        // Pop oldest bubbles when we have too many
        bubbles.current.slice(0, 10).forEach((bubble) => bubble.pop());
      }
    };
  
    // Animation loop
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      // Set up canvas dimensions
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
  
      const animate = () => {
        // Fill the canvas with the background color
        ctx.fillStyle = "#FFF574"; // Apply the yellow background color
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
    <div className="relative bg-Byellow overflow-hidden min-h-[90vh]">
      {/* Background bubbles canvas */}
       <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-8 pl-4"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="mt-8 text-4xl md:text-7xl font-baloo font-bold text-indigo-900 leading-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                शक्तिशाली सफाई,
                <br />
                <motion.span
                  className="text-orange-500 inline-block mb-5 mt-1"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  ताज़गी भरी नींबू की चमक!
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-2xl text-indigo-900 max-w-xl font-baloo font-semibold leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: "easeOut",
              }}
            >
              G-Wash is a powerful liquid cleaner that effortlessly removes
              tough stains and grime from utensils. Infused with refreshing
              lemon essence, it leaves dishes sparkling clean with a delightful,
              long-lasting fragrance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="bg-green-600 text-white px-12 py-6 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:shadow-xl transition-all group overflow-hidden relative"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="Shop Now"
              >
                <motion.span
                  className="absolute inset-0 bg-green-500 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <a
                  href="https://api.whatsapp.com/send/?phone=7773003300&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span className="relative z-10 font-baloo font-bold flex items-center justify-center gap-3">
                    Shop Now
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-7 h-7" />
                    </motion.span>
                  </motion.span>
                </a>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Product showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 to-yellow-100/40 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />

              <motion.div
                className="absolute inset-0 w-full h-full overflow-hidden rounded-full shadow-lg flex items-center justify-center bg-white/30 backdrop-blur-sm"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              >
                <motion.img
                  src={gwash}
                  alt="G wash liquid"
                  className="w-4/5 h-4/5 object-contain"
                  animate={{
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2Gwash;
