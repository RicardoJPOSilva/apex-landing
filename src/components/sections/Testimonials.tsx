import { LiquidGlass } from '@/components/LiquidGlass'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'APEX transformed how we handle data at scale. The results speak for themselves.',
    author: 'Sarah Chen',
    role: 'CTO, TechCorp',
    avatar: 'SC',
  },
  {
    quote:
      'The most innovative platform we have ever implemented. Worth every penny.',
    author: 'Michael Ross',
    role: 'VP Engineering, ScaleUp',
    avatar: 'MR',
  },
  {
    quote:
      'Our team productivity increased by 300% after switching to APEX.',
    author: 'Emma Johnson',
    role: 'Head of Product, InnovateCo',
    avatar: 'EJ',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted Worldwide</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            See what industry leaders are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <LiquidGlass key={index} className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  )
}
