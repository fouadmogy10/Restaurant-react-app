import { BsFillCartFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.png";
import delivery from "../../assets/images/food 1.png";
import PrimaryButton from "../ui/PrimaryBtn";
import { Link } from "react-router-dom";
function NavBar() {
  const links = [
    { title: "home", href: "" },
    { title: "about", href: "about" },
    { title: "items", href: "items" },
    { title: "contact", href: "contact" },
  ];
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-tertiary  mb-3">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" width={50} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 align-items-center">
                  {links.map((link) => (
                    <Link
                    key={link.title}
                      to={link.href}
                      className="nav-link text-link text-uppercase fw-bold"
                    >
                      {link.title}
                    </Link>
                  ))}
                </Nav>
                <div className="d-flex  gap-2 align-items-center justify-content-center ">
                  <span className="cart position-relative rounded-circle p-2 ">
                    <BsFillCartFill />
                    <span className="tooptal">2</span>
                  </span>
                  <div className="d-flex   align-items-center gap-1">
                    <div>
                      <h5 className="mb-0">Delivery Order</h5>
                      <span>+880 1630 225 015</span>
                    </div>
                    <img src={delivery} alt="delivery" />
                  </div>
                </div>
                 <div className="text-center">
                 <PrimaryButton className={"m-2  d-md-block"}>
                    <Link to={"login"}>
                    Login
                    </Link>
                  </PrimaryButton>
                 </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
