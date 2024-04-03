import React from "react";
import { Form } from "react-bootstrap";
import PrimaryButton from "../../components/ui/PrimaryBtn";
import CommonSection from "../../components/CommonSection";
import banner from "../../assets/images/a.jpg"
import Meta from "../../components/Meta";
const Register = () => {
  return (
    <>
    <Meta title={"Registration Page"} desc={"Lorem ipsum dolor sit amet."}/>
    <CommonSection img={banner} title={"Register"}/>
    <div
      className="mx-auto pt-5"
      style={{
        maxWidth: "500px",
      }}
    >
      <Form className="d-flex flex-column">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="mb-1">Email</Form.Label>
          <Form.Control type="text"  className="mb-1" />
          <span className="text-red">
          A link to set a new password will be sent to your email address.
          </span>
        </Form.Group>

        <PrimaryButton type="submit" className="mb-4  rounded-3 w-25 mx-auto">
          Register
        </PrimaryButton>
      
      </Form>
    </div>
    </>
  );
};

export default Register;
