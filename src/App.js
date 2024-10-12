import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap"; // Import necessary components

import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "./redux/actions/moviesActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const allMovies = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <div className="App">
        <Container>
          <Row className="py-5">
            {allMovies.length > 0 ? (
              allMovies.map((movie) => (
                <Col
                  key={movie.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 MovieColum"
                >
                  <Card style={{ color: "white", backgroundColor: "black" }}>
                    <div className="overflow-hidden">
                      <Card.Img
                        className="MovieImage"
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>

                    <div className="MovieOvelay">{movie.overview}</div>

                    <Card.Body>
                      <Card.Title className="Title">{movie.title}</Card.Title>
                      <Card.Text style={{ color: "yellow" }}>
                        {movie.vote_average}
                        <FontAwesomeIcon icon={faStar} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No movies available</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}
