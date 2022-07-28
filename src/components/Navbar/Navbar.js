import React from 'react'
import { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className='Navbar'>
        <div className='nav-logo'>DevLHB</div>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
            <a href="/">Contact</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
        </div>
    </div>
  )
}

export default Navbar