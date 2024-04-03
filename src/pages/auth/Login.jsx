import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import "./style.css"
import PrimaryButton from '../../components/ui/PrimaryBtn';
import { Link } from 'react-router-dom';
import CommonSection from '../../components/CommonSection';
import banner from "../../assets/images/a.jpg"
import Meta from '../../components/Meta';
function Login() {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <>
    <Meta title={"Login Page"} desc={"Lorem ipsum dolor sit amet."}/>
    <CommonSection img={banner} title={"Login"}/>
    <div className="mx-auto pt-5" style={{
        maxWidth:"500px"
    }}>
      <p className="fs-2 mb-2 fw-bold text-center text-md-start">
        Welcome back
      </p>
      <p className="fs-info text-center text-md-start">
        Welcome back! Please enter your details
      </p>
      <Form className="d-flex flex-column">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="mb-1">Email</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="mb-1">Password</Form.Label>
          <div className="cont-pass position-relative">
            <Form.Control
              type={passwordShow ? "text" : "password"}
              name="password"
            />
            <div className="show-hide d-flex justify-content-center align-items-center position-absolute">
              {passwordShow ? (
                <BsEye className="text-red" onClick={() => setPasswordShow(false)} />
              ) : (
                <BsEyeSlash className="text-red" onClick={() => setPasswordShow(true)} />
              )}
            </div>
          </div>
        </Form.Group>

        <PrimaryButton type="submit" className="mb-4  rounded-3 w-25 mx-auto">
          Sign in
        </PrimaryButton>
        <span className="d-block mx-auto ">
          Don't have an account?{' '}
          <Link to={"/register"} className="text-red cursor-pointer" >
            Sign Up
          </Link>
        </span>
      </Form>
    </div>
    </>
  );
}

export default Login;
