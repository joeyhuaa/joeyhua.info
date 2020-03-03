import React from 'react'
import './index.css'

// smooth scroll! 
import { Link, animateScroll as scroll } from 'react-scroll' 

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section2'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Design
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section3'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Music
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section4'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Edits
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

// make navbar sticky 
// figure out why navbar elements aren't centered...
