'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { TypeItem } from './TypeItem'
import { POKEMON_ROUTE } from '@/utils/routes'

type PokemonTypesClientProps = {
  types: { name: string }[]
  selectedTypes: string[]
}

export const PokemonTypesClient = ({
  selectedTypes,
  types,
}: PokemonTypesClientProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const buildFilterUrl = (type: string | null) => {
    const params = new URLSearchParams()
    const oldParams = new URLSearchParams(searchParams)
    let newSelectedTypes: string[]

    if (type === null) {
      newSelectedTypes = []
    } else {
      if (selectedTypes.includes(type)) {
        newSelectedTypes = selectedTypes.filter(t => t !== type)
      } else {
        newSelectedTypes = [...selectedTypes, type]
      }
    }

    if (newSelectedTypes.length > 0) {
      params.set('type', newSelectedTypes.join(','))
    }
    if (oldParams.get('page')) {
      params.set('page', '1')
    }

    return `${POKEMON_ROUTE}?${params.toString()}`
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    type: string | null,
  ) => {
    if (e.metaKey || e.ctrlKey || e.button === 2) {
      return
    }

    e.preventDefault()
    const url = buildFilterUrl(type)
    router.push(url)
  }

  return (
    <>
      {types.map(type => (
        <TypeItem
          key={type.name}
          item={{ name: type.name, url: buildFilterUrl(type.name) }}
          isSelected={selectedTypes.includes(type.name)}
          onClick={handleClick}
        />
      ))}
    </>
  )
}
