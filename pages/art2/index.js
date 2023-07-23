import Link from "next/link";
import React from "react";

import { client } from '/lib/client';
import { Product, FooterBanner, HeroBanner } from '/components';
import Image from 'next/image'
import {useRef, useEffect} from 'react'
import {createContext} from 'react'

function Art2({ products, bannerData }) {

    const myModal = useRef(null)
    const btn = useRef(null)
    const close = useRef(null)

    const myModal1 = useRef(null)
    const btn1 = useRef(null)

    const myModal2 = useRef(null)
    const btn2 = useRef(null)

    const buttonClicked3 = () => {
        myModal.current.style.display = "block"
    }

    const buttonClicked5 = () => {
        myModal1.current.style.display = "block"
    }

    const buttonClicked6 = () => {
        myModal2.current.style.display = "block"
    }

    const buttonClicked4 = () => {
        myModal.current.style.display = "none"
        myModal1.current.style.display = "none"
        myModal2.current.style.display = "none"
    }  

    return (
        <div>
            <div className="header-art">
                <div className="vertical-center">
                    <h1>Explore the mind of an artist</h1>
                    <br/><br/><br/>
                    <div className="originals-prints">
                        <button className="original-print1">
                            <Link href="/art" className="original-print">Prints</Link>
                        </button>
                        <button className="original-print2">
                            <Link href="/art2" className="original-print">Originals</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="tekst">
                <h1>Originals</h1>
                <p>In love with the artwork?<br></br>Choose your favorite original here<br></br>Send us your information and we will contact you in the shortest time possible.</p>
            </div>
            <div className="originalss">
                <div className="jugo">
                    <div className="centriraj">
                        <Image className="slika" src="/jugo.jpg" alt="me" width="171.29px" height="350px" />
                    </div>
                    <div className="proba">
                        <button ref={btn} onClick={buttonClicked3} className="button buttonn">
                        Buy
                        </button>
                    </div>                    
                </div>
                <div className="zen">
                    <div className="centriraj">
                        <Image className="slika" src="/zen.jpg" alt="me" width="198.99px" height="350px" />
                    </div>               
                    <div className="proba">
                        <button ref={btn1} onClick={buttonClicked5} className="button buttonn">
                        Buy
                        </button>
                    </div>
                </div>
                <div className="ocaj">
                    <div className="centriraj">
                        <Image className="ocaj-slika slika" src="/ocaj.jpg" alt="me" width="225.428px" height="300px" />
                    </div>
                    <div className="proba">
                        <button ref={btn2} onClick={buttonClicked6} className="button buttonn buttonn1">
                        Buy
                        </button>
                    </div>
                </div>
            </div>

            <div ref={myModal} id="myModal" className="modal">
                <div className="modal-content">
                    <span ref={close} onClick={ buttonClicked4} className="close">&times;</span>
                    <h1 className="orderform">Buy Form</h1>
                    <br></br>
                    <h2 className="pp">Jugo</h2>
                    <div className="container-form">
                        <div className="radi">
                            <Image style={{marginRight: "10px"}} src="/jugo.jpg" alt="me" width="198.99px" height="350px" />
                        </div>
                        
                        <form action="https://formspree.io/f/xknlwddd" method="post">
                            <p>Price: 200€</p>
                            <input type="text" name="Name" placeholder="Full Name" required></input>
                            <input type="email" name="Email" placeholder="Email" required></input>
                        
                            <button  type="submit" id="OrderButton" className="button">Send</button>
                        </form>                     
                    </div>
                </div>
            </div>

            <div ref={myModal1} id="myModal" className="modal">
                <div className="modal-content">
                    <span ref={close} onClick={ buttonClicked4} className="close">&times;</span>
                    <h1 className="orderform">Buy Form</h1>
                    <br></br>
                    <h2 className="pp">Zen</h2>
                    <div className="container-form">
                        <div className="radi">
                            <Image style={{marginRight: "10px"}} src="/zen.jpg" alt="me" width="198.99px" height="350px" />
                        </div>
                        
                        <form action="https://formspree.io/f/xknlwddd" method="post">
                            <p>Price: 200€</p> 
                            <input type="text" name="Name" placeholder="Full Name" required></input>
                            <input type="email" name="Email" placeholder="Email" required></input>
                            
                            <button  type="submit" id="OrderButton" className="button">Send</button>
                        </form>                     
                    </div>
                </div>
            </div>

            <div ref={myModal2} id="myModal" className="modal">
                <div className="modal-content">
                    <span ref={close} onClick={ buttonClicked4} className="close">&times;</span>
                    <h1 className="orderform">Buy Form</h1>
                    <br></br>
                    <h2 className="pp">Zen</h2>
                    <div className="container-form">
                        <div className="radi">
                            <Image className="slikica" style={{marginRight: "10px"}} src="/ocaj.jpg" alt="me" width="225.428px" height="300px" />
                        </div>                   
                        <form action="https://formspree.io/f/xknlwddd" method="post">
                            <p>Price: 150€</p>
                            <input type="text" name="Name" placeholder="Full Name" required></input>
                            <input type="email" name="Email" placeholder="Email" required></input>
                            
                            <button  type="submit" id="OrderButton" className="button">Send</button>
                        </form>                     
                    </div>
                </div>
            </div>

        </div> 
    )
}

export default Art2
