import React from 'react';
import { Globe, Smartphone, Cloud, Wrench, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'تطوير المواقع الإلكترونية',
      description: 'نصمم ونطور مواقع إلكترونية حديثة وسريعة باستخدام أحدث التقنيات مثل React و Next.js',
      features: ['تصميم متجاوب', 'أداء عالي', 'SEO محسن', 'أمان متقدم'],
      color: 'primary',
    },
    {
      icon: Smartphone,
      title: 'تصميم تطبيقات الجوال',
      description: 'نطور تطبيقات جوال مبتكرة لنظامي iOS و Android بتقنيات React Native و Flutter',
      features: ['واجهة سهلة', 'أداء سريع', 'تصميم جذاب', 'دعم متعدد المنصات'],
      color: 'secondary',
    },
    {
      icon: Cloud,
      title: 'تطوير أنظمة SaaS',
      description: 'نبني أنظمة البرمجيات كخدمة المتكاملة مع قواعد البيانات السحابية والأمان العالي',
      features: ['نمو قابل للتوسع', 'أمان عالي', 'واجهات APIs', 'تحليلات متقدمة'],
      color: 'accent',
    },
    {
      icon: Wrench,
      title: 'الدعم والصيانة المستمرة',
      description: 'نقدم خدمات دعم وصيانة شاملة لضمان استمرارية عمل أنظمتك بأفضل أداء',
      features: ['دعم 24/7', 'تحديثات منتظمة', 'مراقبة الأداء', 'النسخ الاحتياطي'],
      color: 'primary',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-50 dark:bg-primary-900/20',
        icon: 'text-primary-600 dark:text-primary-400',
        border: 'border-primary-200 dark:border-primary-800',
        hover: 'hover:bg-primary-100 dark:hover:bg-primary-900/30',
      },
      secondary: {
        bg: 'bg-secondary-50 dark:bg-secondary-900/20',
        icon: 'text-secondary-600 dark:text-secondary-400',
        border: 'border-secondary-200 dark:border-secondary-800',
        hover: 'hover:bg-secondary-100 dark:hover:bg-secondary-900/30',
      },
      accent: {
        bg: 'bg-accent-50 dark:bg-accent-900/20',
        icon: 'text-accent-600 dark:text-accent-400',
        border: 'border-accent-200 dark:border-accent-800',
        hover: 'hover:bg-accent-100 dark:hover:bg-accent-900/30',
      },
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتلبية جميع احتياجاتك الرقمية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} transform hover:scale-105 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${colorClasses.bg} mb-6`}>
                  <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <ArrowLeft className={`h-4 w-4 ml-2 ${colorClasses.icon}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className={`inline-flex items-center font-semibold ${colorClasses.icon} hover:underline transition-all duration-200 group-hover:translate-x-1`}>
                  <span>اعرف المزيد</span>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            هل تحتاج خدمة مخصصة؟ نحن هنا لمساعدتك
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            احصل على استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;