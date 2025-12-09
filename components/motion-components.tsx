"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FadeInUp({ children, delay = 0, duration = 0.6 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.33, 0.66, 0.66, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInLeft({ children, delay = 0, duration = 0.6 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.33, 0.66, 0.66, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInRight({ children, delay = 0, duration = 0.6 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.33, 0.66, 0.66, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: ReactNode
  offset?: number
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -offset }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
}

export function ScaleOnHover({ children, scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.3, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.33, 0.66, 0.66, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
