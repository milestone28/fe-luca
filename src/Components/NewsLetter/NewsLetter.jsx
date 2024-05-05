import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>STAY IN THE KNOW</h1>
        <p>Subscribe to be the first to know of new menu items!</p>
        <div>
            <form action="">
            <input type="email" placeholder='Ex. thecookieeater@gmail.com' />
            <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter