import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>شركة الكود الإبداعي - حلول برمجية مبتكرة</title>
      <meta
        name="description"
        content="نقدم خدمات تصميم المواقع، تطوير التطبيقات، حلول SaaS، وأنظمة برمجية مخصصة تساعدك على تحويل فكرتك إلى منتج رقمي ناجح."
      />
      <meta
        name="keywords"
        content="برمجة, تصميم مواقع, تطوير تطبيقات, تطبيقات موبايل, SaaS, حلول برمجية, شركة برمجيات, عبدالرحمن زغلول"
      />
      <meta name="author" content="عبدالرحمن زغلول" />
      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "شركة الكود الإبداعي",
            "url": "https://creative-eqmk912fx-zaghlouls-projects.vercel.app",
            "logo": "https://creative-eqmk912fx-zaghlouls-projects.vercel.app/logo.png",
            "description": "نقدم خدمات تصميم المواقع، تطوير التطبيقات، حلول SaaS، وأنظمة مخصصة.",
            "sameAs": [
              "https://facebook.com/creativecode",
              "https://twitter.com/creativecode",
              "https://linkedin.com/company/creativecode"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+201234567890",
              "contactType": "customer service",
              "areaServed": "EG",
              "availableLanguage": ["Arabic", "English"]
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
