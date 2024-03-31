export const readingTime = (
  textLength: number,
  averageReadingSpeed = 200,
  wordsPerCharacter = 5,
) => {
  const numberOfWords = textLength / wordsPerCharacter
  return (numberOfWords / averageReadingSpeed).toFixed(1)
}
