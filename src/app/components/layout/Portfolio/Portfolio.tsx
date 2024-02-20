import { portfolioItems } from '@/app/config/portfolioItems'
import Image from 'next/image'
import { FaFolder } from 'react-icons/fa'
import { SectionHeader } from '../../common/SectionHeader'

export const Portfolio = () => {
  return (
    <div>
      <SectionHeader
        title="Portfólio"
        subtitle="Trabalhos e projetos"
        icon={<FaFolder />}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-3">
        {portfolioItems.map((item) => (
          <div
            key={item.url}
            className="info-card flex flex-col gap-4 justify-center items-center border-[4px] border-solid border-transparent py-4"
          >
            <Image src={item.url} width={120} height={140} alt="" />
            <span>{item.description}</span>
            <button>Acessar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
