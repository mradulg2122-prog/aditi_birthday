'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function GiftBox() {
  const [open, setOpen] = useState(false)
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-script text-2xl text-rose-400 mb-2">one last</p>
        <h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80">little gift</h2>
      </div>

      <div className="relative" style={{ perspective: '1200px' }}>
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="box"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3, ease: 'easeInOut' } }}
            >
              {/* Lid */}
              <motion.div
                className="w-48 h-12 rounded-md relative z-10 mx-auto"
                style={{ background: 'linear-gradient(135deg, #f5c1cc, #e0d4f0)', boxShadow: '0 8px 20px -5px rgba(180,140,160,0.4)' }}
                whileHover={{ y: -6 }}
              >
                {/* Ribbon */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-rose-400/80" style={{ clipPath: 'polygon(50% 50%, 0 0, 30% 50%, 0 100%)' }} />
                  <div className="absolute inset-0 rounded-full bg-rose-400/80" style={{ clipPath: 'polygon(50% 50%, 100% 0, 70% 50%, 100% 100%)' }} />
                </div>
              </motion.div>
              {/* Body */}
              <div className="w-44 h-40 mx-auto -mt-1 rounded-b-md" style={{ background: 'linear-gradient(180deg, #f8dfe2, #e0d4f0)', boxShadow: '0 20px 50px -10px rgba(180,140,160,0.4)' }}>
                <div className="h-full w-2 bg-rose-300/70 mx-auto" />
              </div>
              <p className="mt-6 font-script text-rose-400 text-center">tap to open</p>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-10 md:p-14 max-w-2xl text-center shadow-soft"
            >
              <motion.p className="font-script text-3xl md:text-4xl text-rose-500 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                for you, Aditi
              </motion.p>
              <motion.p className="text-lg md:text-xl text-rose-950/70 leading-relaxed font-serif-elegant italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                Thank you for being part of so many wonderful moments. May your year be full of
                gentle mornings, unexpected joys, and everything you’ve ever quietly wished for.
              </motion.p>
              <motion.div className="mt-8 text-4xl" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
                🎀
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
