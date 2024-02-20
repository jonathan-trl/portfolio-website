'use client'
import { navItems } from '@/app/config/navItems'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Nav } from './Nav'

export const Menu = () => {
  const [navMobileOpen, setNavMobileOpen] = useState(false)

  const toggleNavMobile = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  return (
    <div className="pt-10 pb-6 md:pb-16">
      <div className="flex flex-1 justify-between gap-4 w-full items-center">
        <h1 className="font-bold text-2xl">
          J
          <span className="text-purple-primary border-b-2 border-purple-primary w-50">
            N
          </span>
          T-c
        </h1>
        <div className="hidden lg:block flex-1">
          <Nav items={navItems} />
        </div>
        {/* <div className="flex gap-2">
          <LuSun className="cursor-pointer" size={20} />
          <IoLanguage className="cursor-pointer" size={20} />
        </div> */}
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
