"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-pink/20 to-accent-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-indigo/20 to-accent-pink/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-gold via-accent-pink to-accent-cyan bg-clip-text text-transparent"
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
        >
          Explore our showcase of premium film productions, creative projects, and cinematic moments that define Three
          Claps Studio.
        </motion.p>
      </div>
    </section>
  )
}
