import React from 'react'
import { Link } from 'react-router-dom'

function BottomSign() {
    return (
        <div className='h-fit bg-purple-800 border-t-2 border-purple-500 text-neutral-200 flex justify-between'>
            <div className='text-2xl py-8 pl-24'>
                <p>Coos Library</p>
            </div>
            <div className='flex justify-between w-fit py-6 px-16 space-x-3'>
                <Link to="/login" className='bg-black h-fit px-8 py-2 text-white rounded-xl shadow-2xl hover:bg-gray-900'>Sign in</Link>
                <Link to="/help" className='bg-white h-fit px-8 py-2 text-black rounded-xl shadow-2xl hover:bg-neutral-300'>Contact Us</Link>
            </div>
        </div>
    )
}

export default BottomSign