import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }
  return (
    <>
      {theme == 'dark' ? (
        <IoIosSunny
          className="cursor-pointer select-none text-yellow-400"
          size={30}
          onClick={() => setTheme('light')}
        />
      ) : (
        <IoIosMoon
          className="cursor-pointer select-none"
          size={30}
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  )
}
