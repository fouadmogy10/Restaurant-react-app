import { IoIosTime } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";
import Heading from "../ui/Heading";
import { Card, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="mt-4">
      <Heading classname={"fw-bold fs-5"} smallTXT={"Our Branch"} />
      <footer className="bg-primary-color p-4">
        <Container>
          <Row>
            <Col lg="4" sm="6">
              <Card className="bg-transparent border-0 text-center ">
                <Card.Body className=" ">
                  <Card.Title className="fw-bold text-third">
                    Robert Food
                  </Card.Title>
                  <Card.Subtitle className="fw-bold text-white my-3">
                    1986 Hilltop DriveBorger, TX 79007
                  </Card.Subtitle>
                  <div className="fw-bold d-flex justify-content-center text-third flex-wrap gap-2">
                    <div className="d-flex  align-items-center">
                      <IoIosTime />
                      <span>7.30 AM - 9.30 PM</span>
                    </div>
                    <div className="d-flex  align-items-center">
                      <BsFillTelephoneFill />
                      <span>+880 1630-225015</span>
                    </div>
                  </div>
                  <span
                    style={{
                      color: "#4BFF3C",
                    }}
                  >
                    Click to View Google Map
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card className="bg-transparent border-0 text-center ">
                <Card.Body className=" ">
                  <Card.Title className="fw-bold text-third">
                    Robert Food
                  </Card.Title>
                  <Card.Subtitle className="fw-bold text-white my-3">
                    1986 Hilltop DriveBorger, TX 79007
                  </Card.Subtitle>
                  <div className="fw-bold d-flex justify-content-center text-third flex-wrap gap-2">
                    <div className="d-flex  align-items-center">
                      <IoIosTime />
                      <span>7.30 AM - 9.30 PM</span>
                    </div>
                    <div className="d-flex  align-items-center">
                      <BsFillTelephoneFill />
                      <span>+880 1630-225015</span>
                    </div>
                  </div>
                  <span
                    style={{
                      color: "#4BFF3C",
                    }}
                  >
                    Click to View Google Map
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card className="bg-transparent border-0 text-center ">
                <Card.Body className=" ">
                  <Card.Title className="fw-bold text-third">
                    Robert Food
                  </Card.Title>
                  <Card.Subtitle className="fw-bold text-white my-3">
                    1986 Hilltop DriveBorger, TX 79007
                  </Card.Subtitle>
                  <div className="fw-bold d-flex justify-content-center text-third flex-wrap gap-2">
                    <div className="d-flex  align-items-center">
                      <IoIosTime />
                      <span>7.30 AM - 9.30 PM</span>
                    </div>
                    <div className="d-flex  align-items-center">
                      <BsFillTelephoneFill />
                      <span>+880 1630-225015</span>
                    </div>
                  </div>
                  <span
                    style={{
                      color: "#4BFF3C",
                    }}
                  >
                    Click to View Google Map
                  </span>
                </Card.Body>
              </Card>
            </Col>
           
          </Row>
        </Container>
      </footer>
      <div className="bg-secondary-color d-flex justify-content-center align-items-center p-3 fw-bold text-third">Copyright © 2024 | coded with Fouad Mogy</div>
    </section>
  );
};

export default Footer;
