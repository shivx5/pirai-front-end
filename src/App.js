import react ,{useState}from 'react';
import axios from 'axios';
import './App.css';
import LoginRoutes from './Routes/LoginRoutes';
import UserRoutes from './Routes/UserRoutes';
import Login from './components/Login/Login';
import ViewInfo from './components/Pages/ViewInfo/ViewInfo';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Information from './components/Pages/PersonalInfo/Information';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Exp from './components/Experience/Exp';
import Service from './components/Services/Service';
import ServicePartner from './components/ServicePartner/ServicePartner';
import Future from './components/Future/Future';
import Industries from './components/Industries/Industries';
import Slider from './components/Slider/Slider';
import UpdateForm from './components/UpdateForm/UpdateForm';
import UpdatedForm from './components/UpdatedForm/UpdatedForm';
import Footer from './components/Footer/Footer';


function App() {
const [enableform,setEnableform]=useState(false);
const [enablebutton,setEnableButton]=useState(false);
const [enableLogin,setEnableLogin]=useState(false);
const[updatedForm,setUpdatedForm]=useState(false);

function toggleUpdatedform()
{
  setUpdatedForm(!updatedForm);
}
function toogleButton()
{
  setEnableButton(!enablebutton);
}
function toggleForm()
{
  setEnableform(true);
  // window.location.reload(load);

}
function toggleLogin()
{
  setEnableLogin(!enableLogin);
}


  axios.defaults.baseURL="http://localhost:8083";
  const token =localStorage.getItem("key");

  if(token) axios.defaults.headers.common["Authorization"]=token;
  else delete axios.defaults.headers.common["Authorization"];

  return (
    <div className="App">
      {/* <LoginRoutes toggleForm={toggleForm}/> */}
      <UserRoutes toggleForm={toggleForm}/>
      {enableLogin && <Login  toggleLogin={toggleLogin}/>}
      <Navbar  enableform={enableform} toggleLogin={toggleLogin}/>
      <Home/>
      <Exp/>
      <Service/>
      <ServicePartner/>
      <Future/>
      <Industries/>
      <Slider/>
     {enableform && <UpdateForm toggleUpdatedform={toggleUpdatedform}/>}
     {updatedForm && <UpdatedForm/>}
     <Footer/>

    </div>
  );
}

export default App;
