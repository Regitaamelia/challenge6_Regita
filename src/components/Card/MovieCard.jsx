import React from "react";
import "../../style/Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ title, poster, to }) {
  return (
    <Card
      variant="outline-warning"
      as={Link}
      to={to}
      style={{
        width: "18rem",
        margin: "10px",
        background: "rgb(11, 47, 68)",
        outlineColor: "rgb(224, 208, 67)",
        outlineStyle: "outset",
      }}
      className="Card-component mb-5"
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
      />
      <Card.Body style={{ color: "black" }}>
        <Card.Title style={{ color: "rgb(224, 208, 67)" }}>
          <h4 className="text-center">{title}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
