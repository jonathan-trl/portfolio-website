'use client'
import { portfolioItems } from '@/app/config/portfolioItems'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../../common/Button'
import { PortfolioSlider } from './PortfolioSlider'

export const Portfolio = () => {
  const [itemsToShow, setItemsToShow] = useState(8)

  // const itemsPerOption = 4

  // const optionsToShow = Array.from(
  //   { length: Math.ceil(portfolioItems.length / itemsPerOption) },
  //   (_, index) => (index + 1) * itemsPerOption
  // )

  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setItemsToShow(parseInt(event.target.value, 10))
  // }

  return (
    <>
      {/* <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl">Mostrar:</span>
        <select
          name=""
          id=""
          value={itemsToShow}
          onChange={handleChange}
          className="w-40 bg-transparent border-none outline-none text-xl"
        >
          {optionsToShow.map((option) => (
            <option key={option} className="text-purple-dark" value={option}>
              {option}
            </option>
          ))}
        </select>
      </div> */}
      <div className="mb-10">
        <PortfolioSlider />
      </div>
      <div className="hidden grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
        {portfolioItems.slice(0, itemsToShow).map((item, index) => (
          <div
            key={index}
            className="info-card rounded-2xl flex flex-col gap-4 justify-center items-center border-[4px] border-solid border-transparent py-4 px-4"
          >
            <Image
              src={`/images/portfolio/devices2.png`}
              width={270}
              height={270}
              alt=""
              loading="lazy"
            />
            <h4 className="text-2xl font-plus-jakarta-sans">{item.title}</h4>
            {item.description && (
              <p className="text-base line-clamp-4">
                {item.description && item.description}
              </p>
            )}
            <Button title="Acessar" isDark />
          </div>
        ))}
      </div>
    </>
  )
}
