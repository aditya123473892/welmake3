import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Testimonialdata } from "../data/Testimonaldata";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Testimonialdata.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === Testimonialdata.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    // Reset animation state after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTestimonial = Testimonialdata[currentIndex];

  return (
    <div className="bg-[#005486] text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-baloo font-bold mb-2">
          DON'T TAKE
        </h2>
        <h2 className="text-5xl md:text-7xl font-baloo font-bold mb-2 text-[#F9D423]">
          OUR WORDS FOR IT
        </h2>
        <p className="text-xl font-baloo font-semibold mb-8">
          READ WHAT OUR CUSTOMERS HAVE TO SAY:
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-12 lg:w-1/2  md:w-1/2">
          {/* Testimonial Text */}
          <div
            className={`bg-white rounded-lg p-8 text-[#005486] shadow-lg flex-1  transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="min-h-[180px] flex flex-col justify-between">
              <p className="text-xl font-baloo italic mb-6">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex justify-end">
                <div className="h-1 w-16 bg-[#C2803D]"></div>
              </div>
            </div>
          </div>

          {/* Testimonial Image */}
          {/* <div
            className={`rounded-lg overflow-hidden shadow-lg flex-1 max-w-md transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <img
              src={`/api/placeholder/500/340`}
              alt={`${currentTestimonial.author} portrait`}
              className="w-full h-full object-cover"
            />
         </div> */}
      </div>

        <div className="flex justify-between items-center">
          <div className="font-bold font-baloo text-xl bg-[#F9D423] text-[#005486] px-6 py-2 rounded-full">
            {currentTestimonial.author}
          </div>
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="bg-[#C2803D] hover:bg-[#A56D34] text-white p-3 md:p-4 rounded-full transition-colors transform hover:-translate-x-1 duration-300 disabled:opacity-50"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ArrowLeft size={28} />
            </button>
            <button
              onClick={goToNext}
              className="bg-[#C2803D] hover:bg-[#A56D34] text-white p-3 md:p-4 rounded-full transition-colors transform hover:translate-x-1 duration-300 disabled:opacity-50"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
