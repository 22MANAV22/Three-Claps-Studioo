"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "threeclapssstudio@gmail.com",
    subtext: "Response within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subtext: "Mon-Fri, 9am-6pm PST",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Flat 6, Conegar Court, Slough, England, SL1 3SH",
    subtext: "Flat 6, Conegar Court, Slough, England, SL1 3SH",
  },
  // {
  //   icon: Clock,
  //   title: "Availability",
  //   details: "Year-round projects",
  //   subtext: "Flexible scheduling",
  // },
]

export function ContactInfoGrid() {
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
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white">Get in Touch</h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)",
                }}
                className="glass p-8 rounded-2xl border border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300 group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-accent-gold/30 to-transparent"
                >
                  <Icon size={28} className="text-accent-gold" />
                </motion.div>

                <h3 className="text-xl font-light tracking-wide text-white mb-2">{info.title}</h3>

                <p className="text-lg text-accent-gold font-light mb-2">{info.details}</p>

                <p className="text-sm text-foreground/60 font-light">{info.subtext}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
