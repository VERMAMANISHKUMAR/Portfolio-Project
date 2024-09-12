import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav-left'>
        <div className='nav-name'>My Portfolio</div>
        <Toggle />
      </div>

      <div className='nav-right'>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} to='Services' smooth={true}>
              Services
            </Link>
          </li>
          <li>
            <Link spy={true} to='Experience' smooth={true}>
              Experience
            </Link>
          </li>
          <li>
            <Link spy={true} to='Portfolio' smooth={true}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link spy={true} to='Testimonials' smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
            <Link spy={true} to='contact-form' smooth={true}>
            <button className='button newadd'>Contact</button>
            </Link>
      </div>
    </div>
  )
}

export default Navbar
