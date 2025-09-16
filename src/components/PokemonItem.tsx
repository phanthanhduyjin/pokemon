import { Pokemon } from '@/types/pokemon'
import Image from 'next/image'

type PokemonItemProps = {
  item: Pokemon
}

export const PokemonItem = ({ item }: PokemonItemProps) => {
  return (
    <div className='flex flex-col items-center justify-between border p-4'>
      <h3>{item.name}</h3>
      <Image
        src={
          item.sprites.front_default ||
          item.sprites.other['official-artwork'].front_default
        }
        alt={item.name}
        width={35}
        height={53}
        className='w-20'
      />
      <p>Number: {item.id.toString()}</p>
    </div>
  )
}
