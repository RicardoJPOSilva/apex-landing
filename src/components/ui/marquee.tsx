import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  className?: string
  speed?: number
}

export function Marquee({ items, className, speed = 30 }: MarqueeProps) {
  const doubledItems = [...items, ...items]

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex animate-marquee"
        style={{
          animationDuration: `${(items.length * 60) / speed}s`,
          animationTimingFunction: 'linear',
        }}
      >
        {doubledItems.map((item, index) => (
          <span
            key={index}
            className="flex-shrink-0 px-8 py-2 text-foreground/60 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
