import React from 'react'
import Layer from "../assets/Layer 2.png"
import Email from "../assets/Email campaign-pana (1) 1.png"

export default function header() {
  return (
    <div className='w-full bg-[#0B0E15] h-[988px]'>
        <div className='flex justify-between p-4 ml-2'>
            <img src={Layer}/>
            <div className='text-[#FFFFFF] pt-3'>
            <button className='bg-[#0070E7] py-2 px-5 rounded-xl'>Talk to us</button>
            </div>
        </div>
        <div className='text-[#FFFFFF] text-center pt-4 text-7xl font-bold'>
            <p>
                Grow Your Bussiness <br/> with Email Automation
            </p>
        </div>
        <div className='mx-auto flex justify-center pt-24'>
            <img src={Email}/>
        </div>
        <div className=' text-white pt-10 flex justify-center'>
            <button className='bg-[#0070E7] rounded-xl px-9 py-3 '>Get Started</button>
        </div>
    </div>
  )
}
