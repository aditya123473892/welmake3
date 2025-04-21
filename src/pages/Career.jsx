import React, { useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaLightbulb,
  FaBullseye,
  FaClipboardCheck,
} from "react-icons/fa";
import ApplyButton from "../Components/ApplyButton";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="value-card animate-fade-in bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center font-baloo ">
    <Icon className="value-icon" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const jobs = [
  {
    title: "Full-Stack Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "3 weeks ago",
    applicationCount: 42,
  },
  {
    title: "Senior UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "2 days ago",
    applicationCount: 18,
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    postedDate: "1 week ago",
    applicationCount: 36,
  },
];

function Career() {
  const jobsSectionRef = useRef(null);

  const scrollToJobsSection = () => {
    jobsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Technology",
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Remote work",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Tech components",
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Coding",
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Working on laptop",
    },
    {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      alt: "Tech office",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="relative py-12 overflow-hidden bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center font-baloo">
            <div className="w-full md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                JOIN OUR FAST
                <br />
                GROWING TEAM
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Be part of something special. Join our innovative team and help
                shape the future of welmake India.
              </p>
              <button
                onClick={scrollToJobsSection}
                className="font-baloo bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer text-xs"
              >
                SEE POSITIONS
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className=" p-6 ">
                <div className="hero-mosaic grid gap-4 max-w-4xl mx-auto">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`mosaic-item item-${index + 1} group`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* value section */}
      <section className="py-12 bg-Byellow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-baloo">
            Our values
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-baloo text-lg">
            What we live by, and what made Welmake a success story
          </p>

          <div className="grid md:grid-cols-3 gap-8 bg-[#005486] rounded-lg shadow-lg p-6 ">
            <ValueCard
              icon={FaCheckCircle}
              title="Authenticity"
              description="We prioritize transparency and honesty in all our actions, staying true to our values and commitments."
            />
            <ValueCard
              icon={FaUsers}
              title="Teamwork"
              description="We collaborate with trust and respect, leveraging each other's strengths to achieve common goals."
            />
            <ValueCard
              icon={FaHandsHelping}
              title="Respect"
              description="We value diversity and foster an inclusive environment where every individual is treated with dignity and fairness."
            />
            <ValueCard
              icon={FaLightbulb}
              title="Innovation"
              description="We embrace creativity and new ideas, continuously seeking improvements and challenging the status quo."
            />
            <ValueCard
              icon={FaBullseye}
              title="Courage"
              description="We face challenges with confidence, taking risks and pushing boundaries to make bold decisions."
            />
            <ValueCard
              icon={FaClipboardCheck}
              title="Accountability"
              description="We take ownership of our actions, ensuring our commitments are met and holding ourselves responsible for our results."
            />
          </div>
        </div>
      </section>
      {/* job section */}
      <section
        ref={jobsSectionRef}
        className="py-16 bg-blue-default text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Open positions
          </h2>

          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Posted
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applications
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 font-baloo">
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {job.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          {job.type}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          {job.postedDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.applicationCount} candidates
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* apply  */}
      <div className="flex justify-center items-center ">
       <ApplyButton/>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
