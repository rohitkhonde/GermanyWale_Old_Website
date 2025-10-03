import React, { useState, useEffect, useRef } from 'react';

// --- Local Image Import ---
// NOTE: Please ensure this path is correct in your project's folder structure.
import pandaImage from "../components/HeroImage/panda.png";

// --- Placeholder Image URL ---
const defaultUniImage = "https://placehold.co/400x200/cccccc/ffffff?text=University&font=raleway";

// --- SVG Icons ---
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
);

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

// --- FLOATING CHATBOT COMPONENT ---
// --- SVG Icon Components for Chatbot ---
const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

const BotIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-2 2-2-2z" />
        </svg>
    </div>
);

const UserIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
);

// Contact Dialog Component
const ContactDialog = ({ onEmailSubmit, onPhoneSubmit, onClose }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [currentField, setCurrentField] = useState("email");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentField === "email" && email) {
            onEmailSubmit(email);
            setCurrentField("phone");
        } else if (currentField === "phone" && phone) {
            onPhoneSubmit(phone);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                    {currentField === "email" ? "Enter Your Email" : "Enter Your Phone Number"}
                </h3>
                <p className="text-gray-600 mb-4">
                    To view the complete list of universities, please provide your contact details.
                </p>
                <form onSubmit={handleSubmit}>
                    {currentField === "email" ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none mb-4"
                            required
                        />
                    ) : (
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none mb-4"
                            required
                        />
                    )}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                        >
                            {currentField === "email" ? "Next" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [chatPhase, setChatPhase] = useState('gathering_info');
    const [showContactDialog, setShowContactDialog] = useState(false);
    const chatEndRef = useRef(null);

    const infoQuestions = [
        { key: 'name', text: "Hi there! I'm here to help you. What's your name?" },
        { key: 'degree', text: (ans) => `Nice to meet you, ${ans.name}! What degree are you interested in? (e.g., Master's)` },
        { key: 'field', text: (ans) => `A ${ans.degree} is a great goal. Which field? (e.g., Computer Science, Law)` },
        { key: 'experience', text: (ans) => `${ans.field} is fascinating! How many years of work experience do you have?` },
        { key: 'country', text: (ans) => `Excellent. And finally, which country are you hoping to study in?` },
    ];

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ from: 'bot', text: infoQuestions[0].text }]);
        }
    }, [isOpen]);

    const fetchUniversities = async (currentAnswers) => {
        setMessages(prev => [...prev, { from: 'bot', text: 'Perfect! Searching for the best universities based on your profile...' }]);
        setChatPhase('fetching');
        
        const params = new URLSearchParams();
        if (currentAnswers.field) params.append('program', currentAnswers.field);
        if (currentAnswers.experience) params.append('work_exp', currentAnswers.experience);

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/universities?${params.toString()}`);
            if (!response.ok) throw new Error('Could not connect to the university server.');
            
            const results = await response.json();

            if (results.length === 0) {
                 setMessages(prev => [...prev, { from: 'bot', text: "I couldn't find any universities matching your criteria. Let's try again with different options." }]);
                 setTimeout(() => {
                    setAnswers({});
                    setCurrentQuestionIndex(0);
                    setChatPhase('gathering_info');
                    setMessages([{ from: 'bot', text: infoQuestions[0].text }]);
                 }, 2000);
                 return;
            }

            const previewResults = results.slice(0, 3);
            setMessages(prev => [...prev, { from: 'bot', type: 'university_preview', data: { results: previewResults } }]);
            
            setTimeout(() => {
                setMessages(prev => [...prev, { from: 'bot', text: "I found some great universities for you! To view the complete list, please provide your contact details." }]);
                setShowContactDialog(true);
            }, 1000);

        } catch (error) {
            setMessages(prev => [...prev, { from: 'bot', text: `Sorry, there was an error: ${error.message}. Please try again later.` }]);
            setChatPhase('completed');
        }
    };

    const handleEmailSubmit = (email) => {
        setAnswers(prev => ({ ...prev, email }));
        setMessages(prev => [...prev, { from: 'user', text: email }]);
    };

    const handlePhoneSubmit = (phone) => {
        setAnswers(prev => ({ ...prev, phone }));
        setMessages(prev => [...prev, { from: 'user', text: phone }]);
        setMessages(prev => [...prev, { from: 'bot', text: "Thank you! An expert will send you the full list and get in touch shortly." }]);
        setChatPhase('completed');
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim() || chatPhase === 'fetching' || chatPhase === 'completed') return;

        const userMessage = { from: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        
        if (chatPhase === 'gathering_info') {
            const currentQuestion = infoQuestions[currentQuestionIndex];
            const newAnswers = { ...answers, [currentQuestion.key]: inputValue };
            setAnswers(newAnswers);
            
            const nextIndex = currentQuestionIndex + 1;
            if (nextIndex < infoQuestions.length) {
                const nextQuestion = infoQuestions[nextIndex];
                const botResponseText = typeof nextQuestion.text === 'function' ? nextQuestion.text(newAnswers) : nextQuestion.text;
                setTimeout(() => {
                    setMessages(prev => [...prev, { from: 'bot', text: botResponseText }]);
                    setCurrentQuestionIndex(nextIndex);
                }, 500);
            } else {
                fetchUniversities(newAnswers);
            }
        }
        setInputValue("");
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {showContactDialog && (
                <ContactDialog 
                    onEmailSubmit={handleEmailSubmit}
                    onPhoneSubmit={handlePhoneSubmit}
                    onClose={() => setShowContactDialog(false)}
                />
            )}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl flex flex-col h-[60vh] sm:h-[70vh]">
                    <header className="bg-orange-500 text-white p-4 rounded-t-2xl shadow-md flex justify-between items-center">
                        <h1 className="text-xl font-bold">University Assistant</h1>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-orange-600 p-1 rounded-full">
                            <CloseIcon />
                        </button>
                    </header>
                    <main className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => {
                            if (msg.type === 'university_preview') {
                                return <UniversityPreview key={index} data={msg.data} />;
                            }
                            return (
                                <div key={index} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                    {msg.from === 'bot' && <BotIcon />}
                                    <div className={`px-4 py-3 rounded-2xl max-w-[80%] ${msg.from === 'bot' ? 'bg-gray-100 text-gray-800 rounded-bl-none' : 'bg-orange-500 text-white rounded-br-none'}`}>
                                        {msg.text}
                                    </div>
                                    {msg.from === 'user' && <UserIcon />}
                                </div>
                            );
                        })}
                        <div ref={chatEndRef} />
                    </main>
                    {chatPhase !== 'completed' && chatPhase !== 'fetching' && (
                        <footer className="p-4 border-t border-gray-200">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your answer..."
                                    className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                                    disabled={chatPhase === 'fetching' || chatPhase === 'completed'}
                                />
                                <button type="submit" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors disabled:bg-gray-300" disabled={!inputValue.trim()}>
                                    <SendIcon />
                                </button>
                            </form>
                        </footer>
                    )}
                </div>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-transform duration-300 ease-in-out ${isOpen ? 'scale-0' : 'scale-100'}`}
            >
                <ChatIcon />
            </button>
        </div>
    );
}

const UniversityPreview = ({ data }) => (
    <div className="space-y-3">
        {data.results.map((uni, index) => (
             <div key={index} className="flex items-start gap-3">
                {index === 0 && <BotIcon/>}
                <div className={`p-3 rounded-2xl max-w-sm bg-gray-100 text-gray-800 rounded-bl-none ${index > 0 ? 'ml-[52px]' : ''}`}>
                    <p className="font-bold text-orange-600">{uni['Name of Universities'] || 'N/A'}</p>
                    <p className="text-sm">{uni['Name of Program'] || 'N/A'}</p>
                </div>
            </div>
        ))}
    </div>
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

// Enhanced UniversityCard Component
function UniversityCard({ data, onTalkToExpert }) {
  const defaultImageUrl = "https://placehold.co/400x200/cccccc/ffffff?text=University&font=raleway";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-orange-100 flex flex-col">
      {/* University Image */}
      <div className="w-full h-40 bg-gray-100">
        <img 
          src={data.image_url || defaultImageUrl} 
          alt={`Logo of ${data.canonical_name || data.title}`} 
          className="w-full h-full object-cover p-4 transition-transform duration-300 group-hover:scale-110" // Changed to object-contain and added padding
          // In case the image service fails, this fallback prevents a broken image icon
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 mb-2 h-14">
          {/* Use the new canonical_name from the API, with a fallback to the original title */}
          {data.canonical_name || data.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
          {data.program}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-5">
          <MapPinIcon />
          <span>Germany • Public University</span>
        </div>
        
        {/* Action Buttons pushed to the bottom */}
        <div className="mt-auto space-y-3">
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

// --- RESULTS PAGE COMPONENT (Hero2) ---
function Hero2({ isLoading, error, results }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertDialog, setExpertDialog] = useState({
    isOpen: false,
    universityName: ''
  });

  const filteredResults = results.filter(uni => 
    (uni["Name of Universities"]?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (uni["Name of Program"]?.toLowerCase() || '').includes(searchTerm.toLowerCase())
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
                canonical_name: uni.canonical_name,
                image_url: uni.image_url,
              }}
              onTalkToExpert={() => openExpertDialog(uni.canonical_name || uni["Name of Universities"] || "N/A")}
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

// --- MAIN PAGE COMPONENT ---
export default function UniversityPage() {
  const [step, setStep] = useState(1);
  const [selectedDegree, setSelectedDegree] = useState("Master's");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);
  const [percentage, setPercentage] = useState(50);
  const [backlogs, setBacklogs] = useState(0);
  const [preferredIntake, setPreferredIntake] = useState(null);
  const [englishTest, setEnglishTest] = useState(null);
  const [englishScore, setEnglishScore] = useState(6.5);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [ { name: "Business and Management", searchTerm: "business", icon: "📊" }, { name: "Computer Science and IT", searchTerm: "computer science", icon: "💻" }, { name: "Engineering", searchTerm: "engineering", icon: "⚙️" }, { name: "Social Science", searchTerm: "social", icon: "🌍" }, { name: "Architecture", searchTerm: "architecture", icon: "🏛️" }, { name: "Hospitality and Tourism", searchTerm: "hospitality", icon: "🏨" }, { name: "Science", searchTerm: "science", icon: "🔬" }, { name: "Sports", searchTerm: "sports", icon: "⚽" }, { name: "Fine Arts", searchTerm: "arts", icon: "🎨" }, { name: "Law", searchTerm: "law", icon: "⚖️" }, { name: "Education", searchTerm: "education", icon: "🎓" }, { name: "Mathematics", searchTerm: "mathematics", icon: "🔢" }, { name: "Medicine", searchTerm: "medicine", icon: "➕" }, { name: "Journalism and Media", searchTerm: "journalism", icon: "📰" }, { name: "Agriculture and Forestry", searchTerm: "agriculture", icon: "🌿" }];
  const intakeOptions = ["Oct-Dec 2025", "Jan-Mar 2026", "Apr-Jun 2026", "Jul-Sep 2026", "Oct-Dec 2026", "Not Decided"];
  const englishTests = ["TOEFL", "IELTS", "None"];

  const handleNextStep = () => {
    if (step === 4 && selectedDegree === "Bachelor's") {
        handleSearch();
    } else {
        setStep(prev => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (step === 6) {
        setResults([]);
        setError(null);
    }
    setStep(prev => prev - 1);
  };

  const handleSearch = async () => {
    setStep(6); 
    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (selectedDegree === "Master's") {
        params.append('degree_type', 'M.Sc');
    } else if (selectedDegree === "Bachelor's") {
        params.append('degree_type', 'Bachelors');
    }

    if (selectedCourse) params.append('program', selectedCourse.searchTerm);
    if (preferredIntake && preferredIntake !== "Not Decided") params.append('intake', preferredIntake);
    if (englishTest === 'IELTS' && englishScore) params.append('ielts', englishScore);
    if (englishTest === 'TOEFL' && englishScore) params.append('toefl', englishScore);
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/universities?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok. Is the Python server running?');
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderStepContent = () => {
    switch(step) {
      case 1: return <Step1 selectedDegree={selectedDegree} setSelectedDegree={setSelectedDegree} onNext={handleNextStep} />;
      case 2: return <Step2 categories={categories} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} onNext={handleNextStep} />;
      case 3: return <Step3 educationLevel={educationLevel} setEducationLevel={setEducationLevel} percentage={percentage} setPercentage={setPercentage} backlogs={backlogs} setBacklogs={setBacklogs} onNext={handleNextStep} />;
      case 4: return <Step4 intakeOptions={intakeOptions} preferredIntake={preferredIntake} setPreferredIntake={setPreferredIntake} onNext={handleNextStep} />;
      case 5: return <Step5 englishTests={englishTests} englishTest={englishTest} setEnglishTest={setEnglishTest} englishScore={englishScore} setEnglishScore={setEnglishScore} onSearch={handleSearch} />;
      case 6: return <Hero2 isLoading={isLoading} error={error} results={results} />;
      default: return <div>Error: Unknown step.</div>;
    }
  }

  if (step === 6) {
    return (
        <div className="bg-white font-['Gilroy']">
            <button className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-50" onClick={handleBackStep}>
                <ArrowLeft />
            </button>
            {renderStepContent()}
            <FloatingChatbot />
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6 font-['Gilroy']">
      <div className="flex flex-col md:flex-row gap-4 max-w-5xl w-full relative">
        <LeftPanel />
        <RightPanel step={step} onBack={handleBackStep}>
          {renderStepContent()}
        </RightPanel>
      </div>
       <FloatingChatbot />
    </div>
  );
}

// --- UI Components ---
const LeftPanel = () => (
    <div className="relative text-white p-10 rounded-2xl w-full md:w-[340px] h-[460px] bg-[#FA890ED6] flex flex-col justify-center items-start z-10 shrink-0">
        <div className="absolute -top-12 -left-10"><img src={pandaImage} alt="Mascot" className="w-64" /></div>
        <h2 className="text-xl z-10 font-semibold">Let us help you</h2>
        <p className="text-xl z-10 font-semibold">Find your dream!</p>
    </div>
);

const RightPanel = ({ children, step, onBack }) => (
    <div className="w-full p-8 rounded-2xl shadow-lg flex flex-col items-center z-10 relative bg-[#FFCC9540] transition-all duration-500 min-h-[460px]">
        {step > 1 && (
            <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" onClick={onBack}>
                <ArrowLeft />
            </button>
        )}
        {children}
    </div>
);

const Step1 = ({ selectedDegree, setSelectedDegree, onNext }) => (
  <>
    <h3 className="text-xl text-black-700 mb-6 font-medium">Which degree do you want to pursue?</h3>
    <div className="flex gap-4 mb-6">
        {["Bachelor's", "Master's"].map((degree) => (
            <button key={degree} onClick={() => setSelectedDegree(degree)} className={`px-6 py-3 border rounded-full text-xl bg-white ${selectedDegree === degree ? "border-orange-500 shadow-md" : "border-gray-300"}`}>
                <span className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text font-semibold">🎓 {degree}</span>
            </button>
        ))}
    </div>
    <ActionButton onClick={onNext} text="Next" />
  </>
);

const Step2 = ({ categories, selectedCourse, setSelectedCourse, onNext }) => (
  <>
    <h3 className="text-xl text-black-700 mb-6 font-medium">Select your course</h3>
    <div className="flex flex-wrap justify-center gap-3 w-full mb-4">
      {categories.map((category) => (
        <button 
          key={category.name} 
          onClick={() => setSelectedCourse(category)} 
          className={`px-5 py-3 border rounded-full flex items-center justify-center gap-2 text-sm bg-white transition-all duration-200 ${selectedCourse?.name === category.name ? "border-orange-500 shadow-md scale-105" : "border-gray-300 hover:border-gray-400"}`}
        >
          <span className="text-xl">{category.icon}</span>
          <span className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text font-semibold text-center">{category.name}</span>
        </button>
      ))}
    </div>
    <ActionButton  onClick={onNext} text="Next" disabled={!selectedCourse} />
  </>
);

const Step3 = ({ educationLevel, setEducationLevel, percentage, setPercentage, backlogs, setBacklogs, onNext }) => (
    <>
      <h3 className="text-xl text-black-700 mb-6 font-medium">What is your current education level?</h3>
      <div className="flex gap-4 mb-6">
        {["12th", "Bachelor", "Master"].map((level) => (
          <button key={level} onClick={() => setEducationLevel(level)} className={`px-6 py-3 border rounded-full text-xl bg-white ${educationLevel === level ? "border-orange-500 shadow-md" : "border-gray-300"}`}>
            <span className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text font-semibold">{level}</span>
          </button>
        ))}
      </div>
      {educationLevel && (
          <div className="w-full space-y-4">
              <Slider label="Percentage Marks Obtained" value={percentage} onChange={(e) => setPercentage(e.target.value)} min={0} max={100} unit="%" />
              {(educationLevel === "Bachelor" || educationLevel === "Master") && (
                  <Slider label="Backlogs" value={backlogs} onChange={(e) => setBacklogs(e.target.value)} min={0} max={10} unit="" />
              )}
          </div>
      )}
      <ActionButton onClick={onNext} text="Next" disabled={!educationLevel} />
    </>
  );

const Step4 = ({ intakeOptions, preferredIntake, setPreferredIntake, onNext }) => (
    <>
        <h3 className="text-xl text-black-700 mb-6 font-medium">What is your preferred intake?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {intakeOptions.map(intake => (
                <button key={intake} onClick={() => setPreferredIntake(intake)} className={`px-6 py-3 border rounded-full flex items-center justify-center text-sm bg-white h-20 ${preferredIntake === intake ? "border-orange-500 shadow-md" : "border-gray-300"}`}>
                    <span className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text font-semibold text-center">{intake}</span>
                </button>
            ))}
        </div>
        <ActionButton onClick={onNext} text="Next" disabled={!preferredIntake} />
    </>
);

const Step5 = ({ englishTests, englishTest, setEnglishTest, englishScore, setEnglishScore, onSearch }) => (
    <>
        <h3 className="text-xl text-black-700 mb-6 font-medium">Which English test did you take?</h3>
        <div className="flex gap-4 mb-6">
            {englishTests.map(test => (
                <button key={test} onClick={() => setEnglishTest(test)} className={`px-6 py-3 border rounded-full text-xl bg-white ${englishTest === test ? "border-orange-500 shadow-md" : "border-gray-300"}`}>
                    <span className="bg-gradient-to-r from-[#FF9422] to-[#D63715] text-transparent bg-clip-text font-semibold">{test}</span>
                </button>
            ))}
        </div>
        {englishTest && englishTest !== "None" && (
            <Slider label="Select Your Score" value={englishScore} onChange={(e) => setEnglishScore(e.target.value)} min={3} max={9} step={0.5} unit="" />
        )}
        <ActionButton onClick={onSearch} text="Find Universities" disabled={!englishTest} />
    </>
);

const Slider = ({ label, value, onChange, min, max, step, unit }) => (
  <div className="w-full">
    <h4 className="text-lg text-black-700 mb-2 font-medium">{label}</h4>
    <div className="flex items-center gap-4">
      <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full" />
      <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm w-20 text-center">{value}{unit}</div>
    </div>
  </div>
);

const ActionButton = ({ onClick, text, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="text-white px-6 py-3 rounded-full flex justify-center items-center gap-2 mt-auto bg-gradient-to-r from-[#FF9422] to-[#D63715] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed">
        {text} <ArrowRight />
    </button>
);

