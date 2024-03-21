import { Button } from '@/components/common/Button'
import { IconLink } from '@/components/common/IconLink'
import { MotionEffects } from '@/components/common/MotionEffects'
import { curriculumLink, socialMediaItems } from '@/config/socialMediaItems'
import { useTranslations } from 'next-intl'
import { FaLink } from 'react-icons/fa'
import { CustomTypewriter } from './CustomTypewriter'
import { MyPicture } from './MyPicture'

export const Hero = () => {
  const t = useTranslations('menu.hero')
  const t_buttons = useTranslations('buttons')

  return (
    <MotionEffects
      transition={{ duration: 0.7, ease: 'easeIn' }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-col items-center justify-between pt-20 lg:flex-row">
        <div className="order-2 flex flex-col items-center gap-1 md:gap-2 lg:order-1 lg:items-start">
          <span className="relative overflow-hidden text-lg font-bold text-purple-primary md:text-4xl">
            <MotionEffects
              transition={{ duration: 1.1, ease: 'easeIn' }}
              variants={{
                hidden: { right: 0 },
                visible: { right: '100%' },
              }}
              className={`absolute right-0 top-1/2 z-50 h-[95%] w-full -translate-y-1/2 bg-white sm:top-0 sm:h-full sm:translate-y-0`}
            />
            {t('hello')} <span className="text-white">{t('i-am')}</span>
          </span>
          <h1 className="relative overflow-hidden font-barlow-condensed text-2xl font-extrabold leading-[100%] md:text-[52px]">
            <MotionEffects
              transition={{ duration: 1.1, ease: 'easeIn' }}
              variants={{
                hidden: { left: 0 },
                visible: { left: '100%' },
              }}
              className={`absolute right-0 top-1/2 z-50 h-[95%] w-full -translate-y-1/2 bg-purple-primary sm:top-0 sm:h-full sm:translate-y-0`}
            />
            Jonathan <span className="text-purple-primary">Carvalho</span>
          </h1>
          <h3 className="text-xl font-medium md:text-4xl">
            <CustomTypewriter />
          </h3>
          <div className="my-3">
            <Button
              title={t_buttons('curriculum')}
              iconRight={<FaLink />}
              isDark
              href={curriculumLink}
            />
          </div>
          <div className="w-100 flex items-center justify-center gap-2">
            {socialMediaItems.map((item) => (
              <IconLink
                key={item.url}
                href={item.url}
                icon={item.icon}
                className={'text-[30px] md:text-[38px]'}
              />
            ))}
          </div>
        </div>

        <div className="relative order-1 mb-4 lg:order-2 lg:mb-0">
          <MyPicture />
        </div>
      </div>
    </MotionEffects>
  )
}
