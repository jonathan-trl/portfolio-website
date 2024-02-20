import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import { InfoCard } from '../../common/InfoCard'
import { SectionHeader } from '../../common/SectionHeader'

export const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2">
      <div className="mb-16 2xl:mb-0">
        <SectionHeader
          title="Sobre mim!"
          subtitle="Muito prazer..."
          icon={<FaInfoCircle />}
        />
        <div className="text-base font-normal 2xl:pr-12">
          <div>
            Sou um Desenvolvedor Front End experiente em auxiliar empresas a
            alcançarem seus objetivos, entregando soluções de software de alta
            qualidade. <br></br>Possuo habilidades em React, React Hooks,
            Next.js, Bootstrap, Scss, TailwindCSS, TypeScript e testes
            unitários, além de experiência em controle de versão com Git.
          </div>
          <div className="mt-4">
            Estou comprometido em criar experiências interativas e responsivas
            para os usuários, buscando constantemente aprender e aplicar as
            melhores práticas para entregar soluções eficientes.
          </div>
          <div className="mt-4">
            Ansioso para contribuir para projetos desafiadores e colaborar com
            equipes talentosas.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 justify-items-center gap-16">
        <InfoCard
          firstText="3 anos como"
          secondText="Programador"
          icon={
            <Image
              width={100}
              height={100}
              src={'/images/about-me/icon4.svg'}
              alt=""
            />
          }
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
            />
          }
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
            />
          }
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
            />
          }
        />
      </div>
    </div>
  )
}
