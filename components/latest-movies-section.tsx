"use client"

import { motion } from "framer-motion"
import { useState } from "react"
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

        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-4 text-white">
              Latest Productions
            </h2>
            <p className="text-foreground/60 text-lg font-light">
              Our most recent cinematic masterpieces
            </p>
          </div>
        </FadeInUp>

        {/* Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <StaggerChild key={movie.id}>
                <MovieCard movie={movie} />
              </StaggerChild>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ---------------------------------- */
/* Movie Card with Button Navigation  */
/* ---------------------------------- */

function MovieCard({ movie }: { movie: any }) {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % movie.images.length)
  }

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-background-secondary mb-4">
        <motion.img
          key={index}
          src={movie.images[index]}
          alt={movie.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-2 border-accent-gold
                     flex items-center justify-center bg-black/40 backdrop-blur
                     hover:bg-accent-gold/20 transition-colors"
        >
          <span className="text-accent-gold text-xl">›</span>
        </button>

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 40px rgba(212,175,55,0.25)",
          }}
        />
      </div>

      {/* Text */}
      <p className="text-sm text-accent-gold tracking-widest uppercase mb-2">
        {movie.category}
      </p>
      <h3 className="text-2xl font-light text-white">
        {movie.title}
      </h3>
    </motion.div>
  )
}
