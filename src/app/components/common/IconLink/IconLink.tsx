import { ReactNode } from 'react'

type IconLinkProps = {
  icon: ReactNode
  href: string
}
export const IconLink = ({ href, icon }: IconLinkProps) => {
  return (
    <a target="_blank" href={href} className="text-base w-15">
      {icon}
    </a>
  )
}
