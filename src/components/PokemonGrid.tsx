import { PokemonItem } from './PokemonItem'
import { getData } from '@/utils/pokemon'
import { Pagination } from './Pagination'

type PokemonPGridProps = {
  searchParams: {
    page?: string
    type?: string
  }
}

export const PokemonGrid = async ({ searchParams }: PokemonPGridProps) => {
  const { page, type } = searchParams

  const { pokemon, currentPage, hasNextPage, hasPreviousPage, selectedTypes } =
    await getData(type, page)
  return (
    <>
      <section className='grid grid-cols-6 gap-x-16 gap-y-6'>
        {pokemon.map(item => (
          <PokemonItem key={item.id.toString()} item={item} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        selectedTypes={selectedTypes}
      />
    </>
  )
}
