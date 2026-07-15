'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const compliments = [
  { flower: '🌸', text: 'endlessly kind' },
  { flower: '🌷', text: 'quietly strong' },
  { flower: '🌼', text: 'genuinely warm' },
  { flower: '🌹', text: 'beautifully thoughtful' },
  { flower: '🌺', text: 'wonderfully you' },
  { flower: '🌻', text: 'a little sunshine' },
  { flower: '🍀', text: 'lucky to know' },
  { flower: '🌸', text: 'a rare soul' },
  { flower: '🌷', text: 'gentle and bright' },
]

export default function ComplimentGarden() {
  const [hovered, setHovered] = useState(null)
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-script text-2xl text-rose-400 mb-2">hover the flowers</p>
        <h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80">compliment garden</h2>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-3 gap-8 md:gap-16">
        {compliments.map((c, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center cursor-pointer"
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.8 }}
          >
            <motion.div
              className="text-5xl md:text-6xl"
              animate={{
                y: [0, -8, 0],
                rotate: hovered === i ? [0, -10, 10, 0] : 0,
                scale: hovered === i ? 1.3 : 1,
              }}
              transition={{
                y: { repeat: Infinity, duration: 3 + i * 0.2, ease: 'easeInOut' },
                rotate: { duration: 0.6 },
                scale: { duration: 0.4 },
              }}
            >
              {c.flower}
            </motion.div>
            <motion.div
              className="absolute top-full mt-3 glass rounded-full px-4 py-2 whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-script text-rose-500 text-lg">{c.text}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
