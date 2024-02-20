import { FaFolder, FaInfoCircle } from 'react-icons/fa'
import { GiTechnoHeart } from 'react-icons/gi'
import { IoShareSocial } from 'react-icons/io5'
import { Section } from './components/common/Section'
import { AboutMe } from './components/layout/AboutMe'
import { Contact } from './components/layout/Contact'
import { Experiencies } from './components/layout/Experiences'
import { Header } from './components/layout/Header'
import { Informations } from './components/layout/Informations'
import { MyCareer } from './components/layout/MyCareer'
import { Portfolio } from './components/layout/Portfolio'

export default function Home() {
  return (
    <>
      <header className="md:pb-10 lg:pb-20 pb-6 bg-purple-dark">
        <div className="container mx-auto">
          <Header />
        </div>
      </header>

      <Section
        id="about-me"
        title="Sobre mim!"
        subtitle="Muito prazer..."
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
        title="Experiências"
        subtitle="Tecnologias e habilidades"
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
        title="Portfólio"
        subtitle="Trabalhos e projetos"
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
        title="Gostou?"
        subtitle="Entre em contato!"
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
