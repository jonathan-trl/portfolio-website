import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { InfoCard } from '../../common/InfoCard'

export const Informations = () => {
  const t = useTranslations('informations')
  return (
    <div className="grid grid-cols-[256px] justify-center gap-10 sm:grid-cols-2 xl:grid-cols-4">
      <InfoCard
        firstText={t('card-one.first-text')}
        secondText={t('card-one.second-text')}
        icon={
          <Image
            width={100}
            height={100}
            src={'/images/about-me/icon4.svg'}
            alt=""
            loading="lazy"
          />
        }
        transition={{ duration: 0.4, ease: 'easeIn' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      />
      <InfoCard
        firstText={t('card-two.first-text')}
        secondText={t('card-two.second-text')}
        icon={
          <Image
            width={100}
            height={100}
            src={'/images/about-me/icon1.svg'}
            alt=""
            loading="lazy"
          />
        }
        transition={{ duration: 0.8, ease: 'easeIn' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      />
      <InfoCard
        firstText={t('card-three.first-text')}
        secondText={t('card-three.second-text')}
        icon={
          <Image
            width={100}
            height={100}
            src={'/images/about-me/icon3.svg'}
            alt=""
            loading="lazy"
          />
        }
        transition={{ duration: 1.2, ease: 'easeIn' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      />
      <InfoCard
        firstText={t('card-four.first-text')}
        secondText={t('card-four.second-text')}
        icon={
          <Image
            width={100}
            height={100}
            src={'/images/about-me/icon2.svg'}
            alt=""
            loading="lazy"
          />
        }
        transition={{ duration: 1.6, ease: 'easeIn' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      />
    </div>
  )
}
