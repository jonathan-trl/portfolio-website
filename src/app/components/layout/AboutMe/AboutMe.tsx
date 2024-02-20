import Image from 'next/image'
import { MotionEffects } from '../../common/MotionEffects'

export const AboutMe = () => {
  return (
    <>
      <MotionEffects
        transition={{ duration: 0.7, ease: 'easeIn' }}
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="text-base font-normal 2xl:pr-12 text-gray-primary dark:text-white">
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
