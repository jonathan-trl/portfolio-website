import { githubLink, linkedinLink } from '@/app/config/socialMediaItems'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconLink } from '../../common/IconLink'

export const Footer = () => {
  return (
    <footer className="relative bg-[#7B4AE21A] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 py-4">
      <p className="text-white/55 text-[12px] sm:text-base order-2 sm:order-1">
        © 2024 · Desenvolvido por Jonathan Carvalho
      </p>
      <div className="order-1 sm:order-2 flex item-center gap-4">
        <IconLink
          href={linkedinLink}
          icon={
            <FaLinkedin
              size={23}
              className="text-white/50 hover:text-white transition-colors"
            />
          }
        />
        <IconLink
          href={githubLink}
          icon={
            <FaGithub
              size={23}
              className="text-white/50 hover:text-white transition-colors"
            />
          }
        />
      </div>
    </footer>
  )
}
