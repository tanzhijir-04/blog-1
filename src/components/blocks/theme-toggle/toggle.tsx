'use client'
import { useTheme } from 'next-themes'

export const Toggle = (props: { children: React.ReactNode }) => {
  const { children } = props
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      className='h-full w-full'
      aria-label='Theme Toggle'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {children}
    </button>
  )
}
