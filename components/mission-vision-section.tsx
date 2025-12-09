"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create transformative cinematic experiences that challenge conventions, inspire audiences, and elevate the art of filmmaking to new heights.",
      color: "from-accent-gold/20 to-transparent",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most respected and innovative premium film production studio, known for pushing creative boundaries and delivering excellence in every frame.",
      color: "from-accent-neon/20 to-transparent",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white">Our Purpose</h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)" }}
                className="glass p-12 rounded-2xl border border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-accent-gold/30 to-transparent"
                >
                  <Icon size={32} className="text-accent-gold" />
                </motion.div>

                <h3 className="text-3xl font-light tracking-wide mb-4 text-white">{card.title}</h3>

                <p className="text-lg text-foreground/70 font-light leading-relaxed">{card.description}</p>

                {/* Animated border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(212, 175, 55, 0.15)",
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
