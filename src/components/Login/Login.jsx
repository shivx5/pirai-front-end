import React, { useEffect, useState } from "react";
import axios from "axios";
import './Login.css';
import {MdOutlineClose} from 'react-icons/md'
import ClipLoader from "react-spinners/ClipLoader";


export default function Login(props) {
  const[SignupDetails,SetSignupdetails]=useState({username:"" ,mobilenumber:"",email:"",password:""})
  const[load,setLoad]=useState(false);

  function toggleLoader()
  {
    setLoad(!load);
  }
  useEffect(()=>
  {
       
        
  },[load])

 
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
  function submitSignUpform(event)
  {
          event.preventDefault();
          console.log(SignupDetails);


        axios.post("http://localhost:8083/save",SignupDetails).then((res)=>
        {
              if(res.data!=null)
              {
                //  navigate('/login');
              
                toggleloginsignin();
              }
        }).catch((err)=>
        {
          console.log(err);
        })

  }
  const[loginsignin,setLoginSign]=useState(false)
  function toggleloginsignin()
  {
    setLoginSign(!loginsignin);
  }
  const [token,setToken]=useState();
        const[logindetails,SetLogindetails]=useState({email:"",password:""})
        function enterLogindetails(event)
        {
                const{name,value}=event.target;
                SetLogindetails((pre)=>
                {
                        return{
                                ...pre,
                                [name]:value
                        }
                })
        }
        function submitLoginform(event)
        {
                event.preventDefault();
                console.log(logindetails);
                toggleLoader();

              axios.post("/login",logindetails).then((res)=>
              {
                 localStorage.setItem("Key",res.data.token);
                    //  console.log(res.data.token);
                    //  setEnableFun(true);
                     setToken(res.data.token);
                     toggleLoader();
                     setInterval(()=>
                                    {
                                      setLoad(false);
                                      window.location.reload();
           
                                    },4000)
                   
                    //  navigate('/view'); set loader 
              }).catch((err)=>
              {
                console.log(err);
              })
        }


  return (
    <div className="login">
    { !loginsignin &&  <><div className='overlay-styles' ></div>
      
        <div className="loignform"> 
        <form onSubmit={submitLoginform} className="d-flex flex-col gap-10 w-75">
        
        <span className="text-center">Login</span>
        <span onClick={()=>{props.toggleLogin()}} className="close-icon" ><MdOutlineClose/></span>
        <input type="email" placeholder="email" name='email'  onChange={enterLogindetails}/>
        <input type="text" placeholder="password" name='password'onChange={enterLogindetails}/>
        <input type="submit" className="btn btn-outline-danger w-25 m-auto" value='login' />
        </form>
        {load && <div>
       <ClipLoader
         color="#364fd6"
         loading={true}
         size={50}
         aria-label="Loading Spinner"
         data-testid="loader"
       /></div> }

        <span>New User ? </span><span className="register" onClick={()=>{toggleloginsignin()}}>Register</span>
         </div></>}

   {loginsignin &&  <><div className='overlay-styles'></div> <div className="loignform">
         <form onSubmit={submitSignUpform}  className="d-flex flex-col gap-10 w-75">
         <span className="text-center">Register</span>
         <input type="text" placeholder="name" name='username' onChange={enterDetails}/>
         <input type="text" placeholder="mobile" name='mobilenumber' onChange={enterDetails}/>
         <input type="text" placeholder="email" name='email'onChange={enterDetails}/>
         <input type="text" placeholder="password" name='password'onChange={enterDetails}/>
         <input type="submit" className='btn btn-outline-danger w-25 m-auto ' value="sign" ></input>
         </form>
         <span>Already Register ? </span><span  className="register" onClick={()=>{toggleloginsignin()}}>Login</span>

        </div></> }

   
     
    </div>
  )
}
