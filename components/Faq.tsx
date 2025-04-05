"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is CodeBox?",
    answer:
      "CodeBox is an AI-powered coding assistant that helps you write, debug, and understand code more efficiently. It supports multiple languages and provides intelligent code suggestions in real time.",
  },
  {
    question: "Is CodeBox free to use?",
    answer:
      "CodeBox offers a free tier with essential features. For advanced functionality and team support, you can upgrade to one of our paid plans.",
  },
  {
    question: "Can CodeBox help with debugging?",
    answer:
      "Absolutely. CodeBox can detect common errors as you type and suggest real-time fixes to improve your code quality and save time.",
  },
  {
    question: "Does CodeBox support multiple languages?",
    answer:
      "Yes! CodeBox supports a wide variety of programming languages including JavaScript, Python, Java, TypeScript, Go, and more.",
  },
  {
    question: "How secure is my code with CodeBox?",
    answer:
      "We take your privacy seriously. All your code interactions are encrypted and never shared with third parties. For enterprises, we also offer on-premise solutions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="app-container bg-black text-white py-20 px-4 md:px-10 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <HelpCircle className="w-10 h-10 text-yellow" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-12">
          Got questions? We’ve got answers. Here’s everything you need to know about CodeBox.
        </p>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700/40 rounded-xl p-4 bg-gray-900/40"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-yellow text-lg font-medium focus:outline-none"
              >
                <span className="text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-300 text-sm text-left">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
