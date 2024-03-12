'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-purple-primary sm:h-12 sm:w-12 lg:h-14 lg:w-14 ${
        isVisible ? 'fixed' : 'hidden'
      }`}
    >
      <button
        className="rounded-full px-4 py-2 font-bold text-white sm:text-2xl"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  )
}
