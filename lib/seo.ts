import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Ganesh Halladamal",
  title: "Ganesh Halladamal | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, scalable, and user-friendly web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ganeshph.online",
  ogImage: "/og-image.jpg",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "Backend Developer",
    "Ganesh Halladamal",
    "Portfolio",
    "Web Development",
    "Software Engineer",
  ],
  author: {
    name: "Ganesh Halladamal",
    email: "ganeshhalladamal@gmail.com",
    linkedin: "https://www.linkedin.com/in/ganesh-halladamal",
    github: "https://github.com/ganesh-halladamal",
  },
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const metaDescription = description || SITE_CONFIG.description;
  const metaImage = image || SITE_CONFIG.ogImage;
  const metaUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const metaKeywords = keywords ? [...SITE_CONFIG.keywords, ...keywords] : SITE_CONFIG.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@ganeshhalladamal",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}
