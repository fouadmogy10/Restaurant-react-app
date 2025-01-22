import React from "react";
import PrimaryButton from "../../ui/PrimaryBtn";
import { Col, Container, Row } from "react-bootstrap";
import deliveryimg from "../../../assets/images/image_delivery.png";
import delivery from "../../../assets/images/food 1.png";

const Delivery = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="flex-column-reverse flex-md-row align-items-center">
          {/* Left Column */}
          <Col md="6" xs="12" className="mt-4 mt-md-0">
            {/* Changed h6 to h2 for proper heading hierarchy */}
            <h2 className="text-red fw-bold text-center mb-5">Delivery</h2>
            <h3 className="text-red fw-bold my-2">
              <span className="text-link">A Moments Of</span> <br />
              Delivered On Right Time & Place
            </h3>
            <p className="text-link my-5">
              Food Khan is a restaurant, bar, and coffee roastery located on a
              busy corner site in Farringdon's Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London inteon.
            </p>
            <div className="d-flex justify-content-around align-items-center">
              <div className="d-flex text-link align-items-center gap-3">
                <div>
                  <h5 className="mb-0">Delivery Order</h5>
                  <span>+880 1630 225 015</span>
                </div>
                <img src={delivery} alt="Delivery Icon" width={40} height={40} />
              </div>
              <PrimaryButton>Order Now</PrimaryButton>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={6} className="text-center">
            <img
              src={deliveryimg}
              className="w-75 h-100 object-fit-contain rounded mt-4"
              alt="Food Delivery Illustration"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Delivery;