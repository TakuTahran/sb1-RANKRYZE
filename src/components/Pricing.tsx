import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '150',
    features: [
      'Up to 8 Pages included',
      'Custom Design',
      'Custom Email',
      'Responsive Layout',
      'Basic SEO Setup',
      'Mobile-Responsive Website',
      '& More...'
    ]
  },
  {
    name: 'Professional',
    price: '310',
    popular: true,
    features: [
      'Up to 10 Pages included',
      'Custom Design',
      'Custom Email',
      'Responsive Layout',
      'Basic SEO Setup',
      'Mobile-Responsive Website',      
      'Google Ranking Strategy with 3 Keywords',
      'Quarterly Search Engine Optimization',
      '& More...'
    ]
  },
  {
    name: 'Elite',
    price: '470',
    features: [
      'Up to 12 Pages included',
      'Custom Design',
      'Custom Email',
      'Responsive Layout',
      'Basic SEO Setup',
      'Mobile-Responsive Website',      
      'Google Ranking Strategy with 6 Keywords',
      'Monthly Search Engine Optimization',
      '& More...'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features
            with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg text-center ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;