"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 100], ["rgba(11, 11, 13, 0)", "rgba(11, 11, 13, 0.9)"])
  const navBackdrop = useTransform(scrollY, [0, 100], [0, 0.1])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBg,
          backdropFilter: navBackdrop,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-accent-gold/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/three-claps-logo.jpg"
              alt="Three Claps Studio"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-light tracking-[0.2em] text-accent-gold hidden sm:inline">THREE CLAPS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest text-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background-secondary border-t border-accent-gold/10 py-6"
          >
            <div className="px-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light tracking-widest text-foreground/80 hover:text-accent-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}
