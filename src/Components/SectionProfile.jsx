import React from 'react'
import { Link } from 'react-router-dom';

function SectionProfile(props) {
    const name = props.datas.name;
    const about = props.datas.about;
    const cont1 = props.datas.cont1;
    const cont2 = props.datas.cont2;

    return (
        <>
            <div>
                <div className="w-full h-1/3 bg-[url('src/assets/extra/purple_sky.jpeg')] bg-no-repeat bg-cover py-10 pl-10 shadow-md shadow-purple-300">
                    <img className='rounded-full h-48 w-48' src="src/assets/extra/200 (2).webp" alt="" />
                </div>
                <div className='flex justify-evenly p-10'>
                    <div className='w-1/4 bg-purple-50 rounded-xl mr-10 p-10 shadow-lg shadow-purple-300'>
                        <p className='font-bold text-2xl pb-5 text-purple-700'>{name}</p>
                        <p className='w-full font-light text-xl pb-4 text-purple-600'>{about}</p>
                        <p className='font-bold text-xl pb-2 text-purple-600'>Contact Us:</p>
                        <p className='font-bold pb-xl text-purple-700'>1. {cont1}</p>
                        <p className='font-bold text-purple-700'>2. {cont2}</p>
                    </div>
                    <div className='w-2/4'>
                        <img className="w-full h-full rounded-xl " src="src/assets/extra/200 (1).webp" alt="" />
                    </div>
                    <div className='w-1/4 bg-purple-50 rounded-xl p-10 shadow-lg shadow-purple-300 ml-10'>
                        <img className='w-full bg-blue' src="src/assets/extra/building.png" alt="" />
                        <div className="w-full mt-5 content-center text-center"><Link to="/home" className=' w-full text-center px-10 rounded-2xl shadow-xl shadow-purple-500 bg-purple-100 hover:bg-purple-300 border-2 border-purple-300'>Home</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionProfile