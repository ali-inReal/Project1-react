import React from 'react'
import "./MainComp3.css"
import company from "./companies.svg"
export default function MainComp3() {
  return (
    <div className='containers3'>
        <h1 id="companyHead">
        We Helped More Than 1000 Companies
        </h1>
        <img src={company} />
    </div>
  )
}
