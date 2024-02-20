import { githubLink, linkedinLink } from '@/app/config/socialMediaItems'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconLink } from '../../common/IconLink'

export const Footer = () => {
  return (
    <footer className="bg-[#7B4AE21A] flex justify-center gap-4 py-4">
      <IconLink
        href={linkedinLink}
        icon={<FaLinkedin size={23} color="rgba(255,255,255,.6)" />}
      />
      <IconLink
        href={githubLink}
        icon={<FaGithub size={23} color="rgba(255,255,255,.6)" />}
      />
    </footer>
  )
}
