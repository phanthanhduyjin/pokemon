import {
  fetchPokemon,
  fetchPokemonByType,
  fetchPokemonList,
} from '@/api/pokemon-api'
import { Pagination } from '@/components/Pagination'
import { PokemonGrid } from '@/components/PokemonGrid'
import { PokemonTypes } from '@/components/PokemonTypes'
import { Pokemon } from '@/types/pokemon'
import { getPokemonId } from '@/utils/pokemon'

type PokemonPageProps = {
  searchParams: {
    page?: string
    type?: string
  }
}

export default async function PokemonPage({ searchParams }: PokemonPageProps) {
  const { page, type } = await searchParams
  const currentPage = parseInt(page || '1')
  const selectedTypes = type ? type.split(',') : []
  const pokemonPerPage = 24

  let pokemon: Pokemon[] = []
  let totalCount = 0
  let hasNextPage = false
  let hasPreviousPage = false

  try {
    if (selectedTypes.length > 0) {
      const typePromises = selectedTypes.map(type => fetchPokemonByType(type))
      const typeResults = await Promise.all(typePromises)

      let combinedPokemon: { name: string; url: string }[] = []

      if (selectedTypes.length === 1) {
        combinedPokemon = typeResults[0].pokemon.map(p => p.pokemon)
      } else if (selectedTypes.length === 2) {
        combinedPokemon = typeResults[0].pokemon.map(p => p.pokemon)
        for (let i = 1; i < typeResults.length; i++) {
          const typePokemon = typeResults[i].pokemon.map(p => p.pokemon)
          combinedPokemon = combinedPokemon.filter(pokemon =>
            typePokemon.some(typePoke => typePoke.name === pokemon.name),
          )
        }
      } else {
        const pokemonTypeCount = new Map<string, number>()
        const pokemonData = new Map<string, { name: string; url: string }>()

        typeResults.forEach(typeResult => {
          typeResult.pokemon.forEach(p => {
            const pokemonName = p.pokemon.name
            pokemonData.set(pokemonName, p.pokemon)
            pokemonTypeCount.set(
              pokemonName,
              (pokemonTypeCount.get(pokemonName) || 0) + 1,
            )
          })
        })

        const minTypes = Math.min(2, selectedTypes.length)
        combinedPokemon = Array.from(pokemonTypeCount.entries())
          .filter(([, count]) => count >= minTypes)
          .map(([name]) => pokemonData.get(name)!)
      }

      totalCount = combinedPokemon.length

      const startIndex = (currentPage - 1) * pokemonPerPage
      const endIndex = startIndex + pokemonPerPage
      const paginatedPokemon = combinedPokemon.slice(startIndex, endIndex)

      hasNextPage = endIndex < totalCount
      hasPreviousPage = currentPage > 1

      pokemon = await Promise.all(
        paginatedPokemon.map(async item => {
          const id = getPokemonId(item.url)
          return await fetchPokemon(id)
        }),
      )
    } else {
      const offset = (currentPage - 1) * pokemonPerPage
      const listResponse = await fetchPokemonList(pokemonPerPage, offset)
      totalCount = listResponse.count
      hasNextPage = listResponse.next !== null
      hasPreviousPage = listResponse.previous !== null

      pokemon = await Promise.all(
        listResponse.results.map(async item => {
          const id = getPokemonId(item.url)
          return await fetchPokemon(id)
        }),
      )
    }
  } catch (error) {
    console.error('Error loading Pokemon:', error)
  }

  return (
    <section className='flex flex-col gap-4 px-10'>
      <p className='py-4 text-center'>Welcome to Pokemon world</p>
      <p>Total: {totalCount}</p>
      <PokemonTypes selectedTypes={selectedTypes} />
      <PokemonGrid pokemon={pokemon} />
      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        selectedTypes={selectedTypes}
      />
    </section>
  )
}
