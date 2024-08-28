

import{ useState,useEffect } from 'react'
import { getNowPlaying } from '../lib/now-playing'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}
 function Hero() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getNowPlaying()
      .then((response) => response.json())
      .then((data) => {
        const fiveMovie=data.results.slice(0,5);
        setMovieList(fiveMovie);
      });
  }, []);
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box position={'relative'} height={'640px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        color="white"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        color="white"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {movieList.map((card, index) => (
          <Box
            key={index}
            height="600px"
            position="relative"
            backgroundPosition="900px"
            backgroundColor="black"
            backgroundRepeat="no-repeat"
            backgroundSize="400px"
            backgroundImage={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="40%"
                transform="translate(-60%,0)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color='red'>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                  {card.overview}
                  <br/><br/>
                  <Button colorScheme='red'>Play</Button>&nbsp;
                  <Button colorScheme='red'>More info</Button>
                </Text>
               
              </Stack>
            </Container>
                       
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
export default Hero;