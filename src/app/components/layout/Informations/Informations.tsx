import Image from 'next/image'
import { InfoCard } from '../../common/InfoCard'

export const Informations = () => {
  return (
    <div className="grid grid-cols-[256px] sm:grid-cols-2 xl:grid-cols-4 justify-center gap-10">
      <InfoCard
        firstText="3 anos como"
        secondText="Programador"
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
        firstText="+ de 67 mil linhas de"
        secondText="Códigos"
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
        firstText="Dezenas de projetos e"
        secondText="Experiências"
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
        firstText="Desenvolvedor"
        secondText="Front-end"
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
