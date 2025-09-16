import { Pokemon } from '@/types/pokemon'
import { PokemonItem } from './PokemonItem'

type PokemonGridProps = {
  pokemon: Pokemon[]
}

export const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
  return (
    <section className='grid grid-cols-6 gap-x-16 gap-y-6'>
      {pokemon.map(item => (
        <PokemonItem key={item.id.toString()} item={item} />
      ))}
    </section>
  )
}
