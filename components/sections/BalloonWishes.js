'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const wishes = [
  { color: '#f5c1cc', wish: 'may your year be as beautiful as you' },
  { color: '#ffd7bd', wish: 'endless laughter and warm mornings' },
  { color: '#e0d4f0', wish: 'may every dream find its way to you' },
  { color: '#cadbc4', wish: 'peace, love, and long slow sunsets' },
  { color: '#f8dfe2', wish: 'more chapters filled with joy' },
  { color: '#f5d5d0', wish: 'always surrounded by good people' },
]

export default function BalloonWishes() {
  const [popped, setPopped] = useState({})
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-script text-2xl text-rose-400 mb-2">tap a balloon</p>
        <h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80">balloon wishes</h2>
      </div>

      <div className="relative max-w-4xl w-full h-[500px]">
        {wishes.map((w, i) => {
          const left = 10 + (i * 15) + Math.sin(i) * 5
          const top = 20 + (i % 2) * 40 + Math.cos(i) * 8
          return (
            <motion.div
              key={i}
              className="absolute cursor-pointer"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i * 0.3, ease: 'easeInOut' }}
              onClick={() => setPopped((p) => ({ ...p, [i]: !p[i] }))}
            >
              <AnimatePresence mode="wait">
                {!popped[i] ? (
                  <motion.div
                    key="balloon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div
                      className="w-20 h-24 md:w-24 md:h-28 rounded-full shadow-soft"
                      style={{ background: `radial-gradient(circle at 30% 30%, white, ${w.color})` }}
                    />
                    <div className="absolute left-1/2 top-full w-px h-16 bg-rose-300/50" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="wish"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass rounded-2xl px-5 py-3 max-w-[200px] text-center shadow-soft"
                  >
                    <p className="font-script text-rose-600 text-base leading-snug">{w.wish}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
