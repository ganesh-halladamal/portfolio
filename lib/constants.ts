export const SITE_CONFIG = {
  name: "Ganesh Halladamal",
  role: "Full Stack Developer",
  email: "halladmalganesh@gmail.com",
  phone: "+917022815741",
  location: "India",
  social: {
    linkedin: "https://www.linkedin.com/in/ganesh-halladamal/",
    twitter: "https://x.com/ganeshph_",
    github: "https://github.com/ganesh-halladamal",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
