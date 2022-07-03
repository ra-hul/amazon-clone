import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
<div className='home'>
    <img  className="home__image"
     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
     alt=""
    /> 
    {/* Product id,title,price,rating,image */}
   < div className='home__row'>
   <Product 
     id="12345"
     title="The Lean Startup: How SENZER Gaming Headset with Microphone - 7.1 Surround Sound, Lightweight and Ultra-Soft Memory Foam Cushion"
     price={11.96}
     rating={5}
     image="https://m.media-amazon.com/images/I/61IxdporMdL._AC_UY327_FMwebp_QL65_.jpg"/>
   <Product 
     id="12345"
     title="HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A)"
     price={10.96}
     rating={4}
     image="https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_SX466_.jpg"/>
   
   </div>
   <div className='home__row'>
   <Product 
     id="23665"
     title=" Generic Breathable Nylon Mesh Dog Harness Adjustable Dog Harness and Leash Set Dog Accessories Pet Supplies (Color : D, Size : Small)"
     price={21.96}
     rating={5}
     image="https://m.media-amazon.com/images/I/61BTGnZgobL._AC_SX679_.jpg"/>
   <Product 
     id="12345"
     title="Cubii JR2/JR2+er Desk Elliptical, Pedal Ex Adjustable Resistance,pment for Home Workouts, Newest Model"
     price={50.96}
     rating={3}
     image="https://m.media-amazon.com/images/I/418HZfOBuTL._AC_SX679_.jpg"/>
<Product 
     id="85236"
     title="Hook, Line, and Sinker: A Novel Kindle Edition"
     price={51.96}
     rating={5}
     image="https://m.media-amazon.com/images/I/41qzpFOaZ2L.jpg"/>


   </div>
   <div className='home__row'>
   <Product 
     id="78965"
     title="Apple Watch Series 3 [GPS 38mm] Smart Watch w/ Silver Aluminum Case  White Sport Band. Fitness  Activity Tracker, Heart Rate Monitor, Retina Display, Water Resistant"
     price={88.96}
     rating={5}
     image="https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_SX522_.jpg"/>
   </div>
</div>
  
  ); 
  
}

export default Home