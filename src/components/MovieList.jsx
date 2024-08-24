import { getMovies } from "../lib/get-movies";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { Heading,Grid, Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";


// import Navbar from "./Navbar";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  useEffect(() => {
    getMovies()
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);
  return (
    <>
      <Heading fontSize="50px" textAlign="center" color="red.600">
        {/* <Navbar/> */}
      </Heading>
      <Box px={isMobile ? 4 : 8}>
        <Grid
          templateColumns={
            isDesktop
              ? "repeat(3, 1fr)"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(1, 1fr)"
          }
          gap={6}
        >
        {movieList.map((movie, index) => (
          <Movie movie={movie} key= {index} />
        ))}
      </Grid>
      </Box>
    </>
  );
}

export default MovieList;
