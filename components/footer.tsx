"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/threeclapssstudio/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ThreeClapStudio", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584487505680", label: "Facebook" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-background-secondary border-t border-accent-gold/10 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-light tracking-[0.15em] text-accent-gold mb-4">THREE CLAPS STUDIO</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Crafting cinematic excellence through premium production and storytelling.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-light tracking-widest text-foreground/80 mb-4 uppercase">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/60 text-sm hover:text-accent-gold transition-colors cursor-pointer">
                <Mail size={16} />
                <span>Info@threeclapsstudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/60 text-sm hover:text-accent-gold transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+44 7728 921218 , +44 7440 580565 </span>
              </div>
              <div className="flex items-center gap-3 text-foreground/60 text-sm hover:text-accent-gold transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>Flat 6, Conegar Court, Slough, England, SL1 3SH</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-light tracking-widest text-foreground/80 mb-4 uppercase">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: "#d4af37" }}
                    transition={{ duration: 0.2 }}
                    className="text-foreground/60 hover:text-accent-gold transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom divider and copyright */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-accent-gold/20 pt-8 origin-left"
        >
          <p className="text-center text-foreground/40 text-sm font-light">
            © 2025 Three Claps Studios. All rights reserved. Crafted with precision and passion.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
