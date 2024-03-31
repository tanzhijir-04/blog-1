import Link from 'next/link'

export const Logo = () => {
  return (
    <h1 className='min-w-40 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
      <Link href='/'>
        <strong className='text-2xl font-bold tracking-tighter xl:text-3xl'>
          ZHANGYU
        </strong>
        <small className='font-semibold tracking-normal xl:text-xl'>.dev</small>
      </Link>
    </h1>
  )
}
