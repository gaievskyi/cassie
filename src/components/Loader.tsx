import React from 'react'
import { motion, Variants } from 'framer-motion'

import Image from './Image'

const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
      restDelta: 0.001,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      ease: [0.4, 0.01, 0, 0.95],
      duration: 1,
      restDelta: 0.001,
    },
  },
  exit: {
    opacity: 0,
    y: -500,
    transition: {
      type: 'spring',
      duration: 0.5,
      restDelta: 0.001,
    },
  },
}

const itemMain = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      ease: [0.6, 0.01, 0.1, 0.99],
      restDelta: 0.001,
    },
  },
}

interface Props {
  setLoading: (x: boolean) => void
}

interface ImageBlockProps {
  variants: Variants
  id: string
  posX?: string
  posY?: string
}

const Loader: React.FC<Props> = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src="images/image-2.jpg" />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={`images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        // src={import.meta.env.PUBLIC_URL + `/images/${id}.webp`}
        // fallback={import.meta.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  )
}
export default Loader
