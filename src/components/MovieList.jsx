import { getMovies } from "../lib/get-movies";
import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter,Stack,ButtonGroup,Image,Heading,Text,Divider,Button ,Grid} from '@chakra-ui/react'

function MovieList() {
    const [movieList , setMovieList] = useState([]);
    useEffect(() => {
        getMovies()
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }, []);
    return ( 
    <>
    
        <Heading fontSize='50px' textAlign="center" color='red.600'>M flix</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {/* <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}
        {
            
            movieList.map((movie,index) =>(
               
                     <Card key={index} maxW='sm'>
  <CardBody>
    <Image
    src=""
      alt='Comming soon!'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{movie.title}</Heading>
      <Text>
        {movie.overview}
      </Text>
      <Text color='red.600' fontSize='2xl'>
        $1299 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='3'>
      <Button variant='solid' colorScheme='red'>
        Watch
      </Button>
      <Button variant='ghost' colorScheme='red'>
       Rent
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
                    
                
            ))
        }
       </Grid>

       
        
    </>
     );
}

export default MovieList;