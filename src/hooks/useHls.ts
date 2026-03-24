import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface UseHlsOptions {
  src: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

export function useHls({ src, autoplay = false, muted = true, loop = false }: UseHlsOptions) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      })

      hls.loadSource(src)
      hls.attachMedia(video)

      if (autoplay) {
        video.play().catch(() => {})
      }

      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      if (autoplay) {
        video.play().catch(() => {})
      }
    }
  }, [src, autoplay, muted, loop])

  return videoRef
}
