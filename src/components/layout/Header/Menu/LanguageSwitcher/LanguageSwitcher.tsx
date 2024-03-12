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
        } z-50 flex-col rounded-md bg-white p-2`}
      >
        <button
          className="mb-3 mt-2 bg-white text-purple-dark"
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
          className="mb-2 mt-3 bg-white text-purple-dark"
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
