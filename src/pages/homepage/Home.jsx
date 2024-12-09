import React from 'react'
import Navbar from '../../Components/Navbar'
import Apiis from '../../Components/Apiss'
import Footer from '../../Components/Footer'
import BottomSign from '../../Components/BottomSign'
import SectionHome from '../../Components/SectionHome'

function Home() {
  return (
    <div>
   <Navbar/>
   <SectionHome/>
   <Apiis/>
   <Footer/>
   <BottomSign/>
   </div>
  )
}

export default Home