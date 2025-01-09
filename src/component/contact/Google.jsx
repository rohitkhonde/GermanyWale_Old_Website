import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase"; // Adjust the path as necessary

const DEGREE_OPTIONS = [
  { value: "bachelors", label: "Bachelors" },
  { value: "masters", label: "Masters" },
];

export default function Google() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    degree: "bachelors",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save form data to Firestore
      await addDoc(collection(db, "contactForm"), formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        degree: "bachelors",
      });
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
      alert(`Welcome, ${user.displayName}!`);
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

        <div
          className="w-full md:w-1/2 p-6 md:p-8"
          style={{
            fontFamily: "Gilroy",
          }}
        >
          <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-left font-semibold text-lg"
                style={{ fontFamily: "Gilroy" }}
              >
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
              <label className="block text-left font-semibold  text-lg">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
              />
            </div>

            <div>
              <label className="block text-left font-semibold  text-lg">
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
              <label className="block text-left font-semibold  text-lg">
                Degree to Pursue
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              >
                {DEGREE_OPTIONS.map((option) => (
                  <option
                    className="text-left font-semibold "
                    key={option.value}
                    value={option.value}
                  >
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
