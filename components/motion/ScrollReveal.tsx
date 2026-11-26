"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export type RevealVariant = "fade" | "up" | "down" | "left" | "right" | "scale";

export interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in seconds — use for hand-tuned sequencing. */
  delay?: number;
  /** How the content enters. Vary this per section so the page doesn't
   *  feel like one repeated animation from top to bottom. */
  variant?: RevealVariant;
  className?: string;
  as?: "div" | "li" | "section";
}

const DISTANCE = 22;

function offsetFor(variant: RevealVariant) {
  switch (variant) {
    case "up":
      return { x: 0, y: DISTANCE };
    case "down":
      return { x: 0, y: -DISTANCE };
    case "left":
      return { x: DISTANCE * 1.6, y: 0 };
    case "right":
      return { x: -DISTANCE * 1.6, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * Scroll-triggered entrance. Several variants exist deliberately: applying
 * one uniform fade-up to every block is what makes a site feel templated.
 * Collapses to a plain fade when the OS requests reduced motion.
 */
export function ScrollReveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as = "div",
}: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const { x, y } = offsetFor(variant);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : x,
      y: reduce ? 0 : y,
      scale: reduce || variant !== "scale" ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: reduce ? 0.15 : 0.65,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Parent for a list or grid whose children should cascade in. Wrap each
 * child in <StaggerItem> rather than hand-computing delays.
 */
export function Stagger({
  children,
  className,
  step = 0.07,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  as?: "div" | "ul";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : step },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const { x, y } = offsetFor(variant);
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: reduce ? 0 : x,
          y: reduce ? 0 : y,
          scale: reduce || variant !== "scale" ? 1 : 0.96,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: reduce ? 0.15 : 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
