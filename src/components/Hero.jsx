

import{ useState,useEffect } from 'react'
import { getNowPlaying } from '../lib/now-playing'
import {
  Box,
  IconButton,

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
import { useMediaQuery } from 'react-responsive';
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
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const topPosition = isDesktopOrLaptop ? '50%' : isTablet ? '55%' : '85%';
  const sidePosition = isDesktopOrLaptop ? '40px' : '10%';

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
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
        left={sidePosition}
        top={topPosition}
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
        right={sidePosition}
        top={topPosition}
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
            height={isMobile ? '500px' : isTablet ? '550px' : '600px'}
            position="relative"
            backgroundPosition={isMobile ? "center" : isTablet ? "center" : '900px'}
            backgroundColor="black"
            backgroundRepeat="no-repeat"
            backgroundSize={isMobile ? "cover": isTablet ? "400px" : '400px'}
            backgroundImage={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={isMobile ? 'xs' : 'lg'}
                position="absolute"
                top={isMobile?"40%":isTablet?"40%":"30%"}
                transform={isMobile? "translate(0,-50%)" : isTablet? "translate(0,-50%)":"translate(-60%,0)"}
                p={isMobile ? 4 : 8}>
                <Heading fontSize={isMobile ? '2xl' : isTablet ? '3xl' : '5xl'} color='antiquewhite'>
                  {card.title}
                </Heading>
                <Text fontSize={isMobile ? 'sm' : 'lg'}  color="white">
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