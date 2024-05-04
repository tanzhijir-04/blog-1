'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

interface GiscusScriptProps {
  number: number
}

export function GiscusScript(props: GiscusScriptProps) {
  const { number } = props
  const { theme } = useTheme()

  return (
    <div className='mt-32'>
      <Giscus
        repo='zhangyu1818/blog'
        repoId='MDEwOlJlcG9zaXRvcnkzMjk0OTk1NjU='
        mapping='number'
        term={`${number}`}
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        lang='en'
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}
