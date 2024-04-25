'use client'
import { useEffect, useRef } from 'react'

import Typed from 'typed.js'

export const ResumeText = () => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const typed = new Typed(ref.current, {
      strings: ['ls Resume ^500', 'vim ^1000', 'cat Resume ^2000'],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={ref}>Resume</span>
}
