import { IconArrowBack } from '@tabler/icons-react'

import { GoBack } from '@/components/go-back'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col items-center gap-16 pt-24'>
      <GoBack className='flex h-16 w-16 items-center justify-center rounded-full border bg-surface shadow'>
        <IconArrowBack className='size-8' />
      </GoBack>
      {children}
    </main>
  )
}
