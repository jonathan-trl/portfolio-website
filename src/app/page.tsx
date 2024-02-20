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
      <section className="md:py-16 lg:py-20 py-10" id="about-me">
        <AboutMe />
      </section>
      <section className="md:py-16 lg:py-20 py-10" id="technologies">
        <Experiencies />
      </section>
      {/* <section className="md:py-16 lg:py-20 py-10" id="portfolio">
        <Portfolio />
      </section> */}
      <section className="md:py-16 lg:py-20 py-10" id="my-career">
        <MyCareer />
      </section>
      {/* <section className="md:py-20 py-10">
        <MyClients />
      </section> */}
      <section className="md:py-16 lg:py-20 py-10" id="contact">
        <Contact />
      </section>
    </>
  )
}
