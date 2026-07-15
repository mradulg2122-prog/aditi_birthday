'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const HeroScene = dynamic(() => import('../HeroScene'), { ssr: false })

export default function Hero({ onBegin }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/40" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />

      {/* Floating photo placeholders */}
      {[
        { top: '15%', left: '8%', rotate: -8, delay: 0.2 },
        { top: '25%', right: '10%', rotate: 6, delay: 0.4 },
        { bottom: '20%', left: '12%', rotate: 4, delay: 0.6 },
        { bottom: '25%', right: '8%', rotate: -5, delay: 0.8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="hidden md:block absolute glass rounded-lg shadow-soft p-2"
          style={{ ...p, transform: `rotate(${p.rotate}deg)` }}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ delay: p.delay, duration: 1.2, y: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut' } }}
        >
          <div className="w-24 h-32 rounded-md bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center">
            <span className="text-xs text-rose-400/70 font-serif-elegant italic">memory</span>
          </div>
        </motion.div>
      ))}

      {/* Center content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-script text-2xl md:text-3xl text-rose-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A little celebration for
        </motion.p>

        <h1 className="text-6xl md:text-8xl font-serif-elegant leading-tight mb-6">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Happy Birthday
          </motion.span>
          <motion.span
            className="block italic bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Aditi
          </motion.span>
        </h1>

        <motion.p
          className="text-base md:text-lg text-rose-900/60 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          A quiet, gentle celebration of you — the moments we’ve shared and the beautiful year ahead.
          Scroll softly through a little journey made just for you.
        </motion.p>

        <motion.button
          onClick={onBegin}
          className="group relative px-10 py-4 rounded-full glass text-rose-800 font-medium tracking-wide overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Begin the Journey →</span>
          <span className="absolute inset-0 bg-gradient-to-r from-rose-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.button>

        <motion.div
          className="mt-16 text-rose-400/60 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          ↓ scroll to begin
        </motion.div>
      </motion.div>
    </section>
  )
}
