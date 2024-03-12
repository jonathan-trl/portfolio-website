import {
  curriculumLink,
  emailLink,
  whatsappLink,
} from '@/config/socialMediaItems'
import { useTranslations } from 'next-intl'
import { BsSend } from 'react-icons/bs'
import { FaLink, FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../common/Button'

export const Contact = () => {
  const t = useTranslations('buttons')
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-lg">
            <span>E-mail: </span>
            <span>
              <BsSend />
            </span>
          </div>
          <a
            href={`mailto:${emailLink}`}
            className="text-lg text-white/75 transition-colors hover:text-white"
          >
            {emailLink}
          </a>
        </div>
        <Button
          title={t('lets-talk')}
          iconRight={<FaWhatsapp />}
          href={whatsappLink}
        />
        <Button
          title={t('curriculum')}
          iconRight={<FaLink />}
          isDark
          href={curriculumLink}
        />
      </div>
    </div>
  )
}
