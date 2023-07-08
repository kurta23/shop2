import Link from "next/link";
import React from "react";

import { client } from '/lib/client';
import { Product, FooterBanner, HeroBanner } from '/components';


function Art({ products, bannerData }) {
    return (
         <div className="scrolling">
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
            <div className="konteiner">
                <div className="products-container">
                    {products?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>
        </div>

        /*<div className="container">
            <section>
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
            </section>
            {products?.map((product) => <Product key={product._id} product={product} />)} 
        </div>*/
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }

export default Art