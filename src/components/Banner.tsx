import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'

const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAni: Variants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

interface Props {
  title: string
  playMarquee?: boolean
  disabled?: boolean
  variants?: object | null | undefined
}

const Banner: React.FC = () => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title="Captura" />
      <BannerRowCenter title="photography" playMarquee={playMarquee} />
      <BannerRowBottom title="studio" />
    </motion.div>
  )
}

const AnimatedLetters: React.FC<Props> = ({ title, disabled }) => {
  const variants1: Variants | undefined = disabled ? undefined : banner
  const variants2: Variants | undefined = disabled ? undefined : letterAni

  return (
    <motion.span className="row-title" variants={variants1} initial="initial" animate="animate">
      {[...title].map((letter, index) => (
        <motion.span className="row-letter" variants={variants2} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

const BannerRowTop: React.FC<Props> = ({ title }) => {
  return (
    <div className={'banner-row'}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100, damping: 30, restDelta: 0.001 }}
        className="row-col"
      >
        <span className="row-message">
          We are a digital studio specialized in setting up the foundation of your brand and setting you up for success
        </span>
      </motion.div>
    </div>
  )
}

const BannerRowBottom: React.FC<Props> = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
          delay: 0.5,
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }}
        className="scroll"
      >
        <motion.span
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 1.5,
              borderRadius: '50px',
            }}
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{ fill: 'none', stroke: 'white', strokeWidth: '10px' }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{ fill: 'none', stroke: 'white', strokeWidth: '10px' }}
            />
          </svg>
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  )
}

const BannerRowCenter: React.FC<Props> = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee ${playMarquee && 'animate'}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{
          ease: [0.6, 0.01, 0.0, 0.9],
          duration: 1,
          type: 'spring',
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  )
}

export default Banner
