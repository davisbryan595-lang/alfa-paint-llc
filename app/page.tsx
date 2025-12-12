import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { WhyChoose } from "@/components/why-choose"
import { ServiceArea } from "@/components/service-area"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Gallery />
        <WhyChoose />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
