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
function PopularMovie ({popmovie}) {
    const url = `https://image.tmdb.org/t/p/w500/${popmovie.poster_path}`
    return ( 
        <Card  maxW="sm">
        <CardBody>
          <Image src={url} alt="Comming soon!" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{popmovie.title}</Heading>
            <Text>{popmovie.overview}</Text>
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

PopularMovie.propTypes = {
  popmovie: PropTypes.object.isRequired,
};

export default PopularMovie;