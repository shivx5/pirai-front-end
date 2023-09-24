import React, { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router';
import "../Login/Login.css"


export default function Signup() {
  // const navigate =useNavigate()
        const[SignupDetails,SetSignupdetails]=useState({username:"" ,mobilenumber:"",email:"",password:""})
       
        function enterDetails(event)
        {
                 const {name,value}=event.target;

                 SetSignupdetails((pre)=>
                 {
                        return {
                                ...pre,
                                [name]:value
                        }
                 })
        }
        function submitform(event)
        {
                event.preventDefault();
                console.log(SignupDetails);

              axios.post("http://localhost:8083/save",SignupDetails).then((res)=>
              {
                    if(res.data!=null)
                    {
                      //  navigate('/login');
                    }
              }).catch((err)=>
              {
                console.log(err);
              })
        }
  return (
    <div className='login'>

      <div>
         <form onSubmit={submitform}>
         <span>Register</span>

         <input type="text" placeholder="name" name='username' onChange={enterDetails}/>
         <input type="text" placeholder="mobile" name='mobilenumber' onChange={enterDetails}/>
         <input type="text" placeholder="email" name='email'onChange={enterDetails}/>
         <input type="text" placeholder="password" name='password'onChange={enterDetails}/>
         <input type="submit" className='button1' value="signup"></input>
         </form>
         <span>Already Register ? </span><span className="register" >Login</span>

         </div>


    </div>
  )
}
