import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UpdatedForm.css'
export default function UpdatedForm() {
        const[UpdatedForm,setUpdatedForm]=useState([]);
        const dbResult=[];
        useEffect(()=>
        {
                axios.get('/getupdatedUser').then((res)=>
                {
                     
                        console.log(res.data);
                        dbResult.push(res.data);
                        setUpdatedForm(res.data)
                }).catch((err)=>
                {
                  console.log(err);
                })
        },[])
        console.log(dbResult)
        console.log(UpdatedForm)
        console.log(UpdatedForm.country);
        console.log("updated");
  return (
    <div className='grid-parent 'id='updatedform'>
      <span className='grid-head'>Updated Details</span>
   <div className='grid'>
    <div><span className='grid-head1'>First Name</span></div>
    <div><span className="text-danger">{UpdatedForm.firstName}</span></div>
    <div><span className='grid-head1'>Last Name</span></div>
    <div><span className="text-danger">{UpdatedForm.lastName}</span></div>
    <div><span className='grid-head1'>Email</span></div>
    <div><span className="text-danger">{UpdatedForm.email}</span></div>
    <div><span className='grid-head1'>Phone Number</span></div>
    <div><span className="text-danger">{UpdatedForm.mobilenumber}</span></div>
    <div><span className='grid-head1'>Address</span></div>
    <div><span className="text-danger">{UpdatedForm.address}</span></div>
    <div><span className='grid-head1'>City</span></div>
    <div><span className="text-danger">{UpdatedForm.city}</span></div> 
    <div><span className='grid-head1'>State</span></div>
    <div><span className="text-danger">{UpdatedForm.state}</span></div>
    <div><span className='grid-head1'>Country</span></div>
    <div><span className="text-danger">{UpdatedForm.country}</span></div>
   </div>
   </div>

  )
}
