import { NavProps } from '@/app/models/Nav'

export const Nav = ({ items }: NavProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-evenly flex-1">
      {items.map((item) => (
        <a
          href={item.link}
          key={item.link}
          className="hover:text-purple-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
