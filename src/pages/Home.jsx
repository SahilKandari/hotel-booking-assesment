import React from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Information from '../components/Information'
import Booking from '../components/Booking'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Booking/>
      <Gallery/>
      <Information/>
    </>
  )
}

export default Home