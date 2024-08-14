import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    ButtonGroup,
    Image,
    Heading,
    Text,
    Divider,
    Button,
  } from "@chakra-ui/react";
function Movie({movie}) {
    const url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return ( 
        <Card  maxW="sm">
        <CardBody>
          <Image src={url} alt="Comming soon!" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{movie.title}</Heading>
            <Text>{movie.overview}</Text>
            <Text color="red.600" fontSize="2xl">
              $1299
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="3">
            <Button variant="solid" colorScheme="red">
              Watch
            </Button>
            <Button variant="ghost" colorScheme="red">
              Rent
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
     );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;