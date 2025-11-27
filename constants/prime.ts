import { Feature_Tile_Props } from "@components/feature-page/feature-tile";
import { FeatureTileProps } from "@components/FeatureTile";
import { PriceCardProps } from "@components/landing-page/price-card";
import { TestimonialCardProps } from "@components/landing-page/testimonial-card";
import { MeritTileProps } from "@components/MeritTile";

export const featureTileInfo: FeatureTileProps[] = [
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

export const meritTileInfo: MeritTileProps[] = [
  {
    image: "/images/demo_1.png",
    title: "Easy to understand breakdown of work",
    description:
      "Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading",
  },
  {
    image: "/images/demo_2.png",
    title: "Well detailed stock list",
    description:
      "The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
  },
  {
    image: "/images/demo_3.png",
    title: "Simple and understandable interface",
    description:
      "Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.",
  },
];

export const feature_merit_tile_info: MeritTileProps[] = [
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

export const priceCardInfo: PriceCardProps[] = [
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

export const Testimonials: TestimonialCardProps[] = [
  {
    name: "David Gillroy",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "https://github.com/shadcn.png",
  },
  {
    name: "Kyle Showdole",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "https://github.com/shadcn.png",
  },
  {
    name: "Milla Holland",
    testimonial:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting ",
    rating: 5,
    avatarSrc: "https://github.com/shadcn.png",
  },
];

export const more_feature_merit_tile_info: Feature_Tile_Props[] = [
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
