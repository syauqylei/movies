import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron, Card, Button, Container } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const toPage = (id) => {
    history.push(`/detail/${id}`);
  };
  useEffect(() => {
    fetch("http://localhost:3001/restapi/movies")
      .then((r) => r.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log);
  }, []);
  return (
    <>
      <Jumbotron>
        <Container fluid>
          <div className="row justify-content-center">
            {movies.map((item, key) => (
              <Card key={key} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.original_title}</Card.Title>
                  <Card.Text>{item.tagline}</Card.Text>
                  <Card.Text>Vote Average : {item.vote_average}/10</Card.Text>
                  <Button variant="primary" onClick={() => toPage(item.id)}>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}
