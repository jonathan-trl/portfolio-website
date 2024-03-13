'use client'
import { AnimationProps } from 'framer-motion'
import { HTMLProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { MotionEffects } from '../MotionEffects'
import { SectionHeader } from '../SectionHeader'

const tvSection = tv({
  base: 'py-10 md:py-16 lg:py-20',
  variants: {
    lightMode: {
      true: 'bg-white dark:bg-purple-dark',
      false: 'bg-purple-dark',
    },
  },
})

type SectionProps = {
  title?: string
  subtitle?: string
  center?: boolean
  icon?: ReactNode
  noSectionHeader?: boolean
} & AnimationProps &
  HTMLProps<HTMLDivElement> &
  VariantProps<typeof tvSection>

export const Section = ({
  children,
  id,
  className,
  variants,
  transition,
  lightMode,
  subtitle,
  title,
  icon,
  center,
  noSectionHeader,
}: SectionProps) => {
  return (
    <section className={tvSection({ lightMode, className })} id={id}>
      <MotionEffects
        variants={
          variants
            ? variants
            : {
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }
        }
        transition={transition ? transition : { duration: 0.5, delay: 0.25 }}
      >
        <div className="container mx-auto">
          {!noSectionHeader && title && subtitle && (
            <SectionHeader
              title={title}
              subtitle={subtitle}
              icon={icon}
              center={center}
              lightMode={lightMode}
            />
          )}
          {children}
        </div>
      </MotionEffects>
    </section>
  )
}
