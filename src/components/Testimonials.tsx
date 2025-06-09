import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      position: 'مدير تقني',
      company: 'شركة التقنيات الحديثة',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'تعاملت مع شركة الكود الإبداعي في تطوير موقعنا الإلكتروني وكانت النتيجة رائعة. الفريق محترف ومبدع ويلتزم بالمواعيد المحددة.',
    },
    {
      name: 'فاطمة الزهراء',
      position: 'رائدة أعمال',
      company: 'متجر الأزياء العصرية',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'طوروا لي تطبيق جوال رائع لمتجري الإلكتروني. التطبيق سهل الاستخدام وزاد من مبيعاتي بشكل كبير. أنصح بهم بشدة!',
    },
    {
      name: 'خالد العبدالله',
      position: 'مدير عام',
      company: 'مجموعة الخليج التجارية',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'نظام إدارة الموارد البشرية الذي طوروه لنا سهل علينا العمل كثيراً. دعمهم الفني ممتاز ويجيبون على استفساراتنا فوراً.',
    },
    {
      name: 'مريم أحمد',
      position: 'مديرة التسويق',
      company: 'شركة الإبداع الرقمي',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'موقعنا الجديد أصبح أسرع وأجمل وأكثر فعالية. فريق شركة الكود الإبداعي فهم احتياجاتنا بدقة وقدم حلول مبتكرة.',
    },
    {
      name: 'عبدالرحمن السعد',
      position: 'مؤسس',
      company: 'منصة التعلم الذكي',
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'منصة التعلم الإلكتروني التي طوروها لنا تجاوزت توقعاتنا. التصميم رائع والأداء ممتاز، والطلاب يحبون استخدامها.',
    },
    {
      name: 'نورا الفيصل',
      position: 'مديرة المشاريع',
      company: 'مؤسسة الرعاية الصحية',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'نظام إدارة المرضى الذي طوروه حسن من كفاءة عملنا بشكل كبير. النظام آمن وسهل الاستخدام وحسن من جودة خدماتنا.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا وآرائهم الإيجابية في خدماتنا وجودة أعمالنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-primary-600 dark:text-primary-400 opacity-50" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          {[
            { number: '98%', label: 'رضا العملاء' },
            { number: '150+', label: 'مشروع مكتمل' },
            { number: '24/7', label: 'دعم فني' },
            { number: '5+', label: 'سنوات خبرة' },
          ].map((stat, index) => (
            <div key={index}>
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

export default Testimonials;