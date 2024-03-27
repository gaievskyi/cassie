import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface StateProp {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu: React.FC<StateProp> = ({ setMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside: EventListener = (event: Event) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef, setMenuOpen])

  return (
    <>
      <div className="menu-container">
        <motion.div
          ref={menuRef}
          className="menu"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{
            duration: 0.5,
            ease: [0.9, 0.9, 0.9, 0.96],
            type: 'spring',
            stiffness: 500,
            damping: 100,
            restDelta: 0.001,
          }}
        >
          <div className="menu-inner">
            <div className="logo">
              <h2>ca</h2>
              <span>PHOTOGRAPHY</span>
            </div>
            <div className="grid">
              <img src="https://media.istockphoto.com/id/1464666987/photo/beautiful-emotional-woman-with-natural-make-up.jpg?b=1&s=170667a&w=0&k=20&c=3pBli3ApYNyyNc9MXWkXk3ByDOW-_7nnlL6RuhScEwo=" />
              <img src="https://media.istockphoto.com/id/1440458000/photo/young-girl-with-hands-near-skin-face.jpg?b=1&s=170667a&w=0&k=20&c=vXSG4-x3jbQEqD_l9nwpqdWjAMsmcJjHt6LFAQ2vIDc=" />
              <img src="https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.jpg?b=1&s=170667a&w=0&k=20&c=ROYbN_x6cYubTzSW3EzzaL_NCFjMzoXR2XXch9pXUCo=" />
              <img src="https://media.istockphoto.com/id/1377343276/photo/pretty-young-afro-woman.jpg?b=1&s=170667a&w=0&k=20&c=Z-UXLUcC8MfiHr9OMzH79s50pXovz_WZPW-cbiobFnM=" />
              <img src="https://media.istockphoto.com/id/1409084667/photo/brown-hair-beauty-woman-brunette-model-with-shiny-straight-long-hairstyle-hair-care-spa-and.jpg?b=1&s=170667a&w=0&k=20&c=9Pwz2Uwz2WcgD_bfBBeLI6Eef0GS9aqRCrPyqR0j-G4=" />
              <img src="https://media.istockphoto.com/id/1371802936/photo/beautiful-emotional-woman-with-perfect-make-up.jpg?b=1&s=170667a&w=0&k=20&c=Sdiq2RAY1MmqkzH_EEmGI1BzU7k-vKvN7zfep9CEUok=" />
            </div>
            <div className="address">
              <h3>NEW YORK</h3>
              <p>Suton Street 20 East Side, NY</p>
            </div>
            <div className="contact">
              <p>+665 85 356 78</p>
              <p>pr@captura.com</p>
            </div>
            <div className="buttons">
              <span>FB</span>
              <span>TW</span>
              <span>IG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
