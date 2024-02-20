import { CareerExperienceItem } from '../types/CareerExperience'

export const careerExperiencesItems: CareerExperienceItem[] = [
  {
    id: 1,
    company: 'LOGINFO',
    position: 'Desenvolvedor FullStack',
    time_period: 'Setembro 2023 - Presente',
    responsibilities: [
      {
        id: 1,
        description:
          'Desenvolvimento e suporte de aplicação web utilizando HTML, CSS, JavaScript e CakePHP.',
      },
    ],
  },
  {
    id: 2,
    company: 'CTC Tech',
    position: 'Desenvolvedor Front-end JR II',
    time_period: 'Setembro 2021 - Abril 2023',
    responsibilities: [
      {
        id: 1,
        description:
          'Desenvolvimento de aplicações web utilizando JavaScript, PHP e React.',
      },
      {
        id: 2,
        description:
          'Responsável pelo desenvolvimento front-end de um sistema de cálculo de pedágios em ReactJS, otimizando o processo e proporcionando maior eficiência para os clientes.',
      },
    ],
  },
  {
    id: 3,
    company: 'Click Code',
    position: 'Desenvolvedor WordPress Freelancer',
    time_period: 'Fevereiro 2021 - Junho 2021',
    responsibilities: [
      {
        id: 1,
        description:
          'Criação de Landing Pages com customização de temas e plugins do WordPress de acordo com as necessidades dos clientes. Isso resultou em páginas atrativas e funcionais, aumentando a taxa de conversão e o engajamento do público-alvo.',
      },
    ],
  },

  {
    id: 4,
    company: 'Next Tecnologia',
    position: 'Estagiário e Desenvolvedor Front-end',
    time_period: 'Novembro 2020 - Setembro 2021',
    responsibilities: [
      {
        id: 1,
        description:
          'Desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript, Laravel Framework e WordPress.',
      },
      {
        id: 2,
        description:
          'Liderei o desenvolvimento do site institucional da empresa, sendo responsável pelo front end e back end.',
      },
      {
        id: 3,
        description:
          'Responsável pelo desenvolvimento completo de um sistema de estudos utilizando Laravel. Desenvolvi tanto o back end quanto o front end, oferecendo aos usuários uma plataforma de cursos robusta e intuitiva.',
      },
    ],
  },
  {
    id: 5,
    company: 'TRIAL',
    position: 'Desenvolvedor Front-end Freelancer',
    time_period: 'Dezembro 2019 - Setembro 2021',
    responsibilities: [
      {
        id: 1,
        description:
          'Desenvolvimento de aplicações web utilizando JavaScript, ReactJS, Laravel Framework e WordPress.',
      },
      {
        id: 2,
        description:
          'Liderança no desenvolvimento de um e-commerce em WordPress para venda de camisas de futebol. Contribui para o sucesso do e-commerce, proporcionando uma experiência de compra intuitiva e atraente, resultando em significativa quantidade de vendas.',
      },
    ],
  },
]
