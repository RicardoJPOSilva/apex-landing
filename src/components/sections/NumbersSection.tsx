import { useHls } from '@/hooks/useHls'
import { Marquee } from '@/components/Marquee'

interface NumbersSectionProps {
  hlsSrc: string
}

const stats = [
  { value: '10M+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '150+', label: 'Countries' },
  { value: '500+', label: 'Integrations' },
]

export function NumbersSection({ hlsSrc }: NumbersSectionProps) {
  const videoRef = useHls({ src: hlsSrc, autoplay: true })

  return (
    <section className="py-24 px-4 bg-bg relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="hls-video opacity-20"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Numbers Don't Lie</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Real results from real companies
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="border-t border-b border-white/10 py-8">
          <Marquee className="text-2xl md:text-3xl font-semibold text-foreground/50">
            <span className="mx-8">Enterprise</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Innovation</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Excellence</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Scale</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Success</span>
            <span className="mx-8">•</span>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
