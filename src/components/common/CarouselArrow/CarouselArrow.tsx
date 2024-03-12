import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type CarouselArrow = {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type CarouselArrowContainerProps = {
  icon: IconType
  arrowDirection: 'prev' | 'next'
} & CarouselArrow

const CarouselArrowContainer = ({
  onClick,
  icon: Icon,
  arrowDirection,
}: CarouselArrowContainerProps) => (
  <button
    className={`absolute top-1/2 ${
      arrowDirection == 'next' ? '-right-12' : '-left-12'
    } transform -translate-y-1/2 w-5 xl:w-7 h-5 xl:h-7 flex justify-center items-center bg-white rounded-full z-50 text-sm xl:text-base`}
    onClick={onClick}
  >
    <Icon className="text-purple-primary" />
  </button>
)

const CarouselPrevArrow = ({ onClick }: CarouselArrow) => (
  <CarouselArrowContainer
    onClick={onClick}
    arrowDirection="prev"
    icon={FaChevronLeft}
  />
)

const CarouselNextArrow = ({ onClick }: CarouselArrow) => (
  <CarouselArrowContainer
    arrowDirection="next"
    onClick={onClick}
    icon={FaChevronRight}
  />
)

export { CarouselNextArrow, CarouselPrevArrow }
