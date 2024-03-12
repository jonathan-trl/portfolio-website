'use client'
import { TechnologyItem } from '@/models/Technology'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

type ExperiencesSliderProps = {
  technologyItems: TechnologyItem[]
}

export const ExperiencesSlider = ({
  technologyItems,
}: ExperiencesSliderProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    customPaging: (i) => (
      <div className="dot">
        <button className="before:hidden"></button>
      </div>
    ),
    dotsClass: 'slick-dots slick-dots-techologies',
  }
  return (
    <Slider {...settings}>
      {technologyItems.map((item) => (
        <div key={item.url}>
          <Image src={item.url} width={30} height={30} alt="" loading="lazy" />
        </div>
      ))}
    </Slider>
  )
}
