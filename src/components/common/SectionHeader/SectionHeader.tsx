import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { MotionEffects } from '../MotionEffects'

const tvH1 = tv({
  base: 'relative flex items-center gap-2 overflow-hidden font-plus-jakarta-sans text-xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl md:gap-4',
  variants: {
    lightMode: {
      true: 'text-purple-secondary dark:text-white',
      false: 'text-white dark:text-white',
      default: 'text-purple-primary',
    },
    center: {
      true: 'justify-center',
      false: '',
    },
    centerOnMobile: {
      true: 'justify-center md:justify-start',
      false: '',
    },
  },
})

const tvH2 = tv({
  extend: tvH1,
  base: 'leading-2 mb-1 justify-start font-barlow-condensed font-bold md:text-2xl lg:text-3xl xl:text-4xl md:mb-2',
  defaultVariants: {
    lightMode: 'default',
  },
})

const tvMotionEffects = tv({
  base: 'absolute top-1/2 h-[95%] w-full -translate-y-1/2 sm:top-0 sm:h-full sm:translate-y-0',
  variants: {
    lightMode: {
      true: 'bg-purple-secondary dark:bg-white',
      false: 'bg-white',
      default: 'bg-purple-primary',
    },
  },
})

type SectionHeaderProps = {
  title: string
  subtitle: string
  icon?: ReactNode
} & VariantProps<typeof tvH1> &
  VariantProps<typeof tvH2> &
  VariantProps<typeof tvMotionEffects>

export const SectionHeader = ({
  title,
  subtitle,
  center,
  icon,
  lightMode,
  centerOnMobile,
}: SectionHeaderProps) => {
  return (
    <div className={`relative mb-4 w-full`}>
      <h2 className={tvH2({ center, centerOnMobile })}>
        <MotionEffects
          transition={{ duration: 0.7, ease: 'easeIn' }}
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          className={tvMotionEffects({ lightMode: 'default' })}
        />
        - {title}
      </h2>

      <h1 className={tvH1({ lightMode, center, centerOnMobile })}>
        <MotionEffects
          transition={{ duration: 1.1, ease: 'easeIn' }}
          variants={{
            hidden: { right: 0 },
            visible: { right: '100%' },
          }}
          className={tvMotionEffects({ lightMode })}
        />
        {icon && <span>{icon}</span>}
        <span>{subtitle}</span>
      </h1>
    </div>
  )
}
