"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "LUMINA transformed our vision into a cinematic masterpiece. Their attention to detail and creative excellence is unparalleled.",
    author: "Sarah Chen",
    role: "Award-winning Director",
  },
  {
    id: 2,
    text: "Working with LUMINA elevated our brand story to new heights. They are true artisans of cinema.",
    author: "James Mitchell",
    role: "Creative Producer",
  },
  {
    id: 3,
    text: "Every project is handled with precision and passion. LUMINA is the gold standard in production excellence.",
    author: "Emma Rodriguez",
    role: "Lead Cinematographer",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoplay])

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white mb-4">Client Testimonials</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="glass p-10 md:p-16 rounded-2xl text-center"
            >
              <Quote className="mx-auto text-accent-gold mb-6" size={32} />
              <p className="text-xl md:text-2xl font-light text-foreground/90 mb-8 leading-relaxed">
                {testimonials[current].text}
              </p>
              <p className="text-lg font-light text-accent-gold mb-2">{testimonials[current].author}</p>
              <p className="text-sm text-foreground/60 font-light">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
              onClick={() => {
                setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                setAutoplay(false)
              }}
              className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center text-accent-gold hover:border-accent-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setAutoplay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? "bg-accent-gold w-8" : "bg-accent-gold/30 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
              onClick={() => {
                setCurrent((prev) => (prev + 1) % testimonials.length)
                setAutoplay(false)
              }}
              className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center text-accent-gold hover:border-accent-gold transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
