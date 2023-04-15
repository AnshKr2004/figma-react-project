import React from 'react'
import Asset from "../assets/Asset 5 1.png"

export default function hero() {
  return (
    <div className='bg-[#1C232B] w-full h-[800px]'>
    <div className='float-right pt-16'>
        <img src={Asset}/>
    </div>
    <div className='pt-11 pl-20 text-6xl'>
        <p className=' text-white'>AI<span className='text-[#0070E7]'>framework</span></p>
    </div>
    <div className='text-white pt-11 pl-16 text-xl'>
        <p className='border-[#E0ECFF] border-l-2 pl-6'>
            <span className='pb-3 font-bold'>Personalisation</span><br/>The advanced intelligent system assists in<br/> reaching out to customers and increasing<br/> conversion funnel.
        </p>
        <div className=' pt-16'>
        <p className='border-[#E0ECFF] border-l-2 pl-6'>
            <span className='pb-3 font-bold'>Efficiency</span><br/>Our data models help improve the content.<br/> Real-time delivery insights are monitored<br/> using AI and provide meaningful actions.
        </p>
        </div>
        <div className=' pt-16'>
        <p className='border-[#E0ECFF] border-l-2 pl-6'>
            <span className='pb-3 font-bold'>Automation</span><br/>Send email at scale using code written in<br/> your preferred programming language, such<br/> as Python, Java, or Curl.
        </p>
        </div>
    </div> 
    </div>
  )
}
