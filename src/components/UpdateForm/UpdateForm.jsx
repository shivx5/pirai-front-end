import React, { useState } from 'react'
import './UpdateForm.css'
import axios from 'axios';

export default function UpdateForm(props) {
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
                                props.toggleUpdatedform(); 
                        }
                }).catch((err)=>
                {
                        console.log(err);
                        console.log("invalid user entry point");
                })
        }
  return (
    <div className=' updateform ' id='update'> 
                <h2 className='text-center'>Update Form</h2>
                
                <div className='up-group'>
               
               
                       <form onSubmit={submitForm} className='mainform'>
                            
                     
                          <div className=' upform'>
                                <div className='updiv'>
                                <span className='upspan'>First name</span>
                                <input type='text' placeholder='FirstName' name='firstName' onChange={enterupdateDetails}  required/>
                             </div>
                               <div className=' updiv'>
                                <span className='upspan'>Last name</span>
                                <input type='text' placeholder='LastName' name='lastName' onChange={enterupdateDetails} required/>
                             </div> 
                             <div className=' updiv'>
                                <span className='upspan'> City &emsp;&emsp; &nbsp;</span>
                                <input placeholder='city' name='city' onChange={enterupdateDetails} required/>
                              </div>  
                         
                         </div>

                        <div className='upform'> 
                         <div className=' updiv'>
                                <span className='upspan'> Address</span>
                                <input placeholder='Address' name='address' onChange={enterupdateDetails} required/>
                         </div>
                         <div className=' updiv'>
                                <span className='upspan'>  State &emsp;</span>
                                <input placeholder='state' name='state' onChange={enterupdateDetails} required/>
                         </div> 
                         <div className='updiv'>
                                <span className='upspan'>Country</span>
                                <input placeholder='country' name='country' onChange={enterupdateDetails} required/>
                         </div></div> 
                        
                         <input type='submit' className='btn btn-outline-primary' value="update"></input>
   
                </form>
                </div>
  </div>

  )
}
