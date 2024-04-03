import React from "react";
import Heading from "../../ui/Heading";
import { Col, Container, Row } from "react-bootstrap";
import dish1 from "../../../assets/images/dishes/image_Dishes_1.png";
import dish2 from "../../../assets/images/dishes/image_Dishes_2.png";
import dish3 from "../../../assets/images/dishes/image_Dishes_3.png";
import dish4 from "../../../assets/images/dishes/image_Dishes_4.png";
import dish5 from "../../../assets/images/dishes/image_Dishes_5.png";
const PopDishes = () => {
  const dishes = [dish1, dish2, dish3, dish4, dish5];
  return (
    <section>
      <Heading bigTXT={"Popular Dishes"} smallTXT={"Food Items"} />
      <div className="py-4 min-container">
        <Row className=" justify-content-center align-items-center">
          {dishes.map((dish, idx) => (
            <Col md="2"   xs="6" className="mb-2 " key={idx}>
              <img  className="w-100 rounded " src={dish} alt={`dish ${idx}`} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopDishes;
