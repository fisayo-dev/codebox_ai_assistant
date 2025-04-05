"use client"
import React, { useState } from "react";
import CountUp from "react-countup";
import { DollarSign, Star, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

interface Plan {
  name: string;
  monthly: number;
  annually: number;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Basic",
    monthly: 19,
    annually: 190,
    features: [
      "Essential coding tools",
      "Real-time error detection",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: 39,
    annually: 390,
    features: [
      "Everything in Basic",
      "Advanced AI suggestions",
      "Multi-language support",
    ],
  },
  {
    name: "Enterprise",
    monthly: 79,
    annually: 790,
    features: [
      "Everything in Pro",
      "Priority support",
      "Custom integrations",
    ],
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const handleToggle = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <section id="pricing" className="bg-black text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
          Flexible Pricing Plans
        </h2>
        <p className="text-gray-400 mb-8">
          Choose the plan that suits your needs and enjoy unparalleled productivity with CodeBox.
        </p>
        <div className="flex justify-center items-center mb-12">
          <span className="mr-2">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={handleToggle}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-700/30 rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow transition-all duration-300"></div>
            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 transform peer-checked:translate-x-5"></span>
          </label>
          <span className="ml-2">Annually</span>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/50  border-[0.1rem] border-gray-500/20 hover:border-gray-500/40 p-8 rounded-2xl shadow-md hover:shadow-yellow transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <TrendingUp className="w-12 h-12 text-yellow" />
              </div>
              <h3 className="text-2xl font-semibold text-yellow mb-4">
                {plan.name}
              </h3>
              <div className="mb-6 flex items-start gap-2 justify-center">
                <span className="text-6xl font-bold flex gap-1 items-center">
                  <DollarSign className="w-10 h-10" />
                  <CountUp
                    start={0}
                    end={isAnnual ? plan.annually : plan.monthly}
                    duration={1.5}
                    separator=","
                  />
                </span>
                <span className="align-super text-gray-400 text-sm">
                  {isAnnual ? " /year" : " /month"}
                </span>
              </div>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-4 h-4 text-yellow mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full py-2 bg-yellow text-black rounded-full font-semibold hover:bg-yellow-500/90 transition-all">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
