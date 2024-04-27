export const readingTime = (
  textLength: number,
  averageReadingSpeed = 200,
  wordsPerCharacter = 5,
) => {
  const numberOfWords = textLength / wordsPerCharacter
  return (numberOfWords / averageReadingSpeed).toFixed(1)
}

export const isServer = () => typeof window === 'undefined'

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))
