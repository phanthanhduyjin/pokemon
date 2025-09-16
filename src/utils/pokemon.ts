export const getPokemonId = (url: string): number => {
  const segments = url.split('/').filter(Boolean)
  return parseInt(segments[segments.length - 1])
}
