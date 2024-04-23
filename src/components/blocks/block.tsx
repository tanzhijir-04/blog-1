'use client'

import { useParams } from 'next/navigation'

import { twMerge } from 'tailwind-merge'
import { useFlip } from 'use-flip'

import { type StaticPageParams } from '@/app/static-page'

export const Block = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, style, ...rest } = props

  const { tab: currentTab } = useParams<StaticPageParams>()

  const ref = useFlip([currentTab], { duration: 700 })

  const type = rest['data-type']

  const needOrderFirst = currentTab === type

  const needChangeStyle = !currentTab || needOrderFirst

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        ...style,
        order: needChangeStyle ? 0 : 1,
        opacity: needChangeStyle ? 1 : 0.8,
        filter: needChangeStyle ? 'blur(0)' : 'blur(3px)',
      }}
      className={twMerge(
        'relative rounded-xl border p-2.5 text-sm shadow-bento transition-[filter] duration-700 lg:rounded-2xl lg:p-4 xl:rounded-3xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
