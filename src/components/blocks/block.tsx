'use client'

import { useRef } from 'react'

import { useParams } from 'next/navigation'

import { twMerge } from 'tailwind-merge'

import { type StaticPageParams } from '@/app/static-page'
import { useLayoutMount, useLayoutUpdate } from '@/hooks/useEffects'

export const Block = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, style, ...rest } = props

  const { tab: currentTab } = useParams<StaticPageParams>()
  const ref = useRef<HTMLDivElement | null>(null)
  const currentRect = useRef<DOMRect | null>(null)

  const type = rest['data-type']

  const needOrderFirst = currentTab === type

  useLayoutMount(() => {
    currentRect.current = ref.current!.getBoundingClientRect()
  })

  useLayoutUpdate(() => {
    ref.current!.style.transition = ''

    const nextRect = ref.current!.getBoundingClientRect()
    const deltaX = currentRect.current!.left - nextRect.left
    const deltaY = currentRect.current!.top - nextRect.top
    ref.current!.style.transform = `translate(${deltaX}px, ${deltaY}px)`

    ref.current!.animate(
      [
        { transform: `translate(${deltaX}px, ${deltaY}px)` },
        { transform: 'translate(0, 0)' },
      ],
      {
        duration: 700,
        easing: 'ease',
        fill: 'forwards',
      },
    )

    currentRect.current = nextRect
  }, [currentTab])

  const needChangeStyle = !currentTab || needOrderFirst

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        ...style,
        order: needChangeStyle ? 0 : 1,
        opacity: needChangeStyle ? 1 : 0.3,
      }}
      className={twMerge(
        'relative rounded-3xl border p-4 text-sm shadow-bento transition-opacity duration-700',
        className,
      )}
    >
      {children}
    </div>
  )
}
