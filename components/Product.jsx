import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (  
        <section>
          <Link href={`/product/${slug.current}`}>
            <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            />
          </Link>
          <div className='product-name-and-price'>
            <Link href={`/product/${slug.current}`}>              
              <span className='shop-item-title'>
                <p className="title">{name}</p>
              </span>
            </Link>
            <p className="product-price">${price}</p>
            <div className='buttons-container'>
              <Link href={`/product/${slug.current}`}>
                <button type='button' className='btn-buy-print'>Buy print</button>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default Product