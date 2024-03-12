import { githubLink, linkedinLink } from '@/config/socialMediaItems'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconLink } from '../../common/IconLink'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <footer className="relative bg-[#7B4AE21A] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 py-4">
      <p className="text-white/55 text-[12px] sm:text-base order-2 sm:order-1">
        {t('copyright')}
      </p>
      <div className="order-1 sm:order-2 flex item-center gap-4">
        <IconLink
          href={linkedinLink}
          icon={FaLinkedin}
          className={'text-[30px]'}
        />
        <IconLink href={githubLink} icon={FaGithub} className={'text-[30px]'} />
      </div>
    </footer>
  )
}
