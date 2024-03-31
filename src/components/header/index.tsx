import { Logo } from './logo'
import { Nav } from './nav'
import { Setting } from './setting'

export const Header = () => {
  return (
    <header className='grid items-center justify-center sm:h-36 sm:grid-cols-3 sm:px-16'>
      <Logo />
      <Nav />
      <Setting />
    </header>
  )
}
