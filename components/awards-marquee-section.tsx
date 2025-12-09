"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const awards = [
  "Cannes Film Festival",
  "BAFTA Award",
  "Golden Globe",
  "Sundance Select",
  "Academy Recognition",
  "Tribeca Innovation",
]

export function AwardsMarqueeSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-background border-y border-accent-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm font-light tracking-widest text-foreground/60 uppercase mb-8 text-center">
            Recognition & Awards
          </h3>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...awards, ...awards].map((award, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-foreground/70 font-light tracking-wide text-lg px-4"
              >
                <Award size={20} className="text-accent-gold" />
                <span>{award}</span>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
