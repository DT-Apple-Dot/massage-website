import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grand Massage - Premium Outcall Massage Services in Bangkok",
  description:
    "Experience ultimate relaxation with our professional outcall massage services in Bangkok. Thai massage, oil massage, aromatherapy, and four hands massage available.",
  keywords:
    "massage Bangkok, outcall massage, Thai massage, oil massage, aromatherapy massage, professional massage Thailand",
  author: "Grand Massage",
  robots: "index, follow",
  openGraph: {
    title: "Grand Massage - Premium Outcall Massage Services",
    description:
      "Professional outcall massage services delivered to your home or hotel in Bangkok.",
    url: "https://yoursite.com",
    type: "website",
    image: "https://yoursite.com/images/projects/Slide1.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Massage - Premium Outcall Massage",
    description: "Professional massage services in Bangkok.",
    image: "https://yoursite.com/images/projects/Slide1.jpg",
  },
  canonical: "https://yoursite.com",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Experience ultimate relaxation with our professional outcall massage services in Bangkok."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yoursite.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE_HERE"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Grand Massage",
              description: "Premium outcall massage services in Bangkok",
              url: "https://yoursite.com",
              telephone: "+66XXXXXXXXX",
              email: "info@grandmassage.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bangkok",
                addressLocality: "Bangkok",
                addressCountry: "TH",
              },
              image: "https://yoursite.com/images/projects/Slide1.jpg",
              serviceArea: {
                "@type": "City",
                name: "Bangkok",
              },
              priceRange: "฿900 - ฿2500",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
