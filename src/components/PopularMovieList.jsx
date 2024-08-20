import { getPopularMovie } from "../lib/get-popularMovie";
import { useEffect, useState } from "react";
import {
  Heading,
  Grid,
} from "@chakra-ui/react";
// import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import PopularMovie from "./PopularMovie";

function PopularMovieList() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getPopularMovie()
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);
  return (
    <>
      <Heading fontSize="50px" textAlign="center" color="red.600">
        {/* <Navbar/> */}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}
        {movieList.map((popmovie, index) => (
          <PopularMovie popmovie={popmovie} key= {index} />
        ))}
      </Grid>
    </>
  );
}

export default PopularMovieList;
