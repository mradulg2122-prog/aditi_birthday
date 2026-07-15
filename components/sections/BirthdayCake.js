'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false)
  const [confetti, setConfetti] = useState([])

  const blowCandles = () => {
    setBlown(true)
    const pieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#f5c1cc', '#ffd7bd', '#e0d4f0', '#cadbc4', '#f8dfe2'][i % 5],
      delay: Math.random() * 0.3,
      duration: 2 + Math.random() * 2,
    }))
    setConfetti(pieces)
  }

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-script text-2xl text-rose-400 mb-2">make a wish</p>
        <h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80">birthday cake</h2>
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            className="absolute top-0 w-2 h-3 rounded-sm"
            style={{ left: `${c.x}%`, background: c.color }}
            initial={{ y: -20, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: 0, rotate: 720 }}
            transition={{ duration: c.duration, delay: c.delay, ease: 'easeIn' }}
          />
        ))}
      </AnimatePresence>

      <div className="relative flex flex-col items-center">
        {/* Candles */}
        <div className="flex gap-4 mb-2 relative z-10">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scaleY: [1, 1.2, 1] }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ scaleY: { repeat: Infinity, duration: 0.6 + i * 0.1 } }}
                    className="w-3 h-5 rounded-full bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100"
                    style={{ filter: 'blur(1px)', boxShadow: '0 0 20px rgba(255,200,100,0.8)' }}
                  />
                )}
              </AnimatePresence>
              <div className="w-1.5 h-8 bg-gradient-to-b from-rose-200 to-rose-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Cake tiers */}
        <div className="relative">
          <div className="w-32 h-16 rounded-lg" style={{ background: 'linear-gradient(180deg, #ffd7bd, #f5c1cc)', boxShadow: '0 10px 30px -10px rgba(180,140,160,0.4)' }}>
            <div className="absolute top-3 left-0 right-0 h-2 bg-white/60 rounded-full" />
          </div>
          <div className="w-48 h-16 -mt-2 rounded-lg -ml-8" style={{ background: 'linear-gradient(180deg, #f5c1cc, #e0d4f0)', boxShadow: '0 15px 40px -10px rgba(180,140,160,0.4)' }}>
            <div className="absolute h-2 bg-white/60 rounded-full" style={{ top: '5rem', left: '-2rem', right: '0' }} />
          </div>
          <div className="w-64 h-20 -mt-2 rounded-lg -ml-16" style={{ background: 'linear-gradient(180deg, #e0d4f0, #cadbc4)', boxShadow: '0 20px 50px -10px rgba(180,140,160,0.4)' }} />
        </div>

        <motion.button
          onClick={blowCandles}
          disabled={blown}
          whileHover={{ scale: blown ? 1 : 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-16 px-8 py-3 rounded-full glass text-rose-800 font-medium disabled:opacity-60"
        >
          {blown ? '✨ wish made ✨' : 'Blow the candles'}
        </motion.button>
      </div>
    </section>
  )
}
