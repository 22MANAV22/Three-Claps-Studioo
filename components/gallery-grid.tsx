"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
}

export function GalleryGrid() {
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Cinematic Dreams", category: "Film", image: "/gallery/1.png" },
    { id: 2, title: "Brand Story", category: "Commercial", image: "/gallery/2.png" },
    { id: 3, title: "Visual Poetry", category: "Documentary", image: "/gallery/3.png" },
    { id: 4, title: "Digital Canvas", category: "Animation", image: "/gallery/4.png" },
    { id: 5, title: "Timeless Moments", category: "Fashion", image: "/gallery/5.png" },
    { id: 6, title: "Sound & Vision", category: "Music Video", image: "/gallery/6.png" },
    { id: 7, title: "Corporate Elite", category: "Corporate", image: "/gallery/7.png" },
    { id: 8, title: "Creative Vision", category: "Experimental", image: "/gallery/8.png" },
    { id: 9, title: "Creative Vision", category: "Experimental", image: "/gallery/9.png" },
    { id: 10, title: "Creative Vision", category: "Experimental", image: "/gallery/10.png" },
    { id: 11, title: "Creative Vision", category: "Experimental", image: "/gallery/11.jpg" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-background-secondary
                         aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-full transition-transform duration-500 md:group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content (always visible on mobile) */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 text-white
                           opacity-100 md:opacity-0 md:group-hover:opacity-100
                           transition-opacity duration-300"
              >
                <h3 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/70 mb-6">
            Ready to create something extraordinary?
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-white
                         bg-gradient-to-r from-accent-gold to-accent-pink
                         shadow-lg hover:shadow-accent-pink/40 transition-shadow"
            >
              Start Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
