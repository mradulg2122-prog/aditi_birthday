'use client'
import { motion } from 'framer-motion'

const polaroids = [
  { rotate: -8, delay: 0, caption: 'moment one' },
  { rotate: 5, delay: 0.1, caption: 'moment two' },
  { rotate: -3, delay: 0.2, caption: 'moment three' },
  { rotate: 7, delay: 0.3, caption: 'moment four' },
  { rotate: -6, delay: 0.4, caption: 'moment five' },
  { rotate: 4, delay: 0.5, caption: 'moment six' },
]

export default function PolaroidGallery() {
  return (
    <section className="relative min-h-screen py-32 px-6 overflow-hidden">
      <div className="text-center mb-20">
        <motion.p className="font-script text-2xl text-rose-400 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          floating
        </motion.p>
        <motion.h2 className="text-5xl md:text-6xl font-serif-elegant italic text-rose-950/80" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          polaroid gallery
        </motion.h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {polaroids.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotate: p.rotate + 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotate: 0, y: -10, transition: { duration: 0.4 } }}
            className="relative group cursor-pointer"
            animate={{ y: [0, -6, 0] }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-3 pb-12 rounded-sm shadow-soft" style={{ boxShadow: '0 20px 50px -20px rgba(180,140,160,0.35)' }}>
              <div className="aspect-square rounded-sm overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${340 + i * 15}, 55%, 90%), hsl(${290 + i * 10}, 45%, 88%))` }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-script text-2xl text-rose-400/60">photo</span>
                </div>
              </div>
              <p className="font-script text-center mt-3 text-rose-900/70">{p.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
