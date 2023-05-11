
import Header from '../Component/Header'
import Slider from '../Component/Slider.jsx'
import Cards from '../Cards/Cards'
import Footer from '../Component/Footer'
import '../Pages/Home.css'


import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default Home