import { Button } from '@/app/components/common/Button'
import { IconLink } from '@/app/components/common/IconLink'
import { MotionEffects } from '@/app/components/common/MotionEffects'
import {
  curriculumLink,
  githubLink,
  linkedinLink,
  whatsappLink,
} from '@/app/config/socialMediaItems'
import { FaGithub, FaLink, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { CustomTypewriter } from './CustomTypewriter'
import { MyPicture } from './MyPicture'

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
    <MotionEffects
      transition={{ duration: 0.7, ease: 'easeIn' }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between py-2">
        <div className="flex flex-col items-center lg:items-start gap-1 md:gap-4 lg:gap-6 order-2 lg:order-1">
          <span className="relative overflow-hidden text-purple-primary font-bold text-lg md:text-4xl">
            <MotionEffects
              transition={{ duration: 1.1, ease: 'easeIn' }}
              variants={{
                hidden: { right: 0 },
                visible: { right: '100%' },
              }}
              className={`absolute w-full top-0 right-0 h-full bg-white z-50`}
            />
            Olá! 👋, <span className="text-white">eu sou</span>
          </span>
          <h1 className="relative overflow-hidden font-extrabold text-2xl md:text-[52px] md:leading-10">
            <MotionEffects
              transition={{ duration: 1.1, ease: 'easeIn' }}
              variants={{
                hidden: { left: 0 },
                visible: { left: '100%' },
              }}
              className={`absolute w-full top-0 right-0 h-full bg-purple-primary z-50`}
            />
            Jonathan <span className="text-purple-primary">Carvalho</span>
          </h1>
          <h3 className="font-medium text-xl md:text-4xl">
            <CustomTypewriter />
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

        <MyPicture />
      </div>
    </MotionEffects>
  )
}
