import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        findTailors: "Find Tailors",
        bulk: "For Bulk",
        howItWorks: "How It Works",
        myTailors: "My Tailors",
        orders: "My Orders",
        language: "Language",
        signIn: "Sign in",
        getStarted: "Get Started",
        joinMeraTailor: "Join MeraTailor",
        hello: "Hello",
        viewProfile: "View Profile",
      },

      footer: {
        description:
          "Find trusted local tailors, get the right measurements, and get your clothes stitched with ease.",

        location:
          "Jaipur, Rajasthan, India",

        quickLinks:
          "Quick Links",

        forYou:
          "For You",

        orders:
          "My Orders",

        profile:
          "My Profile",

        contact:
          "Contact Us",

        getInTouch:
          "Get in Touch",

        support:
          "Need help? We're here for you.",

        rights:
          "All rights reserved.",

        madeWith:
          "Made with ❤️ in India",

        privacy:
          "Privacy",

        terms:
          "Terms",
      },
    },
  },

  hi: {
    translation: {
      navbar: {
        home: "होम",
        findTailors: "दर्जी खोजें",
        bulk: "थोक के लिए",
        howItWorks: "कैसे काम करता है",
        myTailors: "मेरे दर्जी",
        orders: "मेरे ऑर्डर",
        language: "भाषा",
        signIn: "लॉग इन",
        getStarted: "शुरू करें",
        joinMeraTailor: "MeraTailor से जुड़ें",
        hello: "नमस्ते",
        viewProfile: "प्रोफ़ाइल देखें",
      },

      footer: {
        description:
          "अपने भरोसेमंद स्थानीय दर्जी खोजें, सही माप लें और आसानी से अपने कपड़े सिलवाएं।",

        location:
          "जयपुर, राजस्थान, भारत",

        quickLinks:
          "त्वरित लिंक",

        forYou:
          "आपके लिए",

        orders:
          "मेरे ऑर्डर",

        profile:
          "मेरी प्रोफ़ाइल",

        contact:
          "संपर्क करें",

        getInTouch:
          "हमसे जुड़ें",

        support:
          "मदद चाहिए? हम आपकी सहायता के लिए यहाँ हैं।",

        rights:
          "सर्वाधिकार सुरक्षित।",

        madeWith:
          "भारत में ❤️ के साथ बनाया गया",

        privacy:
          "गोपनीयता",

        terms:
          "नियम और शर्तें",
      },
    },
  },
};

const savedLanguage =
  localStorage.getItem("meraTailorLanguage") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

i18n.on("languageChanged", (language) => {
  localStorage.setItem(
    "meraTailorLanguage",
    language
  );
});

export default i18n;