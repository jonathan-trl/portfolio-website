import { ReactNode } from 'react'
import { MotionEffects } from '../MotionEffects'

interface SectionHeaderProps {
  title: string
  subtitle: string
  center?: boolean
  icon?: ReactNode
}
export const SectionHeader = ({
  title,
  subtitle,
  center,
  icon,
}: SectionHeaderProps) => {
  return (
    <div className={`relative mb-4 w-full ${center ? 'text-center' : ''}`}>
      <div className="relative overflow-hidden">
        <MotionEffects
          transition={{ duration: 0.7, ease: 'easeIn' }}
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          className={`absolute w-full top-0 right-0 h-full bg-purple-primary`}
        />
        <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-purple-primary mb-1 md:mb-2 lg:mb-4">
          - {title}
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <MotionEffects
          transition={{ duration: 1.1, ease: 'easeIn' }}
          variants={{
            hidden: { right: 0 },
            visible: { right: '100%' },
          }}
          className={`absolute w-full top-0 right-0 h-full bg-white`}
        />
        <h1
          className={`font-extrabold text-2xl md:text-3xl lg:text-4xl flex items-center gap-2 ${
            center ? 'justify-center' : ''
          }`}
        >
          {icon && <span>{icon}</span>}
          <span>{subtitle}</span>
        </h1>
      </div>
    </div>
  )
}
