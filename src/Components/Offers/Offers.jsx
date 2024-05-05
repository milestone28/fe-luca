import React from 'react'
import './Offers.css'
import luca_image from '../Assets/luca.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <img src={luca_image} alt="" />
        </div>

        <div className="offers-right">
            <h1>About The Chef</h1>
            <p>Hi! My name is Luca, I'm the owner and chef of Luca's Loaves.</p> 
            <p>I commenced my career as a lifeguard but was laid off. I found out i enjoyed making bread and experimented and in no time at all had built up a thriving business.</p>
            <p>Because of this I also offer bread making classes.</p>
            <button>Learn More About Luca</button>
        </div>
    </div>
  )
}

export default Offers