import React from 'react'
import './Service.css'
import Card from '../Card/Card'
const bigcard=[{title:"Ignite Innovation, Efficiency, and Scalability with Our Cloud Services",desc:"We offer everything from cutting-edge software development and secure cloud solutions to robust cybersecurity and insightful data analytics. Experience the convenience of accessing these integrated solutions from a single source. With experience over 50,000+ hours, we know what it takes to deliver transformative solutions for your business."}]
const cards=[{title:"DevOps Service",desc:"Respond promptly to market demands and deliver value to your customers with our advanced DevOps services. We help you accelerate your software development and streamline your software delivery. Achieve faster time-to-market, increase team efficiency, and maintain premier product quality"},
{title:"Cloud Enablement",desc:"Experience the agility, reliability, and security of our advanced cloud solutions to adapt to business needs and scale resources. Our tailored approach, comprehensive expertise, latest technologies, and partnerships with leading cloud vendors enable you to focus on innovation and growth."},
{title:"Application Service",desc:"We offer comprehensive support and expertise in optimizing software applications. With our Application Services, you can streamline workflows, stay at the forefront of technological advancements, and deliver engaging user experiences. We empower you to gain a competitive edge in the market."},
{title:"Quality Engineering",desc:"Supercharge your software development process. Our team proactively identifies and fixes defects to ensure your software applications are reliable. With our agile methodologies and advanced solutions, fast-track your product launch and deliver innovative solutions faster than ever before."}]
export default function Service() {
  return (
    <div className='services  '>
<h3 className='text-center'>Services</h3>

        <div className='d-flex align-items-left  w-100 s-content gap-30 '>           
         
             <Card title="Ignite Innovation, Efficiency, and Scalability with Our Cloud Services" desc="We offer everything from cutting-edge software development and secure cloud solutions to robust cybersecurity and insightful data analytics. Experience the convenience of accessing these integrated solutions from a single source. With experience over 50,000+ hours, we know what it takes to deliver transformative solutions for your business." cname="Cards2" btname="Explore our services  -&gt;" enablebutton={true}/>
          
         
             <div className='S-right align-items-left'>
                 {cards.map((value,index)=>
                        {
                 return <><Card title={value.title} desc={value.desc} btname="learn more  -&gt;" cname="Cards3" enablebutton={true}/></>
      })}
      
        </div>
        </div>
      
     
       

    </div>
  )
}
