// ─── Site Config ───
export const SITE = {
  name: "CodeCraft",
  tagline: "Modern Web Development & Digital Solutions",
  whatsapp: "919876543210", // Change to your real number
  email: "hello@codecraft.dev",
  description:
    "We design and develop fast, modern websites, web applications and digital solutions for ambitious businesses.",
};

export const WHATSAPP_DEFAULT_MSG =
  "Hi CodeCraft! I'm interested in a web development project.";

export function getWhatsAppUrl(msg = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// ─── Navigation ───
export const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// ─── Services ───
export const SERVICES = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional, fast-loading websites that establish credibility and convert visitors into clients.",
    icon: "Globe",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    features: ["SEO Optimized", "Mobile First", "CMS Ready", "Performance"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Stores",
    description:
      "Full-featured online stores with seamless checkout, inventory management and payment gateways.",
    icon: "ShoppingCart",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    features: ["Razorpay / Stripe", "Product Management", "Orders", "Analytics"],
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Custom dashboards, CRMs, SaaS platforms and management systems built for your workflow.",
    icon: "Code2",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    features: ["Admin Panel", "Auth System", "REST APIs", "Scalable"],
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description:
      "User-focused interfaces designed to be intuitive, accessible and visually stunning.",
    icon: "Palette",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    features: ["Figma Design", "Prototyping", "Design System", "Accessibility"],
  },
  {
    id: "api-dev",
    title: "API Development",
    description:
      "Robust REST APIs and third-party integrations — payment gateways, WhatsApp, email and more.",
    icon: "Zap",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    features: ["REST APIs", "Integrations", "Auth / JWT", "Documentation"],
  },
  {
    id: "maintenance",
    title: "Maintenance & SEO",
    description:
      "Keep your site fast, secure and ranking high with ongoing support and SEO optimization.",
    icon: "Shield",
    color: "from-slate-500/20 to-zinc-500/20",
    iconColor: "text-slate-400",
    features: ["Speed Optimization", "Security", "SEO Audit", "Updates"],
  },
];

// ─── Projects ───
export const PROJECTS = [
  {
    id: "fitzone",
    title: "FitZone",
    subtitle: "Gym Management Platform",
    description:
      "A centralized platform for member management, attendance, payments, QR check-in and live class scheduling.",
    tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    color: "#8b5cf6",
    gradient: "from-violet-600 to-purple-600",
    category: "Web Application",
    featured: true,
  },
  {
    id: "shophub",
    title: "ShopHub",
    subtitle: "E-commerce Platform",
    description:
      "Full-featured online store with Razorpay integration, inventory tracking, order management and analytics dashboard.",
    tags: ["Next.js", "PostgreSQL", "Razorpay"],
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
    category: "E-commerce",
    featured: true,
  },
  {
    id: "cafemanager",
    title: "CaféManager",
    subtitle: "Restaurant System",
    description:
      "Real-time restaurant management with digital ordering, kitchen display system and billing.",
    tags: ["React", "Node.js", "Socket.io"],
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-500",
    category: "Web Application",
    featured: true,
  },
  {
    id: "learnhub",
    title: "LearnHub",
    subtitle: "EdTech Platform",
    description:
      "Online coaching platform with live classes, student progress tracking, assignments and fee management.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    color: "#6366f1",
    gradient: "from-indigo-500 to-blue-500",
    category: "SaaS",
    featured: false,
  },
];

// ─── Tech Stack ───
// Row 1 — scrolls left → right (forward)
export const TECH_STACK_ROW1 = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "⬡" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Framer Motion", icon: "✦" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "✏️" },
  { name: "Vercel", icon: "▲" },
  { name: "Razorpay", icon: "💳" },
  { name: "Stripe", icon: "💰" },
];

// Row 2 — scrolls right → left (reverse)
export const TECH_STACK_ROW2 = [
  { name: "Express.js", icon: "🚂" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Redux", icon: "🔄" },
  { name: "Prisma ORM", icon: "🔺" },
  { name: "Socket.io", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
  { name: "JWT Auth", icon: "🔐" },
  { name: "Cloudinary", icon: "🌤" },
  { name: "SendGrid", icon: "📧" },
  { name: "WhatsApp API", icon: "💬" },
  { name: "Git", icon: "🌿" },
  { name: "VS Code", icon: "💻" },
];

// Legacy — keep for compatibility
export const TECH_STACK = [...TECH_STACK_ROW1];

// ─── Process Steps ───
export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your business, goals and target audience. Discovery shapes everything that follows.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and high-fidelity UI designs crafted in Figma. You review and approve before we touch code.",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, performant code using modern frameworks. Frontend, backend, APIs and integrations — all built right.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Full testing, deployment and go-live. Your product lands in the world ready to perform.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    step: "05",
    title: "Support",
    description:
      "We stay with you after launch — updates, improvements, performance monitoring and technical support.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

// ─── Testimonials ───
export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Founder, FitZone Gym",
    quote:
      "CodeCraft built our entire management platform from scratch. The QR attendance and payment system works flawlessly. Our operations became 3x more efficient.",
    avatar: "RS",
    gradient: "from-violet-500 to-purple-600",
    isDemo: true,
  },
  {
    name: "Priya Mehta",
    role: "Co-Founder, ShopHub",
    quote:
      "We needed a custom e-commerce platform — not a template. CodeCraft delivered exactly that with a beautiful admin panel. Sales went up from day one.",
    avatar: "PM",
    gradient: "from-pink-500 to-rose-600",
    isDemo: true,
  },
  {
    name: "Amit Verma",
    role: "Owner, The Garden Café",
    quote:
      "The restaurant management system transformed how we run our kitchen. Digital orders, live KDS updates, smooth billing. The team was professional throughout.",
    avatar: "AV",
    gradient: "from-emerald-500 to-teal-600",
    isDemo: true,
  },
];

// ─── FAQ ───
export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "A business website typically takes 2–4 weeks. Web applications and e-commerce platforms take 4–10 weeks depending on scope and features.",
  },
  {
    q: "Do you build fully custom websites or use templates?",
    a: "We build 100% custom websites designed and developed specifically for your brand — no templates, no shortcuts.",
  },
  {
    q: "Will the website be mobile responsive?",
    a: "Yes, every project we build is mobile-first and tested across all device sizes before delivery.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance packages and are available for updates, improvements and technical support after your project goes live.",
  },
  {
    q: "Can you integrate payment gateways?",
    a: "Yes — Razorpay, Stripe, and other payment systems. We handle the complete payment flow including checkout and refunds.",
  },
  {
    q: "What is your pricing?",
    a: "Pricing depends on project scope. Business websites start from ₹25,000. Contact us for a free custom quote specific to your requirements.",
  },
];

// ─── Budget Options ───
export const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not Sure Yet",
];

export const SERVICE_OPTIONS = [
  "Business Website",
  "E-commerce Store",
  "Web Application",
  "UI/UX Design",
  "API Development",
  "Maintenance & SEO",
  "Other",
];

// ─── Clients / Companies ───
export const CLIENTS = [
  {
    id: "fitzone",
    name: "FitZone Gym",
    category: "Health & Fitness",
    initials: "FZ",
    gradient: "from-violet-600 to-purple-600",
    bg: "bg-violet-500/10",
  },
  {
    id: "shophub",
    name: "ShopHub",
    category: "E-commerce",
    initials: "SH",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "cafemanager",
    name: "The Garden Café",
    category: "Restaurant",
    initials: "GC",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "learnhub",
    name: "LearnHub",
    category: "EdTech",
    initials: "LH",
    gradient: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-500/10",
  },
  {
    id: "meditrack",
    name: "MediTrack",
    category: "Healthcare",
    initials: "MT",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10",
  },
  {
    id: "buildpro",
    name: "BuildPro",
    category: "Construction",
    initials: "BP",
    gradient: "from-yellow-500 to-amber-400",
    bg: "bg-yellow-500/10",
  },
  {
    id: "nexlaw",
    name: "NexLaw",
    category: "Legal Services",
    initials: "NL",
    gradient: "from-slate-600 to-gray-600",
    bg: "bg-slate-500/10",
  },
  {
    id: "sportzone",
    name: "SportZone",
    category: "Sports & Fitness",
    initials: "SZ",
    gradient: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-500/10",
  },
  {
    id: "agritech",
    name: "AgriSmart",
    category: "Agriculture Tech",
    initials: "AS",
    gradient: "from-green-600 to-lime-500",
    bg: "bg-green-500/10",
  },
  {
    id: "realestate",
    name: "PropNest",
    category: "Real Estate",
    initials: "PN",
    gradient: "from-fuchsia-500 to-purple-500",
    bg: "bg-fuchsia-500/10",
  },
  {
    id: "logibolt",
    name: "LogiBolt",
    category: "Logistics",
    initials: "LB",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
  },
  {
    id: "startupio",
    name: "Startup.io",
    category: "SaaS",
    initials: "ST",
    gradient: "from-violet-500 to-pink-500",
    bg: "bg-violet-500/10",
  },
];
