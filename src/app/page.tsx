import { Section } from './components/common/Section'
import { AboutMe } from './components/layout/AboutMe'
import { Contact } from './components/layout/Contact'
import { Experiencies } from './components/layout/Experiences'
import { Header } from './components/layout/Header'
import { MyCareer } from './components/layout/MyCareer'

export default function Home() {
  return (
    <>
      <header className="md:pb-10 lg:pb-20 pb-6">
        <Header />
      </header>
      <Section
        id="about-me"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AboutMe />
      </Section>
      <Section
        id="technologies"
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Experiencies />
      </Section>
      {/* <section className="md:py-16 lg:py-20 py-10" id="portfolio">
        <Portfolio />
      </section> */}
      <Section
        id="my-career"
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <MyCareer />
      </Section>
      {/* <section className="md:py-20 py-10">
        <MyClients />
      </section> */}
      <Section
        id="contact"
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
