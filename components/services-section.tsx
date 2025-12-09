"use client"

import { motion } from "framer-motion"
import { Camera, Clapperboard, Film, Sparkles, Volume2, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    icon: Camera,
    title: "Cinematography",
    description: "Stunning visual storytelling with cinematic excellence and technical precision",
  },
  {
    id: 2,
    icon: Film,
    title: "Full Production",
    description: "Complete production solutions from concept to final delivery",
  },
  {
    id: 3,
    icon: Clapperboard,
    title: "Commercial Shoots",
    description: "High-impact commercials that captivate and convert audiences",
  },
  {
    id: 4,
    icon: Volume2,
    title: "Sound Design",
    description: "Immersive audio engineering and professional mixing",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Post-Production",
    description: "Color grading, VFX, and editing with cutting-edge technology",
  },
  {
    id: 6,
    icon: Zap,
    title: "Motion Graphics",
    description: "Dynamic visual effects and animated content creation",
  },
]

const galleryItems = [
  {
    id: 1,
    title: "Cinematic Showcase",
    image: "/gallery-1.jpg",
    category: "Film",
  },
  {
    id: 2,
    title: "Commercial Series",
    image: "/gallery-2.jpg",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Corporate Content",
    image: "/gallery-3.jpg",
    category: "Corporate",
  },
  {
    id: 4,
    title: "Brand Stories",
    image: "/gallery-4.jpg",
    category: "Branding",
  },
]

const containerVariantsServices = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariantsServices = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const containerVariantsGallery = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariantsGallery = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ServicesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
            Comprehensive production services designed to bring your creative vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariantsServices}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariantsServices}
                whileHover={{ y: -8 }}
                className="group glass p-8 rounded-2xl border border-white/10 hover:border-accent-gold/30 transition-all duration-500"
              >
                {/* Icon with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-neon rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
                  <Icon className="w-12 h-12 text-accent-gold group-hover:text-accent-neon transition-colors duration-500 relative z-10" />
                </div>

                <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-accent-gold transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        Gallery Header
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16 mt-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-light tracking-wider text-foreground mb-4">Our Work</h2>
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
          variants={containerVariantsGallery}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariantsGallery}
              whileHover={{ y: -8 }}
              className="group relative h-64 rounded-2xl overflow-hidden glass border border-white/10 hover:border-accent-gold/30 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
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
