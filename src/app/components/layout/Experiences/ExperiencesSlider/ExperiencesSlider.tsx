'use client'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

type ExperiencesSliderProps = {
  technologiesItems: {
    url: string
    technologie: string
  }[]
}

export const ExperiencesSlider = ({
  technologiesItems,
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
      {technologiesItems.map((item) => (
        <div key={item.url}>
          <Image src={item.url} width={30} height={30} alt="" loading="lazy" />
        </div>
      ))}
    </Slider>
  )
}
