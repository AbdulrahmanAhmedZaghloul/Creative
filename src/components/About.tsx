import React from 'react';
import { Users, Target, Lightbulb, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'الدقة والجودة',
      description: 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه',
    },
    {
      icon: Lightbulb,
      title: 'الإبداع والابتكار',
      description: 'نسعى دائماً لإيجاد حلول مبتكرة وإبداعية لكل تحدٍ',
    },
    {
      icon: Users,
      title: 'العمل الجماعي',
      description: 'نؤمن بقوة العمل الجماعي والتعاون لتحقيق أفضل النتائج',
    },
    {
      icon: Award,
      title: 'التميز والاحترافية',
      description: 'نهدف للتميز في كل جانب من جوانب عملنا المهني',
    },
  ];

  const achievements = [
    'أكثر من 100 مشروع ناجح',
    'فريق من 15+ مطور متخصص',
    'خبرة تزيد عن 5 سنوات',
    'عملاء من 20+ دولة',
    'دعم فني 24/7',
    'ضمان الجودة 100%',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            شركة ناشئة تؤمن بالإبداع والالتزام في تقديم أفضل الحلول التقنية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              رؤيتنا ورسالتنا
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              نحن شركة الكود الإبداعي، شركة ناشئة شغوفة بالتكنولوجيا والإبداع. 
              تأسست شركتنا على يد مجموعة من المطورين الشباب المبدعين الذين يؤمنون 
              بقوة التقنية في تغيير العالم وتحسين حياة الناس.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              نسعى لأن نكون الشريك التقني الأول لعملائنا، حيث نقدم حلولاً مبتكرة 
              وعصرية تلبي احتياجاتهم وتتجاوز توقعاتهم. فريقنا الشاب والطموح 
              يتميز بالخبرة العملية والشغف بالتعلم المستمر.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 ml-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Image */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="فريق العمل"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 animate-fade-in">
            قيمنا ومبادئنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-4">
                    <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            هل أنت مستعد للانضمام إلى رحلة النجاح؟
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مميز
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            ابدأ مشروعك معنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;