import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Joe Sorrenti - RE/MAX City Realty
 * Listings: 0 real + 7 demo (demo entries are marked // DEMO)
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "JS",
    name: "Joe Sorrenti",
    title: "REALTOR®",
    heroImage: "/3.jpg",
    heroImageAlt: "Metro Vancouver Real Estate",
  },
  hero: {
    eyebrow: "RE/MAX City Realty · Metro Vancouver, Vancouver East & Burnaby",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Joe Sorrenti.",
    subheading:
      "Dedicated residential real estate REALTOR® serving Vancouver East, Burnaby, and Metro Vancouver since 1996. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$400M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "30+", suffix: " Yrs", label: "of experience (Since 1996)" },
    { icon: Users, value: "97%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "8+", suffix: " Cities", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Joe Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Joe?",
  headingMain: "The Joe ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Vancouver East, Burnaby, and Metro Vancouver with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:6042503363",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Vancouver East, Burnaby, and communities throughout Metro Vancouver with over three decades of local expertise.",
    },
    {
      icon: ShieldCheck,
      title: "BCFSA & RE/MAX Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Real Estate Professional",
      description:
        "Expert strategic guidance tailored to detached homes, multi-family investments, land assembly, and listing strategy.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Joe",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Joe Sorrenti",
  role: "REALTOR® | RE/MAX City Realty",
  bio: "For more than 30 years, Joe Sorrenti has helped clients across Metro Vancouver, Vancouver East, and Burnaby buy, sell, and invest with confidence. Known for sharp listing strategy, deep expertise in detached homes, multi-family investments, and land assembly, and a straightforward, honest approach, Joe guides every transaction with experience and integrity.",
  image: "/user.jpg",
  specialties: [
    "Residential Detached Homes",
    "Multi-Family Investments",
    "Land Assembly",
    "Listing Strategy & Marketing",
    "Free Home Evaluations",
    "Vancouver East, Burnaby & Metro Vancouver",
  ],
  recentClosings: [
    { address: "Detached Homes & Listing Strategy", neighbourhood: "Vancouver East & Burnaby", price: "Experience" },
    { address: "Multi-Family & Land Assembly", neighbourhood: "Metro Vancouver", price: "Expertise" },
    { address: "Free Property Evaluation", neighbourhood: "Metro Vancouver", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "97% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 0 real, 7 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "East Vancouver Character Home",
    subtitle: "Classic detached home with original details, an updated kitchen, and a sunny south-facing backyard.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,050 sq ft", beds: "4 Beds", baths: "2 Baths" },
    mls: "MLS® 202602001",  // DEMO
  },
  {
    id: "2",
    number: "02/07",
    title: "Burnaby Heights Family Residence",
    subtitle: "Spacious family home with mountain views, finished basement, and easy access to schools and transit.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,300 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202602002",  // DEMO
  },
  {
    id: "3",
    number: "03/07",
    title: "Metrotown High-Rise Condo",
    subtitle: "Elegant condo with floor-to-ceiling windows, in-suite laundry, and secure underground parking.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "900 sq ft", beds: "2 Beds", baths: "2 Baths" },
    mls: "MLS® 202602003",  // DEMO
  },
  {
    id: "4",
    number: "04/07",
    title: "Hastings-Sunrise Laneway Home",
    subtitle: "Detached home with a legal laneway suite, ideal for multigenerational living or rental income.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,200 sq ft", beds: "5 Beds", baths: "3 Baths" },
    mls: "MLS® 202602004",  // DEMO
  },
  {
    id: "5",
    number: "05/07",
    title: "Kingsway Multi-Family Investment",
    subtitle: "Well-located multi-unit property along the Kingsway corridor with strong rental demand.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "4,100 sq ft", beds: "8 Beds", baths: "5 Baths" },
    mls: "MLS® 202602005",  // DEMO
  },
  {
    id: "6",
    number: "06/07",
    title: "Burnaby Land Assembly Opportunity",
    subtitle: "Development-ready parcels in a growing transit-oriented area with strong upside potential.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "0.6 Acre", beds: "0 Beds", baths: "0 Baths" },
    mls: "MLS® 202602006",  // DEMO
  },
  {
    id: "7",
    number: "07/07",
    title: "Vancouver Heights Executive Residence",
    subtitle: "Refined custom residence with panoramic city views, premium finishes, and a private garden.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,400 sq ft", beds: "5 Beds", baths: "4 Baths" },
    mls: "MLS® 202602007",  // DEMO
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "Vancouver Clients",
    body: "From East Vancouver homes to Burnaby investment properties, receive seasoned guidance for the move ahead.",
  },
  areaBadge: "Metro Vancouver & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Professional",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["RE/MAX", "97% Satisfaction"],
      handle: "Joe Sorrenti | RE/MAX",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Vancouver East, Burnaby, and Metro Vancouver.",
      name: "Joe Sorrenti",
      role: "REALTOR®",
      initials: "JS",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 1996",
      quote: "30+ years of professional real estate experience serving over 8 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Joe Sorrenti",
      role: "REALTOR® | RE/MAX City Realty",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Joe brings local market knowledge, thorough communication, and personalized care to clients across Metro Vancouver.",
      rating: 5,
    },
    badge: { reviewCount: "97%", ratingLabel: "Client Satisfaction", clientsCount: "8+ Cities" },
    split: {
      date: "Metro Vancouver & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Metro Vancouver Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the RE/MAX network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$400M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Joe Sorrenti at RE/MAX City Realty for expert real estate services across Vancouver East, Burnaby, and Metro Vancouver.",
  bulletPoints: [
    "Over 30 years of dedicated experience serving clients since 1996",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 8+ cities including Vancouver East, Burnaby, Metro Vancouver",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Joe (604) 250-3363",
  secondaryCtaLink: "tel:6042503363",
  agentName: "Joe Sorrenti",
  agentTitle: "REALTOR®",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Joe's Approach",
  subtitle: "Metro Vancouver",
  stats: [
    { label: "Satisfaction", value: "97%" },
    { label: "Experience", value: "30+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "RE/MAX City Realty",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "30+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "97%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by Joe Sorrenti.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (604) 555-0199",
    address: "e.g. 123 Main Street, Vancouver",
  },
  contactDetails: {
    phone: { label: "Direct: (604) 250-3363", href: "tel:6042503363" },
    email: { label: "joe@sorrenti.com", href: "mailto:joe@sorrenti.com" },
    location: "RE/MAX City Realty, #101 - 2806 Kingsway, Vancouver, BC V5R 5T5",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "RE/MAX City Realty - Joe Sorrenti",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Joe Sorrenti", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "BCFSA Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Metro Vancouver, BC",
    phonePrimary: { label: "Direct: (604) 250-3363", href: "tel:6042503363" },
    phoneSecondary: { label: "Office: (604) 253-7575", href: "tel:6042537575" },
    contactLink: { label: "Email: joe@sorrenti.com", href: "mailto:joe@sorrenti.com" },
  },
  brandBar: {
    brandName: "JOE SORRENTI",
    badgeText: "RE/MAX City Realty",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Joe Sorrenti Personal Real Estate Corporation - RE/MAX City Realty.",
    copyrightRights: "All rights reserved.",
  },
};