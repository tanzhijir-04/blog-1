import Link from 'next/link'

import { IconHash } from '@tabler/icons-react'

import { Block } from '../blocks/block'

import type { Discussion } from '@discublog/api/interface'

interface PostProps {
  node: Discussion
}

export const Post = (props: PostProps) => {
  const { node } = props
  const { labels, number } = node
  const firstLabel = labels.nodes[0]

  return (
    <Block
      data-type='posts'
      className='group grid grid-rows-[1fr_auto_2fr_auto] bg-gradient-to-b from-surface-1 to-white max-md:row-span-2 max-sm:col-span-2 max-sm:row-span-1'
    >
      <div className='row-span-4 grid grid-rows-subgrid gap-2'>
        <Link
          className='relative flex items-center text-balance text-lg font-bold md:text-base lg:text-lg xl:text-xl'
          aria-label={`Post ${node.title}`}
          href={`/posts/${number}`}
        >
          <h2>
            {node.title}
            {firstLabel && (
              <i
                className='absolute -bottom-1 left-1 block h-1 w-1/3 opacity-80'
                style={{ background: `#${firstLabel.color}` }}
              />
            )}
          </h2>
        </Link>
        <p className='mt-2 flex flex-wrap items-center text-color-2'>
          {labels.nodes.map(node => (
            <Link
              key={node.id}
              aria-label={`Tag ${node.name}`}
              href={`/tags/${node.name}`}
              className='relative inline-flex items-center px-1 text-xs underline-offset-1 before:absolute before:-inset-x-0 before:-inset-y-4 before:content-["_"] after:content-[",_"] first:pl-0 last:after:content-none hover:underline'
            >
              <IconHash className='size-2.5' />
              {node.name}
            </Link>
          ))}
        </p>
        {/* TODO Open AI*/}
        <p className='overflow-hidden text-pretty' />
        <p className='flex justify-end'>
          <Link
            className='translate-y-2 items-center rounded-full border bg-surface px-2.5 py-1.5 font-semibold opacity-0 outline-offset-4 ring-surface-3 transition-all duration-700 ease-out hover:scale-105 hover:border-transparent hover:ring-4 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100'
            aria-label={`Read more about ${node.title}`}
            href={`/posts/${number}`}
          >
            Read more <span className='sr-only'>about {node.title}</span>
          </Link>
        </p>
      </div>
    </Block>
  )
}
