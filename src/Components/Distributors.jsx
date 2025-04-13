import React, { useState, useMemo } from 'react';
import { Search, MapPin } from 'lucide-react';

// State data with additional details
const statesData = [
  {
    firmName: "Malvi Traders",
    district: "Dhar",
    town: "Dhar City",
    state: "Madhya Pradesh",
    contactDetails: ["+91 98931 17169", "+91 78987 90271", "+91 79741 11201"],
  },
  {
    firmName: "V.K Enterprise",
    district: "Ratlam",
    town: "Ratlam City",
    state: "Madhya Pradesh",
    contactDetails: ["+91 94259 76355"],
  },
  {
    firmName: "Sankhla Traders",
    district: "Indore",
    town: "Sanwer",
    state: "Madhya Pradesh",
    contactDetails: ["+91 96857 22023", "+91 90989 87794"],
  },
  {
    firmName: "Advance Marketing",
    district: "Ratlam",
    town: "Jaora",
    state: "Madhya Pradesh",
    contactDetails: ["+91 83194 96332"],
  },
];

function Distributors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = useMemo(() => {
    return statesData.filter((state) =>
      state.firmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#005486] font-baloo">
      {/* Search Header */}
      <div className="bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white mb-6">
            Explore Distributors
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by firm name, district, town, or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-white/10 rounded-lg 
                text-black placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-black focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* States Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStates.map((state, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
                transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 relative">
                {/* <img
                  src={state.imageUrl || 'https://via.placeholder.com/150'} // Placeholder image if no imageUrl is provided
                  alt={state.firmName}
                  className="w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">{state.firmName}</h2>
                  <div className="flex items-center text-gray-300 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{state.district}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {state.town}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {state.state}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {state.contactDetails.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No distributors found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Distributors;