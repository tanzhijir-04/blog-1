import Link from 'next/link'

import { IconHourglassHigh, IconHash } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { TOC } from 'react-markdown-toc/server'

import { GiscusScript } from '@/components/giscus'
import { Markdown } from '@/markdown'
import { queryAllPosts, queryByNumber } from '@/service'
import { readingTime } from '@/utils'

export const generateStaticParams = async () => {
  const {
    search: { nodes },
  } = await queryAllPosts()
  return nodes.map(node => ({ id: `${node.number}` }))
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = params

  const { repository } = await queryByNumber(+id)
  const { discussion } = repository!
  const { title } = discussion!

  // TODO description AI generated, og, twitter
  return {
    title,
  }
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
  const { title, body, bodyText, labels, createdAt, number } = discussion!

  return (
    <>
      <main className='m-auto bg-[linear-gradient(to_bottom,transparent,var(--surface)_150px,var(--surface)_calc(100%_-_150px),transparent_100%)] px-4 py-28 max-xl:max-w-[80ch] md:px-0 xl:grid xl:grid-cols-[80ch_30ch] xl:justify-center'>
        <header className='col-span-2 mb-24 w-fit space-y-8'>
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
        <article className='prose prose-slate max-w-none prose-code:break-words'>
          <Markdown source={body!} />
          <GiscusScript number={number} />
        </article>
        <aside className='sticky top-32 ml-auto h-fit w-[22ch] max-xl:hidden'>
          <h2 className='mb-4 whitespace-nowrap text-lg font-semibold tracking-wider'>
            TABLE OF CONTENTS
          </h2>
          <TOC
            markdown={body!}
            className='space-y-3'
            ul='pl-6 space-y-2'
            a='data-[active=true]:text-brand block text-sm mb-2'
          />
        </aside>
      </main>
    </>
  )
}
