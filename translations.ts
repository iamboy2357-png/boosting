import { ServiceItem, PortfolioItem, FaqItem, ProcessStep, FeatureItem } from './types';

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    process: string;
    portfolio: string;
    estimate: string;
    faq: string;
    contact: string;
    getQuote: string;
    callNow: string;
    whatsappChat: string;
    langSwitch: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    getQuoteBtn: string;
    exploreServicesBtn: string;
    whatsappDirectBtn: string;
    boostingPlatformsLabel: string;
    trustTags: {
      professional: string;
      reliable: string;
      affordable: string;
      experience: string;
    };
    mockup: {
      clientActive: string;
      growthMetric: string;
      tabWeb: string;
      tabBoosting: string;
      tabAnalytics: string;
      supportedPlatforms: string;
      guaranteed: string;
      activeCampaign: string;
      targetPromo: string;
      conversionRate: string;
      instantConsultation: string;
    };
  };
  trustBar: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    badgeFoundedLabel: string;
    badgeFoundedValue: string;
    badgeLocationLabel: string;
    badgeLocationValue: string;
    badgeServicesLabel: string;
    badgeServicesValue: string;
    items: {
      satisfaction: { title: string; desc: string };
      speed: { title: string; desc: string };
      pricing: { title: string; desc: string };
      support: { title: string; desc: string };
    };
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    founderTitle: string;
    founderName: string;
    founderBio: string;
    consultationBtn: string;
    missionLabel: string;
    missionText: string;
    visionLabel: string;
    visionText: string;
    highlights: {
      practical: string;
      directComm: string;
      modernTech: string;
      reliableDelivery: string;
    };
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    values: {
      dependableTitle: string;
      dependableDesc: string;
      resultsTitle: string;
      resultsDesc: string;
      clientFirstTitle: string;
      clientFirstDesc: string;
    };
    learnMoreBtn: string;
    description1?: string;
    description2?: string;
    missionTitle?: string;
    missionDesc?: string;
    visionTitle?: string;
    visionDesc?: string;
    card?: {
      name: string;
      role: string;
      badge: string;
      chatBtn: string;
      stats: {
        experience: string;
        projects: string;
        rating: string;
      };
    };
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    popularTag: string;
    supportedPlatformsLabel: string;
    includedTitle: string;
    learnMoreBtn: string;
    requestQuoteBtn: string;
    modal: {
      whatIncluded: string;
      whyChooseThis: string;
      benefits: string[];
      close: string;
      orderViaWhatsApp: string;
      getEstimate: string;
    };
    items: ServiceItem[];
  };
  whyChooseUs: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    items: FeatureItem[];
  };
  process: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    stepPrefix: string;
    steps: ProcessStep[];
  };
  portfolio: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    allFilter: string;
    keyFeaturesLabel: string;
    provenResultsLabel: string;
    viewCaseStudy: string;
    modal: {
      category: string;
      overview: string;
      techStack: string;
      outcomes: string;
      contactToBuildSimilar: string;
      close: string;
    };
    items: PortfolioItem[];
  };
  stats: {
    tag: string;
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    numbers: {
      completed: string;
      completedLabel: string;
      completedSub: string;
      satisfaction: string;
      satisfactionLabel: string;
      satisfactionSub: string;
      platforms: string;
      platformsLabel: string;
      platformsSub: string;
      support: string;
      supportLabel: string;
      supportSub: string;
    };
    items: {
      icon: string;
      value: string;
      label: string;
      note: string;
    }[];
  };
  estimator: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    step1Title: string;
    services: { id: string; name: string; desc: string }[];
    step2Title: string;
    addons: { id: string; label: string }[];
    summaryTitle: string;
    timelineLabel: string;
    featuresLabel: string;
    pricingPolicyLabel: string;
    pricingPolicyValue: string;
    sendEstimateBtn: string;
    webFormBtn: string;
    disclaimer: string;
  };
  costEstimator: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    estimatedCost: string;
    estimatedDelivery: string;
    days: string;
    disclaimer: string;
    orderEstimateWhatsApp: string;
    resetBtn: string;
    servicesOptions: { id: string; name: string; priceBdt: number; priceUsd: number; days: number; desc: string }[];
    addonOptions: { id: string; name: string; priceBdt: number; priceUsd: number; desc: string }[];
    speedOptions: { id: string; name: string; multiplier: number; desc: string }[];
  };
  cta: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    startProjectBtn: string;
    whatsappBtn: string;
    primaryBtn?: string;
    guarantee?: string;
  };
  ctaBanner: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryBtn: string;
    whatsappBtn: string;
    guarantee: string;
  };
  faq: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    stillQuestions: string;
    contactSupport: string;
    items: FaqItem[];
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    subtitle: string;
    infoTitle: string;
    infoSubtitle: string;
    businessNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    locationLabel: string;
    socialsLabel: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    serviceLabel: string;
    serviceOption1: string;
    serviceOption2: string;
    serviceOption3: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappDirectBtn: string;
    guaranteeText: string;
    successTitle: string;
    successMessage: string;
    successBtn: string;
    form?: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      serviceDefault: string;
      budgetLabel: string;
      budgetDefault: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
    };
    info?: {
      title: string;
      phone: string;
      phoneVal: string;
      whatsapp: string;
      whatsappVal: string;
      email: string;
      emailVal: string;
      location: string;
      locationVal: string;
      hours: string;
      hoursVal: string;
      officialSocials: string;
      clickToConnect: string;
    };
  };
  newsletter: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    benefit1: string;
    benefit2: string;
    interestLabel: string;
    interestAll: string;
    interestWeb: string;
    interestBoosting: string;
    emailLabel: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    subscribing: string;
    subscribedMsg: string;
    privacyNotice: string;
    privacyNote: string;
    invalidEmail: string;
    successTitle: string;
    subscribeAnother: string;
    placeholder?: string;
  };
  footer: {
    brandBio: string;
    quickLinks: string;
    linkHome: string;
    linkAbout: string;
    linkServices: string;
    linkPortfolio: string;
    linkWhyUs: string;
    linkProcess: string;
    linkFaq: string;
    linkContact: string;
    linkNewsletter: string;
    ourServices: string;
    servicesList: string[];
    directContact: string;
    followConnect: string;
    copyright: string;
    verifiedNotice: string;
    privacyPolicy: string;
    termsConditions: string;
    termsOfService: string;
    topBtn: string;
    privacyTitle: string;
    privacyText1: string;
    privacyText2: string;
    termsTitle: string;
    termsText1: string;
    termsText2: string;
    close: string;
    aboutText?: string;
    quickLinksTitle?: string;
    servicesTitle?: string;
    socialTitle?: string;
    rightsReserved?: string;
    disclaimer?: string;
  };
  floatingWhatsApp: {
    tooltip: string;
    status: string;
  };
}

export const translations: Record<'en' | 'bn', SiteContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Choose Us',
      process: 'Process',
      portfolio: 'Portfolio',
      estimate: 'Cost Estimator',
      faq: 'FAQ',
      contact: 'Contact',
      getQuote: 'Get a Quote',
      callNow: 'Direct WhatsApp',
      whatsappChat: 'WhatsApp',
      langSwitch: 'বাংলা',
    },
    hero: {
      badge: 'Active Since 2021 • Bangladesh',
      headlinePart1: 'Targeted Social Media Boosting &',
      headlineHighlight: 'Custom Web Development',
      headlinePart2: 'for Growing Businesses',
      subheadline:
        'We supercharge your brand presence across Facebook, YouTube, Instagram, TikTok & Snapchat while crafting high-converting, lightning-fast modern websites built for measurable ROI.',
      getQuoteBtn: 'Request Free Quote',
      exploreServicesBtn: 'Explore Services',
      whatsappDirectBtn: 'Chat on WhatsApp',
      boostingPlatformsLabel: 'Supported Boosting Platforms',
      trustTags: {
        professional: 'Professional Devs',
        reliable: '100% Reliable Results',
        affordable: 'Transparent Pricing',
        experience: 'Active Since 2021',
      },
      mockup: {
        clientActive: '500+ Happy Clients',
        growthMetric: '+380% Organic & Paid Reach',
        tabWeb: 'Web Architecture',
        tabBoosting: 'Multi-Channel Boosting',
        tabAnalytics: 'Growth Analytics',
        supportedPlatforms: 'Facebook • YouTube • Instagram • TikTok • Snapchat',
        guaranteed: 'Safe, Targeted & High-Retention Audiences',
        activeCampaign: 'Live Campaign Monitoring',
        targetPromo: 'Precision Geo & Demographic Targeting',
        conversionRate: 'Average 4.8x Conversion Lift',
        instantConsultation: 'Fast WhatsApp Consultation (Under 5 mins)',
      },
    },
    trustBar: {
      tag: 'Trusted Agency Since 2021',
      title: 'Built on Trust, Performance & Results',
      subtitle: 'Why 500+ clients rely on AK Boosting & Web Developer for their digital expansion',
      description: 'We blend strategic social marketing with rigorous software engineering to deliver measurable outcomes with zero fluff.',
      badgeFoundedLabel: 'Established In',
      badgeFoundedValue: '2021 (5+ Years)',
      badgeLocationLabel: 'Operational Base',
      badgeLocationValue: 'Bangladesh (Nationwide & Global)',
      badgeServicesLabel: 'Service Deliverables',
      badgeServicesValue: 'Web + Boosting',
      items: {
        satisfaction: {
          title: '99% Client Satisfaction',
          desc: 'Proven track record of high-converting campaigns and responsive websites.',
        },
        speed: {
          title: 'Fast Turnaround Delivery',
          desc: 'Quick launch timelines with meticulous attention to detail and performance.',
        },
        pricing: {
          title: 'Affordable & Transparent',
          desc: 'No hidden fees. Flexible packages designed for businesses of all sizes.',
        },
        support: {
          title: '24/7 Dedicated Support',
          desc: 'Direct developer communication and fast revisions whenever you need them.',
        },
      },
    },
    about: {
      badge: 'Who We Are',
      title: 'Your Trusted Partner in',
      titleHighlight: 'Digital Growth & Technology',
      founderTitle: 'Full-Stack Developer & Growth Strategist',
      founderName: 'AK Team & Developers',
      founderBio: 'Passionate full-stack web developer and digital growth strategist with 5+ years of hands-on experience building custom web solutions and high-performing social marketing campaigns.',
      consultationBtn: 'Direct WhatsApp Chat',
      missionLabel: 'Our Mission',
      missionText: 'To make modern, high-converting digital presence and authentic social media reach accessible, transparent, and profitable for every entrepreneur, business, and creator.',
      visionLabel: 'Our Vision',
      visionText: 'To be the most reliable, trusted, and client-centric digital growth agency in Bangladesh, turning complex technology into effortless business expansion.',
      highlights: {
        practical: 'Practical Results First',
        directComm: 'Direct 1-on-1 Communication',
        modernTech: 'Modern High-Speed Tech Stack',
        reliableDelivery: 'On-Time Milestone Delivery',
      },
      paragraph1: 'Founded in 2021 in Bangladesh, AK Boosting & Web Developer was created to bridge the gap between creative social media growth and modern, rock-solid web engineering.',
      paragraph2: 'We specialize in running precise, targeted promotions across Facebook, YouTube, Instagram, TikTok, and Snapchat—coupled with clean, custom-built websites, landing pages, and business portfolios that convert traffic into loyal clients.',
      paragraph3: 'With hundreds of completed projects and 5+ years of active experience, we focus on clear milestones, transparent pricing, and direct communication without unnecessary agency red tape.',
      values: {
        dependableTitle: 'Dependable & Secure',
        dependableDesc: 'We protect your brand integrity with safe advertising policies and robust code architectures.',
        resultsTitle: 'Results-Oriented',
        resultsDesc: 'Every campaign and line of code is structured to maximize engagement, leads, and sales.',
        clientFirstTitle: 'Client-First Focus',
        clientFirstDesc: 'We treat your business as our own, providing proactive support and strategic guidance.',
      },
      learnMoreBtn: 'Explore Services',
      description1: 'Founded in 2021, AK Boosting & Web Developer was built with a singular mission: to make modern, high-converting digital presence and social media reach accessible to every entrepreneur, small business, and creator.',
      description2: 'We combine tactical social media marketing expertise across Facebook, YouTube, Instagram, TikTok, and Snapchat with robust full-stack web development. Whether you need an explosive viral promotional boost or a lightning-fast responsive website, our team delivers results with integrity and transparency.',
      missionTitle: 'Our Mission',
      missionDesc: 'To empower businesses and creators with reliable, modern, and affordable digital solutions that generate real revenue and authentic visibility.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the most trusted and impactful digital service partner in Bangladesh, bridging the gap between innovative technology and real-world business success.',
      card: {
        name: 'AK Team & Developers',
        role: 'Full-Stack Developers & Growth Strategists',
        badge: 'Verified Agency & Digital Partners',
        chatBtn: 'Chat on WhatsApp',
        stats: {
          experience: 'Years Active',
          projects: 'Projects Done',
          rating: 'Client Rating',
        },
      },
    },
    services: {
      badge: 'What We Deliver',
      title: 'Comprehensive Services Tailored for',
      titleHighlight: 'Maximum Growth',
      description: 'Explore our high-demand digital services crafted to give your business an undeniable competitive edge.',
      subtitle: 'Explore our high-demand digital services crafted to give your business an undeniable competitive edge.',
      popularTag: 'Most Popular',
      supportedPlatformsLabel: 'Supported Platforms:',
      includedTitle: "What's Included:",
      learnMoreBtn: 'Explore Details',
      requestQuoteBtn: 'Get Estimate for This',
      modal: {
        whatIncluded: 'Service Deliverables & Features:',
        whyChooseThis: 'Why This Service Matters:',
        benefits: [
          'Direct 1-on-1 strategy alignment with the AK team',
          'Fast turnaround delivery with milestone checkpoints',
          'Transparent reporting and verified results',
          'Post-delivery support and ongoing optimizations',
        ],
        close: 'Close Window',
        orderViaWhatsApp: 'Order via WhatsApp',
        getEstimate: 'Calculate Estimate',
      },
      items: [
        {
          id: 'social-media-boosting',
          number: '01',
          title: 'Social Media Boosting & Promotion',
          tagline: 'Multi-Channel Organic & Paid Campaigns',
          description:
            'Hyper-targeted growth campaigns across Facebook, YouTube, Instagram, TikTok, and Snapchat. We optimize audience demographics, engagement hooks, and ad spend to maximize reach, subscribers, and buyer conversions.',
          iconName: 'Rocket',
          features: [
            'Precision location, age, & interest targeting',
            'Authentic followers, likes, views & watch time',
            'Detailed analytics & engagement reporting',
            'Ad account setup & budget efficiency planning',
            'Safe, policy-compliant boosting strategies',
          ],
          fullDetails:
            'Our boosting methodology combines strict platform compliance with creative audience segmentation. We ensure your marketing budget reaches genuine prospective customers rather than bot traffic, multiplying your brand credibility and organic virality.',
        },
        {
          id: 'web-development',
          number: '02',
          title: 'Custom Web Design & Development',
          tagline: 'High-Speed Responsive Websites & Portals',
          description:
            'Bespoke web applications, corporate websites, dynamic business landing pages, and portfolio platforms crafted with modern frameworks. Lightning-fast performance, rock-solid security, and seamless mobile responsiveness.',
          iconName: 'Code',
          features: [
            '100% responsive design across all mobile & desktop screens',
            'Next-generation UI/UX with smooth interactive flows',
            'Clean, maintainable, production-ready code architecture',
            'On-page SEO optimization & metadata configuration',
            'Speed-tuned with sub-second page load times',
          ],
          fullDetails:
            'We engineer websites that act as 24/7 conversion engines. From clean corporate branding to custom interactive web tools, every interface is structured to guide visitors effortlessly toward purchasing or contacting your business.',
        },
        {
          id: 'turnkey-business-solutions',
          number: '03',
          title: 'Turnkey Digital Presence & Customization',
          tagline: 'End-to-End Setup, SEO & Brand Modernization',
          description:
            'Comprehensive digital infrastructure setup. We configure domain & hosting, professional corporate email systems, conversion tracking pixels, analytics dashboards, and overhaul existing slow websites for peak conversion.',
          iconName: 'Globe',
          features: [
            'Domain setup, SSL encryption & cloud hosting deployment',
            'Meta Pixel, Google Analytics & conversion tracking setup',
            'Existing website redesign, bug fixes & speed overhaul',
            'WhatsApp direct integration & automated lead routing',
            'Comprehensive post-launch maintenance & security backup',
          ],
          fullDetails:
            'Take the headache out of launching your digital footprint. We deliver an end-to-end turnkey ecosystem ready to accept orders, capture leads, and scale your brand identity from day one.',
        },
      ],
    },
    whyChooseUs: {
      badge: 'Our Advantage',
      title: 'Why Choose AK Boosting &',
      titleHighlight: 'Web Developer?',
      description: 'We blend strategic social marketing with rigorous software engineering to deliver measurable outcomes.',
      subtitle: 'We blend strategic social marketing with rigorous software engineering to deliver measurable outcomes.',
      items: [
        {
          number: '01',
          title: 'Experienced & Battle-Tested',
          description: 'Actively providing verified digital solutions and serving clients across diverse industries since 2021.',
          iconName: 'ShieldCheck',
        },
        {
          number: '02',
          title: 'Customized Strategic Approach',
          description: 'Every business has distinct objectives. We tailor our boosting campaigns and code architecture specifically to your niche.',
          iconName: 'Target',
        },
        {
          number: '03',
          title: 'Transparent & Affordable Pricing',
          description: 'Honest rates with no hidden fees. Flexible packages designed for startups, growing SMEs, and established creators.',
          iconName: 'Coins',
        },
        {
          number: '04',
          title: 'Direct 1-on-1 Communication',
          description: 'Talk straight with the developers and strategists working on your project—no confusing middleman bureaucracy.',
          iconName: 'Users',
        },
        {
          number: '05',
          title: 'On-Time Milestone Delivery',
          description: 'We respect your time. Every project milestone is tracked and delivered within agreed schedules.',
          iconName: 'Calendar',
        },
        {
          number: '06',
          title: 'Reliable After-Sales Support',
          description: 'Our commitment does not end at delivery. We provide continuous technical assistance and campaign monitoring.',
          iconName: 'Headphones',
        },
      ],
    },
    process: {
      badge: 'How We Work',
      title: 'Our Proven 4-Step',
      titleHighlight: 'Execution Workflow',
      description: 'A seamless, transparent roadmap from initial consultation to successful delivery and scaling.',
      subtitle: 'A seamless, transparent roadmap from initial consultation to successful delivery and scaling.',
      stepPrefix: 'Step',
      steps: [
        {
          step: 'Step 01',
          number: '01',
          title: 'Consultation & Strategy',
          description:
            'We begin with a detailed discussion on WhatsApp or call to understand your target audience, business goals, and timeline expectations.',
          iconName: 'MessageSquare',
          highlight: 'Free strategy roadmap',
        },
        {
          step: 'Step 02',
          number: '02',
          title: 'Planning & Architecture',
          description:
            'We draft the campaign parameters or web wireframes, establishing deliverables, technology stack, and milestone checkpoints.',
          iconName: 'Lightbulb',
          highlight: 'Clear deliverables agreement',
        },
        {
          step: 'Step 03',
          number: '03',
          title: 'Execution & Development',
          description:
            'Our team executes the boosting campaigns with precision or codes your modern website using robust best practices and testing.',
          iconName: 'CodeXml',
          highlight: 'Regular progress updates',
        },
        {
          step: 'Step 04',
          number: '04',
          title: 'Review, Delivery & Growth',
          description:
            'You review the final product. Upon approval, we launch the project, provide training, and offer ongoing support to ensure growth.',
          iconName: 'TrendingUp',
          highlight: 'Post-delivery guidance',
        },
      ],
    },
    portfolio: {
      badge: 'Our Work',
      title: 'Featured Projects &',
      titleHighlight: 'Proven Results',
      description: 'Explore real-world examples of our web development builds and digital boosting campaigns.',
      subtitle: 'Explore real-world examples of our web development builds and digital boosting campaigns.',
      allFilter: 'All Projects',
      keyFeaturesLabel: 'Key Highlights:',
      provenResultsLabel: 'Measurable Outcome:',
      viewCaseStudy: 'View Case Study',
      modal: {
        category: 'Project Category',
        overview: 'Project Overview & Objectives',
        techStack: 'Technologies & Strategy Employed',
        outcomes: 'Proven Metrics & Client Results',
        contactToBuildSimilar: 'Build a Similar Solution with AK',
        close: 'Close Window',
      },
      items: [
        {
          id: 'proj-1',
          title: 'Elite Commerce - Fashion Brand Storefront',
          category: 'Websites',
          description:
            'A high-performance e-commerce platform built with React, Tailwind, and integrated bKash/Nagad checkout for a premium clothing retailer.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          tags: ['React', 'Tailwind CSS', 'Mobile First', 'Fast Checkout'],
          features: [
            'Instant cart checkout with automated WhatsApp order forwarding',
            'Sub-800ms initial load time on 4G mobile networks',
            'Integrated pixel tracking for automated retargeting ads',
          ],
          results: 'Generated 4.2x ROAS within the first 30 days of launch.',
          demoUrl: '#',
        },
        {
          id: 'proj-2',
          title: 'Viral Brand Campaign - Multi-Platform Boosting',
          category: 'Digital Promotion',
          description:
            'A cross-platform promotion covering Facebook Video, TikTok trends, and YouTube Shorts for a consumer electronics launch in Bangladesh.',
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
          tags: ['Facebook Ads', 'YouTube Reach', 'TikTok Trends', 'Audience Growth'],
          features: [
            'Geo-targeted promotional reels across Dhaka, Chittagong, and Sylhet',
            'Organic hook optimization and hashtag structuring',
            'Conversion tracking setup capturing over 12,000 lead clicks',
          ],
          results: 'Reached over 850,000 targeted users with 68,000+ active engagements.',
          demoUrl: '#',
        },
        {
          id: 'proj-3',
          title: 'MediCare Diagnostic - Clinic Portal & Booking',
          category: 'Business Projects',
          description:
            'A responsive medical clinic portal with doctor schedules, test catalog, and automated patient appointment booking.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
          tags: ['Full-Stack', 'Booking System', 'SEO Optimized', 'HIPAA Compliant'],
          features: [
            'Interactive doctor appointment slot selector with SMS confirmations',
            'Mobile-friendly test report lookup portal',
            'Ranked on Google Page 1 for local diagnostic search queries',
          ],
          results: 'Increased digital appointment bookings by 210% in 60 days.',
          demoUrl: '#',
        },
        {
          id: 'proj-4',
          title: 'Prime Estate - Luxury Property Showcase',
          category: 'Landing Pages',
          description:
            'A high-conversion landing page designed for a premier real estate developer featuring virtual tour video embeds and lead capture.',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
          tags: ['Landing Page', 'High Conversion', 'Lead Capture', 'Modern UI'],
          features: [
            'Sticky quick-inquiry bar connected directly to sales team WhatsApp',
            'Interactive floor plan viewers and property spec calculators',
            'A/B tested headlines achieving a 9.4% opt-in conversion rate',
          ],
          results: 'Delivered 340+ verified buyer leads for luxury condominium units.',
          demoUrl: '#',
        },
        {
          id: 'proj-5',
          title: 'TechHub Agency - Corporate Web Infrastructure',
          category: 'Websites',
          description:
            'Complete digital brand overhaul including modern multilingual website, client portal, and automated invoice tracking.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
          tags: ['Corporate', 'TypeScript', 'Multi-Language', 'Modern UI'],
          features: [
            'Seamless English & Bangla instant localization toggles',
            'Interactive project estimator and automated lead capture',
            'Integrated client feedback & testimonial verification feed',
          ],
          results: 'Reduced client acquisition cost by 45% via organic inbound traffic.',
          demoUrl: '#',
        },
        {
          id: 'proj-6',
          title: 'GadgetZone - Product Launch Viral Landing Page',
          category: 'Landing Pages',
          description:
            'High-speed single product landing page engineered for TikTok & Facebook direct-response traffic with countdown urgency timers.',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          tags: ['Single Product', 'Viral Funnel', 'Cash on Delivery', 'Speed'],
          features: [
            'One-page 2-click Cash on Delivery order form',
            'Customer reviews carousel & trust guarantee badges',
            'Optimized for 3G/4G mobile network loading',
          ],
          results: 'Boosted conversion rate from 1.8% to 6.4% on paid traffic.',
          demoUrl: '#',
        },
      ],
    },
    stats: {
      tag: 'Verified Metrics • Bangladesh & Global',
      badge: 'Proven Track Record',
      title: 'Real Numbers Backing Our',
      titleHighlight: 'Commitment to Excellence',
      subtitle: 'Over the years, we have built long-term relationships with clients through reliability and consistent results.',
      numbers: {
        completed: '500+',
        completedLabel: 'Projects Completed',
        completedSub: 'Websites, boosting campaigns & landing pages',
        satisfaction: '99%',
        satisfactionLabel: 'Client Satisfaction',
        satisfactionSub: 'Positive reviews & repeat client retention',
        platforms: '5+',
        platformsLabel: 'Major Social Channels',
        platformsSub: 'FB, YouTube, Instagram, TikTok & Snapchat',
        support: '24/7',
        supportLabel: 'Direct Support',
        supportSub: 'Instant developer replies via WhatsApp',
      },
      items: [
        { icon: 'Calendar', value: '2021', label: 'Founded in', note: '5+ Years of Industry Experience' },
        { icon: 'Layers', value: '500+', label: 'Projects Delivered', note: 'Websites & Growth Campaigns' },
        { icon: 'Target', value: '99%', label: 'Client Satisfaction', note: 'Repeat business and referrals' },
        { icon: 'MapPin', value: 'BD', label: 'Nationwide Service', note: 'Serving clients all over Bangladesh' },
        { icon: 'Clock', value: '24/7', label: 'Direct Support', note: 'Fast WhatsApp communication' },
      ],
    },
    estimator: {
      badge: 'Interactive Tool',
      title: 'Estimate Your Project',
      titleHighlight: 'Cost & Timeline',
      description: 'Select your desired services, additional features, and preferred delivery speed for an instant estimate.',
      step1Title: 'Select Base Service',
      services: [
        { id: 'boosting', name: 'Social Media Boosting', desc: 'Targeted multi-platform promotional campaigns' },
        { id: 'web', name: 'Custom Website Design', desc: 'Modern responsive website or landing page' },
        { id: 'turnkey', name: 'Turnkey Full Package', desc: 'Website + full setup + initial boosting campaign' },
      ],
      step2Title: 'Select Desired Features & Enhancements',
      addons: [
        { id: 'responsive', label: '100% Mobile Responsive Architecture' },
        { id: 'seo', label: 'On-Page SEO & Meta Tags Configuration' },
        { id: 'whatsapp', label: 'WhatsApp Direct Chat & Lead Capture' },
        { id: 'pixel', label: 'Meta Pixel & Analytics Setup' },
        { id: 'copywriting', label: 'High-Converting Copywriting' },
        { id: 'speed', label: 'Super-Fast Page Speed Optimization' },
      ],
      summaryTitle: 'Project Estimate Summary',
      timelineLabel: 'Estimated Timeline:',
      featuresLabel: 'Included Features:',
      pricingPolicyLabel: 'Pricing Policy:',
      pricingPolicyValue: 'Affordable & Negotiable',
      sendEstimateBtn: 'Send This Scope via WhatsApp',
      webFormBtn: 'Fill Out Contact Form',
      disclaimer: 'Final pricing confirmed after 1-on-1 free consultation based on custom needs.',
    },
    costEstimator: {
      badge: 'Interactive Tool',
      title: 'Estimate Your Project',
      titleHighlight: 'Cost & Timeline',
      subtitle: 'Select your desired services, additional features, and preferred delivery speed for an instant ballpark estimate.',
      step1Title: '1. Select Base Service',
      step2Title: '2. Select Add-ons & Boosts (Optional)',
      step3Title: '3. Choose Delivery Speed',
      estimatedCost: 'Estimated Investment',
      estimatedDelivery: 'Estimated Timeline',
      days: 'days',
      disclaimer: '*This is an approximate estimate based on typical project scopes. Final quotation will be confirmed after free consultation.',
      orderEstimateWhatsApp: 'Lock In This Estimate on WhatsApp',
      resetBtn: 'Reset Estimator',
      servicesOptions: [
        { id: 'web-starter', name: 'Starter Business Website', priceBdt: 7500, priceUsd: 65, days: 4, desc: 'Single-page or 3-page clean modern business site' },
        { id: 'web-pro', name: 'Custom Web Application / Store', priceBdt: 16000, priceUsd: 140, days: 7, desc: 'Full custom multi-page site with catalog & forms' },
        { id: 'boost-starter', name: 'Social Media Boosting Starter', priceBdt: 2500, priceUsd: 22, days: 2, desc: 'Targeted boosting on Facebook or Instagram' },
        { id: 'boost-pro', name: 'Multi-Platform Growth Blast', priceBdt: 6000, priceUsd: 52, days: 4, desc: 'Comprehensive boosting across 3+ platforms' },
        { id: 'turnkey-combo', name: 'Turnkey Web + Boosting Bundle', priceBdt: 21000, priceUsd: 185, days: 8, desc: 'Complete modern website + launch marketing campaign' },
      ],
      addonOptions: [
        { id: 'seo-pro', name: 'Advanced SEO & Google Search Console Setup', priceBdt: 2500, priceUsd: 22, desc: 'Keyword research and Google site indexation' },
        { id: 'speed-ultra', name: 'Ultra-Fast Speed & Asset Optimization', priceBdt: 1500, priceUsd: 14, desc: 'Sub-second caching & image compression' },
        { id: 'pixel-analytics', name: 'Meta Pixel & Google Analytics 4 Setup', priceBdt: 1500, priceUsd: 14, desc: 'Event tracking and conversion funnels' },
        { id: 'multilingual', name: 'Bangla + English Dual-Language Setup', priceBdt: 2000, priceUsd: 18, desc: 'Seamless 1-click language switcher across all pages' },
        { id: 'priority-support', name: '3 Months Extended Maintenance & Support', priceBdt: 3500, priceUsd: 30, desc: 'Priority fixes, updates and security monitoring' },
      ],
      speedOptions: [
        { id: 'standard', name: 'Standard Delivery', multiplier: 1.0, desc: 'Normal quality-assured sprint schedule' },
        { id: 'express', name: 'Express Fast-Track (25% faster)', multiplier: 1.2, desc: 'Priority queue with daily milestone updates' },
        { id: 'urgent', name: 'Urgent Rush Delivery (50% faster)', multiplier: 1.4, desc: 'Overnight dedicated developer sprint' },
      ],
    },
    cta: {
      badge: 'Ready to Scale?',
      title: 'Ready to Accelerate Your',
      titleHighlight: 'Digital Growth & Sales?',
      description: 'Contact AK Boosting & Web Developer today for a free project consultation and transparent quotation. Let us build your digital success together.',
      startProjectBtn: 'Get Free Project Quote',
      whatsappBtn: 'Message Directly on WhatsApp',
      primaryBtn: 'Get Free Project Quote',
      guarantee: 'Fast response within minutes • 100% Client Satisfaction Guaranteed',
    },
    ctaBanner: {
      badge: 'Ready to Scale?',
      title: 'Ready to Accelerate Your',
      titleHighlight: 'Digital Growth & Sales?',
      description: 'Contact AK Boosting & Web Developer today for a free project consultation and transparent quotation. Let us build your digital success together.',
      primaryBtn: 'Get Free Project Quote',
      whatsappBtn: 'Message Directly on WhatsApp',
      guarantee: 'Fast response within minutes • 100% Client Satisfaction Guaranteed',
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know About',
      titleHighlight: 'Our Services',
      description: 'Got questions? We have clear, straightforward answers about our web development and boosting process.',
      subtitle: 'Got questions? We have clear, straightforward answers about our web development and boosting process.',
      categories: [
        { id: 'all', label: 'All FAQs' },
        { id: 'boosting', label: 'Boosting & Promotion' },
        { id: 'web', label: 'Web Development' },
        { id: 'pricing', label: 'Pricing & Process' },
      ],
      stillQuestions: 'Have a specific question not covered here?',
      contactSupport: 'Ask Us Directly on WhatsApp',
      items: [
        {
          id: 'faq-1',
          category: 'boosting',
          question: 'How does social media boosting work and which platforms do you support?',
          answer:
            'We run precision ad campaigns and organic promotion on Facebook, YouTube, Instagram, TikTok, and Snapchat. We configure demographic targeting (location, age, gender, interests) to ensure your promotions reach active potential buyers rather than random audiences.',
        },
        {
          id: 'faq-2',
          category: 'web',
          question: 'How long does it take to design and develop a custom website?',
          answer:
            'A standard landing page or business portfolio usually takes 3 to 5 business days. More complex web applications, product storefronts, or custom portals typically require 6 to 10 days. We provide clear milestone updates throughout.',
        },
        {
          id: 'faq-3',
          category: 'pricing',
          question: 'What are your payment terms and which payment methods do you accept?',
          answer:
            'We offer transparent, milestone-based payment terms (e.g. 50% advance to initiate work and 50% upon final client approval and delivery). We accept bKash, Nagad, Rocket, Bank Transfer, and International cards.',
        },
        {
          id: 'faq-4',
          category: 'boosting',
          question: 'Is social media boosting safe for my page, channel, or ad account?',
          answer:
            'Yes, 100%. We strictly comply with official platform advertising guidelines and policies. We never use shady methods or fake automated bots that could risk your account integrity.',
        },
        {
          id: 'faq-5',
          category: 'web',
          question: 'Will my website be mobile-friendly and fast loading?',
          answer:
            'Absolutely. Every website we build is 100% mobile-responsive, tested across modern smartphones, tablets, and desktops, and optimized for sub-second loading speeds even on 3G/4G networks.',
        },
        {
          id: 'faq-6',
          category: 'pricing',
          question: 'Do you provide support and maintenance after the project is delivered?',
          answer:
            'Yes. All projects come with free post-delivery support for bug fixes and basic adjustments. We also offer extended monthly maintenance and ongoing campaign optimization packages.',
        },
      ],
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Let’s Discuss Your Next Project &',
      titleHighlight: 'Grow Your Business',
      description: 'Have a project in mind or need expert advice? Reach out directly via WhatsApp or submit the inquiry form below.',
      subtitle: 'Have a project in mind or need expert advice? Reach out directly via WhatsApp or submit the inquiry form below.',
      infoTitle: 'Official Contact Information',
      infoSubtitle: 'Reach us through any of our official verified channels.',
      businessNameLabel: 'Business Name',
      phoneLabel: 'WhatsApp & Direct Call',
      emailLabel: 'Email Address',
      hoursLabel: 'Working Hours',
      hoursValue: 'Open 24/7 (Instant WhatsApp replies)',
      locationLabel: 'Location & Headquarters',
      socialsLabel: 'Official Social Profiles',
      formTitle: 'Send a Direct Project Inquiry',
      formSubtitle: 'Fill out this form and we will reply within minutes.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. Tanvir Ahmed',
      contactLabel: 'WhatsApp Number or Email *',
      contactPlaceholder: 'e.g. 017XXXXXXXX or yourname@gmail.com',
      serviceLabel: 'Service Required *',
      serviceOption1: 'Social Media Boosting (FB, YT, Insta, TikTok, Snapchat)',
      serviceOption2: 'Custom Web Design & Development',
      serviceOption3: 'Turnkey Web + Boosting Bundle',
      messageLabel: 'Project Details & Goals *',
      messagePlaceholder: 'Tell us briefly about your business, target audience, and what you would like to achieve...',
      submitBtn: 'Send Inquiry via Website',
      whatsappDirectBtn: 'Chat Instantly on WhatsApp',
      guaranteeText: '100% Privacy • No Spam • Fast Response Guaranteed',
      successTitle: 'Inquiry Sent Successfully!',
      successMessage: 'Thank you for reaching out! We have received your project details and will connect with you via WhatsApp/Email shortly.',
      successBtn: 'Send Another Inquiry',
      form: {
        title: 'Send a Direct Project Inquiry',
        nameLabel: 'Your Full Name *',
        namePlaceholder: 'e.g. Tanvir Ahmed',
        emailLabel: 'Email Address',
        emailPlaceholder: 'e.g. yourname@gmail.com',
        phoneLabel: 'WhatsApp Number *',
        phonePlaceholder: 'e.g. 017XXXXXXXX',
        serviceLabel: 'Service Required',
        serviceDefault: 'Social Media Boosting & Promotion',
        budgetLabel: 'Estimated Budget',
        budgetDefault: 'Flexible / Let us discuss',
        messageLabel: 'Project Details & Goals *',
        messagePlaceholder: 'Tell us briefly about your business and goals...',
        submitBtn: 'Submit Inquiry',
        submitting: 'Sending...',
        successTitle: 'Inquiry Received!',
        successMessage: 'Thank you! We will get back to you shortly.',
        sendAnother: 'Send Another Inquiry',
      },
      info: {
        title: 'Official Agency Contact',
        phone: 'Phone & WhatsApp',
        phoneVal: '+880 1345-386833',
        whatsapp: 'WhatsApp Direct',
        whatsappVal: '+880 1345-386833',
        email: 'Official Email',
        emailVal: 'akboostingwebdeveloper@gmail.com',
        location: 'Headquarters',
        locationVal: 'Bangladesh (Nationwide & Global Service)',
        hours: 'Support Hours',
        hoursVal: '24/7 Online Support',
        officialSocials: 'Official Social Channels',
        clickToConnect: 'Click to connect directly',
      },
    },
    newsletter: {
      badge: 'Stay Updated',
      title: 'Get Exclusive Growth Tips &',
      titleHighlight: 'Special Promotional Offers',
      description: 'Subscribe to receive proven social media growth hacks, web design trends, and seasonal discount offers directly to your inbox.',
      benefit1: 'Free Monthly Growth Guide',
      benefit2: 'Exclusive Discounts & Promos',
      interestLabel: 'I am most interested in:',
      interestAll: 'All Updates',
      interestWeb: 'Web Development',
      interestBoosting: 'Social Boosting',
      emailLabel: 'Your Email Address',
      emailPlaceholder: 'Enter your active email (e.g. name@gmail.com)',
      subscribeBtn: 'Subscribe Now',
      subscribing: 'Subscribing...',
      subscribedMsg: 'You are now subscribed to AK updates!',
      privacyNotice: 'We respect your privacy. No spam, ever. Unsubscribe anytime.',
      privacyNote: '🔒 We respect your privacy. Zero spam. Unsubscribe anytime.',
      invalidEmail: 'Please enter a valid email address.',
      successTitle: 'Subscription Confirmed!',
      subscribeAnother: 'Subscribe another email',
      placeholder: 'Enter your email address',
    },
    footer: {
      brandBio: 'AK Boosting & Web Developer delivers high-performance social media marketing and modern web engineering solutions tailored for entrepreneurs, businesses, and creators.',
      quickLinks: 'Quick Links',
      linkHome: 'Home',
      linkAbout: 'About Us',
      linkServices: 'Services',
      linkPortfolio: 'Portfolio',
      linkWhyUs: 'Why Choose Us',
      linkProcess: 'Our Process',
      linkFaq: 'FAQ',
      linkContact: 'Contact Us',
      linkNewsletter: 'Newsletter',
      ourServices: 'Our Services',
      servicesList: [
        'Social Media Boosting (FB, YT, Insta, TikTok, Snapchat)',
        'Custom Web Design & Development',
        'High-Converting Landing Pages',
        'Turnkey Business Setup & SEO',
        'Meta Pixel & Analytics Integration',
      ],
      directContact: 'Direct Contact',
      followConnect: 'Follow & Connect',
      copyright: '© 2021 - 2026 AK Boosting & Web Developer. All rights reserved.',
      verifiedNotice: 'Verified Digital Agency • Established in 2021 • Bangladesh',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      termsOfService: 'Terms of Service',
      topBtn: 'Top',
      privacyTitle: 'Privacy Policy',
      privacyText1: 'At AK Boosting & Web Developer, we respect your privacy and protect all client files and campaign data.',
      privacyText2: 'We never sell or share your contact details with any third parties.',
      termsTitle: 'Terms & Conditions',
      termsText1: 'All services are provided under mutually agreed project scopes and delivery timelines.',
      termsText2: 'Payments are handled securely via established mobile and banking channels.',
      close: 'Close',
      aboutText: 'AK Boosting & Web Developer provides verified social media growth campaigns and modern web solutions.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Services',
      socialTitle: 'Connect',
      rightsReserved: 'All rights reserved.',
      disclaimer: 'Official registered agency in Bangladesh.',
    },
    floatingWhatsApp: {
      tooltip: 'Need quick help? Chat on WhatsApp',
      status: 'Online Now • Replies in < 5 mins',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের পরিচিতি',
      services: 'সার্ভিসসমূহ',
      whyUs: 'কেন আমরা সেরা',
      process: 'কাজের ধাপ',
      portfolio: 'পোর্টফোলিও',
      estimate: 'খরচ ক্যালকুলেটর',
      faq: 'সাধারণ প্রশ্ন',
      contact: 'যোগাযোগ',
      getQuote: 'কোটেশন নিন',
      callNow: 'হোয়াটসঅ্যাপ কল',
      whatsappChat: 'হোয়াটসঅ্যাপ',
      langSwitch: 'English',
    },
    hero: {
      badge: '২০২১ সাল থেকে সক্রিয় • বাংলাদেশ',
      headlinePart1: 'টার্গেটেড সোশ্যাল মিডিয়া বুস্টিং এবং',
      headlineHighlight: 'আধুনিক প্রফেশনাল ওয়েবসাইট',
      headlinePart2: 'তৈরির বিশ্বস্ত ঠিকানা',
      subheadline:
        'আমরা ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাটে সঠিক অডিয়েন্স টার্গেট করে বুস্টিং এবং ব্যবসার প্রসারে দ্রুতগতির আধুনিক ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি করি।',
      getQuoteBtn: 'ফ্রি কোটেশন নিন',
      exploreServicesBtn: 'সার্ভিসসমূহ দেখুন',
      whatsappDirectBtn: 'হোয়াটসঅ্যাপে কথা বলুন',
      boostingPlatformsLabel: 'সাপোর্টেড বুস্টিং প্ল্যাটফর্মসমূহ',
      trustTags: {
        professional: 'দক্ষ ডেভেলপার ও ট্রেইন্ড টিম',
        reliable: '১০০% নিরাপদ ও কার্যকর বুস্টিং',
        affordable: 'সাশ্রয়ী ও ন্যায্য মূল্য',
        experience: '২০২১ সাল থেকে বিশ্বস্ততার সাথে সক্রিয়',
      },
      mockup: {
        clientActive: '৫০০+ সফল ক্লায়েন্ট ও প্রজেক্ট',
        growthMetric: '+৩৮০% সেলস ও রিচ বৃদ্ধি',
        tabWeb: 'ওয়েব আর্কিটেকচার',
        tabBoosting: 'মাল্টি-চ্যানেল বুস্টিং',
        tabAnalytics: 'গ্রোথ অ্যানালিটিক্স',
        supportedPlatforms: 'ফেসবুক • ইউটিউব • ইনস্টাগ্রাম • টিকটক • স্ন্যাপচ্যাট',
        guaranteed: 'নিরাপদ, টার্গেটেড ও আসল অডিয়েন্স',
        activeCampaign: 'লাইভ ক্যাম্পেইন মনিটরিং',
        targetPromo: 'লোকেশন ও অডিয়েন্স নিখুঁত টার্গেটিং',
        conversionRate: 'গড়ে ৪.৮ গুণ বেশি সেলস কনভার্সন',
        instantConsultation: 'দ্রুত হোয়াটসঅ্যাপ পরামর্শ (৫ মিনিটের মধ্যে)',
      },
    },
    trustBar: {
      tag: '২০২১ সাল থেকে বিশ্বস্ত এজেন্সি',
      title: 'বিশ্বাস, নির্ভরযোগ্যতা ও কার্যকর ফলাফলের প্রতীক',
      subtitle: 'কেন ৫০০+ উদ্যোক্তা ও প্রতিষ্ঠান তাদের ডিজিটাল সম্প্রসারণে একে বুস্টিং ও ওয়েব ডেভেলপারকে বেছে নেন',
      description: 'আমরা সুপরিকল্পিত সোশ্যাল মিডিয়া মার্কেটিং এবং আধুনিক ওয়েব ইঞ্জিনিয়ারিংয়ের সমন্বয়ে নিশ্চিত ফলাফল পৌঁছে দিই।',
      badgeFoundedLabel: 'প্রতিষ্ঠা সাল',
      badgeFoundedValue: '২০২১ (৫+ বছর)',
      badgeLocationLabel: 'অপারেশনাল বেস',
      badgeLocationValue: 'বাংলাদেশ (সারাদেশব্যাপী ও গ্লোবাল)',
      badgeServicesLabel: 'আমাদের বিশেষত্ব',
      badgeServicesValue: 'ওয়েব + বুস্টিং প্যাকেজ',
      items: {
        satisfaction: {
          title: '৯৯% ক্লায়েন্ট সন্তুষ্টি',
          desc: 'সফল ক্যাম্পেইন ও গ্রাহকপ্রিয় ওয়েবসাইটের প্রমাণিত ট্র্যাক রেকর্ড।',
        },
        speed: {
          title: 'দ্রুত ডেলিভারি টাইমলাইন',
          desc: 'নিখুঁত কোয়ালিটি বজায় রেখে নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন।',
        },
        pricing: {
          title: 'স্বচ্ছ ও সাশ্রয়ী মূল্য',
          desc: 'কোনো লুকানো চার্জ নেই। ছোট-বড় সব ব্যবসার জন্য উপযোগী বাজেট।',
        },
        support: {
          title: '২৪/৭ সার্বক্ষণিক সাপোর্ট',
          desc: 'সরাসরি ডেভেলপারের সাথে যোগাযোগ এবং যে কোনো প্রয়োজনে তাৎক্ষণিক সমাধান।',
        },
      },
    },
    about: {
      badge: 'আমাদের পরিচিতি',
      title: 'আপনার ডিজিটাল সাফল্য ও',
      titleHighlight: 'প্রযুক্তির বিশ্বস্ত সহযাত্রী',
      founderTitle: 'ফুল-স্ট্যাক ডেভেলপার ও গ্রোথ স্ট্র্যাটেজিস্ট',
      founderName: 'একে টিম ও ডেভেলপার্স',
      founderBio: '৫ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন ওয়েব ডেভেলপার ও ডিজিটাল মার্কেটিং এক্সপার্ট। ক্লায়েন্টের লক্ষ্য অনুযায়ী কাস্টম ওয়েবসাইট তৈরি এবং সফল সোশ্যাল ক্যাম্পেইন পরিচালনায় নিবেদিত।',
      consultationBtn: 'হোয়াটসঅ্যাপে সরাসরি কথা বলুন',
      missionLabel: 'আমাদের লক্ষ্য (Mission)',
      missionText: 'প্রতিটি উদ্যোক্তা, ছোট-বড় ব্যবসা ও ক্রিয়েটরের জন্য আধুনিক প্রযুক্তি ও সোশ্যাল মিডিয়া গ্রোথ সহজলভ্য, সাশ্রয়ী ও লাভজনক করা।',
      visionLabel: 'আমাদের ভিশন (Vision)',
      visionText: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ও নির্ভরযোগ্য ডিজিটাল সার্ভিস এজেন্সি হিসেবে প্রতিষ্ঠিত হওয়া, যা আধুনিক প্রযুক্তির সাহায্যে প্রতিটি ব্যবসাকে এগিয়ে নিয়ে যাবে।',
      highlights: {
        practical: 'কার্যকর ও পরীক্ষিত ফলাফল',
        directComm: 'সরাসরি ১-অন-১ যোগাযোগ',
        modernTech: 'লেটেস্ট হাই-স্পিড টেকনোলজি',
        reliableDelivery: 'নির্দিষ্ট সময়ে দায়িত্বশীল ডেলিভারি',
      },
      paragraph1: '২০২১ সালে বাংলাদেশে প্রতিষ্ঠিত, একে বুস্টিং অ্যান্ড ওয়েব ডেভেলপার (AK Boosting & Web Developer) যাত্রা শুরু করে ডিজিটাল প্রমোশন ও আধুনিক ওয়েব প্রযুক্তির সমন্বয় ঘটানোর লক্ষ্য নিয়ে।',
      paragraph2: 'আমরা ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাটের টার্গেটেড প্রমোশনের পাশাপাশি প্রফেশনাল ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট, ল্যান্ডিং পেজ ও পোর্টফোলিও ডিজাইন করে থাকি।',
      paragraph3: '৫০০+ সফল প্রজেক্ট ও ৫+ বছরের বাস্তব অভিজ্ঞতার সাথে আমরা প্রতিটি ক্লায়েন্টের সাথে স্বচ্ছ মূল্য ও সরাসরি যোগাযোগের মাধ্যমে দীর্ঘমেয়াদী পার্টনারশিপ গড়ে তুলি।',
      values: {
        dependableTitle: 'নির্ভরযোগ্য ও নিরাপদ',
        dependableDesc: 'আমরা প্ল্যাটফর্মের অফিসিয়াল নিয়ম মেনে নিরাপদ উপায়ে আপনার পেইজ ও ডেটা সুরক্ষিত রাখি।',
        resultsTitle: 'ফলাফলমুখী কাজের পরিকল্পনা',
        resultsDesc: 'প্রতিটি ক্যাম্পেইন ও কোডের লক্ষ্য থাকে আপনার অডিয়েন্স রিচ, এনগেজমেন্ট ও সেলস বৃদ্ধি করা।',
        clientFirstTitle: 'ক্লায়েন্ট সন্তুষ্টি প্রথম',
        clientFirstDesc: 'আমরা ক্লায়েন্টের কাজকে নিজের কাজ মনে করে সর্বোচ্চ যত্ন ও আন্তরিকতার সাথে পরামর্শ দিই।',
      },
      learnMoreBtn: 'সার্ভিসসমূহ জানুন',
      description1: '২০২১ সালে প্রতিষ্ঠিত, একে বুস্টিং অ্যান্ড ওয়েব ডেভেলপার (AK Boosting & Web Developer) যাত্রা শুরু করে প্রতিটি ব্যবসা, উদ্যোক্তা ও ক্রিয়েটরের জন্য আধুনিক প্রযুক্তি ও সোশ্যাল মিডিয়া গ্রোথ সহজলভ্য করার লক্ষ্য নিয়ে।',
      description2: 'আমরা ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাটের টার্গেটেড প্রমোশনের পাশাপাশি প্রফেশনাল ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট সমাধান প্রদান করি। আপনার ব্যবসা ছোট হোক বা বড়—আমাদের মূল লক্ষ্য আপনার কাঙ্ক্ষিত ফলাফল নিশ্চিত করা।',
      missionTitle: 'আমাদের লক্ষ্য (Mission)',
      missionDesc: 'সাশ্রয়ী ও আধুনিক ডিজিটাল সার্ভিসের মাধ্যমে ব্যবসা ও উদ্যোক্তাদের অনলাইনে শক্তিশালী ভিত্তি এবং আসল গ্রাহক বৃদ্ধি করতে সাহায্য করা।',
      visionTitle: 'আমাদের ভিশন (Vision)',
      visionDesc: 'বাংলাদেশের অন্যতম নির্ভরযোগ্য ও কার্যকরী ডিজিটাল এজেন্সি হিসেবে প্রতিষ্ঠিত হওয়া, যা আধুনিক প্রযুক্তির মাধ্যমে সবার মুখে হাসি ফোটাবে।',
      card: {
        name: 'একে টিম ও ডেভেলপার্স',
        role: 'ফুল-স্ট্যাক ডেভেলপার্স ও গ্রোথ স্ট্র্যাটেজিস্ট',
        badge: 'ভেরিফায়েড এজেন্সি ও ডিজিটাল পার্টনার',
        chatBtn: 'হোয়াটসঅ্যাপে কথা বলুন',
        stats: {
          experience: 'বছরের অভিজ্ঞতা',
          projects: 'সফল প্রজেক্ট',
          rating: 'ক্লায়েন্ট রেটিং',
        },
      },
    },
    services: {
      badge: 'আমাদের সার্ভিসসমূহ',
      title: 'আপনার ব্যবসার প্রসারে বিশেষায়িত',
      titleHighlight: 'প্রিমিয়াম সার্ভিসেস',
      description: 'আপনার ব্যবসাকে এগিয়ে নিতে আমাদের সর্বোচ্চ চাহিদাসম্পন্ন ডিজিটাল সেবাগুলো ঘুরে দেখুন।',
      subtitle: 'আপনার ব্যবসাকে এগিয়ে নিতে আমাদের সর্বোচ্চ চাহিদাসম্পন্ন ডিজিটাল সেবাগুলো ঘুরে দেখুন।',
      popularTag: 'সবচেয়ে জনপ্রিয়',
      supportedPlatformsLabel: 'সাপোর্টেড প্ল্যাটফর্মসমূহ:',
      includedTitle: 'এই সার্ভিসে যা যা পাবেন:',
      learnMoreBtn: 'বিস্তারিত জানুন',
      requestQuoteBtn: 'এটির কোটেশন নিন',
      modal: {
        whatIncluded: 'সার্ভিস ফিটিংস ও বৈশিষ্ট্য:',
        whyChooseThis: 'কেন এই সার্ভিসটি আপনার জন্য সেরা:',
        benefits: [
          'একে টিমের সাথে সরাসরি ওয়ান-টু-ওয়ান স্ট্র্যাটেজি আলোচনা',
          'দ্রুত ডেলিভারি ও নিয়মিত প্রোগ্রেস আপডেট',
          'স্বচ্ছ রিপোর্টিং এবং লাইভ ফলাফল প্রদর্শন',
          'ডেলিভারি পরবর্তী সার্বক্ষণিক সাপোর্ট ও ফ্রি পরামর্শ',
        ],
        close: 'উইন্ডো বন্ধ করুন',
        orderViaWhatsApp: 'হোয়াটসঅ্যাপে অর্ডার করুন',
        getEstimate: 'আনুমানিক খরচ হিসাব করুন',
      },
      items: [
        {
          id: 'social-media-boosting',
          number: '০১',
          title: 'সোশ্যাল মিডিয়া বুস্টিং ও প্রমোশন',
          tagline: 'মাল্টি-চ্যানেল টার্গেটেড মার্কেটিং ও রিচ বৃদ্ধি',
          description:
            'ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাটে হাইপার-টার্গেটেড বিজ্ঞাপন ক্যাম্পেইন। আমরা আপনার কাঙ্ক্ষিত বয়স, লোকেশন ও আগ্রহ অনুযায়ী অডিয়েন্স সেট করে সেলস ও ব্র্যান্ড ভ্যালু বাড়াই।',
          iconName: 'Rocket',
          features: [
            'নিখুঁত লোকেশন, বয়স ও আগ্রহভিত্তিক অডিয়েন্স টার্গেটিং',
            'আসল ফলোয়ার্স, লাইক, ভিউজ ও ওয়াচ টাইম বৃদ্ধি',
            'বিস্তারিত অ্যানালিটিক্স ও ক্যাম্পেইন রিপোর্ট',
            'অ্যাড অ্যাকাউন্ট অপ্টিমাইজেশন ও সাশ্রয়ী বাজেট প্ল্যানিং',
            '১০০% নিরাপদ ও প্ল্যাটফর্ম পলিসি মেনে ক্যাম্পেইন রান',
          ],
          fullDetails:
            'আমাদের বুস্টিং ক্যাম্পেইনে ফেক বট বা অকেজো ট্রাফিকের কোনো জায়গা নেই। আমরা প্রতিটি টাকা সঠিক ক্রেতার কাছে পৌঁছাতে ব্যয় করি, যাতে আপনার ব্যবসার সেলস নিশ্চিতভাবে বৃদ্ধি পায়।',
        },
        {
          id: 'web-development',
          number: '০২',
          title: 'কাস্টম ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
          tagline: 'দ্রুতগতির রেসপনসিভ ওয়েবসাইট ও পোর্টাল',
          description:
            'আধুনিক প্রযুক্তিতে তৈরি কাস্টম ওয়েব অ্যাপ্লিকেশন, বিজনেস ওয়েবসাইট, প্রোডাক্ট ল্যান্ডিং পেজ ও পার্সোনাল পোর্টফোলিও। যেকোনো মোবাইল বা কম্পিউটারে সুপার-ফাস্ট লোডিং ও আকর্ষণীয় লুক।',
          iconName: 'Code',
          features: [
            'যেকোনো মোবাইল, ট্যাবলেট ও ল্যাপটপে ১০০% রেসপনসিভ',
            'ইউজার-ফ্রেন্ডলি মডার্ন UI/UX ডিজাইন ও স্মুথ অ্যানিমেশন',
            'ক্লিন, সিকিউর ও সহজে ম্যানেজ করার উপযোগী কোড',
            'অন-পেজ এসইও (SEO) ও মেটা ট্যাগ কনফিগারেশন',
            'দ্রুত লোডিং স্পিড ও আধুনিক ক্যাশিং অপ্টিমাইজেশন',
          ],
          fullDetails:
            'আপনার ওয়েবসাইট হলো ইন্টারনেটে আপনার ২৪ ঘণ্টার সেলস রিপ্রেজেন্টেটিভ। আমরা প্রতিটি পেজ এমনভাবে সাজাই যাতে ভিজিটর দেখামাত্রই বিশ্বাস করে এবং সহজেই মেসেজ বা অর্ডার করতে পারে।',
        },
        {
          id: 'turnkey-business-solutions',
          number: '০৩',
          title: 'টার্নকি ডিজিটাল বিজনেস সেটআপ ও মডার্নাইজেশন',
          tagline: 'ডোমেইন, হোস্টিং, ট্র্যাকিং পিক্সেল ও রিডিজাইন',
          description:
            'ব্যবসার পূর্ণাঙ্গ ডিজিটাল অবকাঠামো সেটআপ। ডোমেইন-হোস্টিং কনফিগারেশন, মেটা পিক্সেল ও গুগল অ্যানালিটিক্স সেটআপ, পুরাতন ওয়েবসাইট রিডিজাইন এবং সিকিউরিটি ওভারহল।',
          iconName: 'Globe',
          features: [
            'ডোমেইন সেটআপ, এসএসএল সিকিউরিটি ও ক্লাউড হোস্টিং ডেপ্লয়মেন্ট',
            'মেটা পিক্সেল, গুগল অ্যানালিটিক্স ও কনভার্সন ট্র্যাকিং সেটআপ',
            'পুরাতন ওয়েবসাইটের বাগ ফিক্স, রিডিজাইন ও স্পিড বৃদ্ধি',
            'হোয়াটসঅ্যাপ ডিরেক্ট চ্যাট ও অটোমেটেড লিড ক্যাপচার ফর্ম',
            'লঞ্চ-পরবর্তী নিয়মিত ব্যাকআপ ও টেকনিক্যাল মেইনটেন্যান্স',
          ],
          fullDetails:
            'ডিজিটাল উপস্থিতির সম্পূর্ণ দায়িত্ব আমাদের ওপর ছেড়ে দিন। ডোমেইন থেকে শুরু করে পিক্সেল ট্র্যাকিং ও ওয়েবসাইট লঞ্চ—সবকিছু রেডি করে আমরা আপনার হাতে তুলে দেব।',
        },
      ],
    },
    whyChooseUs: {
      badge: 'আমাদের বিশেষত্ব',
      title: 'কেন বেছে নেবেন একে বুস্টিং ও',
      titleHighlight: 'ওয়েব ডেভেলপার?',
      description: 'আমরা ডিজিটাল স্ট্র্যাটেজি ও সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সমন্বয়ে পরিমাপযোগ্য অগ্রগতি নিশ্চিত করি।',
      subtitle: 'আমরা ডিজিটাল স্ট্র্যাটেজি ও সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সমন্বয়ে পরিমাপযোগ্য অগ্রগতি নিশ্চিত করি।',
      items: [
        {
          number: '০১',
          title: 'দীর্ঘদিনের বাস্তব অভিজ্ঞতা',
          description: '২০২১ সাল থেকে বিশ্বস্ততার সাথে শতাধিক ব্যবসাকে সফল ডিজিটাল সমাধান প্রদান করে আসছি।',
          iconName: 'ShieldCheck',
        },
        {
          number: '০২',
          title: 'কাস্টমাইজড স্ট্র্যাটেজি',
          description: 'প্রতিটি ব্যবসার লক্ষ্য আলাদা। আমরা আপনার নিস ও কাস্টমার অনুযায়ী বুস্টিং ও ওয়েবসাইট প্ল্যান করি।',
          iconName: 'Target',
        },
        {
          number: '০৩',
          title: 'সাশ্রয়ী ও স্বচ্ছ বাজেট',
          description: 'কোনো লুকানো চার্জ নেই। ছোট, মাঝারি ও বড় সব ধরনের উদ্যোক্তাদের জন্য মানানসই প্যাকেজ।',
          iconName: 'Coins',
        },
        {
          number: '০৪',
          title: 'সরাসরি ১-অন-১ যোগাযোগ',
          description: 'কোনো মধ্যস্থতাকারী ছাড়াই সরাসরি ডেভেলপারের সাথে কথা বলে নিজের পছন্দমতো কাজ বুঝিয়ে দিন।',
          iconName: 'Users',
        },
        {
          number: '০৫',
          title: 'নির্দিষ্ট সময়ে ডেলিভারি',
          description: 'আমরা সময়ের মূল্য বুঝি। প্রতিটি প্রজেক্ট নির্ধারিত ডেডলাইনের মধ্যেই সম্পন্ন করা হয়।',
          iconName: 'Calendar',
        },
        {
          number: '০৬',
          title: 'আফটার-সেলস নির্ভরযোগ্য সাপোর্ট',
          description: 'ডেলিভারির পরেও যে কোনো টেকনিক্যাল সমস্যা বা পরামর্শের জন্য আমাদের টিম সবসময় পাশে থাকে।',
          iconName: 'Headphones',
        },
      ],
    },
    process: {
      badge: 'কাজের ধাপসমূহ',
      title: 'আমাদের সফল ও স্বচ্ছ',
      titleHighlight: '৪-ধাপের কর্মপদ্ধতি',
      description: 'প্রাথমিক আলোচনা থেকে শুরু করে ডেলিভারি ও প্রবৃদ্ধি পর্যন্ত একটি সহজ ও গোছানো প্রক্রিয়া।',
      subtitle: 'প্রাথমিক আলোচনা থেকে শুরু করে ডেলিভারি ও প্রবৃদ্ধি পর্যন্ত একটি সহজ ও গোছানো প্রক্রিয়া।',
      stepPrefix: 'ধাপ',
      steps: [
        {
          step: 'ধাপ ০১',
          number: '০১',
          title: 'পরামর্শ ও পরিকল্পনা',
          description:
            'হোয়াটসঅ্যাপ বা কলে আপনার ব্যবসার লক্ষ্য, টার্গেট অডিয়েন্স ও বাজেট বিস্তারিত আলোচনা করে সেরা স্ট্র্যাটেজি নির্ধারণ করি।',
          iconName: 'MessageSquare',
          highlight: 'ফ্রি স্ট্র্যাটেজি রোডম্যাপ',
        },
        {
          step: 'ধাপ ০২',
          number: '০২',
          title: 'ডিজাইন ও স্ট্রাকচার তৈরি',
          description:
            'ক্যাম্পেইন প্যারামিটার বা ওয়েবসাইটের লেআউট ও ওয়্যারফ্রেম প্রস্তুত করে আপনার সাথে সমন্বয় ও কনফার্ম করি।',
          iconName: 'Lightbulb',
          highlight: 'স্পষ্ট কাজের পরিধি ও চুক্তি',
        },
        {
          step: 'ধাপ ০৩',
          number: '০৩',
          title: 'ডেভেলপমেন্ট ও বুস্টিং এক্সেকিউশন',
          description:
            'আমাদের টিম আধুনিক কোডিং স্ট্যান্ডার্ডে ওয়েবসাইট ডেভেলপ করে কিংবা টার্গেটেড সোশ্যাল বুস্টিং ক্যাম্পেইন লাইভ করে।',
          iconName: 'CodeXml',
          highlight: 'নিয়মিত প্রগ্রেস আপডেট',
        },
        {
          step: 'ধাপ ০৪',
          number: '০৪',
          title: 'রিভিউ, ডেলিভারি ও গ্রোথ',
          description:
            'আপনার অনুমোদনের পর সম্পূর্ণ প্রজেক্ট হ্যান্ডওভার করা হয় এবং পরবর্তী উন্নতির জন্য প্রয়োজনীয় সাপোর্ট দেওয়া হয়।',
          iconName: 'TrendingUp',
          highlight: 'ডেলিভারি পরবর্তী গাইডলাইন',
        },
      ],
    },
    portfolio: {
      badge: 'আমাদের পোর্টফোলিও',
      title: 'বাস্তবায়িত প্রজেক্ট ও',
      titleHighlight: 'ক্লায়েন্টদের সফলতা',
      description: 'আমাদের তৈরি কিছু উল্লেখযোগ্য ওয়েবসাইট ও সোশ্যাল বুস্টিং ক্যাম্পেইনের বাস্তব ফলাফল দেখুন।',
      subtitle: 'আমাদের তৈরি কিছু উল্লেখযোগ্য ওয়েবসাইট ও সোশ্যাল বুস্টিং ক্যাম্পেইনের বাস্তব ফলাফল দেখুন।',
      allFilter: 'সব প্রজেক্ট',
      keyFeaturesLabel: 'প্রধান বৈশিষ্ট্য:',
      provenResultsLabel: 'প্রমাণিত ফলাফল:',
      viewCaseStudy: 'কেস স্টাডি দেখুন',
      modal: {
        category: 'প্রজেক্ট ক্যাটাগরি',
        overview: 'প্রজেক্টের বিবরণ ও লক্ষ্য',
        techStack: 'ব্যবহৃত প্রযুক্তি ও স্ট্র্যাটেজি',
        outcomes: 'ক্লায়েন্টের অর্জিত ফলাফল',
        contactToBuildSimilar: 'একে টিমের সাথে অনুরূপ প্রজেক্ট তৈরি করুন',
        close: 'উইন্ডো বন্ধ করুন',
      },
      items: [
        {
          id: 'proj-1',
          title: 'এলিট কমার্স - ফ্যাশন ব্র্যান্ডের আধুনিক ই-কমার্স',
          category: 'Websites',
          description:
            'প্রিমিয়াম ক্লথিং ব্র্যান্ডের জন্য রিঅ্যাক্ট ও টেইলউইন্ডে তৈরি সুপারফাস্ট অনলাইন শপ ও বিকাশ/নগদ অটো-চেকআউট।',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          tags: ['React', 'Tailwind CSS', 'Mobile First', 'Fast Checkout'],
          features: [
            'সরাসরি হোয়াটসঅ্যাপে অর্ডার ফরওয়ার্ডিং ব্যবস্থা',
            '৪জি মোবাইলে ৮০০ মিলি-সেকেন্ডের নিচে ফাস্ট লোডিং',
            'মেটা পিক্সেল ট্র্যাকিং ইন্টিগ্রেশন',
          ],
          results: 'লঞ্চের প্রথম ৩০ দিনে সেলস ৪.২ গুণ বৃদ্ধি পেয়েছে।',
          demoUrl: '#',
        },
        {
          id: 'proj-2',
          title: 'ভাইরাল গ্যাজেট ক্যাম্পেইন - মাল্টি-প্ল্যাটফর্ম বুস্টিং',
          category: 'Digital Promotion',
          description:
            'কনজিউমার ইলেকট্রনিক্স ব্র্যান্ডের জন্য ফেসবুক ভিডিও, ইনস্টাগ্রাম ও টিকটক জুড়ে সমন্বিত ভাইরাল প্রমোশন।',
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
          tags: ['Facebook Ads', 'YouTube Reach', 'TikTok Trends', 'Audience Growth'],
          features: [
            'ঢাকা, চট্টগ্রাম ও সিলেট কেন্দ্রিক টার্গেটেড প্রমোশন',
            'অর্গানিক হুক অপ্টিমাইজেশন ও ভাইরাল হ্যাশট্যাগিং',
            '১২,০০০+ অর্গানিক লিড ক্লিক ও মেসেজ কনভার্সন',
          ],
          results: '৮৫০,০০০+ সক্রিয় মানুষের কাছে ব্র্যান্ডের পৌঁছানো নিশ্চিত হয়েছে।',
          demoUrl: '#',
        },
        {
          id: 'proj-3',
          title: 'মেডিকেয়ার ডায়াগনস্টিক - ক্লিনিক পোর্টাল ও অনলাইন বুকিং',
          category: 'Business Projects',
          description:
            'ডায়াগনস্টিক সেন্টারের জন্য ডাক্তার শিডিউল, টেস্ট তালিকা ও পেশেন্ট বুকিং সিস্টেম সম্বলিত ওয়েবসাইট।',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
          tags: ['Full-Stack', 'Booking System', 'SEO Optimized', 'HIPAA Compliant'],
          features: [
            'ইন্টারেক্টিভ ডাক্তার অ্যাপয়েন্টমেন্ট বুকিং ফর্ম',
            'মোবাইল-বান্ধব টেস্ট রিপোর্ট অনুসন্ধান পেজ',
            'গুগল লোকাল সার্চে ১ম পেজে র‌্যাঙ্কিং',
          ],
          results: 'অনলাইন অ্যাপয়েন্টমেন্ট বুকিং ২১০% বৃদ্ধি পেয়েছে।',
          demoUrl: '#',
        },
        {
          id: 'proj-4',
          title: 'প্রাইম এস্টেট - লাক্সারি প্রপার্টি ল্যান্ডিং পেজ',
          category: 'Landing Pages',
          description:
            'রিয়েল এস্টেট কোম্পানির লাক্সারি অ্যাপার্টমেন্ট বিক্রির জন্য তৈরি হাই-কনভার্সন লিড কালেকশন পেজ।',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
          tags: ['Landing Page', 'High Conversion', 'Lead Capture', 'Modern UI'],
          features: [
            'সেলস টিমের হোয়াটসঅ্যাপে সরাসরি কল বা চ্যাট বাটন',
            'ফ্লোর প্ল্যান ভিউয়ার ও ইন্টারেক্টিভ স্পেক্স ক্যালকুলেটর',
            '৯.৪% অপ্ট-ইন কনভার্সন রেট অর্জন',
          ],
          results: '৩৪০০+ ভেরিফায়েড ক্রেতার সরাসরি লিড অর্জিত হয়েছে।',
          demoUrl: '#',
        },
        {
          id: 'proj-5',
          title: 'টেকহাব এজেন্সি - কর্পোরেট ওয়েব ইনফ্রাস্ট্রাকচার',
          category: 'Websites',
          description:
            'কর্পোরেট এজেন্সির জন্য বাংলা-ইংরেজি দ্বিভাষিক ওয়েবসাইট, ক্লায়েন্ট পোর্টাল ও লিড ম্যানেজমেন্ট।',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
          tags: ['Corporate', 'TypeScript', 'Multi-Language', 'Modern UI'],
          features: [
            '১-ক্লিকে বাংলা ও ইংরেজি ভাষা পরিবর্তনের সুবিধা',
            'ইন্টারেক্টিভ খরচ ক্যালকুলেটর ও অটোমেটেড ফর্ম',
            'ক্লায়েন্ট ফিডব্যাক ও রিভিউ শোকেস',
          ],
          results: 'অর্গানিক ট্রাফিকের মাধ্যমে ক্লায়েন্ট পাওয়ার খরচ ৪৫% কমেছে।',
          demoUrl: '#',
        },
        {
          id: 'proj-6',
          title: 'গ্যাজেটজোন - সিঙ্গেল প্রোডাক্ট ভাইরাল ল্যান্ডিং পেজ',
          category: 'Landing Pages',
          description:
            'টিকটক ও ফেসবুক ট্রাফিকের জন্য ক্যাশ অন ডেলিভারি ও কাউন্টডাউন টাইমারযুক্ত সুপারফাস্ট পেজ।',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          tags: ['Single Product', 'Viral Funnel', 'Cash on Delivery', 'Speed'],
          features: [
            '২-ক্লিকে ক্যাশ অন ডেলিভারি অর্ডার ফরম',
            'কাস্টমার রিভিউ ক্যারোসেল ও গ্যারান্টি ব্যাজ',
            'স্লো নেটওয়ার্কেও নিমিষে লোড হওয়ার বিশেষ অপ্টিমাইজেশন',
          ],
          results: 'পেইড ট্রাফিকে কনভার্সন রেট ১.৮% থেকে বেড়ে ৬.৪% হয়েছে।',
          demoUrl: '#',
        },
      ],
    },
    stats: {
      tag: 'প্রমাণিত মেট্রিক্স • বাংলাদেশ ও আন্তর্জাতিক',
      badge: 'আমাদের অর্জনসমূহ',
      title: 'আমাদের কাজের ধারাবাহিকতা ও',
      titleHighlight: 'বাস্তব সাফল্যের পরিসংখ্যান',
      subtitle: 'বিগত বছরগুলোতে সততা ও কাজের কোয়ালিটির মাধ্যমে আমরা ক্লায়েন্টদের দীর্ঘস্থায়ী আস্থা অর্জন করেছি।',
      numbers: {
        completed: '৫০০+',
        completedLabel: 'সফল প্রজেক্ট সম্পন্ন',
        completedSub: 'ওয়েবসাইট, বুস্টিং ক্যাম্পেইন ও ল্যান্ডিং পেজ',
        satisfaction: '৯৯%',
        satisfactionLabel: 'ক্লায়েন্ট সন্তুষ্টি রেট',
        satisfactionSub: 'পজিটিভ রিভিউ ও বারবার সার্ভিস গ্রহণ',
        platforms: '৫+',
        platformsLabel: 'প্রধান সোশ্যাল চ্যানেল',
        platformsSub: 'ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাট',
        support: '২৪/৭',
        supportLabel: 'সার্বক্ষণিক সাপোর্ট',
        supportSub: 'হোয়াটসঅ্যাপে তাৎক্ষণিক ডেভেলপারের রিপ্লাই',
      },
      items: [
        { icon: 'Calendar', value: '২০২১', label: 'প্রতিষ্ঠা সাল', note: '৫+ বছরের ইন্ডাস্ট্রি অভিজ্ঞতা' },
        { icon: 'Layers', value: '৫০০+', label: 'সফল প্রজেক্ট', note: 'ওয়েবসাইট ও সোশ্যাল ক্যাম্পেইন' },
        { icon: 'Target', value: '৯৯%', label: 'সন্তুষ্ট ক্লায়েন্ট', note: 'রেগুলার রিপিট ক্লায়েন্ট বেইজ' },
        { icon: 'MapPin', value: 'বাংলাদেশ', label: 'দেশব্যাপী সার্ভিস', note: 'সারা দেশের উদ্যোক্তাদের সাথে কাজ' },
        { icon: 'Clock', value: '২৪/৭', label: 'সরাসরি সাপোর্ট', note: 'দ্রুত হোয়াটসঅ্যাপ রেসপন্স' },
      ],
    },
    estimator: {
      badge: 'ইন্টারেক্টিভ ক্যালকুলেটর',
      title: 'আপনার প্রজেক্টের আনুমানিক',
      titleHighlight: 'খরচ ও সময়সীমা জানুন',
      description: 'আপনার প্রয়োজনীয় সার্ভিস ও ফিচারগুলো নির্বাচন করে নিমিষেই একটি প্রাথমিক ধারণা তৈরি করুন।',
      step1Title: 'মূল সার্ভিস নির্বাচন করুন',
      services: [
        { id: 'boosting', name: 'সোশ্যাল মিডিয়া বুস্টিং', desc: 'টার্গেটেড সোশ্যাল মিডিয়া প্রমোশন ও রিচ বৃদ্ধি' },
        { id: 'web', name: 'কাস্টম ওয়েবসাইট ডেভেলপমেন্ট', desc: 'আধুনিক রেসপনসিভ ওয়েবসাইট বা ল্যান্ডিং পেজ' },
        { id: 'turnkey', name: 'টার্নকি ফুল প্যাকেজ', desc: 'ওয়েবসাইট তৈরি + ফুল সেটআপ + বুস্টিং ক্যাম্পেইন' },
      ],
      step2Title: 'প্রয়োজনীয় ফিচার ও এক্সট্রা সার্ভিসেস',
      addons: [
        { id: 'responsive', label: '১০০% মোবাইল রেসপনসিভ ডিজাইন' },
        { id: 'seo', label: 'অন-পেজ এসইও ও গুগল সার্চ কনফিগারেশন' },
        { id: 'whatsapp', label: 'হোয়াটসঅ্যাপ ডিরেক্ট চ্যাট ও অর্ডার বাটন' },
        { id: 'pixel', label: 'মেটা পিক্সেল ও ট্র্যাকিং সেটআপ' },
        { id: 'copywriting', label: 'কনভার্সন বৃদ্ধিকারী আকর্ষণীয় কন্টেন্ট রাইটিং' },
        { id: 'speed', label: 'সুপার-ফাস্ট পেজ স্পিড অপ্টিমাইজেশন' },
      ],
      summaryTitle: 'প্রজেক্ট সামারি',
      timelineLabel: 'আনুমানিক সময়:',
      featuresLabel: 'নির্বাচিত ফিচারস:',
      pricingPolicyLabel: 'মূল্য নির্ধারণ নীতি:',
      pricingPolicyValue: 'সাশ্রয়ী ও আলোচনা সাপেক্ষ',
      sendEstimateBtn: 'হোয়াটসঅ্যাপে এই প্রজেক্টের কোটেশন চান',
      webFormBtn: 'কন্টাক্ট ফর্ম পূরণ করুন',
      disclaimer: 'আপনার নির্দিষ্ট চাহিদার ভিত্তিতে ফ্রি আলোচনার পর চূড়ান্ত বাজেট নির্ধারণ করা হবে।',
    },
    costEstimator: {
      badge: 'ইন্টারেক্টিভ ক্যালকুলেটর',
      title: 'আপনার প্রজেক্টের আনুমানিক',
      titleHighlight: 'খরচ ও সময়সীমা জানুন',
      subtitle: 'আপনার প্রয়োজনীয় সার্ভিস, অতিরিক্ত ফিচার ও ডেলিভারি স্পিড নির্বাচন করে তাৎক্ষণিক আনুমানিক খরচ বের করুন।',
      step1Title: '১. মূল সার্ভিস নির্বাচন করুন',
      step2Title: '২. অতিরিক্ত অ্যাড-অন ও ফিচারস (ঐচ্ছিক)',
      step3Title: '৩. ডেলিভারি স্পিড নির্বাচন করুন',
      estimatedCost: 'আনুমানিক বাজেট',
      estimatedDelivery: 'আনুমানিক সময়সীমা',
      days: 'দিন',
      disclaimer: '*এটি সাধারণ প্রজেক্ট স্কোপের ওপর ভিত্তি করে তৈরি একটি ধারণা। ফ্রি আলোচনার পর চূড়ান্ত কোটেশন নিশ্চিত করা হবে।',
      orderEstimateWhatsApp: 'হোয়াটসঅ্যাপে এই হিসাব লক করুন',
      resetBtn: 'রিসেট করুন',
      servicesOptions: [
        { id: 'web-starter', name: 'স্টার্টার বিজনেস ওয়েবসাইট', priceBdt: 7500, priceUsd: 65, days: 4, desc: '১ থেকে ৩ পেজের পরিচ্ছন্ন আধুনিক বিজনেস সাইট' },
        { id: 'web-pro', name: 'কাস্টম ওয়েব অ্যাপ্লিকেশন / স্টোর', priceBdt: 16000, priceUsd: 140, days: 7, desc: 'ক্যাটালগ ও ফরমযুক্ত পূর্ণাঙ্গ মাল্টি-পেজ সাইট' },
        { id: 'boost-starter', name: 'সোশ্যাল বুস্টিং স্টার্টার', priceBdt: 2500, priceUsd: 22, days: 2, desc: 'ফেসবুক বা ইনস্টাগ্রামে টার্গেটেড বুস্টিং' },
        { id: 'boost-pro', name: 'মাল্টি-প্ল্যাটফর্ম গ্রোথ বুস্টিং', priceBdt: 6000, priceUsd: 52, days: 4, desc: '৩+ সোশ্যাল চ্যানেলে সমন্বিত প্রচার' },
        { id: 'turnkey-combo', name: 'টার্নকি ওয়েব + বুস্টিং বান্ডেল', priceBdt: 21000, priceUsd: 185, days: 8, desc: 'ওয়েবসাইট তৈরি + প্রথম ক্যাম্পেইন পরিচালনা' },
      ],
      addonOptions: [
        { id: 'seo-pro', name: 'অ্যাডভান্সড এসইও ও গুগল সার্চ কনসোল সেটআপ', priceBdt: 2500, priceUsd: 22, desc: 'কিওয়ার্ড রিসার্চ ও গুগল ইনডেক্সিং' },
        { id: 'speed-ultra', name: 'আল্ট্রা-ফাস্ট স্পিড অপ্টিমাইজেশন', priceBdt: 1500, priceUsd: 14, desc: 'স্মুথ ক্যাশিং ও ইমেজ সাইজ অপ্টিমাইজ' },
        { id: 'pixel-analytics', name: 'মেটা পিক্সেল ও গুগল অ্যানালিটিক্স ৪', priceBdt: 1500, priceUsd: 14, desc: 'ইভেন্ট ট্র্যাকিং ও লিড ফানেল মনিটর' },
        { id: 'multilingual', name: 'বাংলা + ইংরেজি দ্বিভাষিক ইন্টারফেস', priceBdt: 2000, priceUsd: 18, desc: '১-ক্লিকে যেকোনো ভাষা পরিবর্তনের সুবিধা' },
        { id: 'priority-support', name: '৩ মাসের এক্সটেন্ডেড মেইনটেন্যান্স ও সাপোর্ট', priceBdt: 3500, priceUsd: 30, desc: 'অগ্রাধিকারভিত্তিতে ফিক্স ও সিকিউরিটি চেক' },
      ],
      speedOptions: [
        { id: 'standard', name: 'স্ট্যান্ডার্ড ডেলিভারি', multiplier: 1.0, desc: 'স্বাভাবিক কোয়ালিটি নিয়ন্ত্রিত সময়সূচী' },
        { id: 'express', name: 'এক্সপ্রেস ডেলিভারি (২৫% দ্রুত)', multiplier: 1.2, desc: 'অগ্রাধিকার ভিত্তিতে নিয়মিত আপডেট সহ দ্রুত ডেলিভারি' },
        { id: 'urgent', name: 'জরুরি রাশ ডেলিভারি (৫০% দ্রুত)', multiplier: 1.4, desc: 'ডেডিকেটেড স্প্রিন্টে দিন-রাত কাজের মাধ্যমে দ্রুততম ডেলিভারি' },
      ],
    },
    cta: {
      badge: 'আপনার ব্যবসা বাড়াতে প্রস্তুত?',
      title: 'ব্যবসার বিক্রি ও ব্র্যান্ড ভ্যালু',
      titleHighlight: 'বাড়াতে প্রস্তুত তো?',
      description: 'আজই একে বুস্টিং ও ওয়েব ডেভেলপারের সাথে ফ্রিতে কথা বলুন এবং আপনার প্রজেক্টের সঠিক পরিকল্পনা ও সাশ্রয়ী কোটেশন জেনে নিন।',
      startProjectBtn: 'ফ্রি প্রজেক্ট কোটেশন নিন',
      whatsappBtn: 'হোয়াটসঅ্যাপে সরাসরি মেসেজ দিন',
      primaryBtn: 'ফ্রি প্রজেক্ট কোটেশন নিন',
      guarantee: 'কয়েক মিনিটের মধ্যে দ্রুত রিপ্লাই • ১০০% ক্লায়েন্ট সন্তুষ্টির নিশ্চয়তা',
    },
    ctaBanner: {
      badge: 'আপনার ব্যবসা বাড়াতে প্রস্তুত?',
      title: 'ব্যবসার বিক্রি ও ব্র্যান্ড ভ্যালু',
      titleHighlight: 'বাড়াতে প্রস্তুত তো?',
      description: 'আজই একে বুস্টিং ও ওয়েব ডেভেলপারের সাথে ফ্রিতে কথা বলুন এবং আপনার প্রজেক্টের সঠিক পরিকল্পনা ও সাশ্রয়ী কোটেশন জেনে নিন।',
      primaryBtn: 'ফ্রি প্রজেক্ট কোটেশন নিন',
      whatsappBtn: 'হোয়াটসঅ্যাপে সরাসরি মেসেজ দিন',
      guarantee: 'কয়েক মিনিটের মধ্যে দ্রুত রিপ্লাই • ১০০% ক্লায়েন্ট সন্তুষ্টির নিশ্চয়তা',
    },
    faq: {
      badge: 'সাধারণ প্রশ্নোত্তর',
      title: 'আমাদের সার্ভিস ও কাজের প্রক্রিয়া সম্পর্কে',
      titleHighlight: 'সাধারণ কিছু প্রশ্ন',
      description: 'আমাদের কাজ, বুস্টিং এবং ওয়েবসাইট তৈরি নিয়ে আপনার সম্ভাব্য প্রশ্নের স্পষ্ট উত্তর নিচে দেওয়া হলো।',
      subtitle: 'আমাদের কাজ, বুস্টিং এবং ওয়েবসাইট তৈরি নিয়ে আপনার সম্ভাব্য প্রশ্নের স্পষ্ট উত্তর নিচে দেওয়া হলো।',
      categories: [
        { id: 'all', label: 'সব প্রশ্ন' },
        { id: 'boosting', label: 'বুস্টিং ও প্রমোশন' },
        { id: 'web', label: 'ওয়েবসাইট ডেভেলপমেন্ট' },
        { id: 'pricing', label: 'মূল্য ও প্রক্রিয়া' },
      ],
      stillQuestions: 'আপনার কি আরও কোনো বিশেষ প্রশ্ন আছে?',
      contactSupport: 'হোয়াটসঅ্যাপে সরাসরি আমাদের জিজ্ঞেস করুন',
      items: [
        {
          id: 'faq-1',
          category: 'boosting',
          question: 'সোশ্যাল মিডিয়া বুস্টিং কীভাবে কাজ করে এবং কোন কোন প্ল্যাটফর্মে কাজ করেন?',
          answer:
            'আমরা ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক ও স্ন্যাপচ্যাটে নিখুঁত অডিয়েন্স টার্গেট করে অ্যাড রান করি। আপনার কাস্টমারের বয়স, লোকেশন ও পছন্দের ওপর ভিত্তি করে ক্যাম্পেইন সাজানো হয় যাতে সঠিক ক্রেতাদের কাছে আপনার বিজ্ঞাপন পৌঁছায়।',
        },
        {
          id: 'faq-2',
          category: 'web',
          question: 'একটি কাস্টম ওয়েবসাইট বা ল্যান্ডিং পেজ তৈরি করতে কত দিন সময় লাগে?',
          answer:
            'সাধারণ ল্যান্ডিং পেজ বা সিঙ্গেল-পেজ পোর্টফোলিও ৩ থেকে ৫ কার্যদিবসের মধ্যে ডেলিভারি দেওয়া হয়। বড় মাল্টি-পেজ বা ক্যাটালগ সাইট তৈরিতে ৬ থেকে ১০ দিন সময় লাগতে পারে।',
        },
        {
          id: 'faq-3',
          category: 'pricing',
          question: 'কাজের পেমেন্ট কীভাবে করতে হয় এবং কোন কোন মাধ্যমে পেমেন্ট নেওয়া হয়?',
          answer:
            'আমরা স্বচ্ছ মাইলস্টোন ভিত্তিতে কাজ করি (যেমন কাজের শুরুতে ৫০% অগ্রিম এবং কাজ সম্পন্ন ও ক্লায়েন্টের পূর্ণ সন্তুষ্টির পর বাকি ৫০%)। বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফারের মাধ্যমে সহজেই পেমেন্ট করা যায়।',
        },
        {
          id: 'faq-4',
          category: 'boosting',
          question: 'বুস্টিং করালে কি আমার সোশ্যাল মিডিয়া পেইজ বা চ্যানেলের কোনো ঝুঁকি আছে?',
          answer:
            'না, একদমই কোনো ঝুঁকি নেই। আমরা শতভাগ অফিশিয়াল অ্যাড প্ল্যাটফর্ম ও পলিসি মেনে বুস্টিং করি। কোনো প্রকার ফেক বট বা ঝুঁকিপূর্ণ পদ্ধতি ব্যবহার করা হয় না।',
        },
        {
          id: 'faq-5',
          category: 'web',
          question: 'আমার ওয়েবসাইট কি মোবাইলে ঠিকমতো দেখা যাবে এবং স্পিড কেমন হবে?',
          answer:
            'অবশ্যই। আমাদের তৈরি প্রতিটি ওয়েবসাইট ১০০% মোবাইল-রেসপনসিভ এবং যেকোনো স্মার্টফোনে দ্রুত লোড হওয়ার জন্য বিশেষভাবে অপ্টিমাইজড।',
        },
        {
          id: 'faq-6',
          category: 'pricing',
          question: 'কাজ শেষ হওয়ার পর কি কোনো টেকনিক্যাল সাপোর্ট পাওয়া যাবে?',
          answer:
            'হ্যাঁ! কাজ ডেলিভারির পরেও যে কোনো ছোটখাটো সমস্যা বা সমন্বয়ের জন্য আমরা ফ্রি সাপোর্ট দিই। এ ছাড়াও দীর্ঘমেয়াদী রক্ষণাবেক্ষণের জন্য আমাদের মান্থলি সাপোর্ট প্যাকেজ রয়েছে।',
        },
      ],
    },
    contact: {
      badge: 'যোগাযোগ করুন',
      title: 'আপনার প্রজেক্ট নিয়ে আলোচনা করুন ও',
      titleHighlight: 'ব্যবসা এগিয়ে নিন',
      description: 'আপনার ব্যবসা প্রসারে কোনো পরিকল্পনা আছে বা ফ্রিতে পরামর্শ চান? সরাসরি হোয়াটসঅ্যাপে কথা বলুন অথবা নিচের ফরমটি পূরণ করুন।',
      subtitle: 'আপনার ব্যবসা প্রসারে কোনো পরিকল্পনা আছে বা ফ্রিতে পরামর্শ চান? সরাসরি হোয়াটসঅ্যাপে কথা বলুন অথবা নিচের ফরমটি পূরণ করুন।',
      infoTitle: 'অফিসিয়াল যোগাযোগের তথ্য',
      infoSubtitle: 'আমাদের যেকোনো ভেরিফায়েড অফিশিয়াল চ্যানেলে সরাসরি যুক্ত হোন।',
      businessNameLabel: 'প্রতিষ্ঠানের নাম',
      phoneLabel: 'হোয়াটসঅ্যাপ ও সরাসরি ফোন',
      emailLabel: 'ইমেইল এড্রেস',
      hoursLabel: 'সার্ভিস সময়সূচী',
      hoursValue: '২৪/৭ সার্বক্ষণিক সাপোর্ট (হোয়াটসঅ্যাপে দ্রুত উত্তর)',
      locationLabel: 'অফিসিয়াল লোকেশন',
      socialsLabel: 'অফিসিয়াল সোশ্যাল প্রোফাইলসমূহ',
      formTitle: 'সরাসরি প্রজেক্ট কোটেশন ফরম',
      formSubtitle: 'নিচের তথ্যগুলো দিয়ে পাঠিয়ে দিন, আমরা দ্রুত যোগাযোগ করব।',
      nameLabel: 'আপনার পূর্ণ নাম *',
      namePlaceholder: 'যেমন: তানভীর আহমেদ',
      contactLabel: 'হোয়াটসঅ্যাপ নাম্বার অথবা ইমেইল *',
      contactPlaceholder: 'যেমন: 017XXXXXXXX অথবা yourname@gmail.com',
      serviceLabel: 'প্রয়োজনীয় সার্ভিস *',
      serviceOption1: 'সোশ্যাল মিডিয়া বুস্টিং (ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক, স্ন্যাপচ্যাট)',
      serviceOption2: 'কাস্টম ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
      serviceOption3: 'টার্নকি ওয়েবসাইট + সোশ্যাল বুস্টিং কম্বো প্যাকেজ',
      messageLabel: 'প্রজেক্টের বিবরণ ও লক্ষ্য *',
      messagePlaceholder: 'আপনার ব্যবসা, কী ধরনের কাজ করাতে চান এবং আপনার লক্ষ্য সম্পর্কে সংক্ষেপে জানান...',
      submitBtn: 'ওয়েবসাইট থেকে বার্তা পাঠান',
      whatsappDirectBtn: 'হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন',
      guaranteeText: '১০০% গোপনীয়তা • কোনো স্প্যাম নেই • দ্রুততম রেসপন্সের নিশ্চয়তা',
      successTitle: 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!',
      successMessage: 'আমাদের সাথে যোগাযোগ করার জন্য ধন্যবাদ। আমরা আপনার প্রজেক্ট বিবরণ পেয়েছি এবং অতি দ্রুত হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করব।',
      successBtn: 'আরেকটি বার্তা পাঠান',
      form: {
        title: 'সরাসরি প্রজেক্ট কোটেশন ফরম',
        nameLabel: 'আপনার পূর্ণ নাম *',
        namePlaceholder: 'যেমন: তানভীর আহমেদ',
        emailLabel: 'ইমেইল এড্রেস',
        emailPlaceholder: 'যেমন: yourname@gmail.com',
        phoneLabel: 'হোয়াটসঅ্যাপ নাম্বার *',
        phonePlaceholder: 'যেমন: 017XXXXXXXX',
        serviceLabel: 'প্রয়োজনীয় সার্ভিস',
        serviceDefault: 'সোশ্যাল মিডিয়া বুস্টিং ও প্রমোশন',
        budgetLabel: 'আনুমানিক বাজেট',
        budgetDefault: 'আলোচনা সাপেক্ষ',
        messageLabel: 'প্রজেক্টের বিবরণ ও লক্ষ্য *',
        messagePlaceholder: 'আপনার ব্যবসা ও প্রজেক্ট সম্পর্কে সংক্ষেপে লিখুন...',
        submitBtn: 'বার্তা পাঠান',
        submitting: 'পাঠানো হচ্ছে...',
        successTitle: 'বার্তা পৌঁছেছে!',
        successMessage: 'ধন্যবাদ! আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।',
        sendAnother: 'আরেকটি বার্তা পাঠান',
      },
      info: {
        title: 'অফিসিয়াল এজেন্সি তথ্য',
        phone: 'ফোন ও হোয়াটসঅ্যাপ',
        phoneVal: '+880 1345-386833',
        whatsapp: 'সরাসরি হোয়াটসঅ্যাপ',
        whatsappVal: '+880 1345-386833',
        email: 'অফিসিয়াল ইমেইল',
        emailVal: 'akboostingwebdeveloper@gmail.com',
        location: 'হেডকোয়ার্টার',
        locationVal: 'বাংলাদেশ (দেশব্যাপী ও গ্লোবাল সার্ভিস)',
        hours: 'সাপোর্ট সময়সূচি',
        hoursVal: '২৪/৭ সার্বক্ষণিক অনলাইন সাপোর্ট',
        officialSocials: 'অফিসিয়াল সোশ্যাল চ্যানেল',
        clickToConnect: 'সরাসরি যুক্ত হতে ক্লিক করুন',
      },
    },
    newsletter: {
      badge: 'আপডেট থাকুন',
      title: 'ডিজিটাল গ্রোথ টিপস এবং',
      titleHighlight: 'বিশেষ অফার পান',
      description: 'আমাদের নিউজলেটারে সাবস্ক্রাইব করে নিন সোশ্যাল মিডিয়া গ্রোথ হ্যাকস, ওয়েব ট্রেন্ডস এবং সিজনাল ডিসকাউন্ট অফার সবার আগে।',
      benefit1: 'ফ্রি মান্থলি গ্রোথ গাইড',
      benefit2: 'বিশেষ ডিসকাউন্ট ও প্রমো কোড',
      interestLabel: 'আমার সবচেয়ে বেশি আগ্রহ:',
      interestAll: 'সব ধরনের আপডেট',
      interestWeb: 'ওয়েবসাইট ডেভেলপমেন্ট',
      interestBoosting: 'সোশ্যাল মিডিয়া বুস্টিং',
      emailLabel: 'আপনার ইমেইল এড্রেস',
      emailPlaceholder: 'আপনার ইমেইল লিখুন (যেমন: name@gmail.com)',
      subscribeBtn: 'সাবস্ক্রাইব করুন',
      subscribing: 'যুক্ত করা হচ্ছে...',
      subscribedMsg: 'আপনি সফলভাবে সাবস্ক্রাইব করেছেন!',
      privacyNotice: 'আপনার গোপনীয়তা সুরক্ষিত। কোনো স্প্যাম পাঠানো হয় না।',
      privacyNote: '🔒 আপনার তথ্যের পূর্ণ গোপনীয়তা নিশ্চিত করা হয়। নো স্প্যাম।',
      invalidEmail: 'অনুগ্রহ করে সঠিক ইমেইল এড্রেস প্রদান করুন।',
      successTitle: 'সাবস্ক্রিপশন সম্পন্ন হয়েছে!',
      subscribeAnother: 'অন্য ইমেইল সাবস্ক্রাইব করুন',
      placeholder: 'আপনার ইমেইল এড্রেস লিখুন',
    },
    footer: {
      brandBio: 'একে বুস্টিং অ্যান্ড ওয়েব ডেভেলপার উদ্যোক্তা, ক্রিয়েটর ও ব্যবসায়ের অনলাইন উপস্থিতি বৃদ্ধি এবং উচ্চমানের আধুনিক ওয়েবসাইট নির্মাণে নিবেদিত।',
      quickLinks: 'দ্রুত লিঙ্কসমূহ',
      linkHome: 'হোম পেজ',
      linkAbout: 'আমাদের সম্পর্কে',
      linkServices: 'সার্ভিসসমূহ',
      linkPortfolio: 'পোর্টফোলিও',
      linkWhyUs: 'কেন আমরা সেরা',
      linkProcess: 'কাজের ধাপ',
      linkFaq: 'সাধারণ প্রশ্ন',
      linkContact: 'যোগাযোগ',
      linkNewsletter: 'নিউজলেটার',
      ourServices: 'আমাদের সেবাসমূহ',
      servicesList: [
        'সোশ্যাল মিডিয়া বুস্টিং (ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক, স্ন্যাপচ্যাট)',
        'কাস্টম ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
        'উচ্চ কনভার্সন ল্যান্ডিং পেজ ডিজাইন',
        'টার্নকি বিজনেস সেটআপ ও এসইও (SEO)',
        'মেটা পিক্সেল ও ট্র্যাকিং সিস্টেম ইন্টিগ্রেশন',
      ],
      directContact: 'সরাসরি যোগাযোগ',
      followConnect: 'সোশ্যাল মিডিয়ায় যুক্ত হোন',
      copyright: '© ২০২১ - ২০২৬ একে বুস্টিং ও ওয়েব ডেভেলপার। সর্বস্বত্ব সংরক্ষিত।',
      verifiedNotice: 'ভেরিফায়েড ডিজিটাল এজেন্সি • প্রতিষ্ঠা ২০২১ • বাংলাদেশ',
      privacyPolicy: 'গোপনীয়তা নীতি',
      termsConditions: 'ব্যবহারের শর্তাবলী',
      termsOfService: 'ব্যবহারের শর্তাবলী',
      topBtn: 'উপরে',
      privacyTitle: 'গোপনীয়তা নীতি',
      privacyText1: 'একে বুস্টিং ও ওয়েব ডেভেলপার আপনার তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।',
      privacyText2: 'আপনার কোনো ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করা হয় না।',
      termsTitle: 'ব্যবহারের শর্তাবলী',
      termsText1: 'সকল সার্ভিস ক্লায়েন্টের সাথে পারস্পরিক চুক্তি ও কাজের পরিধি অনুসারে সম্পন্ন করা হয়।',
      termsText2: 'নিরাপদ মোবাইল ও ব্যাংকিং চ্যানেলের মাধ্যমে স্বচ্ছভাবে পেমেন্ট গ্রহণ করা হয়।',
      close: 'বন্ধ করুন',
      aboutText: 'একে বুস্টিং অ্যান্ড ওয়েব ডেভেলপার ২০২১ সাল থেকে বাংলাদেশে সক্রিয় একটি বিশ্বস্ত ডিজিটাল এজেন্সি।',
      quickLinksTitle: 'দ্রুত লিঙ্ক',
      servicesTitle: 'সার্ভিসেস',
      socialTitle: 'সোশ্যাল',
      rightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      disclaimer: 'বাংলাদেশে নিবন্ধিত ও সক্রিয় ডিজিটাল এজেন্সি।',
    },
    floatingWhatsApp: {
      tooltip: 'তাৎক্ষণিক কথা বলতে হোয়াটসঅ্যাপে চ্যাট করুন',
      status: 'অনলাইন আছেন • ৫ মিনিটের মধ্যে রিপ্লাই',
    },
  },
};
