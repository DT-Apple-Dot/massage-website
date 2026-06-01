// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Providers } from "./components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Bangkok Massage | Grand Massage Outcall Service in Bangkok",
//   description:
//     "Grand Massage delivers premium Bangkok massage and Bangkok outcall massage services to your hotel or home. Book expert therapists for Thai massage, oil massage, aromatherapy, and four hands massage.",
//   keywords:
//     "bangkok massage, bangkok outcall massage, grand massage, outcall massage Bangkok, Thai massage Bangkok, hotel massage Bangkok",
//   author: "Grand Massage",
//   robots: "index, follow",
//   openGraph: {
//     title: "Bangkok Massage | Grand Massage Outcall Service",
//     description:
//       "Grand Massage delivers premium Bangkok outcall massage services directly to your hotel or home.",
//     url: "https://massage-website-six.vercel.app/",
//     type: "website",
//     image: "https://massage-website-six.vercel.app//images/projects/Slide1.jpg",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Bangkok Massage | Grand Massage Outcall Service",
//     description:
//       "Premium Bangkok massage and outcall massage services for hotel and home guests.",
//     image: "https://massage-website-six.vercel.app//images/projects/Slide1.jpg",
//   },
//   canonical: "https://massage-website-six.vercel.app/",
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1.0,
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta
//           name="description"
//           content="Grand Massage delivers premium Bangkok massage and Bangkok outcall massage services to your hotel or home."
//         />
//         <meta
//           name="keywords"
//           content="bangkok massage, bangkok outcall massage, grand massage, outcall massage Bangkok, Thai massage Bangkok, hotel massage Bangkok"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://massage-website-six.vercel.app/" />
//         <link rel="icon" href="/favicon.ico" />

//         {/* Google Search Console */}
//         <meta
//           name="google-site-verification"
//           content="YOUR_GOOGLE_VERIFICATION_CODE_HERE"
//         />

//         {/* Schema.org Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "LocalBusiness",
//               name: "Grand Massage",
//               description:
//                 "Grand Massage offers premium Bangkok massage and Bangkok outcall massage services delivered to your hotel or home.",
//               url: "https://massage-website-six.vercel.app/",
//               telephone: "+66XXXXXXXXX",
//               email: "info@grandmassage.com",
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Bangkok",
//                 addressLocality: "Bangkok",
//                 addressCountry: "TH",
//               },
//               image:
//                 "https://massage-website-six.vercel.app//images/projects/Slide1.jpg",
//               serviceArea: {
//                 "@type": "City",
//                 name: "Bangkok",
//               },
//               priceRange: "฿900 - ฿2500",
//             }),
//           }}
//         />
//       </head>
//       <body className={inter.className}>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://massage-website-six.vercel.app"),

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
    url: "https://massage-website-six.vercel.app",
    image: "https://massage-website-six.vercel.app/images/projects/Slide1.jpg",

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
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
