import React from 'react'
import "./Home.css"
import Featured from '../../Components/Featured/Featured'
import Popular from '../../Components/Popular/Popular'

const Home = () => {
  return (

    <div className='home'>
        <hr/>
        <Featured />
        <Popular />
    </div>
  )
}

export default Home