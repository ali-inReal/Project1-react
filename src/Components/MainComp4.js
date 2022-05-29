import React from 'react'
import "./MainComp4.css"
import links from "./social_links.svg"
export default function MainComp4() {
  return (
    <div id="containers4">
        <h1 className="hh">Social Media Links</h1>
        <h3 className='hh'>Feel Free to Contact Us</h3>
        <img src={links} style={{
            margin:"30px"
        }} />
        <button className='lastButton'>Get Started</button>
    </div>
  )
}
