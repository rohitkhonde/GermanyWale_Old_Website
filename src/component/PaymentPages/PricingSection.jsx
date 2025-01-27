import { useState } from "react";
import { CheckIcon, XIcon } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Lite",
      description: "Lorem Ipsum simply dummy text of the printing.",
      monthlyPrice: 29.99,
      yearlyPrice: 215.92, // 40% off monthly * 12
      features: [
        { name: "Core UI Components", included: true },
        { name: "Use on Unlimited Projects", included: false },
        { name: "Personal and Commercial Use", included: true },
        { name: "Lifetime Free Updates", included: true },
        { name: "Figma Source File", included: false },
      ],
      primaryButton: true,
      buttonText: "Start 14 Days Free Trial",
    },
    {
      name: "Business Plan",
      description: "Lorem Ipsum simply dummy text of the printing.",
      monthlyPrice: 59.0,
      yearlyPrice: 424.8, // 40% off monthly * 12
      features: [
        { name: "Core UI Components", included: true },
        { name: "Use on Unlimited Projects", included: true },
        { name: "Personal and Commercial Use", included: true },
        { name: "Lifetime Free Updates", included: true },
        { name: "Figma Source File", included: true },
        { name: "Additional Support", included: true },
        { name: "More Features", included: false },
      ],
      buttonText: "Get The Plan Now",
    },
    {
      name: "Extended Plan",
      description: "Lorem Ipsum simply dummy text of the printing.",
      monthlyPrice: 229.99,
      yearlyPrice: 1655.92, // 40% off monthly * 12
      features: [
        { name: "Core UI Components", included: true },
        { name: "Use on Unlimited Projects", included: true },
        { name: "Personal and Commercial Use", included: true },
        { name: "Lifetime Free Updates", included: true },
        { name: "Figma Source File", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Access to Beta Features", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Advanced Analytics", included: true },
      ],
      buttonText: "Get The Plan Now",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600">
            Our Pricing Plans
          </h2>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Pricing and Plans
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center gap-4">
          <span
            className={`text-lg ${
              !isYearly ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-gray-200"
            role="switch"
            aria-checked={isYearly}
          >
            <span
              className={`${
                isYearly ? "translate-x-5" : "translate-x-0"
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
          </button>
          <span
            className={`text-lg ${
              isYearly ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-500">
              Save 40%
            </span>
          )}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-gray-500">{plan.description}</p>
              <div className="my-8 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $
                </span>
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  {isYearly
                    ? plan.yearlyPrice.toFixed(2)
                    : plan.monthlyPrice.toFixed(2)}
                </span>
                <span className="ml-1 text-lg text-gray-500">/month</span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">Plan Includes:</p>
                <div className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center ">
                      {feature.included ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      ) : (
                        <XIcon className="h-5 w-5 text-red-500 mr-3" />
                      )}
                      <span
                        className={`text-gray-600 ${
                          !feature.included ? "line-through" : ""
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-3 text-lg font-semibold transition-colors
                  ${
                    plan.primaryButton
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
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
