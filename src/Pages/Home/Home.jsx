import React from 'react'
import "./Home.css"
import Featured from '../../Components/Featured/Featured'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (

    <div className='home'>
        <hr/>
        <Featured />
        <Popular />
        <Offers />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home