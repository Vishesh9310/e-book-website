import React from 'react'
import Navbar from '../../Components/Navbar'
import Section from '../../Components/Section'
import Footer from '../../Components/Footer'
import BottomSign from '../../Components/BottomSign'

function About() {
  
  const data = {user:50, download:1.8, daily:144, week:20,currentscore:15000};

  return (
    <div>
    <Navbar/>
    <Section datamem={data}/>
    <Footer/>
    <BottomSign/>
    </div>
  )
}

export default About