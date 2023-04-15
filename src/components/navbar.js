import React from 'react'
import vector from "../assets/Vector.png"
import Docs from "../assets/Docs.png"
import SignIn from "../assets/SignIn.png"

function navbar() {
  return (
    <div className='w-full bg-[#171A21] p-3 mx-auto justify-between'>
        <div className='text-[white] items-center flex gap-5 mr-4 justify-end'>
            <div className='flex gap-3 mr-4'>
                <img src={vector}/>
                GitHub
            </div>
            <div className='flex gap-3 mr-4'>
                <img src={Docs}/>
                Docs
            </div>
            <div className='flex gap-3 mr-4'>
                <img src={SignIn}/>
                Sign In
            </div>
        </div>
    </div>
  )
}

export default navbar