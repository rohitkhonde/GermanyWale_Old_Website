import React, { useState } from 'react';

// --- SVG Icon Components for Cleaner UI ---
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Expert Dialog Component
function ExpertDialog({ isOpen, onClose, universityName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { ...formData, universityName });
    alert('Thank you! An expert will contact you shortly.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Talk to an Expert</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6"> 
            Our experts will contact you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function Hero2({ isLoading, error, results }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertDialog, setExpertDialog] = useState({
    isOpen: false,
    universityName: ''
  });

  const filteredResults = results.filter(uni => 
    uni["Name of Universities"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni["Name of Program"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openExpertDialog = (universityName) => {
    setExpertDialog({
      isOpen: true,
      universityName
    });
  };

  const closeExpertDialog = () => {
    setExpertDialog({
      isOpen: false,
      universityName: ''
    });
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="lg:col-span-3 flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
          <p className="text-xl text-gray-600">Searching universities...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="lg:col-span-3 text-center p-8 bg-red-50 rounded-xl border border-red-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h3>
          <p className="text-red-600">{error}</p>
        </div>
      );
    }
    if (filteredResults.length === 0) {
      return (
        <div className="lg:col-span-3 text-center py-12 px-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-yellow-800 mb-2">No Universities Found</h3>
          <p className="text-yellow-700 max-w-md mx-auto">Try adjusting your search filters or search term for better results.</p>
        </div>
      );
    }
    return (
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <p className="text-gray-600 mb-4 sm:mb-0">
            Showing <span className="font-semibold">{filteredResults.length}</span> of <span className="font-semibold">{results.length}</span> universities
          </p>
          <div className="flex items-center">
            <span className="text-gray-600 mr-3">Sort by:</span>
            <select className="bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Most Relevant</option>
              <option>Alphabetical (A-Z)</option>
              <option>Alphabetical (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResults.map((uni, index) => (
            <UniversityCard
              key={index}
              data={{
                title: uni["Name of Universities"] || "N/A",
                program: uni["Name of Program"] || "N/A",
              }}
              onTalkToExpert={() => openExpertDialog(uni["Name of Universities"] || "N/A")}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Gilroy-Medium, sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-orange-500">Dream University</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect program that matches your academic goals and career aspirations
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search universities or programs..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Reset All
                </button>
              </div>
              
              <div className="space-y-6">
                <FilterItem label="Degree" options={["Bachelor's", "Master's"]} />
              </div>
            </div>
          </div>

          {/* University Cards Grid */}
          {renderContent()}
        </div>
      </div>

      {/* Expert Dialog */}
      <ExpertDialog 
        isOpen={expertDialog.isOpen} 
        onClose={closeExpertDialog} 
        universityName={expertDialog.universityName}
      />
    </div>
  );
}

// Improved FilterItem component
function FilterItem({ label, options }) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
      <div 
        className="flex items-center justify-between cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-900 font-medium">{label}</span>
        <div className={`h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center transition-transform ${isOpen ? "rotate-90" : ""}`}>
          <ChevronRight />
        </div>
      </div>
      {isOpen && (
        <div className="mt-3 space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input 
                type="checkbox" 
                id={`${label}-${index}`} 
                className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
              />
              <label htmlFor={`${label}-${index}`} className="ml-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Enhanced UniversityCard Component without image
function UniversityCard({ data, onTalkToExpert }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-orange-100 p-5">
      <div className="flex items-center justify-center w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-4">
        <div className="text-4xl font-bold text-blue-500">
          {data.title.charAt(0).toUpperCase()}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 mb-2">
        {data.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {data.program}
      </p>
      
      <div className="flex items-center text-sm text-gray-500 mb-5">
        <MapPinIcon />
        <span>Germany • Public University</span>
      </div>
      
      <div className="space-y-3">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 group-hover:shadow-md">
          View Program
        </button>
        <button 
          onClick={onTalkToExpert}
          className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 rounded-xl transition-colors duration-200"
        >
          Talk to Expert
        </button>
      </div>
    </div>
  );
}