import React from "react";
import Heading from "../../ui/Heading";
import img1 from "../../../assets/images/spicial/image_specialManu_1.png";
import img2 from "../../../assets/images/spicial/image_specialManu_2.png";
import img3 from "../../../assets/images/spicial/image_specialManu_3.png";
import img4 from "../../../assets/images/spicial/image_specialManu_4.png";
import img5 from "../../../assets/images/spicial/image_specialManu_5.png";
import img6 from "../../../assets/images/spicial/image_specialManu_6.png";
import img7 from "../../../assets/images/spicial/image_specialManu_7.png";
import img8 from "../../../assets/images/spicial/image_specialManu_8.png";
import img9 from "../../../assets/images/spicial/image_specialManu_9.png";
import { Col, Container, Row } from "react-bootstrap";
const ForAllTime = () => {
  const foodArr = [
    { img: img1, name: "Burger" },
    { img: img2, name: "Fried chicken" },
    { img: img3, name: "Doner with Grilled Chicken" },
    { img: img4, name: "Pizza" },
    { img: img5, name: "Hot Dogs" },
    { img: img6, name: "Chicken Skewers" },
    { img: img7, name: "Greek Salad" },
    { img: img8, name: "Dahi Puri" },
    { img: img9, name: "Ice cream with Chocolate" },
  ];
  return (
    <section className="py-5">
      <Heading bigTXT={"SPECIALS MANU FOR ALL TIME"} />
      <Container>
        <Row className="justify-content-center align-items-center">
          {foodArr.map((item, idx) => (
            <Col lg="2" md="3" xs="6" key={idx}>
              <div className="spatial-card d-flex flex-column justify-content-center align-items-center mb-2 p-2 text-center">
                <div className="div-img">
                  <img className="w-100 h-100" src={item.img} alt={item.name} />
                </div>
                <span >{item.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ForAllTime;
