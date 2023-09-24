import React from 'react'
import pirai from '../../../assests/pirai.png'
import web from '../../../assests/web1.png'
import mobile from '../../../assests/phone1.png'
import mail from '../../../assests/gmail1.png'
import './LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import brain from '../../../assests/brain.png'
import {useNavigate } from 'react-router-dom';




export default function LandingPage() {
  const navigate =useNavigate();
  return (
     
      <div className='.landingpage'>

      
       <div className='l-s'>
            <h4 onClick={()=>{navigate('/login')}}>Login</h4>
            <h4 onClick={()=>{navigate('/login')}}>Signup</h4>
       </div>

        <div className='landingpage'>
         <div className='l-content'> 
            <img src={pirai}></img>
           <span>Out Now</span>
           <span>Place of Excellence</span>
           <hr></hr>

             <div>
                <img src={mail}></img>
                <img src={mobile}></img>
                <img src={web}></img>

            </div>
        </div>
        <div className='l-image'>
             <img style={{width:"700px"}} src={brain}></img>
        </div>
        </div>
        </div>
      
    
  )
}
