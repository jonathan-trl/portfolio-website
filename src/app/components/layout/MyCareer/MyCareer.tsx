'use client'
import { careerExperiencesItems } from '@/app/config/careerExperiencesItems'
import { useState } from 'react'
import { FaSuitcase } from 'react-icons/fa'
import { LuCalendarClock } from 'react-icons/lu'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { MotionEffects } from '../../common/MotionEffects'
import { SectionHeader } from '../../common/SectionHeader'

export const MyCareer = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(1)

  const handleClick = (companyId: number) => {
    setSelectedCompanyId(companyId)
  }
  return (
    <div className="grid grid-cols-1 g md:grid-cols-3 md:gap-4">
      <div className="flex flex-col gap-1 md:gap-2">
        <SectionHeader
          title="Minha Carreira"
          subtitle="Experiências"
          lightMode
          icon={<FaSuitcase />}
          centerOnMobile
        />
        <div className="flex flex-col md:pl-12 gap-4">
          {careerExperiencesItems.map((experience) => (
            <button
              key={experience.id}
              onClick={() => handleClick(experience.id)}
              className={`flex items-center justify-center md:justify-start gap-3 text-xl md:text-lg lg:text-2xl hover:scale-105 transition-transform ${
                selectedCompanyId === experience.id
                  ? 'font-bold text-gray-primary dark:text-white'
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
      <div className="mt-6 md:mt-0 md:ml-9 max-w-[500px] md:max-w-[700px] mx-auto md:col-span-2">
        {selectedCompanyId && (
          <>
            {careerExperiencesItems.map(
              (experience) =>
                experience.id === selectedCompanyId && (
                  <MotionEffects
                    key={experience.id}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-start text-gray-primary dark:text-white"
                  >
                    <p className="font-extrabold text-lg lg:text-2xl mb-2 font-plus-jakarta-sans">
                      {experience.position}
                    </p>

                    <p className="relative flex items-center justify-center md:justify-start gap-2 overflow-hidden font-semibold text-lg lg:text-2xl mb-2">
                      <span>
                        <LuCalendarClock className="text-purple-dark dark:text-white" />
                      </span>
                      <span>{experience.time_period}</span>
                    </p>

                    <ul className="list-disc md:px-0 text-start">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          className="font-medium text-base lg:text-lg mt-2 font-plus-jakarta-sans"
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
