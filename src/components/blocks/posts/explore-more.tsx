'use client'

import { useState, lazy, Suspense } from 'react'

import Link from 'next/link'

import { IconBeach } from '@tabler/icons-react'

const MotionWave = lazy(() =>
  import('motion-wave').then(module => ({ default: module.MotionWave })),
)

interface ExploreMoreProps {
  href: string
}
export const ExploreMore = (props: ExploreMoreProps) => {
  const { href } = props
  const [enter, setEnter] = useState(false)
  return (
    <div
      className='absolute inset-0 overflow-clip'
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <Suspense>
        <MotionWave
          width={280}
          height={280}
          className='z-0 h-full w-full bg-surface-1'
          initialConfig={{
            frequency: 0.4,
            amplitude: 30,
            speed: 4,
            offset: 50,
          }}
          motionConfig={{
            frequency: {
              value: 1,
              duration: 8,
              loop: true,
            },
            amplitude: {
              value: 60,
              loop: true,
            },
            speed: {
              value: 6,
              loopDelay: 1,
              loop: true,
            },
            offset: {
              value: enter ? -200 : 50,
              loop: false,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        />
      </Suspense>
      <Link
        className='absolute inset-0 z-10 flex items-center justify-center gap-2 text-lg font-semibold text-white mix-blend-difference lg:text-2xl'
        href={href}
      >
        Explore More
        <IconBeach className='size-8' />
      </Link>
    </div>
  )
}
