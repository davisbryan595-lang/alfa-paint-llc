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
          {/* Main Gallery */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-3xl border-2 border-[#DC143C]/30">
            <div className="grid md:grid-cols-2 h-full">
              {/* Before */}
              <div className="relative group overflow-hidden">
                <img
                  src={galleryItems[currentIndex].before || "/placeholder.svg"}
                  alt="Before"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  BEFORE
                </div>
              </div>

              {/* After */}
              <div className="relative group overflow-hidden">
                <img
                  src={galleryItems[currentIndex].after || "/placeholder.svg"}
                  alt="After"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#DC143C] text-white px-4 py-2 rounded-lg font-bold text-lg">
                  AFTER
                </div>
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-white tracking-wide">
                {galleryItems[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              size="lg"
              variant="outline"
              className="border-2 border-[#DC143C] bg-[#DC143C]/10 text-white hover:bg-[#DC143C] hover:text-white w-16 h-16 rounded-full p-0"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setIsAutoPlaying(false)
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-12 bg-[#DC143C]" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              size="lg"
              variant="outline"
              className="border-2 border-[#DC143C] bg-[#DC143C]/10 text-white hover:bg-[#DC143C] hover:text-white w-16 h-16 rounded-full p-0"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
