import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import img1 from "../../../assets/images/candle1.png";
import Heading from "../../ui/Heading";
import img2 from "../../../assets/images/best/diet 1.png";
import img3 from "../../../assets/images/best/cooking 1.png";
import Card from "./Card";
const Best = () => {
  const arr = [
    {
      title: "Passionate Chefs",
      desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
      img: img1,
    },
    {
      title: "100 % Fresh Foods",
      desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
      img: img2,
    },
    {
      title: "Memorable Ambience",
      desc: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
      img: img3,
    },
  ];
  return (
    <section className="py-5">
      <Heading bigTXT={"Why We are the best"}></Heading>
      <Container>
        <Row>
          {arr.map((item, idx) => (
            <Col md="4" className="mb-3" key={idx}>
              <Card item={item}  count={idx+1}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Best;
