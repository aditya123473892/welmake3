import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/effective cleaning.jpg";
import slide2 from "../../assets/gental.jpg";
import slide3 from "../../assets/softhand.jpg";
const JackCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [allSlidesViewed, setAllSlidesViewed] = useState(false);
  const [viewedSlides, setViewedSlides] = useState([0]); // Start with first slide viewed
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const containerRef = useRef(null);

  const slides = [
    {
      image: slide1,
      alt: "slide1",
      badge: "welmake",
      title: " Effective Cleaning ",
      subtitle: "Discover Your Glow",
      description:
        " Removes stubborn grease, stains, and food residue effortlessly",
      buttonText: "Explore More",
      accent: "bg-gradient-to-r from-amber-600/30 to-orange-600/30 backdrop-blur-md",
    },
    {
      image: slide2,
      alt: "slide2",
      badge: "welmake",
      title: " Gentle on Skin",
      subtitle: "Beauty with Purpose",
      description:
        "Formulated to be mild on hands, preventing dryness or irritation",
      buttonText: "Learn More",
      accent: "bg-gradient-to-r from-amber-600/30 to-orange-600/30 backdrop-blur-md",
    },
    {
      image: slide3,
      alt: "slide3",
      badge: "welmake",
      title: " Safe for Dishes",
      subtitle: "Exclusive Release",
      description:
        "Leaves no harmful residues, ensuring your dishes are clean and safe.",
      buttonText: "Shop Now",
      accent: "bg-gradient-to-r from-amber-600/30 to-orange-600/30 backdrop-blur-md",
    }
  ];

  // Add active slide to viewed slides when it changes
  useEffect(() => {
    if (!viewedSlides.includes(activeSlide)) {
      const newViewedSlides = [...viewedSlides, activeSlide];
      setViewedSlides(newViewedSlides);

      // Check if all slides have been viewed
      if (newViewedSlides.length >= slides.length) {
        setAllSlidesViewed(true);
      }
    }
  }, [activeSlide]);

  // Set up Intersection Observer to detect when carousel is fully visible
  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      threshold: 0.95, // Consider fully visible when 95% of the component is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsFullyVisible(
          entry.isIntersecting && entry.intersectionRatio >= 0.95
        );
      });
    }, options);

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  // Prevent scrolling past carousel until all slides are viewed
  useEffect(() => {
    const preventScroll = (e) => {
      // Only prevent scroll if the carousel is fully visible
      if (!isFullyVisible) return;

      // If all slides are not viewed yet and trying to scroll down
      if (!allSlidesViewed && e.deltaY > 0) {
        e.preventDefault();

        if (!isScrolling) {
          setIsScrolling(true);

          // Check if we can move to next slide based on what we've seen
          const nextIndex = (activeSlide + 1) % slides.length;
          if (!viewedSlides.includes(nextIndex)) {
            sliderRef?.slickGoTo(nextIndex);
          } else {
            // If we've seen this slide, try the next one
            const availableSlides = Array.from(
              { length: slides.length },
              (_, i) => i
            ).filter((i) => !viewedSlides.includes(i));

            if (availableSlides.length > 0) {
              sliderRef?.slickGoTo(availableSlides[0]);
            } else {
              // If no unviewed slides remain, just go to next
              sliderRef?.slickNext();
            }
          }

          // Reset scrolling state after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    // Only attach the scroll prevention when we need it
    if (!allSlidesViewed && isFullyVisible) {
      window.addEventListener("wheel", preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, [
    allSlidesViewed,
    activeSlide,
    isScrolling,
    slides.length,
    sliderRef,
    viewedSlides,
    isFullyVisible,
  ]);

  // Handle regular carousel navigation via scroll
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = (e) => {
      // Only handle scroll if the carousel is fully visible
      if (!isFullyVisible) return;

      if (!isScrolling) {
        setIsScrolling(true);

        if (e.deltaY > 0) {
          // Scroll down - go to next slide
          sliderRef?.slickNext();
        } else {
          // Scroll up - go to previous slide
          sliderRef?.slickPrev();
        }

        // Reset scroll flag after animation
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    // Only add regular navigation after all slides are viewed
    if (allSlidesViewed && isFullyVisible) {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sliderRef, isScrolling, allSlidesViewed, isFullyVisible]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div className="absolute bottom-10 w-full">
        <ul className="flex justify-center gap-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: i === activeSlide ? 1.2 : 1,
          backgroundColor:
            i === activeSlide
              ? "rgba(255, 255, 255, 1)"
              : viewedSlides.includes(i)
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(255, 255, 255, 0.5)",
        }}
        className="w-3 h-3 rounded-full cursor-pointer"
      />
    ),
  };

  return (
    <div className="w-full mx-auto relative overflow-hidden" ref={containerRef}>
      <Slider ref={setSliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-screen overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{
                  scale: index === activeSlide ? 1 : 1.1,
                  transition: { duration: 1.2, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Enhanced gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${slide.accent} opacity-40`}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              {/* Content container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-center max-w-3xl mx-auto">
                  <AnimatePresence mode="wait">
                    {index === activeSlide && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="mb-6"
                        >
                          {/* <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium tracking-wider">
                            {slide.badge}
                          </span> */}
                        </motion.div>
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-6xl md:text-7xl font-bold mb-2 font-baloo"
                        >
                          {slide.title}
                        </motion.h2>
                        {/* <motion.h3
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-2xl md:text-3xl font-light mb-6 text-white/90"
                        >
                          {slide.subtitle}
                        </motion.h3> */}
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.button
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {slide.buttonText}
                        </motion.button>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Progress indicator for viewed slides */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 left-8 text-white font-light"
              >
                {/* <span className="text-sm">
                  {viewedSlides.length} of {slides.length} viewed
                </span> */}
              </motion.div>
              {/* Enhanced slide counter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 right-8 text-white font-bold"
              >
                {/* <span className="text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xl opacity-50">
                  /{String(slides.length).padStart(2, "0")}
                </span> */}
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <p className="text-sm font-light mb-2 opacity-70">
          {!isFullyVisible
            ? "Scroll to view carousel fully"
            : allSlidesViewed
            ? "Scroll to navigate freely"
            : "Scroll through all slides to continue"}
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full mx-auto flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JackCarousel;
