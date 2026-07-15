'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <motion.div
      className="fixed pointer-events-none z-[100] hidden md:block"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <div className="w-6 h-6 rounded-full border border-rose-300/50 mix-blend-multiply" />
    </motion.div>
  )
}
