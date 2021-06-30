import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Card, Button, Container } from "react-bootstrap";

export default function Home() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http::/localhost:3001/restapi/movies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.log);
  }, []);

  return (
    <>
      <Jumbotron>
        <Container fluid>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>title: {movie.original_title}</Card.Title>
              <Card.Text>tagline :{movie.tagline}</Card.Text>
              <Card.Text>Vote Average : {movie.vote_average}/10</Card.Text>
              <Card.Text>Overview : {movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    </>
  );
}
