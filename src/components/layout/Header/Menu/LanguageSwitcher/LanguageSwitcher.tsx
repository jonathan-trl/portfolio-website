import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, useTransition } from 'react'
import { IoLanguage } from 'react-icons/io5'

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleSelectLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`)
    })
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative select-none" ref={modalRef}>
      <IoLanguage
        className="cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}
        size={20}
      />
      <div
        className={`absolute top-9 w-max ${
          isModalOpen ? 'flex' : 'hidden'
        } flex-col p-2 z-50 rounded-md bg-white`}
      >
        <button
          className="bg-white text-purple-dark mb-3 mt-2"
          onClick={() => handleSelectLanguage('pt-br')}
          disabled={isPending}
        >
          <Image
            src={'/images/flags/brazil.png'}
            width={30}
            height={30}
            alt="brazil flag"
          />
        </button>
        <hr className="border-black" />
        <button
          className="bg-white text-purple-dark mt-3 mb-2"
          onClick={() => handleSelectLanguage('en')}
          disabled={isPending}
        >
          <Image
            src={'/images/flags/eua.png'}
            width={30}
            height={30}
            alt="eua flag"
          />
        </button>
      </div>
    </div>
  )
}
