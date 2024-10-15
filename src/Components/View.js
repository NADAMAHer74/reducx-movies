import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button, Stack } from "react-bootstrap"; // Import necessary components
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions/moviesActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../styles.css";

export function View() {
  const { id } = useParams();

  const movie = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  return (
    <>
      <div className="App">
        <Container>
          {movie ? (
            <Row className="py-5">
              <Col sm={6} md={4} className="mb-4 MovieColum">
                <Card style={{ color: "white", backgroundColor: "black" }}>
                  <div className="overflow-hidden">
                    <Card.Img
                      className="MovieImage"
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                </Card>
              </Col>
              <Col
                sm={6}
                style={{
                  display: "inline-block",
                  margin: "auto",
                }}
              >
                <Stack>
                  <Button variant="outline-dark" className="text-white">
                    {movie.overview}
                    <br />
                    <div style={{ color: "yellow" }}>
                      {movie.vote_average}
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    Release Date: {movie.release_date}
                  </Button>
                </Stack>
                <Link to="/" className="btn btn-dark my-3">
                  Back
                </Link>
              </Col>
            </Row>
          ) : (
            <div className="text-white">Not available Movie</div>
          )}
        </Container>
      </div>
    </>
  );
}
