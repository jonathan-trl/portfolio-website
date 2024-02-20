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
      className={`bottom-4 right-4 bg-purple-primary w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-full ${
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
