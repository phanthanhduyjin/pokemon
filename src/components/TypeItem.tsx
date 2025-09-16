type TypeItemProps = {
  item: { name: string; url: string }
  isSelected: boolean
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, type: string) => void
}
export const TypeItem = ({ item, isSelected, onClick }: TypeItemProps) => {
  return (
    <a
      className={`border p-4 ${isSelected ? 'bg-blue-500 text-white' : ''}`}
      onClick={e => onClick(e, item.name)}
      href={item.url}
    >
      {item.name}
    </a>
  )
}
