import { AiTwotoneStar } from "react-icons/ai";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../ui/Heading";
import img from "../../../assets/images/image_richHealthy_1.png";
import img2 from "../../../assets/images/image_richHealthy_2.png";
import PrimaryButton from "../../ui/PrimaryBtn";
const Healthy = () => {
  return (
    <Container className="py-5">
      <Heading smallTXT={"RICH & HEALTHY"} classname={"font-uppercase "} />
      <Row className=" justify-content-center">
        <Col lg={4} md="3" sm="12" className="text-center">
          <img src={img} className="w-75 w-sm-100 h-100" alt="healthy food" />
        </Col>
        <Col lg="8" md="9" sm="12">
          <h2 className="text-red mt-2">
            Highest quality artisangrains, <br /> proteins & seasonal
            ingredients
          </h2>
          <p className=" mt-2 text-link fs-5">
            Righteous indignation and dislike men who are so beguiled and <br />{" "}
            demoralized by the charms of pleasure of the moment, <br />
            so blinded by desires, that they cannot foresee.
          </p>

          <Row className="justify-content-center ">
            <Col className="d-flex flex-column justify-content-between">
              <div className="text-link fs-5 mt-3">
                <p className="d-flex gap-1">
                  <span>
                    <AiTwotoneStar className="text-red  bg-primary-color rounded-circle" />
                  </span>{" "}
                  Simple and easy to distinguish
                </p>
                <p className="d-flex gap-1">
                  <span>
                    <AiTwotoneStar className="text-red  bg-primary-color rounded-circle" />
                  </span>{" "}
                  Pleasure of the momentblinded desire
                </p>
                <p className="d-flex gap-1">
                  <span>
                    <AiTwotoneStar className="text-red  bg-primary-color rounded-circle" />
                  </span>{" "}
                  Able to do what we like best
                </p>
              </div>
              <div className=" text-center">
                <PrimaryButton className={"fs-4 mb-5 w-50"}>
                  Reade More
                </PrimaryButton>
              </div>
            </Col>
            <Col md="6" className="d-md-block d-none img-healthy-2 text-center">
              <img
                className="w-75 w-sm-100 h-100"
                src={img2}
                alt="healthy food"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Healthy;
