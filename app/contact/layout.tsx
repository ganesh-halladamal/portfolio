import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact",
  description:
    "Get in touch with Ganesh Halladamal. Let's discuss your next web development project, collaboration opportunity, or any questions you may have. Available for freelance work and consulting.",
  url: "/contact",
  keywords: [
    "contact",
    "hire developer",
    "freelance developer",
    "web development services",
    "get in touch",
    "collaboration",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
