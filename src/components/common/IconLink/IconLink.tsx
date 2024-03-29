import { HTMLProps } from 'react'
import { IconType } from 'react-icons'

type IconLinkProps = {
  icon: IconType
  href: string
}
export const IconLink = ({
  href,
  icon: Icon,
  className: iconClassName,
}: IconLinkProps & HTMLProps<HTMLDivElement>) => {
  return (
    <a
      target="_blank"
      href={href}
      className="text-base text-white/50 transition-colors hover:text-white"
    >
      <Icon className={`${iconClassName ? `${iconClassName}` : ''}`} />
    </a>
  )
}
