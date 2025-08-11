'use client'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { motion } from 'framer-motion'

const Confetti = forwardRef((props, ref) => {
  const containerRef = useRef(null)

  useImperativeHandle(ref, () => ({
    start: () => {
      if (!containerRef.current) return
      const el = containerRef.current
      // create simple confetti elements
      for (let i=0;i<30;i++){
        const span = document.createElement('span')
        span.className = 'confetti'
        span.style.left = (Math.random()*100) + '%'
        span.style.background = (Math.random()>0.5) ? 'var(--tw-color-accent, #00e5ff)' : 'var(--tw-color-neon, #ff00c8)'
        el.appendChild(span)
        // remove after animation
        setTimeout(()=>{ span.remove() }, 2500)
      }
    }
  }))

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-visible"></div>
  )
})

export default Confetti
