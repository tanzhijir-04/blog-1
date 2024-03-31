import { Markdown } from '@/markdown'
import { queryProfileREADME } from '@/service'

import { Block } from './block'

export async function Bio() {
  const { repository } = await queryProfileREADME()
  const {
    object: { text },
  } = repository!

  return (
    <Block
      data-type='about'
      className='prose z-10 col-span-2 row-span-2 max-w-full bg-gradient-to-br from-white to-amber-50 prose-h1:mb-0 sm:max-lg:prose-p:my-1.5 md:col-span-4 md:row-span-1 md:max-xl:prose-p:my-2 lg:col-span-2 lg:row-span-1'
    >
      <Markdown source={text} />
    </Block>
  )
}
