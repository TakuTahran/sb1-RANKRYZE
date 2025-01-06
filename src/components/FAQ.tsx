import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Website as a Service (WaaS)?",
    answer: "WaaS is a subscription-based model where we handle all aspects of your website - from design and development to hosting and maintenance. You get a professional website without the technical hassle.",
  },
  {
    question: "How much does it cost?",
    answer: "Our plans start at $150/month, which includes hosting, maintenance, regular updates, and support. Custom plans are available for businesses with specific needs.",
  },
  {
    question: "Can I customize my website?",
    answer: "Absolutely! We work with you to create a custom design that matches your brand. You can request changes and updates at any time through our support system.",
  },
  {
    question: "What's included in the maintenance?",
    answer: "Our maintenance includes security updates, performance optimization, content updates, backup management, and technical support.",
  },
  {
    question: "How long does it take to get my website?",
    answer: "Most websites are completed within 2-3 weeks. The exact timeline depends on your requirements and the complexity of the design.",
  },
  {
    question: "What if I want to cancel?",
    answer: "You can cancel your subscription at any time. We'll provide you with a backup of your website and assist with the transition process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about our Website as a Service solution
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <dt className="text-lg">
                  <button
                    className="flex justify-between items-center w-full text-left text-gray-900 focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 text-gray-600">{faq.answer}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;