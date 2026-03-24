import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  children: React.ReactNode
  reverse?: boolean
}

export function Marquee({ className, children, reverse = false }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex gap-8"
        style={{
          animation: `marquee 30s linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
