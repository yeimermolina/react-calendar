import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <header className='NavBar'>
    <nav className='nav'>
      <div className='nav-brand'>Calendar</div>
      <div className='nav-menu'>
        <Link to='/' className="nav-link">Home</Link>
      </div>
    </nav>
  </header>
)

export default NavBar
