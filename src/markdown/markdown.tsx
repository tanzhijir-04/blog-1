import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import { transformerTwoslash } from '@shikijs/twoslash'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import { MDX } from 'rsc-mdx'
import {
  bundledLanguages,
  bundledThemes,
  getHighlighter,
} from 'shiki/bundle/full'

import { CodeGroup, Alert, Details, Hello, pre } from './components'
import { remarkDirectiveContainer, rehypeGithubAlert } from './plugins'

interface MarkdownProps {
  source: string
}

export async function Markdown(props: MarkdownProps) {
  const { source } = props
  return (
    <MDX
      source={source}
      useMDXComponents={() => ({
        CodeGroup,
        Alert,
        Details,
        Hello,
        pre,
      })}
      remarkPlugins={[remarkDirective, remarkDirectiveContainer, remarkGfm]}
      rehypePlugins={[
        rehypeGithubAlert,
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypeShiki,
          {
            highlighter: getHighlighter({
              themes: Object.keys(bundledThemes),
              langs: Object.keys(bundledLanguages),
            }),
            theme: 'github-light',
            transformers: [
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationFocus(),
              transformerNotationErrorLevel(),
              transformerMetaHighlight(),
              transformerMetaWordHighlight(),
              transformerRemoveLineBreak(),
              transformerTwoslash({
                explicitTrigger: true,
              }),
            ],
          } as RehypeShikiOptions,
        ],
      ]}
    />
  )
}
