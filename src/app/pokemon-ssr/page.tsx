import { PokemonGrid } from '@/components/PokemonGrid'
import { PokemonTypes } from '@/components/PokemonTypes'
import { TotalCount } from '@/components/TotalCount'
import { Suspense } from 'react'

type PokemonPageProps = {
  searchParams: {
    page?: string
    type?: string
  }
}

export default async function PokemonPage({ searchParams }: PokemonPageProps) {
  const params = await searchParams
  const selectedTypes = params.type ? params.type.split(',') : []

  const suspenseKey = Object.values(params).join('') || 'all'
  return (
    <section className='flex flex-col gap-4 px-10'>
      <p className='py-4 text-center'>Welcome to Pokemon world</p>
      <Suspense key={`total-${suspenseKey}`} fallback={<div>Loading...</div>}>
        <TotalCount searchParams={params} />
      </Suspense>
      <PokemonTypes selectedTypes={selectedTypes} />
      <Suspense key={suspenseKey} fallback={<div>Loading...</div>}>
        <PokemonGrid searchParams={searchParams} />
      </Suspense>
    </section>
  )
}
