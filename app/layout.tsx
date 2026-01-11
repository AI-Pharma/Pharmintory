import { Toaster } from "@components/ui/sonner";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Urbanist } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Pharminvtory",
  description: "A smart solution designed to simplify and automate pharmacy stock management. Track medicines in real time, monitor expiration dates, and receive low-stock alerts to prevent shortages and reduce waste. With an intuitive dashboard, detailed reports, and efficient inventory control, the system improves accuracy, ensures compliance, and supports smooth, reliable pharmacy operations.",
  keywords: ['pharmacy inventory management system', 'pharmacy inventory software', 'pharmacy stock management system', 'medicine inventory management', 'pharmaceutical inventory system'],
  icons: "/favicon/favicon.ico",
  openGraph: {
    title: 'Pharminvtory | ',
    description: "A smart solution designed to simplify and automate pharmacy stock management. Track medicines in real time, monitor expiration dates, and receive low-stock alerts to prevent shortages and reduce waste. With an intuitive dashboard, detailed reports, and efficient inventory control, the system improves accuracy, ensures compliance, and supports smooth, reliable pharmacy operations.",
    url: 'https://www.openpharmacy.online/',
    siteName: 'Pharminvtory',
    locale: "en-GB",
    images: [
      {
        url: '/favicon/favicon.ico',
        width: 1260,
        height: 800,
        alt: 'Pharminvtory logo'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${inter.variable} ${urbanist.variable} antialiased mx-auto max-w-[1440px]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
