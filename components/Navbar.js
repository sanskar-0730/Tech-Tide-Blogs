import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container'>

      <div className="logoAndTitle">
        <Image className='logo' width={60} height={60} src={logo} alt="Logo" />
        <h1 className='title'>Tech Tide Blogs</h1>
      </div>

      <div className="navbar">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </div>
    </div>
  )
}

export default Navbar