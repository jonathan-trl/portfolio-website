import { githubLink, linkedinLink } from '@/config/socialMediaItems'
import { useTranslations } from 'next-intl'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconLink } from '../../common/IconLink'

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <footer className="relative flex flex-col items-center justify-center gap-2 bg-[#7B4AE21A] py-4 sm:flex-row sm:gap-4">
      <p className="order-2 text-[12px] text-white/55 sm:order-1 sm:text-base">
        {t('copyright')}
      </p>
      <div className="item-center order-1 flex gap-4 sm:order-2">
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
