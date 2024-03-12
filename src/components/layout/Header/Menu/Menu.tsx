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
    <div className="pb-6 pt-8 md:pb-16">
      <div className="flex w-full flex-1 items-center justify-between gap-4">
        <Logo />
        <MotionEffects
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="hidden flex-1 lg:block"
        >
          <Nav items={navItems} />
        </MotionEffects>
        <div className="mr-auto flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <div
          className="cursor-pointer select-none lg:hidden"
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
        <div className="mt-4 lg:hidden">
          <Nav items={navItems} />
        </div>
      )}
    </div>
  )
}
