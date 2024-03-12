'use client'
import { useTranslations } from 'next-intl'
import { Typewriter } from 'react-simple-typewriter'

export const CustomTypewriter = () => {
  const t = useTranslations('menu.typewriter')
  return (
    <Typewriter
      words={[t('profession'), t('age'), t('location')]}
      cursor
      loop={3}
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  )
}
