"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative py-32 px-6 lg:px-8 pt-40 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Accent line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-7xl font-light tracking-wider mb-6 text-white"
        >
          Let's Create Together
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed"
        >
          Connect with our team to discuss your next cinematic project
        </motion.p>
      </div>
    </section>
  )
}
