import { getMovies } from "../lib/get-movies";
import { useEffect, useState } from "react";
import { Card,Grid,  CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'


function MovieList() {
    const [movieList , setMovieList] = useState([]);
    useEffect(() => {
        getMovies()
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }, []);
    return ( 
    <>
        <Heading size='lg' textAlign='center' fontSize='50px'>
            Mflix
        </Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
            movieList.map((movie, index) =>(
                
                <li key={index}>
                   <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg'
      alt='Image neeed to add'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{movie.title}</Heading>
      <Text>
       {movie.overview}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Release Date : {movie.release_date}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Overview
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Rent ?
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
                </li>
               
            ))
        }
        </Grid>
        
    </>
     );
}

export default MovieList;