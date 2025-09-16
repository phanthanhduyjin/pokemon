import { POKEMON_ROUTE } from '@/utils/routes'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(POKEMON_ROUTE)
}
