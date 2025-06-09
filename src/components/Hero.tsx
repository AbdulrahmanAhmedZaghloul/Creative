import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/20 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium mb-8 animate-scale-in">
            <Sparkles className="h-4 w-4 ml-2" />
            <span>حلول برمجية مبتكرة</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              حلول برمجية مبتكرة
            </span>
            <br />
            <span>تضمن نجاحك</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            نحن نساعدك في تحويل أفكارك إلى واقع رقمي بأعلى جودة واحترافية، 
            مع فريق من المطورين المبدعين والمتخصصين
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span>اتصل بنا الآن</span>
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
            >
              استكشف خدماتنا
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { number: '100+', label: 'مشروع مكتمل' },
            { number: '50+', label: 'عميل سعيد' },
            { number: '3+', label: 'سنوات خبرة' },
            { number: '24/7', label: 'دعم فني' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;