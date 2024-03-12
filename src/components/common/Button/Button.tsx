import { HTMLProps, ReactNode } from 'react'

type ButtonProps = {
  title: string
  isDark?: boolean
  iconRight?: ReactNode
  href?: string
}
export const Button = ({
  title,
  isDark,
  iconRight,
  href,
  className,
}: ButtonProps & HTMLProps<HTMLDivElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${
        className ? className : 'w-full'
      } flex items-center justify-center text-center gap-3 rounded-xl bg-transparent border-[3px] px-6 py-1 font-bold text-lg lg:text-3xl transition-colors cursor-pointer ${
        isDark
          ? 'border-purple-primary hover:bg-white hover:text-purple-primary'
          : 'hover:bg-purple-primary hover:text-white'
      }`}
    >
      <span>{title}</span>
      {iconRight && <span>{iconRight}</span>}
    </a>
  )
}
