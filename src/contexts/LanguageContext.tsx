import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    "hero.badge": "",
    "hero.title": "JOUD",
    "hero.titleHighlight": "Own Your Content , Own Your Market.",
    "hero.subtitle": "Save Time, Save Money",
    "hero.cta.primary": "Start Hiring Now",
    "hero.cta.secondary": "View Demo",
    "hero.imageCaption": "",

    // Agents
    "agents.title": "Meet Your Digital Workforce",
    "agents.titleHighlight": "",
    "agents.subtitle": "100% agent performance. Industry-ready and available for immediate hire.",
    "agents.tameem.name": "Agent Tameem",
    "agents.tameem.title": "Fashion Photography Expert",
    "agents.tameem.description": "Your fashion photography specialist for high-fashion, editorial-style photos. Tameem excels at complex shots involving single or multiple models, detailed clothing textures, and lifestyle settings.",
    "agents.tameem.price": "$4,999",
    "agents.salah.name": "Agent Salah",
    "agents.salah.title": "Product Photography Expert",
    "agents.salah.description": "The artistic product photography master. Salah creates luxurious and artistic photos of products, particularly accessories. He generates both still-life images and shots with models wearing or interacting with products.",
    "agents.salah.price": "$4,999",
    "agents.moaz.name": "Agent Moaz",
    "agents.moaz.title": "E-commerce Photography Expert",
    "agents.moaz.description": "Your e-commerce optimization specialist. Moaz produces clean, professional, high-converting product photos with standard backgrounds or custom lifestyle mockups, perfect for online stores and catalogs.",
    "agents.moaz.price": "$4,999",
    "agents.cta": "Request",

    // Specialties
    "specialty.editorial": "Editorial Fashion",
    "specialty.models": "Multiple Models",
    "specialty.textures": "Clothing Textures",
    "specialty.lifestyle": "Lifestyle Settings",
    "specialty.luxury": "Luxury Products",
    "specialty.accessories": "Accessories",
    "specialty.stillLife": "Still-Life",
    "specialty.modelInteraction": "Model Interaction",
    "specialty.whiteBackground": "White Background",
    "specialty.catalog": "Catalog Ready",
    "specialty.converting": "High-Converting",
    "specialty.mockups": "Lifestyle Mockups",



    // How We Work
    "howWeWork.title": "Your Journey With JOUD",
    "howWeWork.subtitle": "Installation process takes less than 24 Hours",
    "howWeWork.step1.title": "Select Agent",
    "howWeWork.step1.description": "Choose from our pool of pre-trained, industry-ready AI agents.",
    "howWeWork.step2.title": "Connect With Us",
    "howWeWork.step2.description": "We seamlessly integrate the agent into your existing workflows.",
    "howWeWork.step3.title": "We setup",
    "howWeWork.step3.description": "Track performance and manage your digital workforce from one dashboard.",

    // Benefits
    "benefits.title": "Why Choose",
    "benefits.titleHighlight": "Joud",
    "benefits.online.title": "24/7 Online",
    "benefits.online.description": "Our AI agents work around the clock, generating content whenever you need it.",
    "benefits.ownership.title": "100% Data Ownership",
    "benefits.ownership.description": "Your data stays yours. Full ownership and control over all generated content.",
    "benefits.maintenance.title": "Monthly Maintenance",
    "benefits.maintenance.description": "Regular maintenance and upgrade sessions to keep your agents performing at their best.",

    // Demo
    "demo.title": "See the",
    "demo.titleHighlight": "Difference",
    "demo.subtitle": "Experience the before and after of AI-powered product photography",
    "demo.cta": "Get in Touch",

    // Pricing
    "pricing.title": "Simple, Transparent Hiring",
    "pricing.titleHighlight": "",
    "pricing.subtitle": "No hidden fees. No complicated contracts. Just results.",
    "pricing.plan.name": "All-Access Pass",
    "pricing.plan.description": "Complete access to your digital workforce.",
    "pricing.plan.price": "$150",
    "pricing.plan.period": "Billed Monthly",
    "pricing.plan.feature1": "Access to ALL AI Agents (Tameem, Salah, Moaz)",
    "pricing.plan.feature2": "Unlimited Photo Generations",
    "pricing.plan.feature3": "High-Resolution Commercial License",
    "pricing.plan.feature4": "24/7 Priority Support",
    "pricing.plan.feature5": "Cancel Anytime",
    "pricing.plan.cta": "Start Hiring Now",
    "pricing.plan.guarantee": "14-day money-back guarantee",


    // CTA
    "cta.title": "Ready to Meet Your AI",
    "cta.titleHighlight": "Photography Team?",
    "cta.subtitle": "Join forward-thinking brands using AI-powered photography. One-time installation, lifetime results.",
    "cta.button": "Start Your Project",
    "cta.benefit1": "One-time installation",
    "cta.benefit2": "Lifetime access",
    "cta.benefit3": "Dedicated support",

    // Level Up
    "levelUp.title": "LEVEL UP",
    "levelUp.subtitle": "your business with us",
    "levelUp.description": "Partner with Joud and transform your visual content strategy with cutting-edge AI technology.",
    "levelUp.cta": "Get Started Today",

    // Form
    "form.title": "Start Your",
    "form.titleHighlight": "AI Project",
    "form.subtitle": "Tell us about your business and let's build something amazing together",
    "form.name": "Your Name",
    "form.namePlaceholder": "John Doe",
    "form.email": "Email Address",
    "form.emailPlaceholder": "john@company.com",
    "form.company": "Company Name",
    "form.companyType": "Company Type",
    "form.companyTypePlaceholder": "Select your company type",
    "form.companyType.startup": "Startup",
    "form.companyType.smb": "Small/Medium Business",
    "form.companyType.enterprise": "Enterprise",
    "form.companyType.agency": "Agency",
    "form.companyType.other": "Other",
    "form.agentNeed": "AI Agent Need",
    "form.agentNeedPlaceholder": "What do you need?",
    "form.agentNeed.fashion": "Fashion Photography (Tameem)",
    "form.agentNeed.product": "Product Photography (Salah)",
    "form.agentNeed.ecommerce": "E-commerce Photography (Moaz)",
    "form.agentNeed.all": "All Agents",
    "form.projectBrief": "Project Brief (Optional)",
    "form.projectBriefHint": "Optional: Upload a brief describing your requirements",
    "form.submit": "Send",
    "form.submitting": "Submitting...",
    "form.disclaimer": "We typically respond within 24 hours. Your information is secure and never shared.",
    "form.error.title": "Missing fields",
    "form.error.description": "Please fill in all required fields.",
    "form.success.title": "Request sent!",
    "form.success.description": "We'll contact you within 24 hours.",

    // Control
    "control.title": "Total Control.",
    "control.titleHighlight": "Zero Mystery.",
    "control.subtitle": "Monitor every conversation, track hours worked, and manage your AI workforce.",

    // Footer
    "footer.tagline": "AI Photography Agents for Enterprise",
    "footer.nav.agents": "Agents",

    "footer.nav.howWeWork": "How We Work",
    "footer.nav.pricing": "Pricing",
    "footer.rights": "All rights reserved.",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",

    // Language
    "language.en": "English",
    "language.ar": "العربية",
  },
  ar: {
    // Hero
    "hero.badge": "",
    "hero.title": "جود",
    "hero.titleHighlight": "امتلك محتواك، امتلك سوقك",
    "hero.subtitle": "وفر الوقت، وفر المال",
    "hero.cta.primary": "ابدأ التوظيف الآن",
    "hero.cta.secondary": "شاهد العرض",
    "hero.imageCaption": "",

    // Agents
    "agents.title": "قابل قوتك العاملة الرقمية",
    "agents.titleHighlight": "",
    "agents.subtitle": "أداء وكيل 100%. جاهزون للصناعة ومتاحون للتوظيف الفوري.",
    "agents.tameem.name": "الوكيل تميم",
    "agents.tameem.title": "خبير تصوير الأزياء",
    "agents.tameem.description": "متخصص تصوير الأزياء الخاص بك للصور الراقية والتحريرية. يتفوق تميم في اللقطات المعقدة التي تتضمن عارضين أو أكثر، وتفاصيل الملابس، وإعدادات نمط الحياة.",
    "agents.tameem.price": "٤,٩٩٩$",
    "agents.salah.name": "الوكيل صلاح",
    "agents.salah.title": "خبير تصوير المنتجات",
    "agents.salah.description": "خبير التصوير الفني للمنتجات. يبتكر صلاح صورًا فاخرة وفنية للمنتجات، خاصة الإكسسوارات. ينتج صور ثابتة ولقطات مع عارضين يرتدون المنتجات أو يتفاعلون معها.",
    "agents.salah.price": "٤,٩٩٩$",
    "agents.moaz.name": "الوكيل معاذ",
    "agents.moaz.title": "خبير تصوير التجارة الإلكترونية",
    "agents.moaz.description": "متخصص تحسين التجارة الإلكترونية. ينتج معاذ صور منتجات نظيفة واحترافية وعالية التحويل مع خلفيات قياسية أو نماذج نمط حياة مخصصة.",
    "agents.moaz.price": "٤,٩٩٩$",
    "agents.cta": "طلب",

    // Specialties
    "specialty.editorial": "أزياء تحريرية",
    "specialty.models": "عارضين متعددين",
    "specialty.textures": "تفاصيل الملابس",
    "specialty.lifestyle": "إعدادات الحياة",
    "specialty.luxury": "منتجات فاخرة",
    "specialty.accessories": "إكسسوارات",
    "specialty.stillLife": "طبيعة صامتة",
    "specialty.modelInteraction": "تفاعل العارضين",
    "specialty.whiteBackground": "خلفية بيضاء",
    "specialty.catalog": "جاهز للكتالوج",
    "specialty.converting": "عالي التحويل",
    "specialty.mockups": "نماذج الحياة",


    // How We Work
    "howWeWork.title": "رحلتك مع جود",
    "howWeWork.subtitle": "عملية التثبيت تستغرق أقل من 24 ساعة",
    "howWeWork.step1.title": "اختر الوكيل",
    "howWeWork.step1.description": "اختر من مجموعتنا من وكلاء الذكاء الاصطناعي المدربين مسبقاً والجاهزين للعمل.",
    "howWeWork.step2.title": "تواصل معنا",
    "howWeWork.step2.description": "نقوم بدمج الوكيل بسلاسة في سير عملك الحالي.",
    "howWeWork.step3.title": "نحن نقوم بالإعداد",
    "howWeWork.step3.description": "تتبع الأداء وأدر قوتك العاملة الرقمية من لوحة تحكم واحدة.",

    // Benefits
    "benefits.title": "لماذا تختار",
    "benefits.titleHighlight": "جود",
    "benefits.online.title": "متاح ٢٤/٧",
    "benefits.online.description": "وكلاء الذكاء الاصطناعي يعملون على مدار الساعة، وينشئون المحتوى متى احتجت إليه.",
    "benefits.ownership.title": "ملكية كاملة للبيانات",
    "benefits.ownership.description": "بياناتك تبقى ملكك. ملكية وتحكم كامل في جميع المحتوى المُنشأ.",
    "benefits.maintenance.title": "صيانة شهرية",
    "benefits.maintenance.description": "جلسات صيانة وترقية منتظمة للحفاظ على أداء وكلائك بأفضل شكل.",

    // Demo
    "demo.title": "شاهد",
    "demo.titleHighlight": "الفرق",
    "demo.subtitle": "اختبر الفرق قبل وبعد التصوير بالذكاء الاصطناعي",
    "demo.cta": "تواصل معنا",

    // Pricing
    "pricing.title": "توظيف بسيط وشفاف",
    "pricing.titleHighlight": "",
    "pricing.subtitle": "لا رسوم خفية. لا عقود معقدة. نتائج فقط.",
    "pricing.plan.name": "تذكرة الشمول الكامل",
    "pricing.plan.description": "وصول كامل إلى قوتك العاملة الرقمية.",
    "pricing.plan.price": "$150",
    "pricing.plan.period": "تدفع شهرياً",
    "pricing.plan.feature1": "الوصول إلى جميع وكلاء الذكاء الاصطناعي",
    "pricing.plan.feature2": "توليد صور غير محدود",
    "pricing.plan.feature3": "رخصة تجارية عالية الدقة",
    "pricing.plan.feature4": "دعم ذو أولوية 24/7",
    "pricing.plan.feature5": "إلغاء في أي وقت",
    "pricing.plan.cta": "ابدأ التوظيف الآن",
    "pricing.plan.guarantee": "ضمان استعادة الأموال لمدة 14 يوماً",

    // CTA
    "cta.title": "مستعد للقاء فريق",
    "cta.titleHighlight": "التصوير الذكي؟",
    "cta.subtitle": "انضم للعلامات التجارية المتقدمة التي تستخدم التصوير بالذكاء الاصطناعي. تثبيت لمرة واحدة، نتائج مدى الحياة.",
    "cta.button": "ابدأ مشروعك",
    "cta.benefit1": "تثبيت لمرة واحدة",
    "cta.benefit2": "وصول مدى الحياة",
    "cta.benefit3": "دعم مخصص",

    // Level Up
    "levelUp.title": "ارتقِ بمستوى",
    "levelUp.subtitle": "عملك معنا",
    "levelUp.description": "تشارك مع جود وحوّل استراتيجية المحتوى المرئي الخاصة بك بتقنية الذكاء الاصطناعي المتطورة.",
    "levelUp.cta": "ابدأ اليوم",

    // Form
    "form.title": "ابدأ",
    "form.titleHighlight": "مشروعك",
    "form.subtitle": "أخبرنا عن عملك ودعنا نبني شيئاً رائعاً معاً",
    "form.name": "اسمك",
    "form.namePlaceholder": "أحمد محمد",
    "form.email": "البريد الإلكتروني",
    "form.emailPlaceholder": "ahmed@company.com",
    "form.company": "اسم الشركة",
    "form.companyType": "نوع الشركة",
    "form.companyTypePlaceholder": "اختر نوع شركتك",
    "form.companyType.startup": "شركة ناشئة",
    "form.companyType.smb": "شركة صغيرة/متوسطة",
    "form.companyType.enterprise": "مؤسسة",
    "form.companyType.agency": "وكالة",
    "form.companyType.other": "أخرى",
    "form.agentNeed": "احتياج الوكيل",
    "form.agentNeedPlaceholder": "ماذا تحتاج؟",
    "form.agentNeed.fashion": "تصوير أزياء (تميم)",
    "form.agentNeed.product": "تصوير منتجات (صلاح)",
    "form.agentNeed.ecommerce": "تصوير تجارة إلكترونية (معاذ)",
    "form.agentNeed.all": "جميع الوكلاء",
    "form.projectBrief": "ملخص المشروع (اختياري)",
    "form.projectBriefHint": "اختياري: ارفع ملخصاً يصف متطلباتك",
    "form.submit": "أرسل",
    "form.submitting": "جاري الإرسال...",
    "form.disclaimer": "نرد عادة خلال ٢٤ ساعة. معلوماتك آمنة ولا تُشارك أبداً.",
    "form.error.title": "حقول مفقودة",
    "form.error.description": "يرجى ملء جميع الحقول المطلوبة.",
    "form.success.title": "تم إرسال الطلب!",
    "form.success.description": "سنتواصل معك خلال ٢٤ ساعة.",

    // Control
    "control.title": "تحكم كامل.",
    "control.titleHighlight": "بدون غموض.",
    "control.subtitle": "راقب كل محادثة، تتبع ساعات العمل، وأدر فريقك الذكي.",

    // Footer
    "footer.tagline": "وكلاء تصوير بالذكاء الاصطناعي للمؤسسات",
    "footer.nav.agents": "الوكلاء",

    "footer.nav.howWeWork": "كيف نعمل",
    "footer.nav.pricing": "الأسعار",
    "footer.rights": "جميع الحقوق محفوظة.",

    // Theme
    "theme.light": "فاتح",
    "theme.dark": "داكن",

    // Language
    "language.en": "English",
    "language.ar": "العربية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"} className={language === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
