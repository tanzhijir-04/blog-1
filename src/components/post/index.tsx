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
      className='group grid grid-rows-[1fr_auto_2fr_auto] bg-gradient-to-b from-surface-1 to-white'
    >
      <div className='row-span-4 grid grid-rows-subgrid gap-2'>
        <Link
          className='relative flex items-center text-balance text-xl font-bold'
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
        <p className='mt-2 flex items-center gap-1 text-color-2'>
          {labels.nodes.map(node => (
            <Link
              key={node.id}
              href={`/tags/${node.name}`}
              className='inline-flex items-center text-xs underline-offset-1 after:content-[",_"] last:after:content-none hover:underline'
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
            className='translate-y-2 items-center rounded-full border bg-surface px-2.5 py-1.5 font-semibold opacity-0 ring-surface-3 transition-all duration-700 ease-spring hover:scale-105 hover:border-transparent hover:ring-4 group-hover:translate-y-0 group-hover:opacity-100'
            href={`/posts/${number}`}
          >
            Read more
          </Link>
        </p>
      </div>
    </Block>
  )
}
