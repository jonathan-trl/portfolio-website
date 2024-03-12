'use client'
import { Logo } from '@/components/common/Logo'
import { MotionEffects } from '@/components/common/MotionEffects'
import { navItems } from '@/config/navItems'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Nav } from './Nav'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Menu = () => {
  const [navMobileOpen, setNavMobileOpen] = useState(false)

  const toggleNavMobile = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  return (
    <div className="pt-8 pb-6 md:pb-16">
      <div className="flex flex-1 justify-between gap-4 w-full items-center">
        <Logo />
        <MotionEffects
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="hidden lg:block flex-1"
        >
          <Nav items={navItems} />
        </MotionEffects>
        <div className="flex items-center gap-2 mr-auto">
          <ThemeSwitcher />
          <LanguageSwitcher />
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
