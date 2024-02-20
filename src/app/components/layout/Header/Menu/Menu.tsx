'use client'
import { MotionEffects } from '@/app/components/common/MotionEffects'
import { navItems } from '@/app/config/navItems'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosMoon, IoIosSunny, IoMdClose } from 'react-icons/io'
import { Nav } from './Nav'

export const Menu = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const [navMobileOpen, setNavMobileOpen] = useState(false)

  const toggleNavMobile = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pt-10 pb-6 md:pb-16">
      <div className="flex flex-1 justify-between gap-4 w-full items-center">
        <h1 className="font-bold text-2xl">
          <span>J</span>
          <span className="text-purple-primary border-b-2 border-purple-primary w-50">
            N
          </span>
          <span>T-c</span>
        </h1>
        <MotionEffects
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="hidden lg:block flex-1"
        >
          <Nav items={navItems} />
        </MotionEffects>
        <div className="flex gap-2 mr-auto">
          {theme == 'dark' ? (
            <IoIosSunny
              className="cursor-pointer text-yellow-400"
              size={30}
              onClick={() => setTheme('light')}
            />
          ) : (
            <IoIosMoon
              className="cursor-pointer"
              size={30}
              onClick={() => setTheme('dark')}
            />
          )}
          {/* <IoLanguage className="cursor-pointer" size={20} /> */}
        </div>
        <div
          className="lg:hidden cursor-pointer select-none"
          onClick={toggleNavMobile}
        >
          {!navMobileOpen ? (
            <GiHamburgerMenu size={30} />
          ) : (
            <IoMdClose size={30} />
          )}
        </div>
      </div>
      {navMobileOpen && (
        <div className="lg:hidden mt-4">
          <Nav items={navItems} />
        </div>
      )}
    </div>
  )
}
