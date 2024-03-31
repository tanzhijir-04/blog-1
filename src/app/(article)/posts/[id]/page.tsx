import Link from 'next/link'

import { IconHourglassHigh, IconHash } from '@tabler/icons-react'
import dayjs from 'dayjs'

import { Markdown } from '@/markdown'
import { queryAllPosts, queryByNumber } from '@/service'
import { readingTime } from '@/utils'

export const generateStaticParams = async () => {
  const {
    search: { nodes },
  } = await queryAllPosts()
  return nodes.map(node => ({ id: `${node.number}` }))
}

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params

  const { repository } = await queryByNumber(+id)

  const { discussion } = repository!
  const { title, body, bodyText, labels, createdAt } = discussion!

  return (
    <main className='bg-surface'>
      <header className='m-auto max-w-[80ch] border-b py-8'>
        <Link href='/'>
          <h1 className='text-2xl font-bold tracking-tighter'>
            ZHANGYU<small>.dev</small>
          </h1>
        </Link>
      </header>
      <div className='m-auto max-w-[80ch] py-20'>
        <header className='mb-24 space-y-8'>
          <small>{dayjs(createdAt).format('MMMM D, YYYY')}</small>
          <h1 className='text-5xl'>{title}</h1>
          <div className='flex items-center justify-between text-sm text-color-3'>
            <span className='flex gap-2'>
              {labels.nodes.map(node => (
                <Link
                  key={node.id}
                  className='inline-flex items-center hover:underline'
                  href={`/tags/${node.name}`}
                >
                  <IconHash className='size-3.5' />
                  {node.name}
                </Link>
              ))}
            </span>
            <span className='flex items-center gap-1'>
              <IconHourglassHigh className='size-3.5' />
              {readingTime(bodyText!.length)} min to read
            </span>
          </div>
        </header>
        <article className='prose prose-slate max-w-none'>
          <Markdown source={body!} />
        </article>
      </div>
    </main>
  )
}
