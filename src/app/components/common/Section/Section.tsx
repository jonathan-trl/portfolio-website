'use client'
import { Transition, Variants } from 'framer-motion'
import { HTMLProps, useRef } from 'react'
import { MotionEffects } from '../MotionEffects'

type SectionProps = {
  variants?: Variants
  transition?: Transition
} & HTMLProps<HTMLDivElement>

export const Section = ({
  children,
  id,
  className,
  variants,
  transition,
}: SectionProps) => {
  return (
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
      <section
        className={`${className ? className : 'md:py-16 lg:py-20 py-10'}`}
        id={id}
      >
        {children}
      </section>
    </MotionEffects>
  )
}
