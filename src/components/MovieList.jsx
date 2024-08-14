import { getMovies } from "../lib/get-movies";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import {
  Heading,
  Grid,
} from "@chakra-ui/react";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovies()
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);
  return (
    <>
      <Heading fontSize="50px" textAlign="center" color="red.600">
        M flix
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}
        {movieList.map((movie, index) => (
          <Movie movie={movie} key= {index} />
        ))}
      </Grid>
    </>
  );
}

export default MovieList;
