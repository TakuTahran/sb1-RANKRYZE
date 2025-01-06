import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Paintbrush, 
  Globe2, 
  Shield, 
  BarChart3, 
  RefreshCw,
  Headphones
} from 'lucide-react';

const getServiceIcon = (index: number) => {
  const icons = [
    <Paintbrush className="w-6 h-6" />,
    <Globe2 className="w-6 h-6" />,
    <Shield className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />,
    <RefreshCw className="w-6 h-6" />,
    <Headphones className="w-6 h-6" />
  ];
  return icons[index];
};

const Services = () => {
  const { t } = useLanguage();
  const serviceKeys = ['design', 'hosting', 'security', 'seo', 'updates', 'support'];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {getServiceIcon(index)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(`services.items.${key}.title`)}</h3>
              <p className="text-gray-600">{t(`services.items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;