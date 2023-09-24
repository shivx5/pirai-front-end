import React from 'react'
import './Industries.css'
import Card from '../Card/Card'
export default function Industries() {
  return (
    <div className='industries' id="industries">
      <div className='i-content'>
      <h2>Our Industries</h2>
      <h4>Lead Your Industry With Our Tailor-made IT Solutions</h4>
      <p>We go beyond offering innovative solutions. We tailor our offerings based on industry-specific insights. Our service extends across diverse sectors — retail, banking, engineering, telecom, and high technology. We unlock exciting possibilities for your business, empowering you to surpass industry expectations.</p>
      <button className='btn btn-outline-danger p-2'>Boost Your Growth  -&gt;</button>
      </div>
      <div className='i-data d-flex w-75'>
        <div className='i-data-l d-flex '>
                  <span>Retail</span>
                  <span>Banking</span>
                  <span>Engineering</span>
                  <span>Telecom</span>
                  <span>High Tech</span>
        </div>
        <div className='Cards4'>
               <Card title="Overview" desc="Pirai Infotech’s innovative IT solutions can help you stay at the forefront of the 
               rapidly evolving telecom industry. Harness the power of next-generation networks, enable seamless connectivity, and deliver exceptional customer experiences."  enablebutton={true} cname="Cards4" btname="know more  -&gt;"/>
        </div>
      </div>
    </div>
  )
}
