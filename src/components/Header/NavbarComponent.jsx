import React, { useState, useEffect } from "react";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Navbar.css";

function NavbarComponent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    navigate("/search", { state: { query } });
  };
  return (
    <Navbar expand="lg" className="transparant fixed-top p-2">
      <Container fluid>
        <Navbar.Brand className="text-warning fs-1 Navbar-logo " as={Link} to={"/"}>
          Movielist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning text-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <div className="ml-auto">
              <Form onSubmit={handleSearch}>
                <input type="search" placeholder="Search" name="query" className="Navbar-search" />
              </Form>
              <div>
                {isLoggedIn ? (
                  <>
                    <Button variant="outline-warning" className="Navbar-button-lg" as={Link} to={"/users/dashboard"}>
                      Dashboard
                    </Button>
                    <Button
                      variant="warning"
                      className="Navbar-button"
                      onClick={() => {
                        localStorage.removeItem("token");
                        setIsLoggedIn(false);
                        return navigate("/");
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline-warning" className="Navbar-button" as={Link} to={"/login"}>
                      Login
                    </Button>
                    <Button variant="warning" className="Navbar-button" as={Link} to={"/register"}>
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
