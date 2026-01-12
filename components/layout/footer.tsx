"use client";

import { ModernAnimatedFooter } from "@/components/ui/modern-animated-footer";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: SITE_CONFIG.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: SITE_CONFIG.social.twitter,
      label: "Twitter",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: SITE_CONFIG.social.github,
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: `mailto:${SITE_CONFIG.email}`,
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ModernAnimatedFooter
      brandName={SITE_CONFIG.name}
      brandDescription={`${SITE_CONFIG.role} passionate about building modern web applications and creating exceptional user experiences.`}
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName={SITE_CONFIG.name}
      creatorUrl={SITE_CONFIG.social.linkedin}
    />
  );
}

