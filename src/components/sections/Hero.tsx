import { useEffect, useRef } from 'react'
import { HeroButton, HeroSecondaryButton } from '@/components/HeroButton'

interface HeroProps {
  videoSrc: string
}

export function Hero({ videoSrc }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/70 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-transparent to-bg/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">APEX</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Next-generation platform for enterprise excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <HeroButton>Get Started</HeroButton>
          <HeroSecondaryButton>Watch Demo</HeroSecondaryButton>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
    </section>
  )
}
