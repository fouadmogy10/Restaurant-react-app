import React from 'react'
import Heading from '../../ui/Heading'
import offer1 from "../../../assets/images/bigOffer/image_bigOffer_1.png"
import offer2 from "../../../assets/images/bigOffer/image_bigOffer_2.png"
import offer3 from "../../../assets/images/bigOffer/image_bigOffer_3.png"
import { Col, Container, Row } from 'react-bootstrap'
const Offers = () => {
    const offers=[
        offer1,
        offer2,
        offer3
    ]
  return (
    <section>
            <Heading smallTXT={"For in this week, take your food, buy your best one."} bigTXT={"Bigg Offer"}/>
            {/* <Container fluid> */}
                <div className='d-flex flex-sm-row flex-column'>
                    {
                        offers.map(offer=>(

                    <Col sm="4" xs="12" className=' rounded' key={offer}>
                        <img src={offer} className='w-100 h-100 ' alt="" />
                    </Col>
                        ))
                    }
                </div>
            {/* </Container> */}
    </section>
  )
}

export default Offers