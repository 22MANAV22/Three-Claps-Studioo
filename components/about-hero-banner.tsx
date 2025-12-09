"use client"

import { motion } from "framer-motion"

export function AboutHeroBanner() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/gallery/8.png" alt="About banner" className="w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-7xl font-light tracking-wider mb-6 text-white"
        >
          Our Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed"
        >
          Founded on principles of artistic excellence and technological innovation, Three Claps stands as a beacon of
          premium filmmaking
        </motion.p>
      </div>
    </section>
  )
}
