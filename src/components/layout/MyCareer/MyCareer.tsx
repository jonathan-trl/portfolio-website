'use client'
import { careerExperiencesItems } from '@/config/careerExperiencesItems'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { FaSuitcase } from 'react-icons/fa'
import { LuCalendarClock } from 'react-icons/lu'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { MotionEffects } from '../../common/MotionEffects'
import { SectionHeader } from '../../common/SectionHeader'

export const MyCareer = () => {
  const t = useTranslations('sections')
  const t_experiences = useTranslations('my-career.experiences')
  const [selectedCompanyId, setSelectedCompanyId] = useState(1)

  const handleClick = (companyId: number) => {
    setSelectedCompanyId(companyId)
  }
  return (
    <div className="grid md:grid-cols-8 xl:grid-cols-5">
      <div className="flex flex-col gap-1 md:col-span-3 md:gap-2 xl:col-span-2">
        <SectionHeader
          title={t('my-career.title')}
          subtitle={t('my-career.subtitle')}
          lightMode
          icon={<FaSuitcase />}
          centerOnMobile
        />
        <div className="flex flex-col gap-4 md:pl-12">
          {careerExperiencesItems.map((experience) => (
            <button
              key={experience.id}
              onClick={() => handleClick(experience.id)}
              className={`flex items-center justify-center gap-3 text-xl transition-transform hover:scale-105 md:justify-start md:text-lg lg:text-2xl ${
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
      <div className="mt-6 md:col-span-5 md:ml-8 md:mt-0 xl:col-span-3">
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
                    className="text-center text-gray-primary dark:text-white md:text-start"
                  >
                    <p className="mb-2 font-plus-jakarta-sans text-lg font-extrabold lg:text-2xl">
                      {t_experiences(`${experience.slug}.position`)}
                    </p>

                    <p className="relative mb-2 flex items-center justify-center gap-2 overflow-hidden text-lg font-semibold md:justify-start lg:text-2xl">
                      <span>
                        <LuCalendarClock className="text-purple-dark dark:text-white" />
                      </span>
                      <span>
                        {t_experiences(`${experience.slug}.time_period`)}
                      </span>
                    </p>

                    <ul className="list-disc pl-2 text-start md:pl-0">
                      {t_experiences.rich(
                        `${experience.slug}.responsibilities`,
                        {
                          li: (responsabilities) => (
                            <li className="mt-2 font-plus-jakarta-sans text-base font-medium lg:text-lg">
                              {responsabilities}
                            </li>
                          ),
                        },
                      )}
                    </ul>
                  </MotionEffects>
                ),
            )}
          </>
        )}
      </div>
    </div>
  )
}
