import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import MovieCard from "../components/Card/MovieCard";
import Header from "../components/Header/Header";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/postActions";

function Home() {
  // To set the state of the store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const [popularMovieList, setPopularMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMovieList(page) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/v1/movie/popular?page=${page}`);
        setPopularMovieList(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getMovieList();
  }, [page]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="mx-4 py-3">
          <Col xs={12} md={8}>
            <div className="">
              <h1 style={{ color: "rgb(221, 189, 47)" }}>Populer Movie</h1>
            </div>
          </Col>

          <Col className="d-flex justify-content-end px-3" xs={6} md={4}>
            <div className="d-flex align-items-center ">
              <button
                type="button"
                onClick={loadMoreMovies}
                style={{
                  border: "none",
                  background: "rgb(11, 47, 68)",
                  color: "rgb(221, 189, 47)",
                }}
              >
                More <AiOutlineArrowRight />
              </button>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-wrap justify-content-center">
          {popularMovieList.map((movie, i) => (
            <MovieCard
              key={i}
              title={movie.title}
              poster={movie.poster_path}
              to={`/users/detail/${movie.id}`}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;