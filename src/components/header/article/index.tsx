import Link from 'next/link'

import { FontToggle } from './font-toggle'

export const Header = () => (
  <header className='grid w-full grid-cols-[1fr_minmax(auto,110ch)_1fr] items-center gap-4 border-b bg-surface px-6 py-5 md:gap-8 lg:px-16'>
    <Link className='justify-self-start' href='/'>
      <h1 className='text-xl font-bold tracking-tighter md:text-2xl'>
        ZHANGYU<small>.dev</small>
      </h1>
    </Link>
    <nav className='flex gap-8 max-sm:text-sm'>
      <Link className='font-semibold' href='/'>
        Home
      </Link>
      <Link className='font-semibold' href='/posts/all'>
        Posts
      </Link>
    </nav>
    <div className='flex items-center justify-end'>
      <FontToggle />
    </div>
  </header>
)
