import React from 'react'
import { Link } from 'react-router-dom'

function SectionHelp() {
    return (
        <>
            <div className='flex justify-between px-24 py-24'>
                <div className=' leading-relaxed w-1/2'>
                    <p className='text-5xl text-purple-400 mb-4 '>Need Help!!</p>
                    <p className='text-3xl text-purple-300 '>we are always available for you 24*7</p>
                    <p className='text-lg m-3 pb-16'>you can contact with us through</p>
                    <Link to="https://www.linkedin.com/in/vishesh-b8a2b72a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm" className='w-40 font-bold flex justify-center text-sky-500 hover:bg-sky-200 rounded-xl shadow-sky-300 shadow-md m-4 px-4 py-1'>Linked In</Link>
                    <Link to="https://www.facebook.com" className=' w-40 font-bold flex justify-center text-blue-500 hover:bg-blue-200 rounded-xl shadow-blue-300 shadow-md m-4 px-4 py-1'>facebook</Link>
                    <Link to="https://www.instagram.com/sayme_vishesh/" className='w-40 font-bold flex justify-center text-pink-500 hover:bg-pink-200 rounded-xl shadow-pink-300 shadow-md m-4 px-4 py-1'>Instagram</Link>
                    <div className='flex justify-evenly m-4 px-4 py-1'>
                        <div className='font-bold text-purple-500 rounded-xl shadow-purple-300 shadow-md px-4 py-1'>Contact Us</div>
                        <div className='font-bold text-purple-500 rounded-xl shadow-purple-300 shadow-md px-4 py-1'>9310365061</div>
                    </div>
                </div>
                <img className='h-1/2 w-1/2' src="src/assets/illu_girl.jpeg" alt="" />
            </div>
        </>
    )
}

export default SectionHelp