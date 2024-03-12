import { NavProps } from '@/models/Nav'
import { useTranslations } from 'next-intl'

export const Nav = ({ items }: NavProps) => {
  const t = useTranslations('nav')
  return (
    <div className="flex flex-1 flex-col items-center justify-evenly gap-4 lg:flex-row lg:gap-0">
      {items.map((item) => (
        <a
          href={`#${item.label}`}
          key={item.label}
          className="text-lg font-normal transition-colors hover:text-purple-primary lg:text-2xl lg:font-bold"
        >
          {t(item.label)}
        </a>
      ))}
    </div>
  )
}
