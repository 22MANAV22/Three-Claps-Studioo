"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfoGrid } from "@/components/contact-info-grid"
import { ContactMap } from "@/components/contact-map"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactInfoGrid />
      <ContactMap />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
