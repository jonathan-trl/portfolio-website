'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const MyPicture = () => {
  return (
    <motion.div
      className="relative h-[190px] w-[190px] md:h-96 md:w-96"
      animate={{
        y: [-3, 3, -3],
        transition: { duration: 3, repeat: Infinity },
      }}
    >
      <Image
        src="/images/me.jpg"
        alt="Logo"
        layout="fill"
        loading="lazy"
        className="info-card rounded-full border-[6px] border-solid border-transparent object-cover"
      />
    </motion.div>
  )
}
