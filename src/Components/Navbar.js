import React from 'react'
import logo from "./logo.svg"
import "./Navbar.css"
export default function Navbar() {
  return (
    <div class="navbar">
    <img src={logo}/>
    <div class="links">
   <button className='norm'>About</button>
   <button className='norm'>How it Works</button>
   <button className='norm'>Pricing</button>
   <button className='norm'>Solution</button>
   <button className='norm'>Features</button>
   </div>

   <div>
       <button className='norm'>Log in</button>
       <button className='register'>Register</button>
   </div>
    </div>
  )
}
