import React from 'react'
import Hero from '../components/home/hero/Hero'
import PopDishes from '../components/home/populateDishes/PopDishes'
import Healthy from '../components/home/Health/Health'
import Offers from '../components/home/offers/Offers'
import Spacial from '../components/home/Spacial/Spacial'
import ForAllTime from '../components/home/ForAllTime/ForAllTime'
import OurR from '../components/home/OURRESTAURANT/OurR'
import Delivery from '../components/home/delivery/Delivery'
import Testimonial from '../components/home/Testimonial/Testimonial'
import Best from '../components/home/best/Best'
import Meta from '../components/Meta'

const HomePage = () => {
  return (
    <section>
       <Meta title={"Home Page"} desc={"Lorem ipsum dolor sit amet."}/>
        <Hero/>
        <PopDishes/>
        <Healthy/>
        <Offers/>
        <Spacial/>
        <ForAllTime/>
        <OurR/>
        <Delivery/>
        <Best/>
        <Testimonial/>
    </section>
  )
}

export default HomePage