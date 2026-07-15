'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const memories = [
  { title: 'First Meeting', subtitle: 'where it all began', text: 'The very first moment our paths crossed — a small beginning that quietly turned into something meaningful.' },
  { title: 'Second Meeting', subtitle: 'when things felt familiar', text: 'A second chapter, gentler and warmer, where conversations lingered longer than expected.' },
  { title: 'Memory One', subtitle: 'a golden afternoon', text: 'Bright light, easy laughter, and a moment I still return to when I need a smile.' },
  { title: 'Memory Two', subtitle: 'small joys', text: 'The little in-between things — quiet, ordinary, and somehow unforgettable.' },
  { title: 'Memory Three', subtitle: 'looking back fondly', text: 'A page from our story that never fades. Warm colors, warmer feelings.' },
  { title: 'Best Moments', subtitle: 'all the little sparks', text: 'A gentle collection of everything that made the journey brighter — all because of you.' },
]

function MemoryCard({ memory, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          className={isLeft ? 'md:order-1' : 'md:order-2'}
          style={{ y, opacity }}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-rose-200/40 to-purple-200/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-soft aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-rose-100 via-peach-100 to-purple-100 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, hsl(${340 + index * 8}, 60%, 92%), hsl(${280 + index * 10}, 50%, 90%))` }}
              >
                <div className="text-center px-6">
                  <p className="font-script text-3xl text-rose-400/70 mb-2">photo</p>
                  <p className="text-xs uppercase tracking-widest text-rose-900/40">/public/photos/{`memory-${index + 1}.jpg`}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className={isLeft ? 'md:order-2' : 'md:order-1'}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-script text-2xl text-rose-400 mb-3">{memory.subtitle}</p>
          <h2 className="text-5xl md:text-6xl font-serif-elegant mb-6 text-rose-950/90">{memory.title}</h2>
          <div className="w-16 h-px bg-gradient-to-r from-rose-300 to-transparent mb-6" />
          <p className="text-lg text-rose-900/60 leading-relaxed max-w-md">{memory.text}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default function MemoryJourney() {
  return (
    <section className="relative">
      <div className="text-center py-32 px-6">
        <motion.p
          className="font-script text-3xl text-rose-400 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          a little journey through
        </motion.p>
        <motion.h2
          className="text-5xl md:text-7xl font-serif-elegant italic text-rose-950/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          our memories
        </motion.h2>
      </div>
      {memories.map((m, i) => <MemoryCard key={i} memory={m} index={i} />)}
    </section>
  )
}
