import { curriculumLink, whatsappLink } from '@/app/config/socialMediaItems'
import { BsSend } from 'react-icons/bs'
import { FaLink, FaWhatsapp } from 'react-icons/fa'
import { IoShareSocial } from 'react-icons/io5'
import { Button } from '../../common/Button'
import { SectionHeader } from '../../common/SectionHeader'

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center flex-col items-center text-center"
    >
      <SectionHeader
        title="Gostou?"
        subtitle="Entre em contato!"
        icon={<IoShareSocial />}
        center
      />
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 text-lg">
            <span>E-mail: </span>
            <span>
              <BsSend />
            </span>
          </div>
          <span className="text-lg">jonathan.carvalho1807@gmail.com</span>
        </div>
        <Button
          title="Vamos conversar"
          iconRight={<FaWhatsapp />}
          href={whatsappLink}
        />
        <Button
          title="Currículo"
          iconRight={<FaLink />}
          isDark
          href={curriculumLink}
        />
      </div>
    </div>
  )
}
