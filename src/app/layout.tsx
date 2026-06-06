import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vestio-d.github.io/My-Portfolio/"),
  title: "Printoy A S | Full-Stack Web Developer & Freelancer",
  description:
    "Professional Full-Stack Web Developer specializing in React, Next.js, Django, .NET, and Angular. Building scalable, modern web applications and websites. Available for freelance web development projects.",
  keywords: [
    "Printoy A S",
    "web developer",
    "full-stack developer",
    "freelance web developer",
    "React developer",
    "Next.js developer",
    "Django developer",
    ".NET developer",
    "Angular developer",
    "Tailwind CSS",
    "Python developer",
    "web application developer",
    "website builder",
    "hire web developer",
    "freelance developer",
    "Kerala developer",
    "India web developer",
    "custom website development",
    "web app development",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Printoy A S", url: "https://github.com/VESTIO-D" }],
  creator: "Printoy A S",
  publisher: "Printoy A S",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vestio-d.github.io/My-Portfolio/",
    siteName: "Printoy A S Portfolio",
    title: "Printoy A S | Full-Stack Web Developer & Freelancer",
    description:
      "Professional Full-Stack Web Developer specializing in React, Next.js, Django, .NET, and Angular. Building scalable, modern web applications. Available for freelance work.",
    images: [
      {
        url: "/images/ava.png",
        width: 656,
        height: 800,
        alt: "Printoy A S - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printoy A S | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in React, Next.js, Django, .NET, Angular. Available for freelance work.",
    images: ["/images/ava.png"],
  },
  alternates: {
    canonical: "https://vestio-d.github.io/My-Portfolio/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Printoy A S",
              jobTitle: "Full-Stack Web Developer",
              url: "https://vestio-d.github.io/My-Portfolio/",
              sameAs: [
                "https://github.com/VESTIO-D",
                "https://www.linkedin.com/in/printoy/",
                "https://www.instagram.com/v_estio_d/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Django",
                "Python",
                "JavaScript",
                "TypeScript",
                ".NET",
                ".NET Core",
                "Angular",
                "Tailwind CSS",
                "Web Development",
                "Full-Stack Development",
              ],
              offers: {
                "@type": "Offer",
                description:
                  "Custom website and web application development services",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
