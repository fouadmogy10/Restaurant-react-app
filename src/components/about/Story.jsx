import React from "react";
import storyImg from "../../assets/images/image_ourStory_1.jpg";
import Heading from "../ui/Heading";
import { Col, Row } from "react-bootstrap";
const Story = () => {
  return (
    <section className="container-80  my-5">
      <Heading bigTXT={"Our Story"} />
      <Row className="align-items-center justify-content-center ">
        <Col lg="6" xs="12">
          <p className="text-link fw-bold mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passage
          </p>
        </Col>
        <Col lg={6} className="text-center  mb-3">
          <img
            src={storyImg}
            className="w-100 h-100 object-fit-contain rounded mt-4"
            alt=""
          />
        </Col>
        
      </Row>
    </section>
  );
};

export default Story;
