import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; // Ensure Firebase is configured properly
import { Country, City } from "country-state-city";
import { useNavigate } from "react-router-dom";

const DEGREE_OPTIONS = [
  { value: "bachelors", label: "Bachelors" },
  { value: "masters", label: "Masters" },
];

export default function Google() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    degree: "bachelors",
    country: "",
    city: "",
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch all countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // Fetch cities whenever a country is selected
  useEffect(() => {
    if (formData.country) {
      const countryCities = City.getCitiesOfCountry(formData.country);
      setCities(countryCities || []);
    } else {
      setCities([]);
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { city: "" }), // Reset city if country changes
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobile || formData.mobile.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    try {
      // Format date to IST with AM/PM
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

      // Prepare the row data to be submitted
      const rowData = [
        formData.name,
        formData.mobile,
        formData.email,
        formData.degree,
        formData.country,
        formData.city,
        istDate, // Current Date and Time in IST
      ];

      // Define headers and request options
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify([rowData]), // Only send the row data
        redirect: "follow",
      };

      // Send data to Google Sheets API
      const response = await fetch(
        "https://v1.nocodeapi.com/rohitkhonde/google_sheets/cbMkHTwXxstZOMlp?tabId=Sheet1",
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);

        // Reset the form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          degree: "bachelors",
          country: "",
          city: "",
        });

        // Redirect to Thank You Page in a new tab
        window.open("/thank-you", "_blank");
      } else {
        const errorText = await response.text();
        console.error("Error:", errorText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Success:", user);

      // Redirect to Thank You Page in a new tab
      window.open("/thank-you", "_blank");
    } catch (error) {
      console.error("Google Sign-In Failed:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row max-w-4xl w-full">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
              />
            </div>

            <div>
              <label className="block text-left font-semibold text-lg">
                Mobile Number
              </label>
              <PhoneInput
                country={"in"}
                value={formData.mobile}
                onChange={handlePhoneChange}
                inputClass="block w-full h-10 px-4 pl-12 text-base text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                containerClass="w-full"
              />
            </div>

            <div>
              <label className="block text-left font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
              />
            </div>

            <div>
              <label className="block text-left font-semibold text-lg">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-left font-semibold text-lg">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
                disabled={!formData.country}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-left font-semibold text-lg">
                Degree to Pursue
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              >
                {DEGREE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
