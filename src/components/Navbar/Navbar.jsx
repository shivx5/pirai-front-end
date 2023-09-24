import React,{useState} from 'react'
import './Navbar.css'
import pirai from '../../assests/pirai.png'

export default function Navbar(props) {
  const[enable,setEnable]=useState(false);
  return (
     <div className='container Nav'>

      <div className=' d-flex justify-content-between pt-10 ml-0'>
         <div onClick={()=>{setEnable(!enable)}}>
             <img className='navimg' src={pirai}></img>
         </div>

        <div className='d-flex gap-5 text-primary fontweight nav-1'>
          <span className='btn hovering fontweight'>Home</span>
          <span  className='btn hovering fontweight' onClick={()=>{props.toggleLogin()}}>Login</span>
          {props.enableform && <a href='#update'>
          <span className='btn hovering fontweight'>Update</span>
         </a>}
         <a href='#industries'>
         <span className='btn hovering fontweight'>Industries</span>
         </a>
         <a href='https://port-folio-nine-zeta.vercel.app/' target='_blank'>
          <span className='btn hovering fontweight' >About us</span>
         </a>
          {props.enableform && <span className='btn bg-danger text-light fontweight hovering' onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</span>}

          </div>
         </div>
          

          {enable && <div className='nav-2'>
          <span >Home</span>
          <span  onClick={()=>{props.toggleLogin()}}>Login</span>
          {props.enableform && <a href='#update'>
          <span>Update</span></a>}
          <a href='#industries'>
         <span >Industries</span>
         </a>
         <a href='https://port-folio-nine-zeta.vercel.app/' target='_blank'>
          <span  >About us</span>
          </a>
          {props.enableform && <span onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</span>}   
          </div> }
         
     </div>
  )
}
