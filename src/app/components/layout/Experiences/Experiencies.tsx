'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ExperiencesSlider } from './ExperiencesSlider'

export const Experiencies = () => {
  const [mounted, setMounted] = useState(false)

  const { theme } = useTheme()

  const setTheme = theme == 'dark' ? 'light' : 'dark'

  const technologiesItems = [
    {
      url: `/images/technologies/${setTheme}/Javascript.png`,
      technologie: 'Javascript',
    },
    {
      url: `/images/technologies/${setTheme}/React.png`,
      technologie: 'React',
    },
    {
      url: `/images/technologies/${setTheme}/Nextjs.png`,
      technologie: 'Next.js',
    },
    {
      url: `/images/technologies/${setTheme}/HTML5.png`,
      technologie: 'HTML5',
    },
    {
      url: `/images/technologies/${setTheme}/Css3.png`,
      technologie: 'CSS3',
    },
    {
      url: `/images/technologies/${setTheme}/TypeScript.png`,
      technologie: 'TypeScript',
    },
    {
      url: `/images/technologies/${setTheme}/Nodejs.png`,
      technologie: 'Node.js',
    },
    {
      url: `/images/technologies/${setTheme}/Sass.png`,
      technologie: 'Sass',
    },
    {
      url: `/images/technologies/${setTheme}/TailwindCSS.png`,
      technologie: 'TailwindCSS',
    },
    {
      url: `/images/technologies/${setTheme}/Git.png`,
      technologie: 'Git',
    },
    {
      url: `/images/technologies/${setTheme}/Docker.png`,
      technologie: 'Docker',
    },
    {
      url: `/images/technologies/${setTheme}/Github.png`,
      technologie: 'GitHub',
    },
    {
      url: `/images/technologies/${setTheme}/PostgreSQL.png`,
      technologie: 'PostgreSQL',
    },
    {
      url: `/images/technologies/${setTheme}/Bitbucket.png`,
      technologie: 'Bitbucket',
    },
  ]

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="max-w-[300px] mx-auto mt-3 sm:hidden">
        <ExperiencesSlider technologiesItems={technologiesItems} />
      </div>
      <div className="relative hidden sm:flex max-w-[1000px] mx-auto gap-8 mt-8 flex-wrap justify-center items-center">
        {technologiesItems.map((item) => (
          <div
            key={item.url}
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="relative w-[50px] md:w-[60px] xl:w-[80px] h-[50px] md:h-[60px] xl:h-[80px] hover:scale-110 transition-transform">
              <Image
                src={item.url}
                fill
                className="object-cover"
                alt=""
                loading="lazy"
              />
            </div>
            <span className="font-medium text-lg text-purple-secondary dark:text-white">
              {item.technologie}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
