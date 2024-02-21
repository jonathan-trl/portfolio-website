'use client'
import useTechnologyItems from '@/app/config/useTechnologyItems'
import Image from 'next/image'
import { ExperiencesSlider } from './ExperiencesSlider'

export const Experiencies = () => {
  const technologyItems = useTechnologyItems()

  return (
    <>
      <div className="max-w-[300px] mx-auto mt-3 sm:hidden">
        <ExperiencesSlider technologyItems={technologyItems} />
      </div>
      <div className="relative hidden sm:flex max-w-[1000px] mx-auto gap-8 mt-8 flex-wrap justify-center items-center">
        {technologyItems.map((item) => (
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
            <span className="font-medium text-lg text-purple-secondary dark:text-white">
              {item.technologie}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
