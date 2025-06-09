import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'تطوير المواقع', href: '#services' },
      { name: 'تطبيقات الجوال', href: '#services' },
      { name: 'أنظمة SaaS', href: '#services' },
      { name: 'الدعم والصيانة', href: '#services' },
    ],
    company: [
      { name: 'من نحن', href: '#about' },
      { name: 'أعمالنا', href: '#portfolio' },
      { name: 'آراء العملاء', href: '#testimonials' },
      { name: 'اتصل بنا', href: '#contact' },
    ],
    support: [
      { name: 'المساعدة', href: '#' },
      { name: 'الأسئلة الشائعة', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'شروط الخدمة', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <Code className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold">شركة الكود الإبداعي</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                نحن شركة ناشئة متخصصة في تطوير الحلول التقنية المبتكرة. 
                نساعد عملاءنا في تحويل أفكارهم إلى واقع رقمي بأعلى جودة واحترافية.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 ml-3" />
                  <span>abdozaghloul990@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 ml-3" />
                  <span>+20 11 42631113</span>
                </div> 
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">خدماتنا</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6">الشركة</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6">الدعم</h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
 
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right mb-4 md:mb-0">
              <p>© {currentYear} شركة الكود الإبداعي. جميع الحقوق محفوظة.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200 group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-200 group"
              aria-label="العودة إلى الأعلى"
            >
              <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;