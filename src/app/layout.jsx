import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.grandmassage.org/"),

  title: "Bangkok Massage | Grand Massage Outcall Service in Bangkok",

  description:
    "Grand Massage delivers premium Bangkok massage and Bangkok outcall massage services to your hotel or home. Book expert therapists for Thai massage, oil massage, aromatherapy, and four hands massage.",

  keywords: [
    "bangkok massage",
    "bangkok outcall massage",
    "grand massage",
    "outcall massage bangkok",
    "thai massage bangkok",
    "hotel massage bangkok",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Bangkok Massage | Grand Massage Outcall Service",
    description:
      "Grand Massage delivers premium Bangkok outcall massage services directly to your hotel or home.",
    url: "/",
    siteName: "Grand Massage",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/projects/Slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Massage Bangkok",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grand Massage",
    description:
      "Professional Bangkok outcall massage and hotel massage services by Grand Massage. Expert Thai therapists for relaxing treatments in Bangkok.",
    url: "https://www.grandmassage.org/",
    image: "https://www.grandmassage.org/images/projects/Slide1.jpg",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },

    serviceArea: {
      "@type": "City",
      name: "Bangkok",
    },

    priceRange: "฿900 - ฿2500",
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="XVQDPmlcXH8yXuE7tGuZLsyXBdeAoie6R1vdRgcYwOQ"
        />

        <script
          id="usercentrics-cmp"
          src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
          data-settings-id="jUXvy7bPX49r-M"
          async
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-86VVFWXPG4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-86VVFWXPG4');`,
          }}
        />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body className={`dark ${inter.className}`}>{children}</body>
    </html>
  );
}
