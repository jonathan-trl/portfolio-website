import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TechnologyItem } from '../models/Technology'

const useTechnologyItems = (): TechnologyItem[] => {
  const { theme } = useTheme()
  const [technologyItems, setTechnologyItems] = useState<TechnologyItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const setTheme = theme === 'dark' ? 'light' : 'dark'
    const items: TechnologyItem[] = [
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

    setTechnologyItems(items)
  }, [theme])

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return []
  }

  return technologyItems
}

export default useTechnologyItems
