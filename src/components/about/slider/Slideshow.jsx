import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Slideshow = () => {
  return (
    <Card className="bg-transparent border-0">
      <Card.Body>
        <Card.Title className="fw-bold text-red">Birthday Party</Card.Title>
        <Card.Text className="text-link">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Slideshow;
