import { HTMLProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tvButton = tv({
  base: 'w-full flex cursor-pointer items-center justify-center gap-3 rounded-xl border-[3px] bg-transparent px-6 py-1 text-center text-lg font-bold transition-colors lg:text-3xl',
  variants: {
    isDark: {
      true: 'border-purple-primary hover:bg-white hover:text-purple-primary',
      false: 'hover:bg-purple-primary hover:text-white',
    },
  },
})

type ButtonProps = {
  title: string
  iconRight?: ReactNode
  href?: string
} & HTMLProps<HTMLButtonElement> &
  VariantProps<typeof tvButton>

export const Button = ({
  title,
  iconRight,
  href,
  isDark,
  className,
}: ButtonProps) => {
  return (
    <a href={href} target="_blank" className={tvButton({ isDark, className })}>
      <span>{title}</span>
      {iconRight && <span>{iconRight}</span>}
    </a>
  )
}
