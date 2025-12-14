"use client"

import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerChild } from "./motion-components"

const movies = [
  {
    id: 1,
    title: "JIGRI",
    category: "Feature Film",
    images: [
      "/gallery/jigree.jpeg",
    ],
  },
  {
    id: 2,
    title: "Kalyuga - Tales of Modern Minds",
    category: "Webseries",
    images: [
      "/gallery/kalyug-1.png",
      "/gallery/kalyug-2.png",
      "/gallery/kalyug-3.png",
      "/gallery/kalyug-44.png",
      "/gallery/kalyug-5.png",
      "/gallery/kalyug-6.png",
    ],
  },
]

export function LatestMoviesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-6 mx-auto max-w-xs"
            />
            <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-4 text-white">
              Latest Productions
            </h2>
            <p className="text-foreground/60 text-lg font-light">
              Our most recent cinematic masterpieces
            </p>
          </div>
        </FadeInUp>

        {/* Movies Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <StaggerChild key={movie.id}>
                <motion.div
                  className="group cursor-pointer h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Poster */}
                  <div className="relative rounded-2xl overflow-hidden bg-background-secondary aspect-[2/3] mb-4">
                    
                    {/* Image Swap Container */}
                    <div className="relative w-full h-full">
                      {/* Primary Image */}
                      <motion.img
                        src={movie.images[0]}
                        alt={movie.title}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />

                      {/* Hover Image */}
                      {movie.images[1] && (
                        <motion.img
                          src={movie.images[1]}
                          alt={`${movie.title} hover`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                    </div>

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full border-2 border-accent-gold flex items-center justify-center hover:bg-accent-gold/20 transition-colors"
                      >
                        <div className="w-0 h-0 border-l-8 border-l-accent-gold border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                      </motion.button>
                    </motion.div>

                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 40px rgba(212, 175, 55, 0.3)",
                      }}
                    />
                  </div>

                  {/* Title & Category */}
                  <div>
                    <p className="text-sm text-accent-gold font-light tracking-widest uppercase mb-2">
                      {movie.category}
                    </p>
                    <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-accent-gold transition-colors">
                      {movie.title}
                    </h3>
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
