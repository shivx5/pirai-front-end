import React from 'react'
import './Slider.css'
import logo1 from '../../assests/logo1.png'
import logo2 from '../../assests/logo2.png'
import logo3 from '../../assests/logo3.png'
import logo4 from '../../assests/logo4.png'
import logo5 from '../../assests/logo5.png'
import logo6 from '../../assests/logo6.png'
import logo7 from '../../assests/logo7.png'
import logo8 from '../../assests/logo8.png'
export default function Slider() {
  return (
    <div className='SliderPage ' >
    <div className='s-head mb-5'>
        <h3 className='text-center'>Our Global Clients</h3>
   </div>
   <div className='Slider d-flex gap-3'>
   <div className='Slider-track'>
                <div className='slide'>
                      <img src={logo1} ></img>
                </div>
                <div className='slide'>
                      <img src={logo2} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo3} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo4} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo5} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo6} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo7} ></img>
                </div> 
                <div className='slide'>
                      <img src={logo8} ></img>
                </div>
        </div>
      
   </div>
       
    </div>
  )
}
