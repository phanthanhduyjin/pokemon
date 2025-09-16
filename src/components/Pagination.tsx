'use client'

import { POKEMON_ROUTE } from '@/utils/routes'
import { useSearchParams, useRouter } from 'next/navigation'

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
  const router = useRouter()
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

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    newPage: number,
  ) => {
    if (e.metaKey || e.ctrlKey || e.button === 2) {
      return
    }

    e.preventDefault()
    router.push(buildFilterUrl(newPage))
  }

  return (
    <div className='flex justify-center gap-4 py-4'>
      {hasPreviousPage && (
        <a
          className='rounded bg-blue-500 px-4 py-2 text-white'
          href={buildFilterUrl(currentPage - 1)}
          onClick={e => handlePageChange(e, currentPage - 1)}
        >
          Previous
        </a>
      )}
      {hasNextPage && (
        <a
          className='rounded bg-blue-500 px-4 py-2 text-white'
          href={buildFilterUrl(currentPage + 1)}
          onClick={e => handlePageChange(e, currentPage + 1)}
        >
          Next
        </a>
      )}
    </div>
  )
}
