"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white mb-4">Start a Conversation</h2>
          <p className="text-foreground/60 text-lg font-light">
            Tell us about your project and let's create something extraordinary
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass p-10 md:p-12 rounded-2xl border border-accent-gold/20"
        >
          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8 p-6 bg-accent-gold/20 border border-accent-gold/50 rounded-xl text-center"
            >
              <p className="text-accent-gold font-light text-lg">Thank you! We'll be in touch shortly.</p>
            </motion.div>
          )}

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <label className="text-sm font-light text-foreground/60 uppercase tracking-widest mb-2 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-accent-gold/20 rounded-lg px-4 py-3 text-foreground font-light focus:border-accent-gold focus:outline-none transition-all focus:ring-2 focus:ring-accent-gold/20"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <label className="text-sm font-light text-foreground/60 uppercase tracking-widest mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border border-accent-gold/20 rounded-lg px-4 py-3 text-foreground font-light focus:border-accent-gold focus:outline-none transition-all focus:ring-2 focus:ring-accent-gold/20"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Company & Project Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <label className="text-sm font-light text-foreground/60 uppercase tracking-widest mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-accent-gold/20 rounded-lg px-4 py-3 text-foreground font-light focus:border-accent-gold focus:outline-none transition-all focus:ring-2 focus:ring-accent-gold/20"
                  placeholder="Your company"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label className="text-sm font-light text-foreground/60 uppercase tracking-widest mb-2 block">
                  Project Type
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-accent-gold/20 rounded-lg px-4 py-3 text-foreground font-light focus:border-accent-gold focus:outline-none transition-all focus:ring-2 focus:ring-accent-gold/20"
                  placeholder="Feature film, Commercial, etc."
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <label className="text-sm font-light text-foreground/60 uppercase tracking-widest mb-2 block">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-background/50 border border-accent-gold/20 rounded-lg px-4 py-3 text-foreground font-light focus:border-accent-gold focus:outline-none transition-all focus:ring-2 focus:ring-accent-gold/20 resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-accent-gold text-background font-light tracking-widest text-sm rounded-lg hover:bg-accent-neon transition-all duration-300 inline-flex items-center justify-center gap-3 group"
            >
              SEND MESSAGE
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <p className="text-center text-foreground/50 text-sm font-light mt-6">
            We respect your privacy. Your message will only be used to discuss your project.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
