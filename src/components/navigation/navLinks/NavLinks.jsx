


import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavLinks.css"

const NavLinks = ({to, children, icon}) => {
  return (
    <NavLink className ="navLink " to={to}>
        <div>
            <span>{icon}</span>
            <span>{children}</span>
        </div>
       
    </NavLink>
  )
}

export default NavLinks
