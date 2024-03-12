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
      className={`bottom-4 right-4 bg-purple-primary w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex justify-center items-center rounded-full ${
        isVisible ? 'fixed' : 'hidden'
      }`}
    >
      <button
        className="text-white sm:text-2xl font-bold py-2 px-4 rounded-full"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  )
}
