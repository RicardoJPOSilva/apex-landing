import { useHls } from '@/hooks/useHls'
import { LiquidGlass } from '@/components/LiquidGlass'
import { Target, TrendingUp } from 'lucide-react'

interface ReverseChessSectionProps {
  hlsSrc: string
}

export function ReverseChessSection({ hlsSrc }: ReverseChessSectionProps) {
  const videoRef = useHls({ src: hlsSrc, autoplay: true })

  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-6 order-2 lg:order-1">
            <LiquidGlass className="inline-flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Reverse Strategy</span>
            </LiquidGlass>

            <h2 className="text-4xl md:text-5xl font-bold">
              Outmaneuver the Competition
            </h2>

            <p className="text-foreground/70 text-lg">
              Stay ahead by anticipating market shifts before they happen.
              Our reverse-engineering approach gives you the edge.
            </p>

            <ul className="space-y-3">
              {['Competitive intelligence', 'Market prediction', 'Strategic positioning'].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Video - Right Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video order-1 lg:order-2">
            <video
              ref={videoRef}
              className="hls-video"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-l from-bg/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
