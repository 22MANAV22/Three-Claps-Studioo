"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"
import { StaggerContainer, StaggerChild } from "./motion-components"

const teamMembers = [
  {
    name: "Iqbal Singh Kamboj",
    role: "Creative Director",
    image: "/gallery/iqbal.png",
  },
  {
    name: "Marcus Webb",
    role: "Lead Cinematographer",
    image: "/placeholder.svg?key=webb1",
  },
  {
    name: "Rajni Arora",
    role: "Production Designer",
    image: "/gallery/rajni.png",
  },
  
]

export function TeamSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-6 mx-auto max-w-xs"
          />
          <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-4 text-white">Our Creative Team</h2>
          <p className="text-foreground/60 text-lg font-light">Visionary artists and technical masters</p>
        </motion.div>

        {/* Team Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <StaggerChild key={idx}>
                <motion.div className="group cursor-pointer" whileHover={{ y: -15 }} transition={{ duration: 0.4 }}>
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4] bg-background-secondary">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                    >
                      <div className="flex gap-3 mb-0">
                        <motion.button
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                          className="w-10 h-10 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold hover:border-accent-gold transition-all"
                        >
                          <Mail size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                          className="w-10 h-10 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold hover:border-accent-gold transition-all"
                        >
                          <Linkedin size={16} />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 40px rgba(212, 175, 55, 0.2)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-white group-hover:text-accent-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-foreground/60 font-light tracking-widest uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
