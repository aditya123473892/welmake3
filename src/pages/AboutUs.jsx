import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaBullseye as Target, FaCompass as Compass } from "react-icons/fa"; // Importing icons
import ceo from "../assets/ceo.png";
import dispatch from "../assets/DispatchHead.png";
import operationhead from "../assets/operationhead.png";
import onlinemedia from "../assets/Online Media Head.png";
import customer from "../assets/customerRelationship.png";
import manufacture from "../assets/manufacturing.png";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    { 
      id: 1, 
      name: "Sarthak Gupta", 
      img:ceo,
      role: "Cheif Executive Officer", 
      bio: "Visionary leader with 20+ years of strategic management experience.",
      specialties: ["Strategic Planning", "Innovation", "Global Business"]
    },
    { 
      id: 2, 
      name: "Dharmendra Choudhary", 
      img: dispatch,
      role: "Disptach Head", 
      bio: "Tech innovator driving digital transformation and cutting-edge solutions.",
      specialties: ["Technology Strategy", "AI", "Product Development"]
    },
    { 
      id: 3, 
      name: " Arun Dhakad", 
      img:operationhead,
      role: "Operations Head", 
      bio: "Financial expert ensuring sustainable growth and fiscal responsibility.",
      specialties: ["Financial Strategy", "Risk Management", "Investment"]
    },
    { 
      id: 4, 
      name: "Atul Kasera", 
      img:onlinemedia,
      role: " Online Meadia Head", 
      bio: "Operations mastermind optimizing efficiency and operational excellence.",
      specialties: ["Process Optimization", "Supply Chain", "Organizational Development"]
    },
    { 
      id: 5, 
      name: "Ravi Malakar", 
      role: "Manufacturing Head", 
      img:manufacture,
      bio: "Marketing strategist building powerful brand narratives and customer connections.",
      specialties: ["Brand Strategy", "Digital Marketing", "Customer Experience"]
    },
    { 
      id: 6, 
      name: "Sujata Malviya", 
      role: "Customer Relationship Head", 
      img:customer,
      bio: "Marketing strategist building powerful brand narratives and customer connections.",
      specialties: ["Brand Strategy", "Digital Marketing", "Customer Experience"]
    },
 
  ];

  // Partner companies data
  const partners = [
    "Microsoft",
    "Google", 
    "Amazon", 
    "Apple", 
    "Tesla", 
    "IBM", 
    "Oracle"
  ];

  // Slick Carousel settings for team members
  const teamSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Slick Carousel settings for partners
  const partnerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Logo and Header Section */}
      <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
          Video of Company Management
        </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
      </div>

      {/* Yellow Description Section */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-baloo leading-relaxed text-center space-y-4">
            <span className="block mb-4">
              Our company's management team consists of industry leaders with
              decades of combined experience. We believe in transparent
              leadership, innovative solutions, and putting our clients first.
            </span>
            <span className="block mb-4">
              Watch our video to learn more about our management philosophy and
              how we drive results for our partners and clients. Each member of
              our leadership team brings unique perspectives and expertise to
              help guide our organization.
            </span>
            <span className="block">
              Through strategic vision and collaborative efforts, we've
              established ourselves as a leader in the industry, consistently
              delivering value and exceptional results to our clients worldwide.
            </span>
          </p>
        </div>
      </div>
         {/* Vision & Mission Section */}
         <div className="max-w-7xl mx-auto px-4 py-24 font-baloo">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="bg-Byellow backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-black leading-relaxed">
            We aim to make the brand by creating it, partnering or by acquisition of 
            existing offerings. with every brand we believe to add value to the customers life. 
            we work to create a better sustainable future and every action we take,
             we try to enhance the trust into our organization
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-Byellow backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Compass className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-black leading-relaxed">
            Our mission is to develop and manufacture high-quality products that exceed customer expectations 
            while prioritizing sustainability and environmental responsibility in all 
            aspects of our operations. We are committed to continuous innovation and 
            improvement to meet evolving consumer needs and preferences. 
            Additionally, we strive to build strong relationships with customers, 
            suppliers, and stakeholders based on trust, integrity, and mutual respect.
            </p>
          </div>
        </div>
      </div>
      {/* Team Section with Slick Carousel */}
      <div className="bg-[#005486] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold font-baloo text-center uppercase mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto ">
          <Slider {...teamSliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="px-4">
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 w-full aspect-square mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
        
      {/* Partners Section with Slick Carousel */}
      <div className="bg-Byellow py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl font-medium font-baloo mb-10 text-blue-900">
          Trusted by the best companies worldwide
        </p>

        <div className="max-w-6xl mx-auto">
          <Slider {...partnerSliderSettings}>
            {partners.map((partner) => (
              <div key={partner} className="px-4">
                <div className="bg-yellow-300 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                  <span className="font-medium text-blue-900">{partner}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    
      <Footer />
    </div>
  );
  
};

export default AboutUs;