import { NavProps } from '@/models/Nav'
import { useTranslations } from 'next-intl'

export const Nav = ({ items }: NavProps) => {
  const t = useTranslations('nav')
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-evenly flex-1">
      {items.map((item) => (
        <a
          href={`#${item.label}`}
          key={item.label}
          className="hover:text-purple-primary transition-colors font-normal lg:font-bold text-lg lg:text-2xl"
        >
          {t(item.label)}
        </a>
      ))}
    </div>
  )
}
