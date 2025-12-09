"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Parallax } from "./motion-components"

export function AboutPreviewSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Parallax offset={40}>
              <div className="relative rounded-2xl overflow-hidden h-96 lg:h-full min-h-[500px]">
                <img src="/luxury-film-studio-interior-cinematography.jpg" alt="About us" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
            </Parallax>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[1px] bg-accent-gold mb-6"
            />

            <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-6 text-white">
              Crafted for
              <br />
              Excellence
            </h2>

            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-6">
              We are Three Claps Studio, a premium film production studio dedicated to creating cinematic experiences that transcend
              expectations. Our team of visionary directors, cinematographers, and storytellers collaborate to bring
              bold narratives to life with precision and artistry.
            </p>

            <p className="text-lg text-foreground/60 font-light leading-relaxed mb-8">
              Every frame is meticulously crafted. Every moment matters.
            </p>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-accent-gold hover:text-accent-neon transition-colors group"
              >
                <span className="font-light tracking-widest text-sm uppercase">Explore Our Story</span>
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
