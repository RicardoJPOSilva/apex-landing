import { useHls } from '@/hooks/useHls'

interface HlsVideoProps {
  src: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

export function HlsVideo({ src, className, autoplay = false, muted = true, loop = false }: HlsVideoProps) {
  const videoRef = useHls({ src, autoplay, muted, loop })

  return (
    <video
      ref={videoRef}
      className={className}
      playsInline
      muted={muted}
      loop={loop}
    />
  )
}
