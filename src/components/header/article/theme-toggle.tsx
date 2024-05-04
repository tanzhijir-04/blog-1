'use client'

import { IconCheck, IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { MenuTrigger } from 'react-aria-components'

import { Menu, MenuItem, Button, Popover } from '@/components/ui'
import { useIsServer } from '@/hooks/useIsServer'

export const ThemeToggle = () => {
  const { theme: currentTheme, setTheme } = useTheme()
  const isServer = useIsServer()

  if (isServer) {
    return null
  }

  const Icon = currentTheme === 'dark' ? IconMoon : IconSun
  return (
    <MenuTrigger>
      <Button
        className='rounded p-1.5 outline-none transition-colors hover:bg-surface-1 pressed:bg-surface-1'
        aria-label='Menu'
      >
        <Icon className='size-5' />
      </Button>
      <Popover placement='bottom right'>
        <Menu
          className='w-[130px]'
          onAction={theme => {
            setTheme(theme as string)
          }}
        >
          {[
            ['Light', 'light'],
            ['Dark', 'dark'],
          ].map(([name, theme]) => (
            <MenuItem key={theme} className='flex justify-between' id={theme}>
              {name}
              {theme === currentTheme && (
                <IconCheck className='size-4 text-brand' />
              )}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
