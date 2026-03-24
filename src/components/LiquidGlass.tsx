import { cn } from '@/lib/utils'

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function LiquidGlass({ className, children, ...props }: LiquidGlassProps) {
  return (
    <div
      className={cn(
        'liquid-glass rounded-2xl p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
