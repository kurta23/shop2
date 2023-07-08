import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Kurtovic|Art All rights reserved</p>
      <p className='icons'>
        <a href="https://instagram.com/kurtovicanamaria?igshid=YmMyMTA2M2Y=">
          <AiFillInstagram />   
        </a> 
      </p>
    </div>
  )
}

export default Footer