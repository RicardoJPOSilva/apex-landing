import { useHls } from '@/hooks/useHls'
import { Marquee } from '@/components/Marquee'
import { HeroButton } from '@/components/HeroButton'
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

interface CTASectionProps {
  hlsSrc: string
}

export function CTASection({ hlsSrc }: CTASectionProps) {
  const videoRef = useHls({ src: hlsSrc, autoplay: true })

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="hls-video opacity-30"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-24">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Ready to <span className="text-gradient">Ascend?</span>
        </h2>
        <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
          Join thousands of companies already transforming their business with APEX.
          Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <HeroButton className="text-lg px-10">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </HeroButton>
        </div>

        {/* Social Proof */}
        <div className="border-t border-b border-white/10 py-8 mb-16">
          <Marquee className="text-sm text-foreground/50">
            <span className="mx-4">No credit card required</span>
            <span className="mx-4">•</span>
            <span className="mx-4">14-day free trial</span>
            <span className="mx-4">•</span>
            <span className="mx-4">Cancel anytime</span>
            <span className="mx-4">•</span>
            <span className="mx-4">24/7 support</span>
            <span className="mx-4">•</span>
          </Marquee>
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-bold text-gradient">APEX</div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-foreground/50">
            © 2026 APEX. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  )
}
