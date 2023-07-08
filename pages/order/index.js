import Link from "next/link";
import React from "react";
import Image from "next/image";

function Order() {
    return (
        <div>
            <div className="orderr">
                <h1>Turn your imagination into reality</h1>
                <p className="order-small-text">Describe your vision or send us an image that inspires you. <br></br> Send us an existing piece you wish to see in our style!</p>
            </div>
            <div className="order-container">
                <div className="column1">
                    <Image className="skupina-order" src="/skupina-order.png" width="220.01px" height="540px"></Image>
                </div>
                <div className="container-form">
                    <form className="form" action="https://formspree.io/f/moqoaggb" method="POST">
                        <input type="text" name="Name" placeholder="Full Name" required></input>  
                        <input type="email" name="Email" placeholder="Email" required></input>
                        <textarea name="Message" placeholder="Message" required></textarea>
                        <input type="number" name="Value" placeholder="Expected value (EUR)"></input>
                        <button className="button" type="submit" id="buton">Send</button>
                    </form>
                </div>
                <div className="column2">
                    <div>
                        <Image className="skupina-order" src="/baka.png" width="236.01px" height="295.09px"></Image>
                    </div>
                    <div style={{display: "flex"}} className="sve">
                        <div className="lijevo"><Image src="/bakala.jpg" width="120.74156px" height="159px"></Image></div>
                        <div className="desno"><Image src="/kravica.jpg" width="120.74156px" height="159px"></Image></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Order