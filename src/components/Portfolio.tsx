import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'منصة التجارة الإلكترونية الذكية',
      description: 'منصة تجارة إلكترونية متكاملة مع نظام إدارة المخزون وتحليلات المبيعات المتقدمة',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'تطوير ويب',
    },
    {
      title: 'تطبيق إدارة المشاريع',
      description: 'تطبيق جوال لإدارة المشاريع والمهام مع ميزات التعاون الجماعي والتقارير التفصيلية',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'تطبيق جوال',
    },
    {
      title: 'نظام إدارة المحتوى CMS',
      description: 'نظام إدارة محتوى مخصص مع محرر متقدم وإدارة المستخدمين والأذونات',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      category: 'نظام إدارة',
    },
    {
      title: 'منصة التعلم الإلكتروني',
      description: 'منصة تعليمية شاملة مع فيديوهات تفاعلية واختبارات ونظام متابعة التقدم',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      category: 'منصة تعليمية',
    },
    {
      title: 'نظام إدارة المستشفيات',
      description: 'نظام متكامل لإدارة المستشفيات مع حجز المواعيد والسجلات الطبية الإلكترونية',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      category: 'نظام طبي',
    },
    {
      title: 'تطبيق الخدمات المالية',
      description: 'تطبيق آمن للخدمات المصرفية مع التحويلات والمدفوعات والتحليلات المالية',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Flutter', 'Dart', 'Firebase', 'Blockchain'],
      category: 'تطبيق مالي',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نفتخر بالمشاريع التي أنجزناها وثقة عملائنا بنا، اطلع على بعض من أعمالنا المميزة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline transition-all duration-200">
                    <span>عرض المشروع</span>
                    <ExternalLink className="h-4 w-4 mr-2" />
                  </button>
                  <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            مهتم برؤية المزيد من أعمالنا؟
          </p>
          <button className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300">
            <span>عرض جميع المشاريع</span>
            <ArrowLeft className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;