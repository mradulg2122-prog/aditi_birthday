'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function MemoryBook() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0.2, 0.6], [0, -160])

  return (
    <section ref={ref} className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-script text-2xl text-rose-400 mb-2">open the</p>
        <h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80">memory book</h2>
      </div>

      <div className="relative" style={{ perspective: '2000px' }}>
        <div className="relative w-[320px] md:w-[500px] h-[400px] md:h-[560px]" style={{ transformStyle: 'preserve-3d' }}>
          {/* Book back cover */}
          <div className="absolute inset-0 glass rounded-r-lg shadow-soft flex items-center justify-center">
            <div className="text-center px-8">
              <p className="font-script text-3xl text-rose-400 mb-4">Dear Aditi,</p>
              <p className="text-rose-900/70 leading-relaxed text-sm md:text-base">
                Every page here is a little piece of a beautiful year — the laughter, the quiet talks, the small joys.
                Thank you for making the ordinary feel a little magical.
              </p>
              <div className="mt-6 font-script text-lg text-rose-500">— with warmth</div>
            </div>
          </div>

          {/* Book front cover - rotates */}
          <motion.div
            className="absolute inset-0 rounded-lg cursor-pointer overflow-hidden"
            style={{
              transformOrigin: 'left center',
              rotateY: open ? -160 : rotate,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(135deg, #f5c1cc 0%, #e0d4f0 100%)',
              boxShadow: '0 30px 60px -20px rgba(180,140,160,0.4)',
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen(!open)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-950/70 p-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/60 mb-6 shadow-soft">
                <img src="/photos/aditi-3.jpg" alt="Aditi" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif-elegant text-3xl md:text-4xl italic mb-2 text-center">Aditi’s Book</h3>
              <p className="text-xs uppercase tracking-[0.3em] opacity-60">of beautiful moments</p>
              <div className="absolute bottom-6 text-xs opacity-60 italic">tap to open</div>
            </div>
            {/* spine */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-rose-400/40 to-purple-400/40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
