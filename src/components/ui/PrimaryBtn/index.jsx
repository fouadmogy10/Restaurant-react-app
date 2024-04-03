import { Button } from "react-bootstrap";
import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <Button className={` border-0 def-btn fw-bold  ${className} `}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
