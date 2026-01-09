import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" },
    { icon: Github, href: SITE_CONFIG.social.github, label: "GitHub" },
    { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
    { icon: Phone, href: `tel:${SITE_CONFIG.phone}`, label: "Phone" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg shadow-indigo-600/20">
              <Image
                src="/picofme.webp"
                alt={SITE_CONFIG.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {SITE_CONFIG.role}
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Passionate about building modern web applications
              and creating exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-red-500">♥</span> by {SITE_CONFIG.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
