import React from 'react';
import Link from 'next/link';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import Image from 'next/image'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

    {/*
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    */}

    

    <div className='buy-prints'>
      
      <h2 className='title'>Limited Edition Prints</h2>
      <div className='text-buyprints'>
        <p>Own your own Anaku artwork! Please select your desired artwork.</p>
      </div>
      <div className="row2">
        <div className="col1" style={{marginRight: 20}}>
          <Image src="/suzebogasunca.jpg" alt="me" width="198.99px" height="350px" />
        </div>
        <div className="col2">
          <Image src="/reina.jpg" alt="me" width="449.1px" height="600px" />
        </div>
        <div className="col3">
          <Image src="/zen.jpg" alt="me" width="172.64px" height="350px" />
        </div>
      </div>
      <div className='nevidljivo1'>
        <Image className='skupina1' src="/skupina1.png" alt="me" width="350px" height="350px" />
      </div>
    </div>

    <div className="buy-originals">
      <h2 className="title">Original artwork</h2>
      <div className="text-buyprints">
        <p>In love with the artwork? <br></br>
Own the original here.
</p>
      </div>
      <div className='skupina-pocetna'>
        <Image src="/skupina_pocetna.png" alt="me" width="800px" height="428.79px" />
      </div>
      <div className='nevidljivo2'>
        <Image src="/skupina3.png" alt="me" width="350px" height="350px" />
      </div>
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[1]} />
  </div>
);

    export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}



export default Home;
