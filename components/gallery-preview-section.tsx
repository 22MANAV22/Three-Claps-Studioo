"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Cinematic Showcase",
    image: "/gallery/1.png",
    category: "Film",
  },
  {
    id: 2,
    title: "Commercial Series",
    image: "/gallery/2.png",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Corporate Content",
    image: "/gallery/3.png",
    category: "Corporate",
  },
  {
    id: 4,
    title: "Brand Stories",
    image: "/gallery/4.png",
    category: "Branding",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

import { Variants, easeOut } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};


export function GalleryPreviewSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-light tracking-wider text-foreground mb-4">Our Gallery</h2>
            <p className="text-xl text-foreground/60 font-light">A glimpse into our latest cinematic productions</p>
          </div>
          <Link href="/gallery">
            <motion.button
              whileHover={{ x: 4 }}
              className="hidden md:flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-neon text-white font-light rounded-full hover:shadow-lg hover:shadow-accent-gold/50 transition-all duration-500"
            >
              View All <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {galleryItems.map((item) => (
            <motion.div
  key={item.id}
  variants={itemVariants}
  whileHover={{ y: -8 }}
  className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/30 transition-all duration-500 cursor-pointer"
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    unoptimized
    className="object-cover"
  />

  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
    <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
    <p className="text-sm text-accent-gold">{item.category}</p>
  </div>
</motion.div>

          ))}
        </motion.div>

        {/* Mobile Button */}
        <Link href="/gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:hidden w-full py-4 bg-gradient-to-r from-accent-gold to-accent-neon text-white font-light rounded-full hover:shadow-lg hover:shadow-accent-gold/50 transition-all duration-500"
          >
            Explore Full Gallery
          </motion.button>
        </Link>
      </div>
    </section>
  )
}
