import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  /* =====================================================
     ENGLISH
  ====================================================== */

  en: {
    translation: {
      /* ===================================================
         NAVBAR
      ================================================== */

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

      /* ===================================================
         HOME
      ================================================== */

      home: {
        /* =================================================
           HERO
        ================================================= */

        location: "Jaipur · Rajasthan",

        brand: "मेरा Tailor",

        tagline: "Apna Tailor, Ab Asani Se.",

        description:
          "Find trusted local tailors, tell us what you need, save your measurements once, and manage your complete stitching orders from one place.",

        findTailors: "Find Tailors",

        tellUsNeed: "Tell Us What You Need",

        verifiedTailors: "420+ verified tailors",

        rating: "4.8 average rating",

        /* =================================================
           HERO DASHBOARD
        ================================================= */

        yourTailorLabel:
          "Your personal tailoring space",

        myTailor: "My Tailor",

        tailorName: "Your Tailor",

        tailorSpeciality:
          "Custom Stitching & Alterations",

        nearYou: "Near you",

        saveTailor: "Save tailor",

        measurements: "Measurements",

        myOrders: "My Orders",

        chat: "Chat",

        call: "Call",

        saveFavourite:
          "Save your favourite tailors",

        buildPersonalList:
          "Build your personal list",

        currentOrder: "Current Order",

        orderName: "Your Current Order",

        inProgress: "In Progress",

        stitching: "Stitching",

        readyDate: "Ready in 4 days",

        viewOrder: "View Order",

        measurementSaved:
          "Measurements saved",

        measurementDescription:
          "Ready for your next order",

        callTailor: "Call your tailor",

        directConnection:
          "Direct connection",

        /* =================================================
           HERO FEATURES
        ================================================= */

        featureFindTitle:
          "Find Nearby Tailors",

        featureFindText:
          "Discover trusted local professionals",

        featureMeasureTitle:
          "Save Measurements",

        featureMeasureText:
          "Measure once, use anytime",

        featureOrderTitle:
          "Track Your Orders",

        featureOrderText:
          "Stay updated from stitch to delivery",

        /* =================================================
           HOW IT WORKS
        ================================================= */

        howItWorksTitle:
          "How it works",

        step1: "Step 1",

        step1Title:
          "Find a tailor",

        step1Text:
          "Discover verified tailors within 1–20 km of your location.",

        step2: "Step 2",

        step2Title:
          "Connect directly",

        step2Text:
          "Call, discuss your requirements and confirm the price in one tap.",

        step3: "Step 3",

        step3Title:
          "Track your order",

        step3Text:
          "Follow every step from measurements to delivery in the app.",

        /* =================================================
           WHAT TO STITCH
        ================================================= */

        whatToStitch:
          "What would you like stitched?",

        categories: {
          shirt: "Shirt",
          shirtPrice: "₹350+",

          pants: "Pants",
          pantsPrice: "₹450+",

          dress: "Dress",
          dressPrice: "₹700+",

          suit: "Suit",
          suitPrice: "₹2600+",

          ethnic: "Ethnic Wear",
          ethnicPrice: "₹1200+",

          kids: "Kidswear",
          kidsPrice: "₹300+",

          alteration: "Alteration",
          alterationPrice: "₹120+",
        },

        /* =================================================
           FEATURED TAILORS
        ================================================= */

        featuredTailors:
          "Featured tailors",

        viewAll: "View all",

        featured: {
          tailor1Name:
            "Sharma Tailors",

          tailor1Location:
            "Bapu Nagar, Jaipur",

          tailor1Description:
            "18 years of experience in formal shirt and trouser stitching. A trusted choice for office wear in Bapu Nagar.",

          tailor1Experience:
            "18 yrs",

          tailor2Name:
            "Sunita Boutique",

          tailor2Location:
            "Malviya Nagar, Jaipur",

          tailor2Description:
            "Specialist in ladies' suits, lehenga blouses and designer kurtis. Fitting assurance with home pickup available.",

          tailor2Experience:
            "12 yrs",

          tailor3Name:
            "Royal Stitch House",

          tailor3Location:
            "Johri Bazaar, Jaipur",

          tailor3Description:
            "Master tailor for sherwanis, bandhgalas and wedding suits. Also handles bulk school and hotel uniform orders.",

          tailor3Experience:
            "24 yrs",
        },

        /* =================================================
           EVERYONE
        ================================================= */

        everyoneEyebrow:
          "MADE FOR EVERYONE",

        everyoneTitle:
          "One platform, made for everyone.",

        audience: {
          customerTitle:
            "For Customers",

          customerLine1:
            "Save your measurements once and reuse them",

          customerLine2:
            "Tell us what you need by voice",

          customerLine3:
            "Compare quotes and confirm your order",

          customerButton:
            "Open customer app",

          tailorTitle:
            "For Tailors",

          tailorLine1:
            "Reach new customers nearby",

          tailorLine2:
            "Manage requests, quotes and earnings in one place",

          tailorLine3:
            "Build trust with a verified profile",

          tailorButton:
            "Tailor dashboard",

          bulkTitle:
            "For Bulk Buyers",

          bulkLine1:
            "Manage school, hotel and corporate orders",

          bulkLine2:
            "One requirement, multiple quotes",

          bulkLine3:
            "Move to production after sample approval",

          bulkButton:
            "Business portal",
        },

        /* =================================================
           LOCATION
        ================================================= */

        tailorsAroundYou:
          "TAILORS AROUND YOU",

        findRightTailor:
          "Find the right tailor",

        nearLocation:
          "near you.",

        locationDescription:
          "Allow your location to discover trusted tailors nearby, compare their services and connect with the right professional.",

        locationBenefitNearby:
          "Discover tailors within your area",

        locationBenefitSpecialist:
          "Find specialists for your outfit",

        locationBenefitConnect:
          "Connect directly with your tailor",

        whereLocated:
          "Where are you located?",

        locationCardDescription:
          "Use your current location to find tailors around you.",

        detectLocation:
          "Detect my location",

        detecting:
          "Detecting...",

        locationPrivacy:
          "Your location is only used to show relevant nearby tailors.",

        locationDetectedLabel:
          "Location detected",

        youAreHere:
          "You're here",

        yourArea:
          "Your area",

        yourLocation:
          "Your location",

        pinCode:
          "PIN code",

        detectedAddress:
          "Detected address",

        findTailorsNearMe:
          "Find tailors near me",

        locationAccessNeeded:
          "Location access needed",

        tryAgain:
          "Try again",

        locationNotSupported:
          "Location services are not supported by this browser.",

        locationDetected:
          "Location detected, but the address could not be retrieved.",

        locationPermission:
          "Please allow location access to continue.",

        locationUnavailable:
          "Your location is currently unavailable.",

        locationTimeout:
          "Location request timed out.",

        locationError:
          "Unable to detect your location.",

        notAvailable:
          "N/A",

        /* =================================================
           JAIPUR / LOCAL TRUST
        ================================================= */

        jaipurImageAlt:
          "Jaipur architecture",

        builtForCity:
          "BUILT FOR JAIPUR",

        jaipurKnows:
          "Jaipur knows",

        goodCraftsmanship:
          "good craftsmanship.",

        jaipurDescription:
          "From everyday alterations to wedding outfits, MeraTailor helps you discover local professionals and build long-term tailoring relationships.",

        localProfessionals:
          "Local professionals",

        localProfessionalsText:
          "Discover skilled tailors across your neighbourhood.",

        directConnectionText:
          "Talk directly with your tailor and discuss your requirements.",

        buildFavourites:
          "Build your favourites",

        buildFavouritesText:
          "Save tailors you trust and return to them whenever you need.",

        /* =================================================
           CTA
        ================================================= */

        ctaEyebrow:
          "YOUR PERFECT STITCH STARTS HERE",

        ctaTitle:
          "Ready to find",

        ctaTitleAccent:
          "your tailor?",

        ctaText:
          "Discover trusted tailors around you and make your next outfit easier.",

        ctaButton:
          "Find a Tailor",
      },

      /* ===================================================
         FOOTER
      ================================================== */

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

  /* =====================================================
     HINDI
  ====================================================== */

  hi: {
    translation: {
      /* ===================================================
         NAVBAR
      ================================================== */

      navbar: {
        home: "होम",

        findTailors:
          "दर्जी खोजें",

        bulk:
          "थोक के लिए",

        howItWorks:
          "कैसे काम करता है",

        myTailors:
          "मेरे दर्जी",

        orders:
          "मेरे ऑर्डर",

        language:
          "भाषा",

        signIn:
          "लॉग इन",

        getStarted:
          "शुरू करें",

        joinMeraTailor:
          "MeraTailor से जुड़ें",

        hello:
          "नमस्ते",

        viewProfile:
          "प्रोफ़ाइल देखें",
      },

      /* ===================================================
         HOME
      ================================================== */

      home: {
        /* =================================================
           HERO
        ================================================= */

        location:
          "जयपुर · राजस्थान",

        brand:
          "मेरा Tailor",

        tagline:
          "अपना दर्जी, अब आसानी से।",

        description:
          "अपने आसपास भरोसेमंद स्थानीय दर्जी खोजें, अपनी जरूरत बताएं, नाप एक बार सेव करें और सिलाई के पूरे ऑर्डर एक ही जगह से आसानी से मैनेज करें।",

        findTailors:
          "दर्जी खोजें",

        tellUsNeed:
          "अपनी जरूरत बताएं",

        verifiedTailors:
          "420+ सत्यापित दर्जी",

        rating:
          "4.8 औसत रेटिंग",

        /* =================================================
           HERO DASHBOARD
        ================================================= */

        yourTailorLabel:
          "आपकी व्यक्तिगत सिलाई की जगह",

        myTailor:
          "मेरा दर्जी",

        tailorName:
          "आपका दर्जी",

        tailorSpeciality:
          "कस्टम सिलाई और अल्टरशन",

        nearYou:
          "आपके पास",

        saveTailor:
          "दर्जी सेव करें",

        measurements:
          "नाप",

        myOrders:
          "मेरे ऑर्डर",

        chat:
          "चैट",

        call:
          "कॉल",

        saveFavourite:
          "अपने पसंदीदा दर्जी सेव करें",

        buildPersonalList:
          "अपनी व्यक्तिगत सूची बनाएं",

        currentOrder:
          "वर्तमान ऑर्डर",

        orderName:
          "आपका वर्तमान ऑर्डर",

        inProgress:
          "काम चल रहा है",

        stitching:
          "सिलाई का काम",

        readyDate:
          "4 दिनों में तैयार",

        viewOrder:
          "ऑर्डर देखें",

        measurementSaved:
          "नाप सेव है",

        measurementDescription:
          "अगले ऑर्डर के लिए तैयार",

        callTailor:
          "अपने दर्जी को कॉल करें",

        directConnection:
          "सीधा संपर्क",

        /* =================================================
           HERO FEATURES
        ================================================= */

        featureFindTitle:
          "पास के दर्जी खोजें",

        featureFindText:
          "भरोसेमंद स्थानीय प्रोफेशनल खोजें",

        featureMeasureTitle:
          "नाप सेव करें",

        featureMeasureText:
          "एक बार नापें, कभी भी इस्तेमाल करें",

        featureOrderTitle:
          "ऑर्डर ट्रैक करें",

        featureOrderText:
          "सिलाई से डिलीवरी तक अपडेट पाएं",

        /* =================================================
           HOW IT WORKS
        ================================================= */

        howItWorksTitle:
          "कैसे काम करता है",

        step1:
          "चरण 1",

        step1Title:
          "दर्जी खोजें",

        step1Text:
          "अपनी लोकेशन से 1–20 किमी के अंदर सत्यापित दर्जी खोजें।",

        step2:
          "चरण 2",

        step2Title:
          "सीधे जुड़ें",

        step2Text:
          "एक टैप में कॉल करें, अपनी जरूरत बताएं और कीमत तय करें।",

        step3:
          "चरण 3",

        step3Title:
          "ऑर्डर ट्रैक करें",

        step3Text:
          "नाप से लेकर डिलीवरी तक हर चरण को ऐप में ट्रैक करें।",

        /* =================================================
           WHAT TO STITCH
        ================================================= */

        whatToStitch:
          "क्या सिलवाना है?",

        categories: {
          shirt:
            "शर्ट",

          shirtPrice:
            "₹350+",

          pants:
            "पैंट",

          pantsPrice:
            "₹450+",

          dress:
            "ड्रेस",

          dressPrice:
            "₹700+",

          suit:
            "सूट",

          suitPrice:
            "₹2600+",

          ethnic:
            "एथनिक वियर",

          ethnicPrice:
            "₹1200+",

          kids:
            "बच्चों के कपड़े",

          kidsPrice:
            "₹300+",

          alteration:
            "अल्टरशन",

          alterationPrice:
            "₹120+",
        },

        /* =================================================
           FEATURED TAILORS
        ================================================= */

        featuredTailors:
          "चुनिंदा दर्जी",

        viewAll:
          "सभी देखें",

        featured: {
          tailor1Name:
            "Sharma Tailors",

          tailor1Location:
            "बापू नगर, जयपुर",

          tailor1Description:
            "फॉर्मल शर्ट और ट्राउजर सिलाई में 18 वर्षों का अनुभव। ऑफिस वियर के लिए बापू नगर में भरोसेमंद विकल्प।",

          tailor1Experience:
            "18 वर्ष",

          tailor2Name:
            "Sunita Boutique",

          tailor2Location:
            "मालवीय नगर, जयपुर",

          tailor2Description:
            "लेडीज़ सूट, लहंगा ब्लाउज़ और डिज़ाइनर कुर्ती की विशेषज्ञ। फिटिंग की गारंटी और घर से पिकअप की सुविधा।",

          tailor2Experience:
            "12 वर्ष",

          tailor3Name:
            "Royal Stitch House",

          tailor3Location:
            "जौहरी बाज़ार, जयपुर",

          tailor3Description:
            "शेरवानी, बंधगला और वेडिंग सूट के विशेषज्ञ दर्जी। स्कूल और होटल यूनिफॉर्म के थोक ऑर्डर भी लेते हैं।",

          tailor3Experience:
            "24 वर्ष",
        },

        /* =================================================
           EVERYONE
        ================================================= */

        everyoneEyebrow:
          "सबके लिए बनाया गया",

        everyoneTitle:
          "एक प्लेटफॉर्म, सबके लिए।",

        audience: {
          customerTitle:
            "ग्राहकों के लिए",

          customerLine1:
            "नाप एक बार सेव करें और हर ऑर्डर में इस्तेमाल करें",

          customerLine2:
            "बोलकर अपनी जरूरत बताएं",

          customerLine3:
            "कोट की तुलना करें और ऑर्डर कन्फर्म करें",

          customerButton:
            "Customer ऐप खोलें",

          tailorTitle:
            "दर्जी के लिए",

          tailorLine1:
            "आस-पास के नए ग्राहकों तक पहुंचें",

          tailorLine2:
            "Requests, quotes और earnings एक जगह मैनेज करें",

          tailorLine3:
            "Verified profile से भरोसा बनाएं",

          tailorButton:
            "Tailor dashboard",

          bulkTitle:
            "थोक खरीदारों के लिए",

          bulkLine1:
            "स्कूल, होटल और कॉर्पोरेट ऑर्डर मैनेज करें",

          bulkLine2:
            "एक requirement, कई quotes",

          bulkLine3:
            "Sample approval के बाद production शुरू करें",

          bulkButton:
            "Business portal",
        },

        /* =================================================
           LOCATION
        ================================================= */

        tailorsAroundYou:
          "आपके आसपास के दर्जी",

        findRightTailor:
          "सही दर्जी खोजें",

        nearLocation:
          "अपने पास।",

        locationDescription:
          "अपनी लोकेशन की मदद से आसपास के भरोसेमंद दर्जी खोजें, उनकी सेवाओं की तुलना करें और सही प्रोफेशनल से जुड़ें।",

        locationBenefitNearby:
          "अपने आसपास के दर्जी खोजें",

        locationBenefitSpecialist:
          "अपने कपड़ों के लिए विशेषज्ञ खोजें",

        locationBenefitConnect:
          "अपने दर्जी से सीधे जुड़ें",

        whereLocated:
          "आप कहाँ हैं?",

        locationCardDescription:
          "अपने आसपास के दर्जी खोजने के लिए अपनी वर्तमान लोकेशन का इस्तेमाल करें।",

        detectLocation:
          "मेरी लोकेशन पता करें",

        detecting:
          "लोकेशन खोज रहे हैं...",

        locationPrivacy:
          "आपकी लोकेशन का इस्तेमाल केवल आसपास के दर्जी दिखाने के लिए किया जाता है।",

        locationDetectedLabel:
          "लोकेशन मिल गई",

        youAreHere:
          "आप यहाँ हैं",

        yourArea:
          "आपका क्षेत्र",

        yourLocation:
          "आपकी लोकेशन",

        pinCode:
          "पिन कोड",

        detectedAddress:
          "पता",

        findTailorsNearMe:
          "मेरे पास दर्जी खोजें",

        locationAccessNeeded:
          "लोकेशन की अनुमति चाहिए",

        tryAgain:
          "फिर कोशिश करें",

        locationNotSupported:
          "इस ब्राउज़र में लोकेशन सेवा उपलब्ध नहीं है।",

        locationDetected:
          "लोकेशन मिल गई, लेकिन पता प्राप्त नहीं हो सका।",

        locationPermission:
          "जारी रखने के लिए लोकेशन की अनुमति दें।",

        locationUnavailable:
          "अभी आपकी लोकेशन उपलब्ध नहीं है।",

        locationTimeout:
          "लोकेशन अनुरोध का समय समाप्त हो गया।",

        locationError:
          "आपकी लोकेशन पता नहीं चल सकी।",

        notAvailable:
          "उपलब्ध नहीं",

        /* =================================================
           JAIPUR / LOCAL TRUST
        ================================================= */

        jaipurImageAlt:
          "जयपुर की वास्तुकला",

        builtForCity:
          "जयपुर के लिए बनाया गया",

        jaipurKnows:
          "जयपुर जानता है",

        goodCraftsmanship:
          "अच्छी कारीगरी।",

        jaipurDescription:
          "रोज़मर्रा के अल्टरशन से लेकर शादी के कपड़ों तक, MeraTailor आपको स्थानीय प्रोफेशनल खोजने और लंबे समय तक भरोसेमंद दर्जियों से जुड़ने में मदद करता है।",

        localProfessionals:
          "स्थानीय प्रोफेशनल",

        localProfessionalsText:
          "अपने आसपास के कुशल दर्जियों को खोजें।",

        directConnectionText:
          "अपने दर्जी से सीधे बात करें और अपनी जरूरत बताएं।",

        buildFavourites:
          "अपने पसंदीदा दर्जी बनाएं",

        buildFavouritesText:
          "भरोसेमंद दर्जियों को सेव करें और जरूरत पड़ने पर दोबारा चुनें।",

        /* =================================================
           CTA
        ================================================= */

        ctaEyebrow:
          "आपकी सही सिलाई यहीं से शुरू होती है",

        ctaTitle:
          "अपना",

        ctaTitleAccent:
          "दर्जी खोजने के लिए तैयार?",

        ctaText:
          "अपने आसपास भरोसेमंद दर्जी खोजें और अपना अगला आउटफिट आसानी से तैयार करवाएं।",

        ctaButton:
          "दर्जी खोजें",
      },

      /* ===================================================
         FOOTER
      ================================================== */

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

/* =====================================================
   SAVED LANGUAGE
====================================================== */

const savedLanguage =
  localStorage.getItem("meraTailorLanguage") || "en";

/* =====================================================
   INITIALIZE I18N
====================================================== */

i18n.use(initReactI18next).init({
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

/* =====================================================
   SAVE LANGUAGE WHEN CHANGED
====================================================== */

i18n.on("languageChanged", (language) => {
  localStorage.setItem(
    "meraTailorLanguage",
    language
  );
});

export default i18n;