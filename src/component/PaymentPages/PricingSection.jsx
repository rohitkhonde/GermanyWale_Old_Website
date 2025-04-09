import { useState, useEffect } from "react";
import { CheckIcon, XIcon } from "lucide-react";

export default function PricingSection() {
  const formatFeatureName = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  // Dynamically load the Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setRazorpayLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async (price, planName) => {
    try {
      setLoading(true);

      // 1. Create order on backend
      const orderResponse = await fetch(
        "http://localhost:5000/api/payments/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseInt(price.replace(/\D/g, "")),
            plan: planName,
          }),
        }
      );

      const order = await orderResponse.json();

      // 2. Initialize Razorpay
      const options = {
        key: "rzp_live_Oiy3Gpl9jj96C4",
        amount: order.amount,
        currency: "INR",
        name: "GermanyWale",
        description: `Payment for ${planName} Plan`,
        order_id: order.id,
        handler: async function (response) {
          // 3. Verify payment on backend
          const verification = await fetch(
            "http://localhost:5000/api/payments/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                plan: planName,
              }),
            }
          );

          const result = await verification.json();
          if (result.success) {
            alert("Payment successful!");
            window.location.href = "/success";
          } else {
            alert("Payment verification failed");
          }
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Payment failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      name: "Lite",
      price: "\u20B942,999",
      orderId: "order_Q6c9XQn4BHvUYm", // Order ID for Lite plan
      features: [
        {
          heading: "Course Selection",
          items: [
            { name: "Profile Evaluation", included: true },
            {
              name: "Eligibility check & course module analysis",
              included: true,
            },
            {
              name: "Academic Evaluation Center application with Support",
              included: false,
            },
            {
              name: "University Shortlisting list (2 universities)",
              included: true,
            },
            { name: "Mentorship session (1:1) with SME", included: false },
          ],
        },
        {
          heading: "Application Documents Support",
          items: [
            { name: "Curriculum Vitae and Profile Building", included: true },
            {
              name: "Letter of Motivation (Review)",
              included: true,
            },
            { name: "Letter of Recommendation", included: false },
            { name: "Experience Letter", included: false },
          ],
        },
        {
          heading: "University Acceptance Process",
          items: [
            { name: "Target Universities (3 universities)", included: true },
            {
              name: "Uni-assist&University portal Administration",
              included: true,
            },
            { name: "Full Support Application Process", included: true },
            {
              name: "Application follow-up with the admission committee",
              included: false,
            },
            {
              name: "University personalized feedback on the applied courses",
              included: false,
            },
          ],
        },
        {
          heading: "Post Admission Process",
          items: [
            {
              name: "Reconsideration process with the University officials",
              included: false,
            },
            { name: "Admission Acceptance procedure", included: false },
            {
              name: "University enrollment process, Fee payment and support",
              included: false,
            },
          ],
        },
      ],
      buttonText: "Get The Plan Now",
    },
    {
      name: "Value",
      price: "\u20B952,999",
      orderId: "order_Q6cAg939I0BcHl", // Order ID for Value plan
      features: [
        {
          heading: "Course Selection",
          items: [
            { name: "Profile Evaluation", included: true },
            {
              name: "Eligibility Check & Course Module Analysis",
              included: true,
            },
            {
              name: "Academic Evaluation Center application with Support",
              included: true,
            },
            {
              name: "University Shortlisting list (4 universities)",
              included: true,
            },
            {
              name: "Mentorship session (1:1) with SME (1 session)",
              included: true,
            },
          ],
        },
        {
          heading: "Application Documents Support",
          items: [
            { name: "Curriculum Vitae and Profile Building", included: true },
            {
              name: "Statement of Purpose/ Letter of Motivation",
              included: true,
            },
            { name: "Letter of Recommendation", included: true },
            { name: "Experience Letter", included: false },
          ],
        },
        {
          heading: "University Acceptance Process",
          items: [
            { name: "Target Universities (6 universities)", included: true },
            {
              name: "Uni-assist & University portal Administration",
              included: true,
            },
            { name: "Full Support Application Process", included: true },
            {
              name: "Application follow-up with the admission committee",
              included: true,
            },
            {
              name: "University personalized feedback on the applied courses",
              included: true,
            },
          ],
        },
        {
          heading: "Post Admission Process",
          items: [
            {
              name: "Reconsideration process with the University officials",
              included: false,
            },
            { name: "Admission Acceptance procedure", included: true },
            {
              name: "University enrollment process, Fee payment and support",
              included: false,
            },
          ],
        },
      ],
      buttonText: "Get The Plan Now",
    },
    {
      name: "Ultimate",
      price: "\u20B959,999",
      orderId: "order_Q6cBUlMI3kwjIU", // Order ID for Ultimate plan
      features: [
        {
          heading: "Course Selection",
          items: [
            { name: "Profile Evaluation", included: true },
            {
              name: "Eligibility Check & Course Module Analysis",
              included: true,
            },
            {
              name: "Academic Evaluation Center application with Support",
              included: true,
            },
            {
              name: "University Shortlisting list (Full support)",
              included: true,
            },
            {
              name: "Mentorship session (1:1) with SME (2 sessions)",
              included: true,
            },
          ],
        },
        {
          heading: "Application Documents Support",
          items: [
            { name: "Curriculum Vitae and Profile Building", included: true },
            {
              name: "Statement of Purpose/ Letter of Motivation",
              included: true,
            },
            { name: "Letter of Recommendation", included: true },
            { name: "Experience Letter", included: true },
          ],
        },
        {
          heading: "University Acceptance Process",
          items: [
            { name: "Target Universities (10 universities)", included: true },
            {
              name: "Uni-assist & University portal Administration",
              included: true,
            },
            { name: "Full Support Application Process", included: true },
            {
              name: "Application follow-up with the admission committee",
              included: true,
            },
            {
              name: "University personalized feedback on the applied courses",
              included: true,
            },
          ],
        },
        {
          heading: "Post Admission Process",
          items: [
            {
              name: "Reconsideration process with the University officials",
              included: true,
            },
            { name: "Admission Acceptance procedure", included: true },
            {
              name: "University enrollment process, Fee payment and support",
              included: true,
            },
          ],
        },
      ],
      buttonText: "Get The Plan Now",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
            Our Pricing Plans
          </h2>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Pricing and Plans
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="my-8 flex justify-center items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
              </div>
              <div className="space-y-6 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {plan.features.map((feature, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-gray-700 font-semibold">
                      {feature.heading}
                    </p>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mr-2">
                            {item.included ? (
                              <CheckIcon className="h-5 w-5 text-green-500" />
                            ) : (
                              <XIcon className="h-5 w-5 text-red-500" />
                            )}
                          </div>
                          <div className="text-left">
                            <span
                              className={
                                item.included
                                  ? "text-gray-600"
                                  : "text-gray-400 line-through"
                              }
                            >
                              {formatFeatureName(item.name)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                className="mt-8 w-full rounded-lg px-4 py-3 text-lg font-semibold transition-colors  text-white  bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] "
                onClick={() =>
                  handlePayment(
                    plan.price.replace(/\D/g, ""),
                    plan.name,
                    plan.orderId
                  )
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
