import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/restapi/movies")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Movies</Link>
            </Navbar.Brand>
          </Navbar>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
