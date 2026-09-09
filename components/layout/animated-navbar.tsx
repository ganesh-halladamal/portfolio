"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Matches the `sm` breakpoint, below which the dock is docked to the bottom. */
const MOBILE_QUERY = "(max-width: 639px)";

/** Breathing room kept between the dock and the footer credit row. */
const CLEARANCE = 8;

/**
 * On mobile the dock is fixed to the bottom of the viewport, so it passes over
 * the footer's credit row while scrolling. This yields the dock away once that
 * row reaches it, and brings it back afterwards. Above `sm` the dock sits at the
 * top of the page, so the whole thing is skipped.
 */
function useYieldToFooterCredit(dockRef: React.RefObject<HTMLDivElement | null>) {
  const [isYielded, setIsYielded] = useState(false);
  // The dock lives in the root layout and survives navigation, while the footer
  // remounts per route, so re-bind whenever the route changes.
  const pathname = usePathname();

  useEffect(() => {
    const credit = document.querySelector<HTMLElement>("[data-footer-credit]");
    if (!credit) {
      setIsYielded(false);
      return;
    }

    const mobile = window.matchMedia(MOBILE_QUERY);
    let frame = 0;

    const update = () => {
      frame = 0;
      const dock = dockRef.current;

      if (!dock || !mobile.matches) {
        setIsYielded(false);
        return;
      }

      // Derive the dock's footprint from layout metrics rather than its bounding
      // rect: the rect moves once the dock is translated away, which would make
      // this measurement oscillate.
      const offset = Number.parseFloat(window.getComputedStyle(dock).marginBottom) || 0;
      const zoneTop = window.innerHeight - dock.offsetHeight - offset;

      const rect = credit.getBoundingClientRect();
      const hasEnteredView = rect.top < window.innerHeight && rect.bottom > 0;

      setIsYielded(hasEnteredView && rect.bottom > zoneTop - CLEARANCE);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mobile.addEventListener("change", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mobile.removeEventListener("change", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [dockRef, pathname]);

  return isYielded;
}

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function AnimatedNavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const dockRef = useRef<HTMLDivElement>(null);
  const isYielded = useYieldToFooterCredit(dockRef);

  return (
    <div
      ref={dockRef}
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 z-50 sm:pt-6",
        // Keep the mobile dock above the iOS home indicator.
        "mb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:mb-0",
        className
      )}
      style={{
        transition: "transform 300ms ease-out, opacity 300ms ease-out",
        // On mobile: -50% centres the dock; yielded adds another full height + gap
        // so it slides cleanly below the viewport.
        // On sm+ (top nav) the sm:top-0 class positions it; we keep centring only.
        transform: isYielded
          ? "translate(-50%, calc(100% + 2rem))"
          : "translate(-50%, 0)",
        opacity: isYielded ? 0 : 1,
        pointerEvents: isYielded ? "none" : undefined,
      }}
    >
      <div className="flex items-center gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
