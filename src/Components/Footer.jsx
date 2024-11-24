'use client'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-purple-800 text-neutral-200'>
            <div className='p-36'>
                <div className='h-fit flex cols text-left'>
                    <div className='px-10 w-2/5'>
                        <ul>
                            <li className='text-2xl text-center'>Coos Library</li>
                            <li className='pb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente aspernatur quis possimus,</li>
                            <li className='text-center'>
                                <div>Contact with us at</div>
                                <div className='flex justify-evenly'>
                                    <Link to="https://www.instagram.com/sayme_vishesh/">
                                        <img src="" alt="" />
                                        <p className="hover:text-pink-500">Instagram</p>
                                    </Link>
                                    <Link to="https://github.com/Vishesh9310">
                                        <img src="" alt="" />
                                        <p className="hover:text-gray-500">Github</p>
                                    </Link>
                                    <Link to="https://www.facebook.com">
                                        <img src="" alt="" />
                                        <p className="hover:text-blue-700">Facebook</p>
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/vishesh-b8a2b72a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm">
                                        <img src="" alt="" />
                                        <p className="hover:text-sky-500">Linked-In</p>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='px-10 w-1/5'>
                        <ul>
                            <li>Categories</li>
                            <li><Link className=' hover:text-blue-400' to="">Science Fiction</Link></li>
                            <li><Link className=' hover:text-blue-400' to="">Thriller</Link></li>
                            <li><Link className=' hover:text-blue-400' to="">Stories</Link></li>
                            <li><Link className=' hover:text-blue-400' to="">Religious</Link></li>
                            <li><Link className=' hover:text-blue-400' to="">Study</Link></li>
                        </ul>
                    </div>
                    <div className='px-10 w-1/5'>
                        <ul >
                            <li>Support</li>
                            <li><Link className=' hover:text-blue-400'>Contact Us</Link></li>
                            <li><Link className=' hover:text-blue-400'>FAQ</Link></li>
                            <li><Link className=' hover:text-blue-400' to="/help">Help</Link></li>
                        </ul>
                    </div>
                    <div className='px-10 w-1/5'>
                        <ul>
                            <li>Policies</li>
                            <li><Link className=' hover:text-blue-400' to="">Terms of Use</Link></li>
                            <li><Link className=' hover:text-blue-400' to="">Privacy Policy</Link></li>
                            <li><Link className='hover:text-blue-400' to="">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-neutral-300 p-4'>
                <div className='p-2.5 mx-auto my-0 w-fit text-lg'>
                    Copyright ©Coos-Library 2021-2028
                </div>
            </div>
        </div>
    )
}

export default Footer

/*

 <>
    <div id='footer-box' className='bg-blue-100'>
        <div class='footer_cols' id='first_col'>
            <ul class='cols'>
            <li>Coos Library</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente aspernatur quis possimus,</li>
            <li>
                <div>Connect with us at</div>
                <div className="min-h-7 max-h-7"  id='images'>
                    <Link className="text-center  rounded-2xl min-h-7 max-h-7 min-w-7 max-w-7 hover:bg-pink-500 hover:text-white" to="https://www.instagram.com/sayme_vishesh/">In</Link>
                    <Link className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-gray-500 hover:text-white" to="https://github.com/Vishesh9310">git</Link>
                    <Link className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-600 hover:text-white" to="https://www.facebook.com">Fa</Link>
                    <Link className="text-center  rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-800 hover:text-white" to="https://www.linkedin.com/in/vishesh-b8a2b72a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm">Li</Link>
                </div>
            </li>
        </ul>
        </div>
        <div class='footer_cols'>
            <ul class='cols'>
            <li>Categories</li>
            <li><Link className=' hover:text-blue-400' to="">Science Fiction</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Thriller</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Stories</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Religious</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Study</Link></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Support</li>
            <li><Link className=' hover:text-blue-400'>Contact Us</Link></li>
            <li><Link className=' hover:text-blue-400'>FAQ</Link></li>
            <li><Link to="/help" className=' hover:text-blue-400'>Help</Link></li>
        </ul>
        </div>
        <div class='footer_cols'>
        <ul class='cols'>
            <li>Policies</li>
            <li><Link className=' hover:text-blue-400' to="">Terms of Use</Link></li>
            <li><Link className=' hover:text-blue-400' to="">Privacy Policy</Link></li>
            <li><Link className='hover:text-blue-400' to="">Refund Policy</Link></li>
        </ul>
        </div>
    </div>
    <div className='bg-blue-100'>
        <div className='p-2.5 mx-auto my-0 w-fit text-sm bg-blue-100'>
        Copyright ©Coos-Library 2021-2028
        </div>
    </div>
    </>

*/