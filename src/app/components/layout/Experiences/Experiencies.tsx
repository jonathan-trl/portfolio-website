import { technologiesItems } from '@/app/config/technologiesItems'
import Image from 'next/image'
import { GiTechnoHeart } from 'react-icons/gi'
import { SectionHeader } from '../../common/SectionHeader'
import { ExperiencesSlider } from './ExperiencesSlider'

export const Experiencies = () => {
  return (
    <>
      <SectionHeader
        title="Experiências"
        subtitle="Tecnologias e habilidades"
        center
        icon={<GiTechnoHeart />}
      />
      <div className="max-w-[300px] mx-auto mt-3 sm:hidden">
        <ExperiencesSlider />
      </div>
      <div className="relative hidden sm:flex max-w-[1000px] mx-auto gap-8 mt-8 flex-wrap justify-center items-center">
        {technologiesItems.map((item) => (
          <div
            key={item.url}
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="relative w-[50px] md:w-[60px] xl:w-[80px] h-[50px] md:h-[60px] xl:h-[80px] hover:scale-110 transition-transform">
              <Image
                src={item.url}
                fill
                className="object-cover"
                alt=""
                loading="lazy"
              />
            </div>
            <span className="font-medium text-lg">{item.technologie}</span>
          </div>
        ))}
      </div>
    </>
  )
}
