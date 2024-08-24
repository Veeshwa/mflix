import { getPopularMovie } from "../lib/get-popularMovie";
import { useEffect, useState } from "react";
import {
  Heading,
  Grid,
  Box,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import PopularMovie from "./PopularMovie";

function PopularMovieList() {
  const [movieList, setMovieList] = useState([]);

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
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
        {movieList.map((popmovie, index) => (
          <PopularMovie popmovie={popmovie} key= {index} />
        ))}
      </Grid>
      </Box>
    </>
  );
}

export default PopularMovieList;
