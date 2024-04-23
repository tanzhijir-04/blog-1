import { Block } from '@/components/blocks/block'
import { Post } from '@/components/post'
import { queryRecentPosts } from '@/service'

import { ExploreMore } from './explore-more'

export const Posts = async () => {
  const recentDiscussions = await queryRecentPosts()
  const {
    search: { nodes },
  } = recentDiscussions
  return (
    <>
      {nodes.map(node => (
        <Post key={node.number} node={node} />
      ))}
      <Block
        data-type='posts'
        className='flex items-stretch justify-stretch overflow-clip bg-surface max-md:col-span-2'
      >
        <ExploreMore href='/posts/all' />
      </Block>
    </>
  )
}
