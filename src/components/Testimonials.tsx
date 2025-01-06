import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t('testimonials.items').map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div className="absolute -top-4 right-8">
                <Quote className="w-8 h-8 text-blue-500 opacity-50" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={t(`testimonials.items.${index}.image`)}
                  alt={t(`testimonials.items.${index}.name`)}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t(`testimonials.items.${index}.name`)}</h3>
                  <p className="text-gray-600">{t(`testimonials.items.${index}.role`)}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">"{t(`testimonials.items.${index}.content`)}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;