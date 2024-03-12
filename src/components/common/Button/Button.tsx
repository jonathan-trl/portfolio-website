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
      } flex cursor-pointer items-center justify-center gap-3 rounded-xl border-[3px] bg-transparent px-6 py-1 text-center text-lg font-bold transition-colors lg:text-3xl ${
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
