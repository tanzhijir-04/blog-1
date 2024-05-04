'use client'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui'

export const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const text = isDark ? 'Light' : 'Dark'
  return (
    <Button
      className='absolute bottom-4 left-1/2 z-30 -translate-x-1/2'
      onPress={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {text}
    </Button>
  )
}
