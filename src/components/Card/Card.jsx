import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
<div className={`card ${props.cname} `}>
<div className='card-title c-h2'>
<h5 >{props.title}</h5>
{/* <span className='icons justify-content-left'>{props.icon}</span> */}

</div>
       <div className='card-body'>
       <p>{props.desc}</p>
       </div>
       <div>
        {props.enablebutton && <button className='btn btn-outline-danger butn'>{props.btname}</button>}
       </div>
</div>


  )
}

