import { fetchPokemonTypes } from '@/api/pokemon-api'
import { PokemonTypesClient } from './PokemonTypesClient'

type PokemonTypesProps = {
  selectedTypes: string[]
}

export const PokemonTypes = async ({ selectedTypes }: PokemonTypesProps) => {
  const types = await fetchPokemonTypes()

  return (
    <section className='flex flex-wrap items-center gap-x-6 gap-y-3'>
      <span>Types:</span>
      <PokemonTypesClient types={types} selectedTypes={selectedTypes} />
    </section>
  )
}
