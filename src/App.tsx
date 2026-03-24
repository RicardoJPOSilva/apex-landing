import '@/index.css'
import '@fontsource/geist-sans'

import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { ChessSection } from '@/components/sections/ChessSection'
import { ReverseChessSection } from '@/components/sections/ReverseChessSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

// Video URLs - replace with your actual URLs
const VIDEO_URLS = {
  heroMp4: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  hls1: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  hls2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  hls3: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  hls4: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  hls5: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
}

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <main>
        {/* 1. Hero - MP4 Video */}
        <Hero videoSrc={VIDEO_URLS.heroMp4} />

        {/* 2. Features - 3 cards + HLS */}
        <Features />

        {/* 3. Chess - HLS left */}
        <ChessSection hlsSrc={VIDEO_URLS.hls1} />

        {/* 4. Reverse Chess - HLS right */}
        <ReverseChessSection hlsSrc={VIDEO_URLS.hls2} />

        {/* 5. Numbers - HLS */}
        <NumbersSection hlsSrc={VIDEO_URLS.hls3} />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. CTA + Footer - HLS */}
        <CTASection hlsSrc={VIDEO_URLS.hls4} />
      </main>
    </div>
  )
}

export default App
