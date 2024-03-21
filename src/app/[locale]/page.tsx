import { Section } from '@/components/common/Section'
import { AboutMe } from '@/components/layout/AboutMe'
import { Contact } from '@/components/layout/Contact'
import { Experiencies } from '@/components/layout/Experiences'
import { Header } from '@/components/layout/Header'
import { Informations } from '@/components/layout/Informations'
import { MyCareer } from '@/components/layout/MyCareer'
import { Portfolio } from '@/components/layout/Portfolio'
import { useTranslations } from 'next-intl'
import { FaFolder, FaInfoCircle } from 'react-icons/fa'
import { GiTechnoHeart } from 'react-icons/gi'
import { IoShareSocial } from 'react-icons/io5'

export default function Home() {
  const t = useTranslations('sections')
  return (
    <>
      <header className="bg-purple-dark pb-6 pt-10 md:pb-10 lg:pb-20">
        <div className="container mx-auto">
          <Header />
        </div>
      </header>

      <Section
        id="about-me"
        title={t('about-me.title')}
        subtitle={t('about-me.subtitle')}
        icon={<FaInfoCircle />}
        lightMode
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AboutMe />
      </Section>

      <Section
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        noSectionHeader
      >
        <Informations />
      </Section>

      <Section
        id="technologies"
        title={t('technologies.title')}
        subtitle={t('technologies.subtitle')}
        center
        icon={<GiTechnoHeart />}
        lightMode
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Experiencies />
      </Section>

      <Section
        id="portfolio"
        title={t('portfolio.title')}
        subtitle={t('portfolio.subtitle')}
        icon={<FaFolder />}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Portfolio />
      </Section>

      <Section
        id="my-career"
        noSectionHeader
        lightMode
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <MyCareer />
      </Section>

      {/* <Section title="Meus Clientes" subtitle="Depoimentos">
        <MyClients />
      </Section> */}

      <Section
        id="contact"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        icon={<IoShareSocial />}
        center
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Contact />
      </Section>
    </>
  )
}
