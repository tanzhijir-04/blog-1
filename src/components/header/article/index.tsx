import Link from 'next/link'

export const Header = () => (
  <header className='grid w-full grid-cols-[1fr_minmax(auto,80ch)_1fr] items-center border-b bg-surface px-16 py-8'>
    <Link className='justify-self-start' href='/'>
      <h1 className='text-2xl font-bold tracking-tighter'>
        ZHANGYU<small>.dev</small>
      </h1>
    </Link>
    <nav className='flex gap-8'>
      <Link className='font-semibold' href='/'>
        Home
      </Link>
      <Link className='font-semibold' href='/posts/all'>
        Posts
      </Link>
    </nav>
  </header>
)
