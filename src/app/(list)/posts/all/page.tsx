import { Grid } from '@/components/grid'
import { Post } from '@/components/post'
import { queryAllPosts } from '@/service'

export default async function Page() {
  const {
    search: { nodes },
  } = await queryAllPosts()

  return (
    <Grid>
      {nodes.map(node => (
        <Post key={node.number} node={node} />
      ))}
    </Grid>
  )
}
