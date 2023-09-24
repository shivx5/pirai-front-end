import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Navigate, Outlet, useNavigate } from 'react-router';


export default function LoginRoutes() {
       
        // const navigate =useNavigate();
        const[userpresent,SetUserPresent]=useState();

        const token=localStorage.getItem("Key");

        // console.log(token + "from login routes----------------");

        useEffect(()=>
        {

                if(localStorage.getItem("Key"))
          {
               
               SetUserPresent(true);
         }
        else{
                alert("user not preset: try register and login");
                SetUserPresent(false);
        }

        },[])
        

//   return (
// //    userpresent ==null ?<div className='loader'>null</div>:userpresent?<Navigate to="/info"/>:<Outlet/>
//   )
}
