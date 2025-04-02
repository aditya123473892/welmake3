import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gwash from "../../assets/g wash.png";

function HeroSection2Gwash() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorBubbles, setCursorBubbles] = useState([]);
//comment
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorBubbles.length > 10) return; // Limit the number of bubbles to 10

      const newBubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 100 + 60,
      };

      setCursorBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setCursorBubbles((prev) =>
          prev.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 2000); // Increased timeout duration to 2000ms
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorBubbles]);

  return (
    <div className="relative bg-Byellow overflow-hidden min-h-[90vh]">
      {/* Cursor following bubbles */}
      {cursorBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none rounded-full z-50"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(173, 216, 230, 0.4), rgba(0, 0, 255, 0.2))`,
            boxShadow: `0px 0px 10px rgba(255, 255, 255, 0.8), inset 0px 0px 15px rgba(173, 216, 230, 0.5)`,
            filter: `blur(2px)`,
          }}
          initial={{
            width: bubble.size,
            height: bubble.size,
            x: bubble.x - bubble.size / 2,
            y: bubble.y - bubble.size / 2,
            opacity: 0.9,
            scale: 0.3,
          }}
          animate={{
            opacity: [0.9, 0.6, 0.3, 0],
            scale: [0.3, 1.1, 0.9, 0.7], // Adds a slight shrink effect before disappearing
            y: bubble.y - bubble.size / 2 - 150,
          }}
          transition={{
            duration: 2.5, // Increased duration for a slower pop
            ease: "easeOut",
          }}
        />
      ))}

      {/* Background bubbles - Reduced movement and more subtle */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => ( // Reduced from 12 to 6
          <motion.div
            key={i}
            className="absolute rounded-full bg-Byellow backdrop-blur-sm"
            style={{
              width: `${Math.random() * 180 + 100}px`,
              height: `${Math.random() * 180 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1], // Reduced scale change
              y: [0, -20, 0], // Reduced vertical movement
            }}
            transition={{
              duration: 12, // Slower animation
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5, // Staggered delay for more natural movement
            }}
          />
        ))}
      </div>

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
                className="mt-8 text-4xl md:text-7xl font-baloo font-bold text-indigo-900 leading-tight "
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
                  <motion.span className="relative z-10 font-baloo font-bold  flex items-center justify-center gap-3">
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

          {/* Product showcase - Simplified */}
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
