import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

interface HeroButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export function HeroButton({ children, ...props }: HeroButtonProps) {
  return (
    <Button
      size="lg"
      className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )
}

export function HeroSecondaryButton({ children, ...props }: HeroButtonProps) {
  return (
    <Button
      size="lg"
      variant="secondary"
      className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
      {...props}
    >
      <Play className="mr-2 h-4 w-4" />
      {children}
    </Button>
  )
}
