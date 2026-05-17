import type {
  Product, Service, BlogPost, Client,
  Certification, Distributor, StatItem, NavLink, HeroSlide
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Clients', href: '#clients' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'Welcome to Sahyadri Enterprises',
    title: 'One Stop Solution for All ',
    titleAccent: 'Lab Needs',
    subtitle: 'Your trusted partner for laboratory equipment, chemicals, and instruments in Maharashtra.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80',
    ctaPrimary: { label: 'Explore Products', href: '#products' },
    ctaSecondary: { label: 'Get a Quote', href: '#contact' },
  },
  {
    id: 2,
    tag: 'Certified & Trusted',
    title: 'ISO Certified ',
    titleAccent: 'Lab Equipment',
    subtitle: 'Authorized distributor of leading brands — Thermolab, Labindia, iGene Labserve & more.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80',
    ctaPrimary: { label: 'About Us', href: '#about' },
    ctaSecondary: { label: 'Contact Us', href: '#contact' },
  },
  {
    id: 3,
    tag: 'Quality Assured',
    title: 'Precision ',
    titleAccent: 'Instruments',
    subtitle: 'Serving research, pharmaceutical, educational & industrial laboratories across India.',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1600&q=80',
    ctaPrimary: { label: 'Our Services', href: '#services' },
    ctaSecondary: { label: 'Get a Quote', href: '#contact' },
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: 1, name: 'CE Certified Products', badge_text: 'CE', description: 'Conformité Européenne', display_order: 1 },
  { id: 2, name: 'GeM eMarketplace', badge_text: 'GeM', description: 'Government e Marketplace', display_order: 2 },
  { id: 3, name: 'ISO Certified Company', badge_text: 'ISO', description: 'ISO Certified Company', display_order: 3 },
  { id: 4, name: 'MSME Registered', badge_text: 'MSME', description: 'Micro Small & Medium Enterprises', display_order: 4 },
  { id: 5, name: 'NSIC ISO 9001:2008', badge_text: 'NSIC', description: 'ISO 9001:2008', display_order: 5 },
  { id: 6, name: 'Startup India', badge_text: 'Startup India', description: 'Recognized by Govt. of India', display_order: 6 },
  { id: 7, name: 'T.O.P. Performance', badge_text: 'T.O.P.', description: 'Top Performance Award', display_order: 7 },
];

export const DISTRIBUTORS: Distributor[] = [
  { id: 1, name: 'Thermofisher', tagline: 'Scientific Solutions', display_order: 1 },
  { id: 2, name: 'Anton Paar', tagline: 'Measurement Instruments', display_order: 2 },
  { id: 3, name: 'Cole-Parmer', tagline: 'Fluid Handling & Lab', display_order: 3 },
  { id: 4, name: 'Toshvin', tagline: 'Analytical Instruments', display_order: 4 },
  { id: 5, name: 'Ambinova Technologies', tagline: 'Life Science Solutions', display_order: 5 },
  { id: 6, name: 'Amkette Analytics', tagline: 'Analytical Testing', display_order: 6 },
  { id: 7, name: 'Labguard', tagline: 'Safety & Fume Hoods', display_order: 7 },
  { id: 8, name: 'HiMedia', tagline: 'Biosciences', display_order: 8 },
  { id: 9, name: 'SRL Chemicals', tagline: 'Laboratory Reagents', display_order: 9 },
  { id: 10, name: 'Borosil', tagline: 'Scientific Glassware', display_order: 10 },
];

export const SERVICES: Service[] = [
  { id: 1, title: 'Annual Maintenance Contract', description: 'Comprehensive AMC services to keep your laboratory equipment running at peak efficiency all year round.', icon: 'fa-tools', display_order: 1, is_active: true },
  { id: 2, title: 'Calibration', description: 'Precise calibration services to ensure accurate and reliable measurements for all your analytical instruments.', icon: 'fa-balance-scale', display_order: 2, is_active: true },
  { id: 3, title: 'SOP Creation', description: 'Development of Standard Operating Procedures (SOPs) customized for your lab workflows and compliance needs.', icon: 'fa-file-alt', display_order: 3, is_active: true },
  { id: 4, title: 'Lab Equipment Supply', description: 'Wide range of precision laboratory instruments and equipment from leading global brands.', icon: 'fa-flask', display_order: 4, is_active: true },
  { id: 5, title: 'Chemical Supply', description: 'High-purity laboratory chemicals, reagents, and solvents for research and industry.', icon: 'fa-vial', display_order: 5, is_active: true },
  { id: 6, title: 'Installation & Support', description: 'On-site installation, commissioning, and after-sales technical support for all equipment.', icon: 'fa-truck', display_order: 6, is_active: true },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Analytical Instruments', category: 'Analytical', description: 'Spectrophotometers, pH meters, conductivity meters, turbidity meters & more.', image_url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', is_featured: true },
  { id: 2, name: 'Thermal Equipment', category: 'Thermal', description: 'Ovens, autoclaves, incubators, water baths, heating mantles & furnaces.', image_url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80', is_featured: true },
  { id: 3, name: 'Life Science Equipment', category: 'Life Science', description: 'Microscopes, centrifuges, PCR machines, BOD incubators & biosafety cabinets.', image_url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', is_featured: true },
  { id: 4, name: 'Lab Glassware & Plasticware', category: 'Glassware', description: 'Beakers, flasks, pipettes, burettes, measuring cylinders & disposable ware.', image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', is_featured: false },
  { id: 5, name: 'Safety Equipment', category: 'Safety', description: 'Lab coats, gloves, goggles, face shields, fume hoods & safety cabinets.', image_url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', is_featured: false },
  { id: 6, name: 'Lab Chemicals & Reagents', category: 'Chemicals', description: 'AR/LR/GR grade chemicals, culture media, stains, indicators & solvents.', image_url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', is_featured: false },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'How to Choose the Right Laboratory Equipment for Your Needs', slug: 'how-to-choose-lab-equipment', excerpt: 'Selecting the right instruments for your lab can be challenging. Here is a guide to help you make the best choice for your research needs.', image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', tag: 'Lab Tips', author: 'Sahyadri Enterprises', published_at: 'May 2025' },
  { id: 2, title: 'The Importance of Regular Calibration in Research Laboratories', slug: 'importance-of-calibration', excerpt: 'Regular calibration ensures accurate results. Learn why it matters and how to set up a calibration schedule for your instruments.', image_url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', tag: 'Industry News', author: 'Sahyadri Enterprises', published_at: 'April 2025' },
  { id: 3, title: 'Essential Lab Safety Practices Every Scientist Should Follow', slug: 'lab-safety-practices', excerpt: 'Safety is paramount in any laboratory. Discover the key practices that protect you and your team every day.', image_url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', tag: 'Safety', author: 'Sahyadri Enterprises', published_at: 'March 2025' },
];

export const CLIENTS: Client[] = [
  { id: 1, name: 'Research Labs', icon: 'fa-university', category: 'Research', display_order: 1 },
  { id: 2, name: 'Hospitals', icon: 'fa-hospital', category: 'Healthcare', display_order: 2 },
  { id: 3, name: 'Industries', icon: 'fa-industry', category: 'Industry', display_order: 3 },
  { id: 4, name: 'Universities', icon: 'fa-graduation-cap', category: 'Education', display_order: 4 },
  { id: 5, name: 'Pharma', icon: 'fa-pills', category: 'Pharmaceutical', display_order: 5 },
  { id: 6, name: 'Water Testing', icon: 'fa-water', category: 'Environment', display_order: 6 },
  { id: 7, name: 'Agriculture', icon: 'fa-leaf', category: 'Agriculture', display_order: 7 },
  { id: 8, name: 'Pathology', icon: 'fa-microscope', category: 'Healthcare', display_order: 8 },
];

export const STATS: StatItem[] = [
  { target: 500, label: 'Happy Clients', suffix: '+' },
  { target: 1000, label: 'Products', suffix: '+' },
  { target: 7, label: 'Years Experience', suffix: '+' },
  { target: 50, label: 'Brands Distributed', suffix: '+' },
];

export const COMPANY = {
  name: 'Sahyadri Enterprises',
  tagline: 'One stop solution for all lab needs!',
  phone: '9689804094',
  email: 'sahyadrienterprises786@gmail.com',
  address: '25, IT Park MIDC, Ahilyanagar, Maharashtra - 414111',
  whatsapp: 'https://wa.me/919689804094',
};
