import React from 'react'
import './ServicePartner.css'
import aws from '../../assests/aws.png'
import checkpoint from '../../assests/checkpoint.png'
import redhat from '../../assests/redhat.png'
import vmware from '../../assests/vmware.png'

const images=[{name:"aws"},{name:"checkpoint"},{name:"redhat"},{name:"vmware"}]
export default function ServicePartner() {
  return (
    <div className='servicePartners d-flex flex-column'>
      <h2>Our Service <span className='text-danger'>Partners</span> </h2>
      
      <div className='s-images d-flex  '> 
        <img src={aws}></img>
        <img src={checkpoint}></img>
        <img src={redhat}></img>
        <img src={vmware}></img>
      </div>

    </div>
  )
}
