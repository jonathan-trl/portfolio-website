import { ReactNode } from 'react'

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
    <div className={`relative mb-4 ${center ? 'text-center' : ''}`}>
      <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-purple-primary mb-1 md:mb-2 lg:mb-4">
        - {title}
      </h2>

      <h1
        className={`font-extrabold text-2xl md:text-3xl lg:text-4xl flex items-center gap-2 ${
          center ? 'justify-center' : ''
        }`}
      >
        {icon && <span>{icon}</span>}
        <span>{subtitle}</span>
      </h1>
    </div>
  )
}
