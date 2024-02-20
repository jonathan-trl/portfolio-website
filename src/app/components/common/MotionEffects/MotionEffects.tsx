'use client'
import { AnimationProps, motion, useAnimation, useInView } from 'framer-motion'
import { HTMLProps, useEffect, useRef } from 'react'

export const MotionEffects = ({
  children,
  id,
  className,
  variants,
  transition,
  exit,
}: AnimationProps & HTMLProps<HTMLDivElement>) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])
  return (
    <motion.div
      ref={ref}
      id={id}
      variants={
        variants
          ? variants
          : {
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }
      }
      transition={transition ? transition : { duration: 0.5, delay: 0.25 }}
      exit={exit ? exit : { opacity: 0 }}
      initial="hidden"
      animate={mainControls}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
