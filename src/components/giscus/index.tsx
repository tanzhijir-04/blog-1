'use client'

import Giscus from '@giscus/react'
import { useDarkToggle } from 'dark-toggle/react'

interface GiscusScriptProps {
  number: number
}

export function GiscusScript(props: GiscusScriptProps) {
  const { number } = props
  const { isDark } = useDarkToggle()

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
        theme={isDark ? 'dark' : 'light'}
      />
    </div>
  )
}
