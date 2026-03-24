import { useHls } from '@/hooks/useHls'
import { LiquidGlass } from '@/components/LiquidGlass'
import { Crown, Gamepad2 } from 'lucide-react'

interface ChessSectionProps {
  hlsSrc: string
}

export function ChessSection({ hlsSrc }: ChessSectionProps) {
  const videoRef = useHls({ src: hlsSrc, autoplay: true })

  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video - Left Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <video
              ref={videoRef}
              className="hls-video"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/30 to-transparent" />
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <LiquidGlass className="inline-flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Strategic Vision</span>
            </LiquidGlass>

            <h2 className="text-4xl md:text-5xl font-bold">
              Think Like a Champion
            </h2>

            <p className="text-foreground/70 text-lg">
              Our platform helps you make calculated moves with precision.
              Every decision backed by real-time data and insights.
            </p>

            <ul className="space-y-3">
              {['Real-time analytics', 'AI-powered insights', 'Predictive modeling'].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Crown className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
