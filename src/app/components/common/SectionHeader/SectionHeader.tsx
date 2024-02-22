import { ReactNode } from 'react'
import { MotionEffects } from '../MotionEffects'

interface SectionHeaderProps {
  title: string
  subtitle: string
  center?: boolean
  centerOnMobile?: boolean
  icon?: ReactNode
  lightMode?: boolean
}

export const SectionHeader = ({
  title,
  subtitle,
  center,
  icon,
  lightMode,
  centerOnMobile,
}: SectionHeaderProps) => {
  const centerText = `${center ? 'justify-center' : ''} ${
    centerOnMobile ? 'justify-center md:justify-start' : ''
  }`
  return (
    <div className={`relative mb-4 w-full `}>
      <h2
        className={`relative overflow-hidden font-barlow-condensed font-bold text-lg md:text-2xl lg:text-4xl text-purple-primary mb-1 md:mb-2 lg:mb-4 flex justify-start leading-2 ${centerText}`}
      >
        <MotionEffects
          transition={{ duration: 0.7, ease: 'easeIn' }}
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          className={`absolute w-full top-1/2 -translate-y-1/2 h-[80%] sm:h-full sm:top-0 sm:translate-y-0 bg-purple-primary`}
        />
        - {title}
      </h2>

      <h1
        className={`relative overflow-hidden font-plus-jakarta-sans font-extrabold text-xl md:text-3xl lg:text-5xl leading-[40px] flex items-center gap-2 dark:text-white ${
          lightMode ? ' text-purple-secondary' : 'text-white'
        }  ${centerText}`}
      >
        <MotionEffects
          transition={{ duration: 1.1, ease: 'easeIn' }}
          variants={{
            hidden: { right: 0 },
            visible: { right: '100%' },
          }}
          className={`absolute w-full top-1/2 -translate-y-1/2 h-[80%] sm:h-full sm:top-0 sm:translate-y-0 ${
            lightMode ? 'bg-purple-secondary dark:bg-white' : 'bg-white'
          }`}
        />
        {icon && <span>{icon}</span>}
        <span>{subtitle}</span>
      </h1>
    </div>
  )
}
