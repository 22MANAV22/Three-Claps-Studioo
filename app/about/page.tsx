"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AboutHeroBanner } from "@/components/about-hero-banner"
import { AboutStorySection } from "@/components/about-story-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { TeamSection } from "@/components/team-section"
import { TimelineSection } from "@/components/timeline-section"

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutHeroBanner />
      <AboutStorySection />
      <MissionVisionSection />
      <TeamSection />
      <TimelineSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
