import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Ideal for beginners to start journaling trades.",
      price: "₹999",
      color: "bg-[#ffb80a]",
      textColor: "text-[#ffb80a]",
      borderColor: "border border-[#ffb80a]",
      features: {
        allowed: [
          "Trade journaling",
          "Basic filtering options",
          "Access to community forums",
        ],
        notAllowed: [
          "Advanced analytics",
          "Custom strategy formulation",
          "Priority support",
        ],
      },
    },
    {
      name: "Plus",
      description:
        "For intermediate traders looking to enhance their strategies.",
      price: "₹2,499",
      color: "bg-[#0154fe]",
      textColor: "text-[#0154fe]",
      borderColor: "border border-[#0154fe]",
      recommended: true,
      features: {
        allowed: [
          "Trade journaling",
          "Advanced filtering options",
          "Custom strategy formulation",
          "Basic analytics",
        ],
        notAllowed: ["Priority support", "Full analytics suite"],
      },
    },
    {
      name: "Premium",
      description:
        "For professional traders needing advanced tools and support.",
      price: "₹4,999",
      color: "bg-[#874eff]",
      textColor: "text-[#874eff]",
      borderColor: "border border-[#874eff]",
      features: {
        allowed: [
          "Trade journaling",
          "Advanced filtering options",
          "Custom strategy formulation",
          "Full analytics suite",
          "Priority support",
          "Access to premium forums",
        ],
        notAllowed: [],
      },
    },
  ];

  return (
    <div className="pricing-wrapper bg-[#f6f9fc] dark:bg-gray-800 h-full">
      <h1 className="text-5xl font-semibold p-8 pb-14 text-left w-[50%] leading-tight">
        Pricing Tailored to Meet Every{" "}
        <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          Trader's{" "}
        </span>
        Needs
      </h1>

      <div className="flex flex-row gap-24 items-center p-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card ${plan.color} ${plan.textColor} ${plan.borderColor}`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg text-xs">
                Recommended
              </div>
            )}
            <div className="p-4">
              <h2 className={`text-3xl font-bold mb-4 ${plan.textColor} `}>
                {plan.name}
              </h2>
              <p className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {plan.price}
              </p>
              <p className="text-lg mb-6 font-semibold text-gray-700 dark:text-gray-200">
                {plan.description}
              </p>
              <ul className="mb-6 text-gray-600 dark:text-gray-100 pt-6">
                {plan.features.allowed.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <IoIosCheckmarkCircleOutline className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.features.notAllowed.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <IoIosCloseCircleOutline className="text-red-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`text-white py-3 px-4 rounded-lg  ${plan.color}`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
