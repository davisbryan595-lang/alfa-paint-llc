"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { image: "https://images.pexels.com/photos/7217966/pexels-photo-7217966.jpeg", title: "Living Room Wall Preparation" },
  { image: "https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg", title: "Master Bedroom Transformation" },
  { image: "https://images.pexels.com/photos/6890399/pexels-photo-6890399.jpeg", title: "Modern Kitchen Refresh" },
  { image: "https://images.pexels.com/photos/12908606/pexels-photo-12908606.jpeg", title: "Luxury Bathroom Update" },
  { image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg", title: "Professional Office Space" },
  { image: "https://images.pexels.com/photos/4792500/pexels-photo-4792500.jpeg", title: "Expert Painting Technique" },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      window.gsap.from(".gallery-title", {
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background paint splash effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DC143C] rounded-full blur-[150px] opacity-10 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="gallery-title font-[family-name:var(--font-bebas)] text-6xl md:text-7xl text-white mb-4 tracking-wide">
            Before & After
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-[#DC143C]"></div>
          </div>
          <p className="text-white/70 text-xl">See the ALFA difference</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Carousel */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-3xl border-2 border-[#DC143C]/30 bg-[#1a1a1a]">
            {/* Carousel Items - Linear infinite animation */}
            <div className="relative w-full h-full">
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Title and Navigation Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 md:p-10">
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-4xl text-white tracking-wide mb-2">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                {currentIndex + 1} of {galleryItems.length}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-10">
            {/* Arrow Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={prev}
                size="lg"
                variant="outline"
                className="border-2 border-[#DC143C] bg-[#DC143C]/10 text-white hover:bg-[#DC143C] hover:text-white transition-all duration-300 w-14 h-14 rounded-full p-0 hover:scale-110"
              >
                <ChevronLeft className="w-7 h-7" />
              </Button>

              <Button
                onClick={next}
                size="lg"
                variant="outline"
                className="border-2 border-[#DC143C] bg-[#DC143C]/10 text-white hover:bg-[#DC143C] hover:text-white transition-all duration-300 w-14 h-14 rounded-full p-0 hover:scale-110"
              >
                <ChevronRight className="w-7 h-7" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setIsAutoPlaying(false)
                  }}
                  className={`rounded-full transition-all duration-300 hover:bg-white/70 ${
                    idx === currentIndex ? "w-10 h-3 bg-[#DC143C]" : "w-3 h-3 bg-white/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <p className="text-white/60 text-sm">
              {isAutoPlaying ? "Auto-playing..." : "Manual mode"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
