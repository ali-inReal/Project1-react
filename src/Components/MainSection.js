import React from 'react'
import "./MainSection.css"
import down from "./down.png"
import image from "./comp.png"
import ArrowCircleDownRoundedIcon  from '@mui/icons-material/ArrowCircleDownRounded';
export default function MainSection() {
  return (
    <div>
        <div className='SecondaryContainer'>
        <div className="container3">
            <h1>CYBER SECURITY</h1>
            <div className='heading3'>
            <h3>is much more than a matter of information technology.</h3>
            </div>
        <button>Get Started</button>   
        </div>
        <img src={image}/>
        </div>
    <div className="last">
    <button id="lastButton">Drop Down To View More</button>
    <img src={down}/>
    
    </div>
    </div>
  );
}
