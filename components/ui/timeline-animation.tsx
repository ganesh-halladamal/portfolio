"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { RefObject, ElementType } from "react";

interface TimelineContentProps<T extends ElementType> {
  as?: T;
  animationNum: number;
  timelineRef: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function TimelineContent<T extends ElementType = "div">({
  as,
  animationNum,
  timelineRef,
  customVariants,
  children,
  className,
  ...props
}: TimelineContentProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TimelineContentProps<T>>) {
  const Component = as || "div";
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      as={Component}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}


