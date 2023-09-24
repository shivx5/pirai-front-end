import React, { useState } from 'react'
import './info.css'
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Information() {
        const navigate =useNavigate();
        const[updateDetails,setUpdateDetails]=useState({firstName:"",lastName:"",city:"",country:"",state:"",address:""})
        function enterupdateDetails(event)
        {
          const{name,value}=event.target;

          setUpdateDetails((pre)=>
          {
                return {
                        ...pre,
                        [name]:value
                }
          })
        }
        function submitForm(event)
        {
                event.preventDefault();
                console.log(updateDetails)
                axios.post('/updateUser',updateDetails).then((res)=>
                {
                        if(res.data=="updated")
                        {
                                navigate('/view'); 
                        }
                }).catch((err)=>
                {
                        console.log(err);
                        console.log("invalid user entry point");
                })
        }
  return (
    <div className='info'>
        <span>Update Your Details</span>
      <div className='info-div'>
           <form className='i-form' onSubmit={submitForm}>
                <input type='text' placeholder='FirstName' name='firstName' onChange={enterupdateDetails}  required/>
                <input type='text' placeholder='LastName' name='lastName' onChange={enterupdateDetails} required/>
                <input placeholder='Address' name='city' onChange={enterupdateDetails} required/>
                <input placeholder='state' name='country' onChange={enterupdateDetails} required/>
                <input placeholder='country' name='state' onChange={enterupdateDetails} required/>
                <input placeholder='city' name='address' onChange={enterupdateDetails} required/>
                <input style={{backgroundColor:"green",width:"30%"}} type="submit" value="update" className='submit'  required/>

           </form>
      </div>
    </div>
  )
}
