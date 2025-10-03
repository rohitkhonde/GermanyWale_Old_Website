import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---
const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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


// --- Floating Chatbot Component ---
export default function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [chatPhase, setChatPhase] = useState('gathering_info');
    const chatEndRef = useRef(null);

    const infoQuestions = [
        { key: 'name', text: "Hi there! I'm here to help you. What's your name?" },
        { key: 'degree', text: (ans) => `Nice to meet you, ${ans.name}! What degree are you interested in? (e.g., Master's)` },
        { key: 'field', text: (ans) => `A ${ans.degree} is a great goal. Which field? (e.g., Computer Science, Law)` },
        { key: 'experience', text: (ans) => `${ans.field} is fascinating! How many years of work experience do you have?` },
        { key: 'country', text: (ans) => `Excellent. And finally, which country are you hoping to study in?` },
    ];
    
    const contactQuestions = [
        { key: 'email', text: (results) => `Great! I found ${results.length} total universities. To unlock the full list, please enter your email address.`},
        { key: 'phone', text: () => `Thanks! And your phone number?`},
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
            setMessages(prev => [...prev, { from: 'bot', type: 'university_preview', data: { results: previewResults, total: results.length } }]);
            
            setTimeout(() => {
                setMessages(prev => [...prev, { from: 'bot', text: contactQuestions[0].text(results) }]);
                setChatPhase('gathering_contact');
                setCurrentQuestionIndex(0);
            }, 1000);

        } catch (error) {
            setMessages(prev => [...prev, { from: 'bot', text: `Sorry, there was an error: ${error.message}. Please try again later.` }]);
            setChatPhase('completed');
        }
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
        } else if (chatPhase === 'gathering_contact') {
            const currentQuestion = contactQuestions[currentQuestionIndex];
            const newAnswers = { ...answers, [currentQuestion.key]: inputValue };
            setAnswers(newAnswers);

            const nextIndex = currentQuestionIndex + 1;
            if (nextIndex < contactQuestions.length) {
                 const nextQuestion = contactQuestions[nextIndex];
                 const botResponseText = typeof nextQuestion.text === 'function' ? nextQuestion.text(newAnswers) : nextQuestion.text;
                 setTimeout(() => {
                    setMessages(prev => [...prev, { from: 'bot', text: botResponseText }]);
                    setCurrentQuestionIndex(nextIndex);
                 }, 500);
            } else {
                setTimeout(() => {
                    setMessages(prev => [...prev, { from: 'bot', text: "Thank you! An expert will send you the full list and get in touch shortly." }]);
                    setChatPhase('completed');
                }, 500);
            }
        }
        setInputValue("");
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Window */}
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
                    {chatPhase !== 'completed' && (
                        <footer className="p-4 border-t border-gray-200">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={chatPhase === 'fetching' ? 'Please wait...' : 'Type your answer...'}
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

            {/* Floating Action Button */}
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
                <div className={`p-3 rounded-2xl max-w-sm bg-gray-100 text-gray-800 rounded-bl-none ${index > 0 ? 'ml-13' : ''}`}>
                    <p className="font-bold text-orange-600">{uni['Name of Universities'] || 'N/A'}</p>
                    <p className="text-sm">{uni['Name of Program'] || 'N/A'}</p>
                </div>
            </div>
        ))}
    </div>
);
