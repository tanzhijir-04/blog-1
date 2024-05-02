'use client'

import Giscus from '@giscus/react'

interface GiscusScriptProps {
  number: number
}

export function GiscusScript(props: GiscusScriptProps) {
  const { number } = props
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
        theme='preferred_color_scheme'
      />
    </div>
  )
}
