import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank You! 🎉</h1>
        <p className="text-gray-600 text-lg mb-6">
          Your submission was successful. We will get back to you shortly. Stay
          connected!
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4727/4727401.png"
            alt="Thank You"
            className="w-40 h-40 object-contain"
          />
        </div>
        <button
          onClick={handleBackToHome}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
        >
          Back to Home <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
