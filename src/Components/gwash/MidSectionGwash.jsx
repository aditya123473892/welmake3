import React from "react";
import { motion } from "framer-motion";
import { FaBroom, FaHandSparkles, FaLeaf, FaStar } from "react-icons/fa"; // Importing icons
import gwash from "../../assets/g wash.png";

const features = [
  { title: "Powerful Cleaning", position: "top-left", icon: FaBroom },
  { title: "Effortless Use", position: "top-right", icon: FaHandSparkles },
  { title: "Refreshing Fragrance", position: "bottom-left", icon: FaLeaf },
  { title: "Sparkling Finish", position: "bottom-right", icon: FaStar },
];

function MidSectionGwash() {
  return (
    <div className="bg-Byellow py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-baloo md:text-8xl font-extrabold text-[#005486]">
            WHY G WASH
          </h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:flex font-baloo font-bold relative h-[400px] items-center justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`absolute flex flex-col items-center text-[#005486] font-extrabold text-2xl sm:text-3xl md:text-4xl 
              ${feature.position.includes("top") ? "top-[10%]" : "bottom-[10%]"} 
              ${feature.position.includes("left") ? "left-[15%]" : "right-[15%]"}`}
              initial={{ opacity: 0, x: index < 2 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <feature.icon className="text-4xl sm:text-5xl mb-2 text-[#C2803D]" /> {/* Icon */}
              <span className="text-center">{feature.title}</span>
            </motion.div>
          ))}
          {/* Central Product Display */}
          <motion.img
            src={gwash}
            alt="Welmake Detergent"
            className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center space-y-6 mt-10">
          {/* Animated Product Image */}
          <motion.img
            src={gwash}
            alt="Welmake Detergent"
            className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 w-full px-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-[#005486] font-baloo font-extrabold text-xl sm:text-2xl bg-yellow-300 px-6 py-3 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <feature.icon className="text-3xl sm:text-4xl mb-2 text-[#C2803D]" /> {/* Icon */}
                <span>{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSectionGwash;
