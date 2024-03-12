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
      <div className="info-card flex h-[215px] w-full flex-col items-center justify-center rounded-2xl border-4 md:h-[286px]">
        <div>{icon}</div>
        <div className="mt-4 text-center">
          <div className="text-lg font-normal lg:text-xl">{firstText}</div>
          <div className="font-plus-jakarta-sans text-2xl font-extrabold lg:text-3xl 2xl:text-4xl">
            {secondText}
          </div>
        </div>
      </div>
    </MotionEffects>
  )
}
