import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutImg from "../../assets/images/image_about_1.jpg";
const AboutTop = () => {
  return (
    <section className="border-red p-5 container-80 my-5">
      <Row className="align-items-center justify-content-center ">
        <Col lg={6} className="text-center d-none d-lg-block">
          <img
            src={aboutImg}
            className="w-100 h-100 object-fit-contain rounded mt-4"
            alt=""
          />
        </Col>
        <Col lg="6" xs="12">
          <p className="text-link fw-bold mb-3">
            Opaleye yellowtail snapper, velvet catfish, graveldiver banded
            killifish, Old World rivuline catalufa eagle ray Moorish idol.
            Herring smelt barbeled dragonfish, tommy ruff.
          </p>
          <p className="text-link ">
            Food Khan is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon's Exmouth Market. With glazed frontage on
            two sides of the building, overlooking the market and a bustling
            London inteon.
          </p>
        
        </Col>
        
      </Row>
    </section>
  );
};

export default AboutTop;
