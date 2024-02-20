'use client'
import { Typewriter } from 'react-simple-typewriter'

export const CustomTypewriter = () => {
  return (
    <Typewriter
      words={[
        'Sou Desenvolvedor Front-end.',
        'Tenho 22 anos!',
        'Sou de Lorena-SP.',
      ]}
      cursor
      loop={3}
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  )
}
