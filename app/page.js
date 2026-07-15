'use client'
import { useRef } from 'react'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import Hero from '@/components/sections/Hero'
import MemoryJourney from '@/components/sections/MemoryJourney'
import PolaroidGallery from '@/components/sections/PolaroidGallery'
import MemoryBook from '@/components/sections/MemoryBook'
import ComplimentGarden from '@/components/sections/ComplimentGarden'
import BalloonWishes from '@/components/sections/BalloonWishes'
import BirthdayCake from '@/components/sections/BirthdayCake'
import GiftBox from '@/components/sections/GiftBox'
import Ending from '@/components/sections/Ending'

function App() {
  const journeyRef = useRef(null)

  const handleBegin = () => {
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="relative">
      <SmoothScroll />
      <Cursor />

      <Hero onBegin={handleBegin} />

      <div ref={journeyRef}>
        <MemoryJourney />
      </div>

      <PolaroidGallery />
      <MemoryBook />
      <ComplimentGarden />
      <BalloonWishes />
      <BirthdayCake />
      <GiftBox />
      <Ending />

      <footer className="py-8 text-center text-white/40 text-xs bg-[#0f0a1e]">
        made with warmth • replace photos in /public/photos • music in /public/music
      </footer>
    </main>
  )
}

export default App
