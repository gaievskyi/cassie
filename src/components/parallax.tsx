import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useLayoutEffect, useRef, useState } from 'react'

type ParallaxProps = {
  children: ReactNode
  offset?: number
  speed?: number
  clampInitial?: boolean
  clampFinal?: boolean
}

export const Parallax = ({ children, offset = 50, speed = 2, clampInitial, clampFinal }: ParallaxProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [clampInitial ? 0 : offset, clampFinal ? 0 : -offset * speed])
  const y = useSpring(yRange, {
    stiffness: 800,
    damping: 100,
    restDelta: 0.001,
  })

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-ignore-next */
        element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
