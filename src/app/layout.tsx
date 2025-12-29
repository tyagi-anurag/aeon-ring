import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

// 1. Setup Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

// 2. Define Viewport Settings
export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 3. Define Primary SEO Metadata
export const metadata: Metadata = {
  // UPDATED: Your real domain
  metadataBase: new URL('https://aeon-ring.netlify.app'), 
  
  title: {
    default: "AEON | The Liquid Sapphire Smart Ring",
    template: "%s | AEON"
  },
  description: "Discover AEON, the first intelligent wearable forged from liquid sapphire glass. Zero gravity comfort, advanced biometrics, and seamless digital control.",
  keywords: [
    "smart ring", 
    "wearable technology", 
    "liquid glass ring", 
    "sapphire wearable", 
    "biometric tracker", 
    "health ring",
    "NFC ring",
    "AEON ring",
    "luxury tech"
  ],
  authors: [{ name: "AEON Labs" }],
  creator: "AEON Labs",
  publisher: "AEON Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 4. Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    // UPDATED: Your real domain
    url: "https://aeon-ring.netlify.app", 
    title: "AEON | The Liquid Sapphire Smart Ring",
    description: "The future of wearables is clear. Experience zero gravity comfort and advanced biometrics in a ring forged from liquid glass.",
    siteName: "AEON",
    // Next.js automatically finds opengraph-image.jpg in src/app/
  },

  // 5. Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "AEON | The Future of Wearables",
    description: "Forged from liquid sapphire. The intelligent ring for health and digital control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}