'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const EndingScene = dynamic(() => import('../EndingScene'), { ssr: false })

export default function Ending() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ece4f2 0%, #1e1830 40%, #0f0a1e 100%)' }}
    >
      {/* Moon */}
      <motion.div
        className="absolute top-24 right-16 md:right-32 w-32 h-32 md:w-40 md:h-40 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #fff8e7, #f5e6d0 40%, #d4c4a8 100%)',
          boxShadow: '0 0 80px rgba(255, 240, 200, 0.4), 0 0 150px rgba(255,220,180,0.2)',
        }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      {/* 3D stars & fireflies */}
      <div className="absolute inset-0">
        <EndingScene />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-serif-elegant italic mb-10 bg-gradient-to-b from-white via-rose-100 to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          Happy Birthday, Aditi
        </motion.h2>

        <div className="space-y-5 text-white/80 text-lg md:text-xl leading-relaxed font-serif-elegant">
          {[
            'May your life always be filled with happiness,',
            'success, good health, beautiful memories,',
            'and countless reasons to smile.',
            '',
            'Thank you for being part of so many wonderful moments.',
            '',
            'Have an amazing birthday.',
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: line ? 1 : 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 + i * 0.25 }}
              className={line ? '' : 'h-2'}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-16 font-script text-4xl md:text-5xl text-rose-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          with love ♡
        </motion.div>
      </motion.div>
    </section>
  )
}
