import React from 'react';

import { client } from '../lib/client';
import { FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    {/*  */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0] }/> 
    {console.log(bannerData)};
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)} 
    </div>
{/*     footerBanner={bannerData && bannerData[0]} */}  
     {/*  <FooterBanner/>  */}
  </div>
);

export const getServerSideProps = async () => {
  /* A query to the Sanity database. */
  const query = '*[_type == "product"]';
  /* Fetching the data from the Sanity database. */
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
} 

export default Home;
