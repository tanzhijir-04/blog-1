import { IconTypography } from '@tabler/icons-react'
import { MenuTrigger } from 'react-aria-components'

import { Menu, MenuItem, Button, Popover } from '@/components/ui'
export const FontToggle = () => {
  return (
    <MenuTrigger>
      <Button
        className='rounded p-1.5 outline-none transition-colors hover:bg-surface-1 pressed:bg-surface-1'
        aria-label='Menu'
      >
        <IconTypography className='size-5' />
      </Button>
      <Popover placement='bottom right'>
        <Menu className='min-w-[120px]'>
          <MenuItem id='open'>Serif</MenuItem>
          <MenuItem id='rename'>Sans Serif</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
