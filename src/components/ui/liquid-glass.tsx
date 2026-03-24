import { cn } from '@/lib/utils'

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'strong'
}

export function LiquidGlass({
  className,
  intensity = 'medium',
  ...props
}: LiquidGlassProps) {
  const intensityStyles = {
    light: 'backdrop-blur-[10px] bg-white/[0.03] border-white/[0.05]',
    medium: 'backdrop-blur-[20px] bg-white/[0.05] border-white/[0.08]',
    strong: 'backdrop-blur-[30px] bg-white/[0.08] border-white/[0.12]',
  }

  return (
    <div
      className={cn(
        'rounded-2xl shadow-xl',
        intensityStyles[intensity],
        className
      )}
      {...props}
    />
  )
}
