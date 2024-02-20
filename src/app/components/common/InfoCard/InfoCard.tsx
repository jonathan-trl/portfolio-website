import { ReactNode } from 'react'

type InfoCardProps = {
  firstText: string
  secondText: string
  icon: ReactNode
}
export const InfoCard = ({ firstText, icon, secondText }: InfoCardProps) => {
  return (
    <div className="info-card rounded-2xl border-4 flex flex-col justify-center items-center w-[260px] h-[215px] md:w-[286px] md:h-[286px]">
      <div>{icon}</div>
      <div className="mt-4 text-center">
        <div className="font-medium text-sm lg:text-xl">{firstText}</div>
        <div className="font-extrabold text-lg lg:text-3xl">{secondText}</div>
      </div>
    </div>
  )
}
