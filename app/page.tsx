"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HeroSection } from "@/components/hero-section"
import { LatestMoviesSection } from "@/components/latest-movies-section"
import { AboutPreviewSection } from "@/components/about-preview-section"
import { ServicesSection } from "@/components/services-section"
import { GalleryPreviewSection } from "@/components/gallery-preview-section"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LatestMoviesSection />
      <ServicesSection />
      {/* <GalleryPreviewSection /> */}
      <AboutPreviewSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
