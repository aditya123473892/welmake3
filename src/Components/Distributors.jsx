import React, { useState, useMemo } from 'react';
import { Search, MapPin } from 'lucide-react';

// State data with additional details
const statesData = [
  {
    name: "California",
    capital: "Sacramento",
    region: "West",
    population: "39.5M",
    description: "Known for its diverse landscape, tech industry, and entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80"
  },
  {
    name: "Texas",
    capital: "Austin",
    region: "South",
    population: "29.1M",
    description: "Famous for its size, BBQ, and unique culture.",
    imageUrl: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80"
  },
  {
    name: "New York",
    capital: "Albany",
    region: "Northeast",
    population: "20.2M",
    description: "Home to NYC, diverse culture, and financial markets.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80"
  },
  {
    name: "Florida",
    capital: "Tallahassee",
    region: "Southeast",
    population: "21.5M",
    description: "Known for beaches, theme parks, and tropical climate.",
    imageUrl: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&q=80"
  },
  {
    name: "Washington",
    capital: "Olympia",
    region: "Northwest",
    population: "7.7M",
    description: "Famous for tech industry, coffee culture, and natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80"
  }
];

function Distributors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = useMemo(() => {
    return statesData.filter(state =>
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.region.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#005486] font-baloo" >
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
              placeholder="Search states by name, capital, or region..."
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
                <img
                  src={state.imageUrl}
                  alt={state.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">{state.name}</h2>
                  <div className="flex items-center text-gray-300 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{state.capital}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {state.region}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Pop: {state.population}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No states found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Distributors;