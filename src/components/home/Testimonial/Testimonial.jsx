import React from 'react'
import Heading from '../../ui/Heading'
import Slider from './Slider'
import { Container } from 'react-bootstrap'
import img from "../../../assets/images/guest/image_guests_2.png";
import img2 from "../../../assets/images/guest/image_guests_3.png";
import img1 from "../../../assets/images/guest/image_guests_1.png";


const Testimonial = () => {
  const arr =[
    {
    name:"Bernadette R. Martin",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img
  },
    {
    name:"Robert M. Dixon",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img1
  },
    {
    name:"Regina D. Leonard",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img2
  },
    {
    name:"Bernadette R. Martin",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img
  },
    {
    name:"Robert M. Dixon",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img1
  },
    {
    name:"Regina D. Leonard",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img2
  },
    {
    name:"Bernadette R. Martin",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img
  },
    {
    name:"Robert M. Dixon",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img1
  },
    {
    name:"Regina D. Leonard",
    comment:"Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    img:img2
  },
]
  return (
    <div>
        <Heading bigTXT={"Testimonial"} smallTXT={"Review form our guests"}/>
        <Container>
            
        <Slider arr={arr}/>
        </Container>
    </div>
  )
}

export default Testimonial