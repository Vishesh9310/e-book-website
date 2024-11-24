import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import BottomSign from '../../Components/BottomSign'
import SectionProfile from '../../Components/SectionProfile'

function Profile() {
  const data= {name:"Vishesh", about: "Web developers create functional, user-friendly websites and web applications", cont1: 9310365061, cont2: 9266068903};

  return (
    <>
    <Navbar/>
    <SectionProfile datas={data}/>
    <Footer/>
    <BottomSign/>
    </>
  )
}

export default Profile