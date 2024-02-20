'use client'
import { technologiesItems } from '@/app/config/technologiesItems'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

export const ExperiencesSlider = () => {
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
      {technologiesItems.map((item) => (
        <div key={item.url}>
          <Image src={item.url} width={40} height={40} alt="" loading="lazy" />
        </div>
      ))}
    </Slider>
  )
}
