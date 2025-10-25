import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    mobile: '',
    degree: 'bachelors'
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  // Handles changes for all text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      mobile: value
    }));
  };

  // Handles the form submission to the Google Sheets API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Clear previous messages
    setMessage('');
    setError('');

    // Basic validation
    if (!formData.firstName || !formData.surname || !formData.email || !formData.mobile) {
      setError("Please fill in all required fields.");
      return;
    }

    // Phone number validation
    if (!formData.mobile || formData.mobile.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the current date and time to IST with AM/PM
      const currentDate = new Date();
      const istDate = new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(currentDate);

      // Prepare the row data in the order your sheet expects it
      const rowData = [
        formData.firstName,
        formData.surname,
        formData.email,
        formData.mobile,
        formData.degree,
        istDate,
      ];

      // Your Google Sheets API endpoint from NocodeAPI
      const apiURL = "https://v1.nocodeapi.com/rohitkhonde/google_sheets/kSVFrMWNsPCLuxEz?tabId=Sheet1";

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([rowData]), // API expects an array of rows
      });

      if (response.ok) {
        setIsSubmittedSuccessfully(true);
        setMessage('Sign up successful! Your data has been submitted.');
        
        // Store in localStorage that user has submitted the form
        localStorage.setItem('hasSubmittedForm', 'true');
        localStorage.setItem('submissionTime', new Date().toISOString());
        
        // Clear form fields on successful submission
        setFormData({
          firstName: '',
          surname: '',
          email: '',
          mobile: '',
          degree: 'bachelors'
        });

        // Automatically close the form after 3 seconds
        setTimeout(() => {
          if (onClose) {
            onClose();
          }
        }, 3000);
      } else {
        // Handle non-OK responses
        const errorResult = await response.json();
        setError(errorResult.message || 'Failed to submit the form. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to connect to the server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close form when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="text-gray-900 flex justify-center w-full max-w-4xl my-8">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSubmittedSuccessfully ? (
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24">
                <svg className="w-full h-full text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h1 className="text-2xl xl:text-3xl font-extrabold mt-6">Thank You!</h1>
              <p className="text-gray-600 mt-4">Your sign up was successful. We've received your information.</p>
              <p className="text-gray-500 text-sm mt-2">Closing automatically...</p>
            </div>
          ) : (
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                  Book a Free Session
                </h1>
                <div className="w-full flex-1">
                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Share your e-mail to book a session
                    </div>
                  </div>

                  <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-5">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text" 
                        placeholder="Surname" 
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <PhoneInput
                        country={"in"}
                        value={formData.mobile}
                        onChange={handlePhoneChange}
                        inputClass="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        containerClass="w-full"
                        inputStyle={{
                          width: '100%',
                          height: '56px',
                          paddingLeft: '60px'
                        }}
                        buttonStyle={{
                          backgroundColor: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          borderRight: 'none',
                          borderTopLeftRadius: '8px',
                          borderBottomLeftRadius: '8px'
                        }}
                        required
                      />
                    </div>
                    
                    {/* Degree Selection - Radio Buttons */}
                    <div className="mt-5 mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Degree to Pursue
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="degree"
                            value="bachelors"
                            checked={formData.degree === 'bachelors'}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <span className="text-gray-700 font-medium">Bachelors</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="degree"
                            value="masters"
                            checked={formData.degree === 'masters'}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <span className="text-gray-700 font-medium">Masters</span>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      className="mt-5 tracking-wide font-semibold bg-gradient-to-r from-[#D63715] to-[#FF9422] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">{isSubmitting ? 'Submitting...' : 'Book a free session'}</span>
                    </button>
                    
                    {message && <p className="mt-4 text-sm text-green-600 text-center">{message}</p>}
                    {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          )}
          <div className="flex-1 text-center hidden lg:flex">
            <div 
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;