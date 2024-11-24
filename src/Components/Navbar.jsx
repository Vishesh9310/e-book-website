import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // $( '.navbar-nav a' ).on( 'click', function () {
  //   $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  //   $( this ).parent( 'li' ).addClass( 'active' );
  // });

  return (
    <>
    <nav className='bg-purple-600 text-neutral-300 shadow-2xl shadow-white'>
        <div className='flex p-5 justify-between mx-10 border-b-2 border-purple-900'>
        <div className='m-2'>
          <b className='text-2xl'>COOS-LIBRARY</b>
        </div>
        <div>
          <ul className='flex justify-between m-2 space-x-5'>
            <Link to="/home">Home</Link>
            <Link to="/">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/profile">Profile</Link>
          </ul>
        </div>
        <div>
          <Link to="/signup" className='bg-black hover:bg-slate-700 shadow-2xl shadow-black text-white px-4 py-2 rounded-xl'>Sign Up</Link>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar