import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SocialMediaItem } from '../models/SocialMedia'

export const whatsappLink = 'https://wa.me/5512991313223/'

export const linkedinLink = 'https://www.linkedin.com/in/jonathan-carvalho-dev/'

export const githubLink = 'https://github.com/jonathan-trl?tab=repositories'

export const curriculumLink = '/curriculo-jonathan-carvalho.pdf'

export const emailLink = 'jonathan.carvalho1807@gmail.com'

export const socialMediaItems: SocialMediaItem[] = [
  {
    url: linkedinLink,
    icon: FaLinkedin,
  },
  {
    url: githubLink,
    icon: FaGithub,
  },
  {
    url: whatsappLink,
    icon: FaWhatsapp,
  },
]
