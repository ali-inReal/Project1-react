import "./MainComp5.css"
import React from 'react'
import logo from "./logo_light.svg"
export default function MainComp5() {
  return (
    <div className="container5">
        <div  >
            <h1 style={{
                color:"white"
            }} 
            >Join us on email for</h1>
            <h1 style={{
                color:"black"
            }}
            >more Information</h1>
        </div>
        <buttton className="meraButton">Join Now</buttton>
        <div className="bottom">
            <div className="im">
            <img  src={logo}/>
            </div>
         
         <button className="btn">Privacy Policy</button>
         <button className="btn">Terms And Conditions</button>
         <button className="btn">Contact Us</button>
         <button className="btn">Careers</button>
        </div>
    </div>
  )
}
