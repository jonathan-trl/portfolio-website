'use client'
import { Button } from '@/app/components/common/Button'
import { IconLink } from '@/app/components/common/IconLink'
import {
  curriculumLink,
  githubLink,
  linkedinLink,
  whatsappLink,
} from '@/app/config/socialMediaItems'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLink, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {
  const socialMediaItems = [
    {
      url: linkedinLink,
      icon: (
        <FaLinkedin
          size={38}
          className="text-white/50 hover:text-white transition-colors"
        />
      ),
    },
    {
      url: githubLink,
      icon: (
        <FaGithub
          size={38}
          className="text-white/50 hover:text-white transition-colors"
        />
      ),
    },
    {
      url: whatsappLink,
      icon: (
        <FaWhatsapp
          size={38}
          className="text-white/50 hover:text-white transition-colors"
        />
      ),
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col items-center lg:items-start gap-1 md:gap-4 lg:gap-6 order-2 lg:order-1">
        <span className="text-purple-primary font-bold text-lg md:text-4xl">
          Hello world! 👋
        </span>
        <h1 className="font-extrabold text-2xl md:text-[52px]">
          Jonathan <span className="text-purple-primary">Carvalho</span>
        </h1>
        <h3 className="font-medium text-xl md:text-4xl">
          <Typewriter
            words={['Desenvolvedor Front-end.']}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <div className="my-3">
          <Button
            title="Currículo"
            iconRight={<FaLink />}
            isDark
            href={curriculumLink}
          />
        </div>
        <div className="flex w-100 items-center justify-center gap-2">
          {socialMediaItems.map((item) => (
            <IconLink key={item.url} href={item.url} icon={item.icon} />
          ))}
        </div>
      </div>

      <motion.div
        className="relative h-[190px] w-[190px] md:h-96 md:w-96 mb-4 lg:mb-0 order-1 lg:order-2"
        animate={{
          y: [-3, 3, -3],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        <Image
          src="/images/me.jpg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="rounded-full info-card border-[6px] border-solid border-transparent"
        />
      </motion.div>
    </div>
  )
}
