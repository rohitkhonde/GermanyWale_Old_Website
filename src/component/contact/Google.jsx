import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// Google OAuth configuration
export const GOOGLE_CLIENT_ID =
  "448829487693-73gs53gf3shvg732tf9k8jnrj54sbm0k.apps.googleusercontent.com"; // Replace with your actual Google Client ID
// Google Client Id - 448829487693-73gs53gf3shvg732tf9k8jnrj54sbm0k.apps.googleusercontent.com
// Form configuration
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const GoogleSignIn = () => (
    <div className="w-full">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Login Success:", credentialResponse);
        }}
        onError={() => {
          console.error("Google Sign In Failed");
        }}
      />
    </div>
  );

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row max-w-4xl w-full">
          {/* Image - Hidden on mobile, shown on md screens and up */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-gilroy font-gilroyBold">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block  text-left text-sm font-gilroy font-gilroyNormal">
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
                <label className="block  text-left text-sm font-gilroy font-gilroyNormal">
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
                <label className="block text-left text-sm font-gilroy font-gilroyNormal">
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
                <label className="block mb-2 text-left text-sm font-gilroy font-gilroyNormal">
                  Degree to Pursue
                </label>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="mt-1 block w-full font-gilroy font-gilroyNormal rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
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
                  className="w-full sm:w-auto font-gilroy font-gilroyNormal bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
                <div className="w-full sm:w-auto">
                  <GoogleSignIn />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
