import { About_Details_Props } from "@components/about-us/about-details";
import { More_Feature_Tile_Props } from "@components/feature-page/feature-tile";
import { Feature_Tile_Props } from "@components/feature-tile";
import { Price_Card_Props } from "@components/landing-page/price-card";
import { Testimonial_Card_Props } from "@components/landing-page/testimonial-card";
import { Merit_Tile_Props } from "@components/merit-tile";

export const feature_tile_info: Feature_Tile_Props[] = [
  {
    icon: "/svgs/grid.svg",
    text: "Find what you need instantly through search by drug name, category and selling price with advanced filters",
    href: "/",
  },
  {
    icon: "/svgs/star.svg",
    text: "Ensure quality through role-based approvals and transparent review logs.",
    href: "/",
  },
  {
    icon: "/svgs/layers.svg",
    text: "Need Help? Access the best help service through our help centres and contact our help desk for any other issues.",
    href: "/",
  },
];

export const merit_tile_info: Merit_Tile_Props[] = [
  {
    image: "/svgs/landing-page/easy.svg",
    title: "Easy to understand breakdown of work",
    description:
      "Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading",
  },
  {
    image: "/svgs/landing-page/well.svg",
    title: "Well detailed stock list",
    description:
      "The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
  },
  {
    image: "/svgs/landing-page/simple.svg",
    title: "Simple and understandable interface",
    description:
      "Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.",
  },
];

export const feature_merit_tile_info: Merit_Tile_Props[] = [
  {
    image: "/svgs/features-page/dashboard.svg",
    title: "Dashboard Insights",
    description:
      "Track uploads, reviews, and overall database health with real-time analytics.",
  },
  {
    image: "/svgs/features-page/data.svg",
    title: "Data Security & Compliance",
    description:
      "Protected by industry-standard encryption and secure access controls.",
  },
  {
    image: "/svgs/features-page/drug.svg",
    title: "Drug Upload System",
    description:
      "Add detailed information on composition, dosage, and expiry dates through guided forms",
  },
  {
    image: "/svgs/features-page/user.svg",
    title: "User Management",
    description:
      "Assign roles, monitor activity and manage permissions in one place with ease.",
  },
];

export const price_card_info: Price_Card_Props[] = [
  {
    headline: "Starter",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 49,
    frequency: "month",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
  {
    headline: "Premium",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 89,
    frequency: "month",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
  {
    headline: "Unlimited",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 169,
    frequency: "month",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
];

export const yearly_packages: Price_Card_Props[] = [
  {
    headline: "Starter",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 49,
    frequency: "year",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
  {
    headline: "Premium",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 89,
    frequency: "year",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
  {
    headline: "Unlimited",
    description: "Nowadays, it isn’t uncommon to see lenders rapidly adopting",
    price: 169,
    frequency: "year",
    features: [
      "100+ Blocks",
      "Free Typography",
      "Fully Adjustable",
      "Figma & Sketch",
      "Support Team",
    ],
  },
];

export const testimonials: Testimonial_Card_Props[] = [
  {
    name: "David Gillroy",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "/images/avatar.png",
  },
  {
    name: "Kyle Showdole",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "/images/avatar.png",
  },
  {
    name: "Milla Holland",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "/images/avatar.png",
  },
];

export const more_feature_merit_tile_info: More_Feature_Tile_Props[] = [
  {
    image: "/images/features-page/demo.png",
    description:
      "Find what you need instantly through search by drug name, category and selling price with advanced filters.",
    title: "Smart Search & Filter",
  },
  {
    image: "/images/features-page/demo.png",
    description:
      "Ensure quality through role-based approvals and transparent review logs.",
    title: "Review & Approval",
  },
  {
    image: "/images/features-page/demo.png",
    description:
      "Have any questions? Access the best help service through our help centres and contact our help desk for any other issues.",
    title: "Help & Support",
  },
];

export const about_us_details: About_Details_Props[] = [
  {
    title: "Innovation",
    imageSrc: "/svgs/about-us/innovation.svg",
    description:
      "We combine technology and healthcare expertise to modernize how pharmaceutical data is handled",
  },
  {
    title: "Intergrity",
    imageSrc: "/svgs/about-us/intergrity.svg",
    description:
      "Data privacy and ethical handling are at the core of our system.",
  },
  {
    title: "Collaboration",
    imageSrc: "/svgs/about-us/collaboration.svg",
    description:
      "Built to empower pharmacists, researchers, and medical teams to work seamlessly together.",
  },
];

export const community_details: About_Details_Props[] = [
  {
    title: "Discussion Forums",
    imageSrc: "/svgs/about-us/discussion.svg",
    description:
      "Share ideas, get feedback, and exchange pharmaceutical insights.",
  },
  {
    title: "Knowledge Hub",
    imageSrc: "/svgs/about-us/knowledge.svg",
    description:
      "Access verified resources, tutorials, and guides on data management.",
  },
  {
    title: "Community Events",
    imageSrc: "/svgs/about-us/collaboration.svg",
    description:
      "Join monthly webinars and virtual meetups on healthcare innovation.",
  },
];
