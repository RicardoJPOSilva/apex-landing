import { useHls } from '@/hooks/useHls'
import { LiquidGlass } from '@/components/LiquidGlass'
import { Zap, Shield, Rocket } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  hlsSrc: string
}

const features: Feature[] = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Lightning Fast',
    description: 'Built for speed with cutting-edge technology stack',
    hlsSrc: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built-in',
    hlsSrc: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Scalable Architecture',
    description: 'Grow from startup to enterprise seamlessly',
    hlsSrc: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
]

function FeatureCard({ feature }: { feature: Feature }) {
  const videoRef = useHls({ src: feature.hlsSrc, autoplay: true })

  return (
    <LiquidGlass className="overflow-hidden p-0 group hover:scale-[1.02] transition-transform duration-300">
      {/* HLS Video Background */}
      <div className="relative h-48 overflow-hidden">
        <video
          ref={videoRef}
          className="hls-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-foreground/70">{feature.description}</p>
      </div>
    </LiquidGlass>
  )
}

export function Features() {
  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need to build the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
