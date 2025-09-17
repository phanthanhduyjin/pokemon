'use client'

import { POKEMON_ROUTE } from '@/utils/routes'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type PaginationProps = {
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  selectedTypes: string[]
  totalCount?: number
}

export const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  selectedTypes,
}: PaginationProps) => {
  const searchParams = useSearchParams()

  const getParams = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', newPage.toString())

    if (selectedTypes.length > 0) {
      params.set('type', selectedTypes.join(','))
    }

    return params.toString()
  }

  const buildFilterUrl = (newPage: number) => {
    return `${POKEMON_ROUTE}?${getParams(newPage)}`
  }

  return (
    <div className='flex justify-center gap-4 py-4'>
      {hasPreviousPage && (
        <Link
          className='rounded bg-blue-500 px-4 py-2 text-white'
          href={buildFilterUrl(currentPage - 1)}
        >
          Previous
        </Link>
      )}
      {hasNextPage && (
        <Link
          className='rounded bg-blue-500 px-4 py-2 text-white'
          href={buildFilterUrl(currentPage + 1)}
        >
          Next
        </Link>
      )}
    </div>
  )
}
