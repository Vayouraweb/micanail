// Mock data for Mica Nail Beauty

export const businessInfo = {
  name: "Mica Nail Beauty",
  tagline: "Where Beauty Meets Artistry",
  description: "Premium nail care and artistry in the heart of Clarence, NY. We specialize in creating stunning nail designs that express your unique style.",
  address: "9410 Main St, Clarence, NY 14031",
  phone: "(716) 407-4105",
  email: "info@micanailbeauty.com",
  hours: {
    monday: "9:30 AM - 7:00 PM",
    tuesday: "9:30 AM - 7:00 PM",
    wednesday: "9:30 AM - 7:00 PM",
    thursday: "9:30 AM - 7:00 PM",
    friday: "9:30 AM - 7:00 PM",
    saturday: "9:30 AM - 7:00 PM",
    sunday: "Closed"
  },
  social: {
    instagram: "https://www.instagram.com/mica.nailbeauty"
  }
};

export const services = [
  {
    id: 1,
    category: "Manicures",
    items: [
      { name: "Classic Manicure", price: "$25", duration: "30 min", description: "Traditional nail care with polish" },
      { name: "Gel Manicure", price: "$35", duration: "45 min", description: "Long-lasting gel polish" },
      { name: "Dip Powder Manicure", price: "$45", duration: "60 min", description: "Durable powder polish system" },
      { name: "Acrylic Full Set", price: "$55+", duration: "90 min", description: "Custom acrylic nail extensions" }
    ]
  },
  {
    id: 2,
    category: "Pedicures",
    items: [
      { name: "Classic Pedicure", price: "$35", duration: "45 min", description: "Relaxing foot care treatment" },
      { name: "Spa Pedicure", price: "$45", duration: "60 min", description: "Deluxe treatment with massage" },
      { name: "Gel Pedicure", price: "$45", duration: "60 min", description: "Long-lasting gel polish for toes" },
      { name: "Luxury Pedicure", price: "$65", duration: "75 min", description: "Premium treatment with paraffin wax" }
    ]
  },
  {
    id: 3,
    category: "Nail Art & Enhancements",
    items: [
      { name: "Nail Art Design", price: "$5+ per nail", duration: "varies", description: "Custom designs, chrome, ombre, 3D art" },
      { name: "French Tips", price: "$10", duration: "15 min", description: "Classic or modern French manicure" },
      { name: "Rhinestones & Gems", price: "$3+ per nail", duration: "varies", description: "Sparkle and shine" },
      { name: "Nail Repair", price: "$5+ per nail", duration: "15 min", description: "Fix broken or damaged nails" }
    ]
  },
  {
    id: 4,
    category: "Additional Services",
    items: [
      { name: "Polish Change", price: "$15", duration: "20 min", description: "Quick color refresh" },
      { name: "Gel Removal", price: "$10", duration: "20 min", description: "Safe gel polish removal" },
      { name: "Acrylic Fill", price: "$35+", duration: "60 min", description: "Maintain your acrylic set" },
      { name: "Paraffin Wax Treatment", price: "$10", duration: "15 min", description: "Moisturizing hand treatment" }
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    alt: "Pink chrome nail design",
    category: "Chrome"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1610992015762-45dca7c44c10?w=800",
    alt: "French tip manicure",
    category: "French Tips"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
    alt: "Gel nail art",
    category: "Nail Art"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
    alt: "Acrylic nails with rhinestones",
    category: "Acrylics"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800",
    alt: "Ombre nail design",
    category: "Ombre"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800",
    alt: "Minimalist nail art",
    category: "Minimalist"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely love this place! The attention to detail is incredible. My gel manicure lasted 3 weeks without chipping. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Emily Chen",
    rating: 5,
    text: "Best nail salon in Clarence! The staff is so talented and friendly. They really listen to what you want and deliver perfection every time.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    rating: 5,
    text: "I've been coming here for over a year and never disappointed. Clean salon, skilled technicians, and beautiful results. Worth every penny!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Amanda Wilson",
    rating: 5,
    text: "The nail art here is amazing! I showed them an Instagram inspiration and they recreated it perfectly. So happy with my nails!",
    date: "1 week ago"
  }
];

export const aboutContent = {
  story: "Mica Nail Beauty was founded with a passion for creating beautiful, healthy nails and providing an exceptional salon experience. Our team of skilled nail technicians brings years of expertise and a commitment to staying current with the latest trends and techniques in nail care.",
  mission: "Our mission is to provide premium nail care services in a clean, welcoming environment where every client feels valued and pampered. We believe that beautiful nails are an expression of personal style and self-care.",
  values: [
    { title: "Quality", description: "We use only premium products and maintain the highest standards of hygiene and safety." },
    { title: "Artistry", description: "Our talented technicians are passionate artists who love bringing your nail vision to life." },
    { title: "Customer Care", description: "Your satisfaction is our priority. We listen, we care, and we deliver exceptional service." },
    { title: "Innovation", description: "We stay ahead of trends, continuously learning new techniques and styles to offer you the best." }
  ]
};