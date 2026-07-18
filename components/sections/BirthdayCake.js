'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false)
  const [confetti, setConfetti] = useState([])

  const blowCandles = () => {
    setBlown(true)
    const pieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#f5c1cc', '#ffd7bd', '#e0d4f0', '#cadbc4', '#f8dfe2', '#fbe4d5'][i % 6],
      delay: Math.random() * 0.4,
      duration: 2.4 + Math.random() * 2,
      rotate: Math.random() * 720,
    }))
    setConfetti(pieces)
  }

  // 3 tier config: bottom -> top. Each is centered via flex.
  const tiers = [
    { width: 260, height: 78, gradient: 'linear-gradient(180deg, #e0d4f0 0%, #cadbc4 100%)' }, // bottom
    { width: 200, height: 68, gradient: 'linear-gradient(180deg, #f5c1cc 0%, #e0d4f0 100%)' }, // middle
    { width: 140, height: 58, gradient: 'linear-gradient(180deg, #ffd7bd 0%, #f5c1cc 100%)' }, // top
  ]

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
            animate={{ y: '100vh', opacity: 0, rotate: c.rotate }}
            transition={{ duration: c.duration, delay: c.delay, ease: 'easeIn' }}
          />
        ))}
      </AnimatePresence>

      {/* Cake stack — perfectly centered */}
      <div className="flex flex-col items-center">
        {/* Candles on top */}
        <div className="flex gap-3 items-end mb-1 relative z-10">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Flame */}
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, scaleY: [1, 1.25, 1], scaleX: [1, 0.9, 1] }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      scaleY: { repeat: Infinity, duration: 0.55 + i * 0.08, ease: 'easeInOut' },
                      scaleX: { repeat: Infinity, duration: 0.55 + i * 0.08, ease: 'easeInOut' },
                    }}
                    className="w-3 h-5 rounded-full mb-0.5"
                    style={{
                      background: 'radial-gradient(circle at 50% 60%, #fff5b8 0%, #ffb84d 60%, #ff7a3d 100%)',
                      filter: 'blur(0.5px)',
                      boxShadow: '0 0 18px rgba(255,190,110,0.75), 0 0 40px rgba(255,180,100,0.35)',
                    }}
                  />
                )}
              </AnimatePresence>
              {/* Candle stick */}
              <div
                className="w-2 h-10 rounded-sm"
                style={{
                  background: ['linear-gradient(180deg, #f8dfe2, #f5c1cc)', 'linear-gradient(180deg, #e6d9f2, #d0bfe0)', 'linear-gradient(180deg, #fce4d0, #ffd7bd)'][i],
                  boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Top tier */}
        <Tier {...tiers[2]} decorColor="#ffc9a8" delay={0} />
        {/* Middle tier */}
        <Tier {...tiers[1]} decorColor="#f0b3c1" delay={0.1} />
        {/* Bottom tier */}
        <Tier {...tiers[0]} decorColor="#c9baed" delay={0.2} />

        {/* Plate / base */}
        <div
          className="mt-1 rounded-full"
          style={{
            width: 300,
            height: 14,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(230,220,235,0.5))',
            boxShadow: '0 12px 30px -8px rgba(180,140,160,0.35)',
          }}
        />

        <motion.button
          onClick={blowCandles}
          disabled={blown}
          whileHover={{ scale: blown ? 1 : 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 px-8 py-3 rounded-full glass text-rose-800 font-medium disabled:opacity-70 transition"
        >
          {blown ? '\u2728 wish made \u2728' : 'Blow the candles'}
        </motion.button>
      </div>
    </section>
  )
}

/**
 * A single cake tier - centered via flex parent.
 * Includes a soft cream/icing band at the top and small piping dots.
 */
function Tier({ width, height, gradient, decorColor, delay }) {
  const dots = Math.max(5, Math.floor(width / 22))
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{
        width,
        height,
        background: gradient,
        borderRadius: '10px 10px 6px 6px',
        boxShadow: '0 18px 40px -14px rgba(180,140,160,0.4), inset 0 -6px 12px rgba(0,0,0,0.04)',
      }}
    >
      {/* icing drip band at top */}
      <div
        className="absolute top-2 left-2 right-2 rounded-full"
        style={{
          height: 6,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      />
      {/* piping dots along the top edge */}
      <div className="absolute left-3 right-3 flex justify-between" style={{ top: 10 }}>
        {Array.from({ length: dots }).map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{ width: 6, height: 6, background: decorColor, opacity: 0.9, boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
          />
        ))}
      </div>
      {/* subtle highlight */}
      <div
        className="absolute inset-x-4 rounded-full"
        style={{
          top: height * 0.45,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        }}
      />
    </motion.div>
  )
}
