'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

export const Toggle = () => {
  const [checked, setChecked] = useState(false)
  const onToggle = () => {
    const next = !checked
    setChecked(next)
    document.documentElement.style.setProperty(
      '--font-remote',
      next ? 'var(--font-remote-serif), serif' : 'var(--font-remote-sans)',
    )
  }

  return (
    <div
      role='button'
      tabIndex={0}
      aria-label='Font Toggle Label'
      onClick={onToggle}
      className='col-span-3 row-span-2 flex items-center gap-2 p-4 text-3xl'
    >
      <span className='font-sans'>T</span>
      <span
        className={clsx(
          'relative h-6 w-12 rounded-lg border shadow-inner transition-colors duration-500 before:absolute before:inset-y-0.5 before:left-0 before:w-4 before:translate-x-0.5 before:rounded-md before:bg-surface before:shadow before:transition-all before:duration-500 before:content-["_"]',
          checked && 'bg-blue-400 before:!translate-x-7 before:rotate-180',
        )}
      />
      <span className='font-serif'>T</span>
    </div>
  )
}
