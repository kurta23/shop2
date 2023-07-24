import React from 'react'
import Link from 'next/link'
import {useRef, useEffect} from 'react'
import {createContext} from 'react'
import Image from 'next/image'
import {AiOutlineShopping} from 'react-icons/ai'

import { Cart } from '.'
import { useStateContext } from '../context/StateContext'


const Navbar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext()
  const desktopNav = useRef(null);
  const overlay = useRef(null);
  const menuIconContainer = useRef(null)
  const navContainer = useRef(null)

  const buttonClicked2 = () => {
    menuIconContainer.current.classList.remove("hide")
    overlay.current.classList.remove("active")
    navContainer.current.classList.remove("active")
  }

  const buttonClicked = () => {
    navContainer.current.classList.toggle("active")
  }

  return (
    <div>
      <div className='nav-container' ref={navContainer}>
        <nav ref={desktopNav}>
          <ul className='mobile-nav'>
            <li>
              <div ref={menuIconContainer} onClick={buttonClicked} className='menu-icon-container'>
              <div className='menu-icon'>
                <span className='line-1'></span>
                <span className='line-2'></span>
              </div>
              </div>
            </li>
            <li>
                <Link href="/" ><p style={{marginTop: "9px", color:"white", cursor: "pointer"}}>AnaKu|Art</p></Link>
            </li>
            <li>
              <button type='button'
                className='cart-icon' onClick={()=> setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
              </button>
            </li>
          </ul>

          <ul ref={desktopNav} className='desktop-nav'>
            <li><p className='logo link-logo'>
              <Link href="/">AnaKu|Art</Link>
            </p></li>
            <li><Link href="/" >
              <p style={{cursor: "pointer"}} onClick={buttonClicked2}>Home</p>
            </Link></li>
            <li>
              <Link href="/art">
                <p style={{cursor: "pointer"}} onClick={buttonClicked2} >Art</p>
              </Link>
            </li>
            <li>
              <Link href="/order">
                <p style={{cursor: "pointer"}} onClick={buttonClicked2} >Order</p>
              </Link>
            </li>
            <li>
              <button type='button'
                className='cart-icon link-bag' onClick={()=> setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
              </button>
            </li>
          </ul>
        </nav>

      {showCart && <Cart />}
      </div>

      <div ref={overlay} onClick={buttonClicked2} className="overlay"></div>
    </div>
    
  )
}

export default Navbar
