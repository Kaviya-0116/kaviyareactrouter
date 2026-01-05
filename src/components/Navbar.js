import { NavLink } from "react-router-dom";
import React from 'react'
import "../App.css"

const Navbar = () => {
  return (
    <>
    <nav>
      <NavLink id="n1" to ="/">Home</NavLink>
        <NavLink id="n1" to ="/DataInsert">DataInsert</NavLink>
          <NavLink id="n1" to ="/ContactUs">ContactUs</NavLink>
            <NavLink id="n1" to ="/View">View</NavLink>
              <NavLink id="n1" to ="/Help">Help</NavLink>
              </nav>
    </>
  )
}

export default Navbar
