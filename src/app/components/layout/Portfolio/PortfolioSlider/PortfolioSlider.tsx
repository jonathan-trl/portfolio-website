import { Button } from '@/app/components/common/Button'
import {
  CarouselNextArrow,
  CarouselPrevArrow,
} from '@/app/components/common/CarouselArrow'
import { portfolioItems } from '@/app/config/portfolioItems'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

export const PortfolioSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    customPaging: (i) => (
      <div className="dot">
        <button className="before:hidden"></button>
      </div>
    ),
    className: 'slick-portfolio',
    dotsClass: 'slick-dots -bottom-8',
    prevArrow: <CarouselNextArrow />,
    nextArrow: <CarouselPrevArrow />,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {portfolioItems.map((item) => (
        <div key={item.url}>
          <div className="flex flex-col justify-center items-center sm:px-2 text-center gap-4">
            <div className="relative w-[314px] h-[270px]">
              <Image
                src={`/images/portfolio/devices2.png`}
                alt=""
                width={314}
                height={270}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <h4 className="text-2xl font-plus-jakarta-sans">{item.title}</h4>
            {item.description && (
              <p className="text-base line-clamp-4 max-w-[400px]">
                {item.description && item.description}
              </p>
            )}
            <Button title="Acessar" isDark className="w-[150px]" />
          </div>
        </div>
      ))}
    </Slider>
  )
}
