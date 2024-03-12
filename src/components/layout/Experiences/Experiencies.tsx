'use client'
import useTechnologyItems from '@/config/useTechnologyItems'
import Image from 'next/image'
import { ExperiencesSlider } from './ExperiencesSlider'

export const Experiencies = () => {
  const technologyItems = useTechnologyItems()

  return (
    <>
      <div className="mx-auto mb-10 mt-3 max-w-[300px] sm:hidden">
        <ExperiencesSlider technologyItems={technologyItems} />
      </div>
      <div className="relative mx-auto mt-8 hidden max-w-[1000px] flex-wrap items-center justify-center gap-8 sm:flex">
        {technologyItems.map((item) => (
          <div
            key={item.url}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="relative h-[50px] w-[50px] transition-transform hover:scale-110 md:h-[60px] md:w-[60px] xl:h-[80px] xl:w-[80px]">
              <Image
                src={item.url}
                fill
                className="object-cover"
                alt=""
                loading="lazy"
              />
            </div>
            <span className="text-lg font-medium text-purple-secondary dark:text-white">
              {item.technologie}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
