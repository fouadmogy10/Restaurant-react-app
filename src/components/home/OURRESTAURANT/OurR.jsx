import { BiRightArrowCircle } from "react-icons/bi";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../assets/images/ourRes/image_ourResturant_1.png";
import img2 from "../../../assets/images/ourRes/image_ourResturant_2.png";
import img3 from "../../../assets/images/ourRes/image_ourResturant_3.png";
import icon1 from "../../../assets/images/ourRes/cooking 1-1.png";
import icon2 from "../../../assets/images/ourRes/growth 1.png";
import PrimaryButton from "../../ui/PrimaryBtn";

const OurR = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg="5" md={4} className="d-none d-md-block">
            <div className="d-md-flex  d-none ">
              <div>
                <img className="w-100 h-100" src={img2} alt="" />
              </div>
              <div>
                <img className="w-100 h-100" src={img} alt="" />
              </div>
            </div>
            <div>
              <img className="w-100 h-100" src={img3} alt="" />
            </div>
          </Col>
          <Col lg="7" md="8" xs="12">
            <h6 className="text-red fw-bold">OUR RESTAURANT</h6>
            <h2 className="text-link fw-bold my-2">
              For every specialoccasion <br /> there’s heritaste
            </h2>
            <p className="text-link">
              Indignation and dislike men who are so beguiled demoralized by the
              charms of pleasure of the moment. Success Story.
            </p>
            <div className="my-2">
              <div className="d-flex gap-3 align-items-center">
                <div className="p-3 rounded-circle card-ours">
                  <img src={icon2} width={50} height={50} alt="" />
                </div>
                <div>
                  <h4 className="text-red fw-bold">Success Story</h4>
                  <p className="text-link">
                    Certain circumstances and owing to the claims of duty
                    obligations of business it will frequently.
                  </p>
                  <PrimaryButton
                    className={
                      "d-flex  align-items-center justify-content-between gap-2"
                    }
                  >
                    <p className="mb-0">Read More </p>
                    <BiRightArrowCircle />
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="d-flex gap-3 align-items-center">
                <div className="p-3 rounded-circle card-ours">
                  <img src={icon1} width={50} height={50} alt="" />
                </div>
                <div>
                  <h4 className="text-red fw-bold"> Passionate Chefs</h4>
                  <p className="text-link">
                    Duty or the obligations of business it frequently occur
                    pleasures have to be repudiated.
                  </p>
                  <PrimaryButton
                    className={
                      "d-flex  align-items-center justify-content-between gap-2"
                    }
                  >
                    <p className="mb-0">Read More </p>
                    <BiRightArrowCircle />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurR;
