import { ServiceItem, PortfolioItem, FaqItem, ProcessStep, FeatureItem } from './types';
import twoBoysAvatar from './assets/images/two_boys_avatar_1786872046343.jpg';

export const FOUNDER_IMAGE = twoBoysAvatar;

export const BUSINESS_INFO = {
  name: 'AK Boosting & Web Developer',
  tagline: 'Boosting & Web Developer',
  founderName: 'AK Team & Developers',
  founderRole: 'Full-Stack Developers & Growth Strategists',
  founderBio: 'Dedicated full-stack web development and social media growth team helping businesses scale their digital presence since 2021.',
  founderImage: twoBoysAvatar,
  headline: 'Boost Your Business. Build Your Digital Future.',
  subheadline: 'Professional social media boosting and web development services designed to help businesses, entrepreneurs, and individuals build a stronger online presence.',
  founded: '2021',
  location: 'Bangladesh',
  industry: 'Digital Services & Web Development',
  email: 'kawsar105103@gmail.com',
  phone: '+8801345386833',
  whatsapp: '+8801345386833',
  whatsappUrl: 'https://wa.me/8801345386833',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  snapchat: 'https://snapchat.com',
  mission: 'To help businesses and individuals build a professional online presence through reliable, modern, and affordable digital solutions.',
  vision: 'To become a trusted digital service provider in Bangladesh and help businesses grow in the online world.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-boosting',
    number: '01',
    iconName: 'Rocket',
    title: 'Social Media Boosting',
    tagline: 'Facebook • YouTube • Instagram • TikTok • Snapchat',
    description: 'Increase your online visibility and scale your target audience with professional boosting across all major platforms including Facebook, YouTube, Instagram, TikTok, and Snapchat.',
    items: [
      'Facebook page promotion, likes, followers & post reach',
      'YouTube channel subscribers, views & watch time boost',
      'Instagram profile growth, followers & reels engagement',
      'TikTok video promotion, views, likes & viral acceleration',
      'Snapchat spotlight reach, story views & subscriber adds',
      'Targeted demographic audience reach & engagement tuning'
    ],
    popular: true,
    accentColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'web-development',
    number: '02',
    iconName: 'Code',
    title: 'Web Development',
    tagline: 'High-Performance, Custom Websites',
    description: 'Get a modern, responsive, and professional website that represents your business and works smoothly across desktop and mobile devices.',
    items: [
      'Modern business websites & corporate portals',
      'High-converting sales landing pages',
      'Clean portfolio & personal brand websites',
      'Full responsive design for mobile, tablet & desktop',
      'Custom features, interactive UI & contact systems',
      'Website customization, redesigns & speed tuning'
    ],
    popular: true,
    accentColor: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'digital-business-solutions',
    number: '03',
    iconName: 'Globe',
    title: 'Digital Business Solutions',
    tagline: 'End-to-End Online Strategy & Support',
    description: 'Practical digital solutions to help individuals and businesses establish and improve their online presence.',
    items: [
      'Complete online business launch & setup',
      '1-on-1 digital strategy & website consultation',
      'Digital presence optimization & branding support',
      'Ongoing website maintenance & technical security',
      'Basic SEO-friendly structure & Google search indexing'
    ],
    popular: false,
    accentColor: 'from-purple-500 to-indigo-500'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: 'Professional Approach',
    description: 'We take every project seriously and focus on delivering services with professionalism and attention to detail.',
    iconName: 'ShieldCheck'
  },
  {
    number: '02',
    title: 'Modern Solutions',
    description: 'We use modern design principles and digital practices to create effective, high-converting online solutions.',
    iconName: 'Sparkles'
  },
  {
    number: '03',
    title: 'Affordable Services',
    description: 'We aim to provide quality digital services at reasonable, transparent prices for individuals, startups, and businesses.',
    iconName: 'Coins'
  },
  {
    number: '04',
    title: 'Client Focused',
    description: 'Your requirements matter. We listen closely to your specific goals and work toward solutions tailored to your needs.',
    iconName: 'Users'
  },
  {
    number: '05',
    title: 'Since 2021',
    description: 'With our business established in 2021, we are focused on providing dependable digital services and building long-term relationships.',
    iconName: 'Calendar'
  },
  {
    number: '06',
    title: 'Complete Digital Support',
    description: 'From social promotion to full website development and maintenance, we help you with all aspects of your digital presence.',
    iconName: 'Headphones'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Step 01',
    number: '01',
    title: 'Tell Us Your Requirements',
    description: 'Contact us and explain what you need for your business, website, or social media promotion.',
    iconName: 'MessageSquare'
  },
  {
    step: 'Step 02',
    number: '02',
    title: 'Discuss Your Project',
    description: 'We discuss your requirements, goals, preferred features, timeline, and craft the most cost-effective solution.',
    iconName: 'Lightbulb'
  },
  {
    step: 'Step 03',
    number: '03',
    title: 'We Build & Deliver',
    description: 'Our team works with precision on the agreed service, keeping you updated until complete delivery.',
    iconName: 'CodeXml'
  },
  {
    step: 'Step 04',
    number: '04',
    title: 'Grow Your Online Presence',
    description: 'Launch your website, promote your business, and start attracting clients with a stronger digital presence.',
    iconName: 'TrendingUp'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Apex E-Commerce & Retail Store',
    description: 'A modern, ultra-fast online shopping website featuring product catalog, shopping cart, mobile-first checkout, and WhatsApp order routing.',
    category: 'Websites',
    categoryLabel: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'Responsive Web', 'Fast Loading', 'Order System'],
    features: ['Custom Product Grid', 'Quick WhatsApp Ordering', 'SEO Optimized', 'Mobile Checkout Flow'],
    results: '99+ PageSpeed Score • 100% Mobile Ready'
  },
  {
    id: 'portfolio-2',
    title: 'Nexus SaaS & App Landing Page',
    description: 'High-converting lead generation landing page with modern interactive pricing calculators, feature showcases, and consultation booking.',
    category: 'Landing Pages',
    categoryLabel: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Landing Page', 'Lead Gen', 'High Conversion', 'Call to Action'],
    features: ['Interactive Demo Mockup', 'Lead Capture Form', 'Review Sliders', 'Custom Animations'],
    results: '+45% Higher Conversion Rate on Ad Traffic'
  },
  {
    id: 'portfolio-3',
    title: 'Brand Viral Social Media Campaign',
    description: 'Targeted demographic boosting campaign for a fashion and apparel brand, achieving massive regional reach, follower acquisition, and direct message inquiries.',
    category: 'Digital Promotion',
    categoryLabel: 'Social Media Boosting',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    tags: ['Facebook Boosting', 'Targeted Ads', 'Audience Growth', 'Page Reach'],
    features: ['Custom Audience Segmentation', 'Ad Creative Strategy', 'Post Boosting', 'ROI Tracking'],
    results: '350,000+ Verified Reach • 4.8x Message Growth'
  },
  {
    id: 'portfolio-4',
    title: 'Corporate Consultancy & Services Portal',
    description: 'A prestigious business website designed with clear service hierarchy, team biographies, downloadable case studies, and quote calculators.',
    category: 'Business Projects',
    categoryLabel: 'Business Solution',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporate Portal', 'Business Website', 'Multi-Page', 'Brand Identity'],
    features: ['Service Breakdown Tabs', 'Client Consultation Booking', 'Google Maps Embed', 'Security SSL'],
    results: 'Clean Enterprise Aesthetic & Multi-Device Compatibility'
  },
  {
    id: 'portfolio-5',
    title: 'Creative Professional Portfolio Website',
    description: 'Sleek dark-mode portfolio built for a creative director & photographer, with photo gallery filters, client case studies, and contact inquiry.',
    category: 'Websites',
    categoryLabel: 'Web Development',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Personal Portfolio', 'Dark UI', 'Interactive Gallery', 'Smooth Motion'],
    features: ['Masonry Portfolio Layout', 'Live Project Previews', 'Quick Contact Form', 'Instant Loading'],
    results: 'Featured in regional creative spotlights'
  },
  {
    id: 'portfolio-6',
    title: 'Restaurant & Cafe Digital Presence Package',
    description: 'Complete digital setup including an interactive digital menu, Google business profile setup, and weekly social promotion boost.',
    category: 'Business Projects',
    categoryLabel: 'Digital Business Solutions',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tags: ['Digital Menu', 'Local SEO', 'Weekly Boosting', 'Customer Reviews'],
    features: ['QR Digital Menu', 'Local Facebook Ad Campaign', 'Google Maps Optimization', 'WhatsApp Table Booking'],
    results: 'Over 80+ daily digital menu scans & local walk-ins'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does AK Boosting & Web Developer provide?',
    answer: 'We provide social media boosting, web development, website customization, high-converting landing pages, and comprehensive digital business solutions.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'When was AK Boosting & Web Developer founded?',
    answer: 'AK Boosting & Web Developer was founded in 2021. Since then, we have been delivering reliable, affordable digital services.',
    category: 'About'
  },
  {
    id: 'faq-3',
    question: 'Where is your business located?',
    answer: 'We are based in Bangladesh and provide full digital services online for clients across the country and worldwide.',
    category: 'About'
  },
  {
    id: 'faq-4',
    question: 'Can you build a website for my business?',
    answer: 'Yes! We create modern, responsive websites tailored to businesses, entrepreneurs, startups, organizations, and individuals.',
    category: 'Web Development'
  },
  {
    id: 'faq-5',
    question: 'Can you create a mobile-friendly website?',
    answer: 'Absolutely. Every website we build is 100% responsive and tested thoroughly on smartphones, tablets, laptops, and large desktop screens.',
    category: 'Web Development'
  },
  {
    id: 'faq-6',
    question: 'How can I start a project?',
    answer: 'Simply contact us via our website form, email at kawsar105103@gmail.com, or directly through WhatsApp at +8801345386833. We will discuss your goals, recommend a clear roadmap, and give you an exact price and timeline.',
    category: 'Process'
  }
];

export const BUSINESS_STATS = [
  { label: 'Founded', value: '2021', icon: 'Calendar', note: 'Years of continuous service' },
  { label: 'Core Services', value: '3+', icon: 'Layers', note: 'Boosting, Web & Solutions' },
  { label: 'Client Focused', value: '100%', icon: 'Target', note: 'Tailored to your needs' },
  { label: 'Based In', value: 'Bangladesh', icon: 'MapPin', note: 'Serving clients globally' },
  { label: 'Support Response', value: 'Fast 24/7', icon: 'Clock', note: 'WhatsApp & Direct Call' }
];
