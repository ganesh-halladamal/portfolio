"use client";

import * as React from "react";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/common/theme-toggle";

export function Navbar() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: FolderOpen },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Theme toggle in top right corner */}
      <div className="fixed top-4 right-4 z-[60]">
        <ThemeToggle />
      </div>
      
      {/* Tubelight navigation bar */}
      <NavBar items={navItems} />
    </>
  );
}
