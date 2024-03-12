import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MotionEffects } from '../../common/MotionEffects'

export const AboutMe = () => {
  const t = useTranslations('about-me')
  return (
    <>
      <MotionEffects
        transition={{ duration: 0.7, ease: 'easeIn' }}
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 },
        }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="text-base font-normal text-gray-primary dark:text-white md:text-xl 2xl:pr-12">
          <div>{t('profession')}</div>
          <div className="mt-4">{t('committed')}</div>
        </div>
        <div className="flex justify-center">
          <Image
            src={'/images/about-me/illustration.7224a019.svg'}
            width={450}
            height={300}
            alt=""
          />
        </div>
      </MotionEffects>
    </>
  )
}
