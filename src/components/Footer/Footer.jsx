import React from 'react'
import './Footer.css'
import pirai from '../../assests/pirai.png'
import web from '../../assests/web1.png';
import mobile from '../../assests/phone1.png';
import mail from '../../assests/gmail1.png';



export default function Footer() {
  return (
    <div className='Footer'>
      <img src={pirai} ></img>
      <div className='footer-groups'>
        <div className='flex-each-groups'>
                <span>Company</span>
                <span>Home</span>
                <span>About us</span>
                <span>Services</span>
                <span>Industries</span>

        </div>
               
        <div className='flex-each-groups justify-content-center'>
                 <span> Services</span>
                 <span>DevOps </span>
                 <span>Cloud </span>
                 <span>Quality </span>
                 <span>Application </span>


        </div>
        <div className='flex-each-groups'>

               <span>Industries</span>
               <span>Banking</span>
               <span>Retail</span>
               <span>Engineering</span>
               <span>TeleCom</span>


        </div>
      </div>
      <div className='icons'>
          <span>Follow Us on</span>
          <a href='https://piraiinfo.com/' target='_blank'>
          <img src={web} height='50px'></img>
          </a>
          <a>
          <img src={mobile}></img>
          </a>
         <img src={mail}></img>


      </div>
    </div>
  )
}
