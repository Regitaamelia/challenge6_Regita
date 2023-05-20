import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function App() {
  const iconSize = 40;

  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#00BFFF",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaFacebookF color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#1DA1F2",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaTwitter color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#FF0000",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaGoogle color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#F0FFFF",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaInstagram color="black" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#1DA1F2",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaLinkedin color="white" />
          </Button>
          <Button
            className="me-4"
            style={{
              backgroundColor: "#00BFFF",
              width: iconSize,
              height: iconSize,
              borderRadius: "30%",
            }}
            href="/"
          >
            <FaGithub color="white" />
          </Button>
        </div>
      </section>

      <div className="text-center p-4">
        ©2023 Copyright
        <br></br>
        <a className="text-reset fw-bold" href="https://react.com/">
          www.react.com
        </a>
      </div>
    </MDBFooter>
  );
}
