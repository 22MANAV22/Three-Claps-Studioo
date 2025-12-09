"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "Three Claps Studios established with a vision to revolutionize premium film production.",
  },
  // {
  //   year: "2013",
  //   title: "First Award",
  //   description: "Won Best Director award at prestigious international film festival.",
  // },
  // {
  //   year: "2016",
  //   title: "Global Reach",
  //   description: "Expanded operations to include offices in New York, London, and Tokyo.",
  // },
  // {
  //   year: "2019",
  //   title: "Industry Recognition",
  //   description: "Named one of the top 10 production studios globally by leading film journals.",
  // },
  // {
  //   year: "2023",
  //   title: "Innovation Hub",
  //   description: "Launched cutting-edge virtual production and AI-assisted editing facilities.",
  // },
  // {
  //   year: "2025",
  //   title: "Future Vision",
  //   description: "Pioneering next-generation immersive storytelling experiences.",
  // },
]

export function TimelineSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white">Our Journey</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-accent-gold to-background" />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`flex ${idx % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${idx % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="glass p-6 rounded-xl border border-accent-gold/20 hover:border-accent-gold/50 transition-all group"
                  >
                    <h3 className="text-3xl font-light text-accent-gold mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-light text-white mb-3">{milestone.title}</h4>
                    <p className="text-sm text-foreground/70 font-light leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 rounded-full bg-accent-gold absolute z-10 transform -translate-x-1/2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
