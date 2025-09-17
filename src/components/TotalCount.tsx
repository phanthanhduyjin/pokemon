import { getData } from '@/utils/pokemon'

type TotalCountProps = {
  searchParams: {
    page?: string
    type?: string
  }
}
export const TotalCount = async ({ searchParams }: TotalCountProps) => {
  const { totalCount } = await getData(searchParams.type, searchParams.page)
  return <p>Total: {totalCount}</p>
}
