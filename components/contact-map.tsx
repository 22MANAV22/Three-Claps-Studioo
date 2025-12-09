"use client"

import { motion } from "framer-motion"

export function ContactMap() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light tracking-wider text-white">Visit Us</h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] border border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300 group"
        >
          {/* Placeholder for actual map integration */}
          <div className="w-full h-full bg-gradient-to-br from-background-secondary via-background-tertiary to-background flex items-center justify-center">
            <img
              src="/gallery/map.png"
              alt="Studio location"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-8 left-8 glass p-6 rounded-xl border border-accent-gold/30 backdrop-blur-md"
          >
            <p className="text-accent-gold font-light tracking-widest text-sm uppercase mb-2">Studio Address</p>
            <p className="text-white font-light text-lg">Flat 6, Conegar Court</p>
            <p className="text-foreground/70 font-light">Slough, England, SL13SH</p>
          </motion.div>

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 40px rgba(212, 175, 55, 0.15)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
