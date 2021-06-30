import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron, Card, Container } from "react-bootstrap";

export default function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/restapi/movies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setMovie(data[0]);
      })
      .catch((err) => console.log);
  }, [id]);

  return (
    <>
      <Jumbotron>
        <Container fluid>
          <Card style={{ width: 500 }}>
            <Card.Body>
              <Card.Title>Tilte: {movie.original_title}</Card.Title>
              <Card.Text>Tagline :{movie.tagline}</Card.Text>
              <Card.Text>Vote Average : {movie.vote_average}/10</Card.Text>
              <Card.Text>Release date : {movie.release_date}</Card.Text>
              <Card.Text>Runtime : {movie.runtime} minutes</Card.Text>
              <Card.Text>Overview : {movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    </>
  );
}
