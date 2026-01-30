import React from 'react'
import Logo from './Logo'
import { Link } from "react-router-dom"

function NavBar() {
  const NavList = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Gallery", href: "/gallery" }
  ]

  const NavMenu = NavList.map((item, index) =>
    <Link key={index} to={item.href}><div className='py-2 px-1 hover:text-blue-500 hover:font-bold'><p>{item.title}</p></div></Link>
  )

  return (
    <>
      <div className='flex p-2 gap-2 items-center bg-slate-100'>
        <Logo />
        <div className="flex gap-2">
          {NavMenu}
        </div>
      </div>
    </>
  )
}

export default NavBar
