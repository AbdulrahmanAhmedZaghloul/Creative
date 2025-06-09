import { Helmet } from "react-helmet";

const SEO = () => {
    return (
        <Helmet>
            <title> Creative Code</title>
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
            <link rel="icon" href="/src/logo/Screenshot_2025-06-09_200657-removebg-preview.png" type="image/x-icon" />

            <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Creative Code",
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
              "telephone": "+201142631113",
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
