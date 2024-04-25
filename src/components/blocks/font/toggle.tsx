'use client'

import { clsx } from 'clsx'

import { useFont } from '@/hooks/useFont'

export const Toggle = () => {
  const [font, onToggle] = useFont()

  return (
    <div
      role='button'
      tabIndex={0}
      aria-label='Font Toggle Label'
      onClick={() => onToggle()}
      className='col-span-3 row-span-2 flex items-center gap-2 p-4 text-3xl'
    >
      <span className='font-sans'>T</span>
      <span
        className={clsx(
          'relative h-6 w-12 rounded-lg border shadow-inner transition-colors duration-500 before:absolute before:inset-y-0.5 before:left-0 before:w-4 before:translate-x-0.5 before:rounded-md before:bg-surface before:shadow before:transition-all before:duration-500 before:content-["_"]',
          font === 'serif' &&
            'bg-blue-400 before:!translate-x-7 before:rotate-180',
        )}
      />
      <span className='font-serif'>T</span>
    </div>
  )
}
