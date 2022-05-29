import React from 'react'
import "./MainComp2.css"
export default function MainComp2() {
  return (
    <div className='container2'>
        <div className="heading">
            <h1 id="head">The Fastest Growing Platform</h1>
        </div>
        <div style={{
          display:"flex",flexDirection:"column",alignItems:"center",height:"60%",width:"100%"
        }} 
        >
            <div className='whitewala'
            >
             <div className='waisay' id="p1">
               <p>Privacy like eating and breathing is one of lifes basic requirements.</p></div>
           
             <div className='waisay' id="p2">
               <p>Security used to be an inconvenience sometimes, but now it's a necessity all the time.</p>
             </div>  </div>
        </div>
    </div>
  )
}
