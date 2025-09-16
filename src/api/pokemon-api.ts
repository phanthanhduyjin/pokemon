import { Pokemon, PokemonListResponse, PokemonType } from '@/types/pokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemonList = async (
  limit: number = 24,
  offset: number = 0,
): Promise<PokemonListResponse> => {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list')
  }
  return response.json()
}

export const fetchPokemonListByUrl = async (
  url: string,
): Promise<PokemonListResponse> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list')
  }
  return response.json()
}

export const fetchPokemonTypes = async (): Promise<PokemonType[]> => {
  const response = await fetch(`${BASE_URL}/type`)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon types')
  }
  const data = await response.json()
  return data.results
}

export const fetchPokemon = async (
  nameOrId: string | number,
): Promise<Pokemon> => {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon')
  }
  return response.json()
}

export const fetchPokemonByType = async (
  type: string,
): Promise<PokemonType> => {
  const response = await fetch(`${BASE_URL}/type/${type}`)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon by type')
  }
  return response.json()
}
