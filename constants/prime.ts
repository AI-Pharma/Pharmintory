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
