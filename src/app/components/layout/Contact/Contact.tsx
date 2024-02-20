import {
  curriculumLink,
  emailLink,
  whatsappLink,
} from '@/app/config/socialMediaItems'
import { BsSend } from 'react-icons/bs'
import { FaLink, FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../common/Button'

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center flex-col items-center text-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 text-lg">
            <span>E-mail: </span>
            <span>
              <BsSend />
            </span>
          </div>
          <a href={`mailto:${emailLink}`} className="text-lg transition-all hover:font-semibold">
            {emailLink}
          </a>
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
