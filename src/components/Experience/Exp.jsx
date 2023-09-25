import React from 'react'
import './Exp.css'
import Card from '../Card/Card'



const cards=[{title:"Proven Track Record",desc:"We have delivered 100+ digital transformation solutions across sectors like retail, banking, engineering, telecom, and high technology."},
{title:"Customer-Centric Approach",desc:"We prioritize your unique needs and deliver tailored solutions that go beyond expectations."},
{title:"Long-Term Partnership",desc:"We offer ongoing support and maintenance to ensure your business thrives."}]
export default function Exp() {
  return (
    <div className='  exp'>
        <div className='e-content d-flex text-center jusity-content-center align-items-center flex-column gap-2'>
               <h4 className='text-danger'>Tap Into Our Cloud Expertise for Seamless Digital Experiences</h4>
               <h1 className='e-h1'>Welcome to Pirai Infotech!</h1>
               <p>We are a dynamic global digital transformation organization with over 6 years of experience in the IT industry. Our goal is to empower businesses with our comprehensive end-to-end solutions, advanced engineering capabilities, and extensive industry experience. Pirai Infotech empowers clients across diverse industries with efficient managed services to channel their digital transformation and equip them to be future-ready. Our innovative and passionate team is dedicated to driving your business forward.</p>
               <h4>Experience Excellence with Pirai Infotech</h4>
       </div>
       
       <div className='e-cards justify-content-center mt-10 gap-5'>
        {cards.map((values,index)=>
        {
                return <><Card key={index}  title={values.title} desc={values.desc} cname="Cards" enablebutton={false} icon={values.icon}/></>
        })}

       </div>
       <div className='d-flex justify-content-center mt-10'>
       <button className=' btn font-weight-normal btn-outline-danger'>Know  Us -&gt; </button>
       
       </div>
     
                  
                
                  
    </div>
  )
}
