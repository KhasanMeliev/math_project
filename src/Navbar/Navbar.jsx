import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger  from "../assets/images/hamburger'.png"
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './Navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          math
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <RxHamburgerMenu/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/quizapp">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/filequiz">File Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar