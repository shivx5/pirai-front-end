import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Navigate, Outlet } from 'react-router';

export default function UserRoutes(props) {

        const[valid,isValid]=useState();
        

        useEffect(()=>
        {
                if(localStorage.getItem("Key")==null)
                {
                        isValid(false);
                        // alert(" user not found : Try login ")
                        console.log("User not Found Unable to login");
                        return;
                }
                else{
                        axios.interceptors.request.use((request)=>
                        {
                                 const token=localStorage.getItem("Key");
                                request.headers.Authorization=token;
                                 return request;
                          })
                        axios.get("/userPresent").then((res)=>
                        {
                                console.log("receivec final");
                                props.toggleForm();
                               
                        }).catch((err)=>
                        {
                                localStorage.clear();
                                isValid(false);
                        })
                }
                

             
               
        
        },[])
  
}
