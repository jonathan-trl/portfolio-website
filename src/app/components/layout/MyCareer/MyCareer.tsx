'use client'
import { careerExperiencesItems } from '@/app/config/careerExperiencesItems'
import { useState } from 'react'
import { FaSuitcase } from 'react-icons/fa'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { MotionEffects } from '../../common/MotionEffects'
import { SectionHeader } from '../../common/SectionHeader'

export const MyCareer = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(1)

  const handleClick = (companyId: number) => {
    setSelectedCompanyId(companyId)
  }
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-2 flex-col md:flex-row md:gap-4">
      <div className="">
        <SectionHeader
          title="Minha Carreira"
          subtitle="Experiências"
          center
          icon={<FaSuitcase />}
        />
        <div className="flex flex-col gap-4">
          {careerExperiencesItems.map((experience) => (
            <button
              key={experience.id}
              onClick={() => handleClick(experience.id)}
              className={`flex justify-center items-center gap-3 text-xl lg:text-2xl hover:scale-105 transition-transform ${
                selectedCompanyId === experience.id
                  ? 'font-bold text-white'
                  : 'font-normal text-zinc-400'
              }`}
            >
              <span>{experience.company}</span>
              {selectedCompanyId === experience.id ? (
                <PiEye />
              ) : (
                <PiEyeClosed />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 xl:col-span-1 mt-6 md:mt-0 md:ml-9 max-w-[700px]">
        {selectedCompanyId && (
          <>
            {careerExperiencesItems.map(
              (experience) =>
                experience.id === selectedCompanyId && (
                  <MotionEffects
                    key={experience.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center md:text-start"
                  >
                    <p className="font-extrabold text-lg lg:text-2xl mb-2">
                      {experience.position}
                    </p>

                    <p className="relative overflow-hidden font-semibold text-lg lg:text-2xl mb-2">
                      {experience.time_period}
                    </p>

                    <ul className="list-disc gap-2 pl-8 md:px-0 md:pl-5 text-start">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          className="font-medium text-base lg:text-lg mt-2"
                          key={responsibility.id}
                        >
                          {responsibility.description}
                        </li>
                      ))}
                    </ul>
                  </MotionEffects>
                )
            )}
          </>
        )}
      </div>
    </div>
  )
}
