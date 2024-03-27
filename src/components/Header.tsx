import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from './Menu'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3.4, type: 'spring', stiffness: 100, damping: 30, restDelta: 0.001 }}
    >
      <motion.div
        className="header-inner"
        transition={{ duration: 0.5, delay: 3.5, type: 'spring', stiffness: 100, damping: 30, restDelta: 0.001 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav className="nav">
          <div style={{ marginRight: '2rem' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <span className="logo">Ca</span>
            </Link>
          </div>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Strategy</a>
          </li>
          <li>
            <a href="#">Cases</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </nav>

        <motion.a
          className="contact"
          href="#"
          transition={{ duration: 0.5, delay: 3.5, type: 'spring', stiffness: 100, damping: 30, restDelta: 0.001 }}
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Collaborate &rarr;
        </motion.a>

        <div onClick={() => setMenuOpen(true)} className="hamburger-menu">
          <span />
          <span />
        </div>
      </motion.div>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </motion.div>
  )
}

export default Header
