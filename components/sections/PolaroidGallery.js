'use client'
import { motion } from 'framer-motion'

const polaroids = [
  { rotate: -8, delay: 0, caption: 'simply beautiful', src: '/photos/aditi-1.jpg' },
  { rotate: 5, delay: 0.1, caption: 'a quiet moment', src: '/photos/aditi-2.jpg' },
  { rotate: -3, delay: 0.2, caption: 'her smile', src: '/photos/aditi-3.jpg' },
  { rotate: 7, delay: 0.3, caption: 'unforgettable', src: '/photos/polaroid4.jpg' },
  { rotate: -6, delay: 0.4, caption: 'pure joy', src: '/photos/polaroid5.jpg' },
  { rotate: 4, delay: 0.5, caption: 'radiant', src: '/photos/polaroid6.jpg' },
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
              <div className="relative rounded-sm overflow-hidden bg-rose-50/60" style={{ minHeight: 180 }}>
                {/* Blurred backdrop */}
                <div
                  aria-hidden
                  className="absolute inset-0 scale-110"
                  style={{
                    backgroundImage: `url(${p.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px) saturate(120%)',
                    opacity: 0.5,
                  }}
                />
                <img src={p.src} alt={p.caption} className="relative z-10 block w-auto h-auto mx-auto max-h-[280px]" style={{ maxWidth: '100%' }} loading="lazy" />
              </div>
              <p className="font-script text-center mt-3 text-rose-900/70">{p.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
