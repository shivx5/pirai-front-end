import React from 'react'
import './Future.css'
import icons from'../../assests/icons.png'
export default function Future() {
  return (
    <div className='future d-flex gap-5 flex-column'>
        <h2 className='text-center'>Our Tech Stack for a<span className='text-danger'>Smarter Future </span> </h2>
        <div className='f-topic d-flex justify-content-center'>
                <h4>DevOps Service</h4>
                <h4>Application Service</h4>
                <h4>Cloud Enablement</h4>
                <h4>Quality Engineering</h4>

        </div>
        <img src={icons}></img>
    </div>
  )
}
