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
          <h2 className="text-4xl font-light tracking-wider text-white">
            Visit Us
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]
                     border border-accent-gold/20 hover:border-accent-gold/50
                     transition-all duration-300 group"
        >
          {/* REAL GOOGLE MAP */}
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps?q=Flat%206,%20Conegar%20Court,%20Slough,%20England%20SL13SH&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8
                       glass p-5 sm:p-6 rounded-xl
                       border border-accent-gold/30 backdrop-blur-md"
          >
            <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">
              Studio Address
            </p>
            <p className="text-white font-light text-lg">
              Flat 6, Conegar Court
            </p>
            <p className="text-foreground/70 font-light">
              Slough, England, SL13SH
            </p>
          </motion.div>

          {/* Glow Effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                       transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 40px rgba(212, 175, 55, 0.18)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
