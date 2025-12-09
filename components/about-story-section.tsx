"use client"

import { motion } from "framer-motion"
import { SlideInLeft, SlideInRight, Parallax } from "./motion-components"

export function AboutStorySection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Stack with Parallax */}
          <SlideInLeft>
            <div className="space-y-6">
              <Parallax offset={30}>
                <div className="relative rounded-2xl overflow-hidden h-64">
                  <img src="/gallery/1.png" alt="Studio interior" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                </div>
              </Parallax>
              <Parallax offset={-20}>
                <div className="relative rounded-2xl overflow-hidden h-72">
                  <img src="/gallery/5.png" alt="Equipment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                </div>
              </Parallax>
            </div>
          </SlideInLeft>

          {/* Right: Story Text */}
          <SlideInRight>
            <div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "4rem", opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="h-[1px] bg-accent-gold mb-6"
              />

              <h2 className="text-5xl font-light tracking-wider mb-8 text-white">A Legacy of Excellence</h2>

              {/* Staggered paragraphs */}
              {[
                "Since 2020, Three Claps Studio has been at the forefront of premium film production, partnering with visionary directors, acclaimed producers, and world-class talent to create transformative cinematic experiences.",
                "Our commitment to artistic integrity combined with cutting-edge technology has resulted in numerous award-winning productions that have captivated audiences worldwide.",
                "From intimate character studies to grand cinematic spectacles, we approach each project with unwavering dedication to craft, creativity, and the power of visual storytelling.",
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="text-lg text-foreground/70 font-light leading-relaxed mb-6"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
