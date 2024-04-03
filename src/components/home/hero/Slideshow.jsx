import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import hero from "../../../assets/images/Hero.png"
import PrimaryButton from '../../ui/PrimaryBtn'
const Slideshow = () => {
  return (
    <Container className='hero'>
        <Row className='justify-content-center align-items-center'>
            <Col md={6} sm="12">
            <h1 className='font-italic'>
            ENJOY OUR CHICKEN <br/> <span className='text-red'>BURGER</span> FAST FOOD
            </h1>
            <div className='d-flex justify-content-center align-items-center gap-2 mt-4'>
            <PrimaryButton className={"fs-4"}>
            Order Now
            </PrimaryButton>
            <p className='mb-0 text-muted'>Price : $10.50</p>
            </div>
            </Col>
            <Col >
            <img src={hero} alt="food"  />
            </Col>
        </Row>
    </Container>
  )
}

export default Slideshow
