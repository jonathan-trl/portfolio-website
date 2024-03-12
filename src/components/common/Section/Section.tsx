'use client'
import { AnimationProps } from 'framer-motion'
import { HTMLProps, ReactNode } from 'react'
import { MotionEffects } from '../MotionEffects'
import { SectionHeader } from '../SectionHeader'

type SectionProps = {
  lightMode?: boolean
  title?: string
  subtitle?: string
  center?: boolean
  icon?: ReactNode
  noSectionHeader?: boolean
} & AnimationProps &
  HTMLProps<HTMLDivElement>

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
    <section
      className={`${
        lightMode ? 'bg-white dark:bg-purple-dark' : 'bg-purple-dark'
      } ${className ? className : 'md:py-16 lg:py-20 py-10'}`}
      id={id}
    >
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
