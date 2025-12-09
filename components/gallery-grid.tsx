"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { StaggerContainer, StaggerChild } from "@/components/motion-components"

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
}

export function GalleryGrid() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Cinematic Dreams",
      category: "Film",
      image: "/gallery/1.png",
    },
    {
      id: 2,
      title: "Brand Story",
      category: "Commercial",
      image: "/gallery/2.png",
    },
    {
      id: 3,
      title: "Visual Poetry",
      category: "Documentary",
      image: "/gallery/3.png",
    },
    {
      id: 4,
      title: "Digital Canvas",
      category: "Animation",
      image: "/gallery/4.png",
    },
    {
      id: 5,
      title: "Timeless Moments",
      category: "Fashion",
      image: "/gallery/5.png",
    },
    {
      id: 6,
      title: "Sound & Vision",
      category: "Music Video",
      image: "/gallery/6.png",
    },
    {
      id: 7,
      title: "Corporate Elite",
      category: "Corporate",
      image: "/gallery/7.png",
    },
    {
      id: 8,
      title: "Creative Vision",
      category: "Experimental",
      image: "/gallery/8.png",
    },
  ]

  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <StaggerChild key={item.id}>
                <motion.div
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 bg-background-secondary"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </motion.div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.category}</p>
                  </motion.div>

                  {/* Glowing border on hover */}
                  {hoveredId === item.id && (
                    <motion.div
                      layoutId={`border-${item.id}`}
                      className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-accent-gold via-accent-pink to-accent-cyan pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </StaggerChild>
            ))}
          </motion.div>
        </StaggerContainer>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/70 mb-6">Ready to create something extraordinary?</p>
          <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-pink text-white rounded-full font-semibold hover:shadow-lg hover:shadow-accent-pink/50 transition-shadow duration-300"
    >
      Start Your Project
    </motion.button>
  </Link>
        </motion.div>
      </div>
    </section>
  )
}
