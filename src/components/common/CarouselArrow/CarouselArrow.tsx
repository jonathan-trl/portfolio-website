import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { VariantProps, tv } from 'tailwind-variants'

const tvCarouselArrowContainer = tv({
  base: 'absolute top-1/2 z-50 flex h-5 w-5 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-sm xl:h-7 xl:w-7 xl:text-base',
  variants: {
    arrowDirection: {
      prev: '-left-12',
      next: '-right-12',
    },
  },
})

type CarouselArrow = {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

type CarouselArrowContainerProps = {
  icon: IconType
} & CarouselArrow &
  VariantProps<typeof tvCarouselArrowContainer>

const CarouselArrowContainer = ({
  onClick,
  icon: Icon,
  arrowDirection,
}: CarouselArrowContainerProps) => (
  <button
    className={tvCarouselArrowContainer({ arrowDirection })}
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
