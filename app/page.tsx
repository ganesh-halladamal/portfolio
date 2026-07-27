import { Hero } from "@/components/sections/hero";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Home",
  description:
    "Welcome to Ganesh Halladamal's portfolio. Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects and get in touch.",
  url: "/",
  keywords: [
    "portfolio",
    "web developer portfolio",
    "full stack developer portfolio",
    "react developer",
    "next.js projects",
  ],
});

export default function Home() {
  const words = [
    "HELLO",
    "I'M GANESH",
    "A DATA ENGINEER",
    "ETL ENGINEER",
    "DATA WAREHOUSE",
    "ENTHUSIAST",
    "A SQL ENTHUSIAST",
    "A DATA QUALITY",
    "ADVOCATE",
    "A TRAVELLER",
    "PROBLEM SOLVER",
    "A TECH LOVER",
    "AN INNOVATOR",
  ];

  return <Hero words={words} />;
}
