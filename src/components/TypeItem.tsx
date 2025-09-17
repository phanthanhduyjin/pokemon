import Link from 'next/link'

type TypeItemProps = {
  item: { name: string; url: string }
  isSelected: boolean
}
export const TypeItem = ({ item, isSelected }: TypeItemProps) => {
  return (
    <Link
      className={`border p-4 ${isSelected ? 'bg-blue-500 text-white' : ''}`}
      href={item.url}
    >
      {item.name}
    </Link>
  )
}
