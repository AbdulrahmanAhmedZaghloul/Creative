import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'zaghloul10',       // ✅ Service ID
        'template_eyspmdq',      // ✅ Template ID
        templateParams,
        '7Zm8iLMACsIice0F0'      // ✅ Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'abdozaghloul990@gmail.com',
      link: 'mailto:abdozaghloul990@gmail.com',
    },
    {
      icon: Phone,
      title: 'رقم الهاتف',
      info: '+20 11 42631113',
      link: 'tel:+201142631113',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'الرياض، المملكة العربية السعودية',
      link: '#',
    },
  ];

  const services = [
    'تطوير المواقع الإلكترونية',
    'تصميم تطبيقات الجوال',
    'تطوير أنظمة SaaS',
    'الدعم والصيانة',
    'استشارات تقنية',
    'أخرى',
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نحن متحمسون لسماع أفكارك ومساعدتك في تحقيق أهدافك الرقمية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">معلومات التواصل</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg ml-4">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* نموذج الاتصال */}
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">ابدأ مشروعك معنا</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    نوع الخدمة *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    تفاصيل المشروع *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow hover:shadow-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent ml-2"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    <CheckCircle className="h-5 w-5 ml-2" />
                    تم إرسال رسالتك بنجاح!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    <AlertCircle className="h-5 w-5 ml-2" />
                    حدث خطأ أثناء الإرسال. حاول مرة أخرى.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 