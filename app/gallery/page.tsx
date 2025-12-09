"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
