import React from "react";
import PrimaryButton from "../../ui/PrimaryBtn";
import { Col, Container, Row } from "react-bootstrap";
import deliveryimg from "../../../assets/images/image_delivery.png"
import delivery from "../../../assets/images/food 1.png";
const Delivery = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="flex-column-reverse flex-md-row">
          <Col  md="6" xs="12">
            <h6 className="text-red fw-bold text-center mb-5">Delivery</h6>
            <h2 className="text-red fw-bold my-2">
              <span className="text-link">A Moments Of</span> <br />
              Delivered On Right Time & Place
            </h2>
            <p className="text-link my-5">
              Food Khan is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon's Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London inteon.
            </p>
            <div className="d-flex justify-content-around">
            <div className="d-flex text-link  align-items-center gap-1">
                    <div>
                      <h5 className="mb-0">Delivery Order</h5>
                      <span>+880 1630 225 015</span>
                    </div>
                    <img src={delivery} alt="delivery" />
                  </div>
            <PrimaryButton>Order Now</PrimaryButton>

            </div>
          </Col>
          <Col md={6} className="text-center " >
            <img src={deliveryimg} className="w-75 h-100 object-fit-contain rounded mt-4" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Delivery;
