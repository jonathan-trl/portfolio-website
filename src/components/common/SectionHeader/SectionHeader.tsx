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
    <div className={`relative mb-4 w-full`}>
      <h2
        className={`leading-2 relative mb-0 flex justify-start overflow-hidden font-barlow-condensed text-lg font-bold text-purple-primary md:text-2xl lg:text-4xl ${centerText}`}
      >
        <MotionEffects
          transition={{ duration: 0.7, ease: 'easeIn' }}
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          className={`absolute top-1/2 h-[95%] w-full -translate-y-1/2 bg-purple-primary sm:top-0 sm:h-full sm:translate-y-0`}
        />
        - {title}
      </h2>

      <h1
        className={`relative flex items-center gap-2 overflow-hidden font-plus-jakarta-sans text-xl font-extrabold dark:text-white md:text-3xl lg:text-5xl ${
          lightMode ? ' text-purple-secondary' : 'text-white'
        }  ${centerText}`}
      >
        <MotionEffects
          transition={{ duration: 1.1, ease: 'easeIn' }}
          variants={{
            hidden: { right: 0 },
            visible: { right: '100%' },
          }}
          className={`absolute top-1/2 h-[95%] w-full -translate-y-1/2 sm:top-0 sm:h-full sm:translate-y-0 ${
            lightMode ? 'bg-purple-secondary dark:bg-white' : 'bg-white'
          }`}
        />
        {icon && <span>{icon}</span>}
        <span>{subtitle}</span>
      </h1>
    </div>
  )
}
