import { AnimationProps } from 'framer-motion'
import { ReactNode } from 'react'
import { MotionEffects } from '../MotionEffects'

type InfoCardProps = {
  firstText: string
  secondText: string
  icon: ReactNode
} & AnimationProps
export const InfoCard = ({
  firstText,
  icon,
  secondText,
  variants,
  transition,
}: InfoCardProps) => {
  return (
    <MotionEffects
      transition={transition ? transition : { duration: 0.4, ease: 'easeIn' }}
      variants={
        variants
          ? variants
          : {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }
      }
      className="w-full"
    >
      <div className="info-card rounded-2xl border-4 flex flex-col justify-center items-center w-full h-[215px] md:h-[286px]">
        <div>{icon}</div>
        <div className="mt-4 text-center">
          <div className="font-medium text-sm lg:text-xl">{firstText}</div>
          <div className="font-extrabold text-lg lg:text-3xl font-plus-jakarta-sans">{secondText}</div>
        </div>
      </div>
    </MotionEffects>
  )
}
