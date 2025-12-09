"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <Image
          src="/hero-background.jpg"
          alt="Three Claps Studio Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient overlay for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Animated gradient background elements - kept for additional depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          animate={{
            background: [
              "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
            ],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          animate={{
            background: [
              "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)",
            ],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Accent line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-8"
        />

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.33, 0.66, 0.66, 1] }}
          className="text-6xl md:text-8xl font-light tracking-wider mb-6 text-white leading-tight"
        >
          Three Claps Studio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.33, 0.66, 0.66, 1] }}
          className="text-lg md:text-2xl text-white/80 font-light tracking-wide mb-12"
        >
          Premier film production studio crafting cinematic excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/about"
              className="px-10 py-4 border-round text-white font-light tracking-widest text-sm rounded-full hover:bg-accent-gold/10 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              EXPLORE OUR WORK
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <button className="px-10 py-4 border border-accent-gold text-accent-gold font-light tracking-widest text-sm rounded-full hover:bg-accent-gold/10 transition-all duration-300">
              WATCH REEL
            </button>
          </motion.div> */}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-accent-gold tracking-widest uppercase">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-accent-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
