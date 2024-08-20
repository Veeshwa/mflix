
import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="left">
        <Box color="red" fontSize="40px">MFLIX</Box>
        <Box px={5}></Box>
        <Flex alignItems="center">
          <Link href="#home" px={2} fontSize="20px" color="white">Home</Link>
          <Link href="#about" px={2} fontSize="20px" color="white">TvShows</Link>
          <Link href="#contact" px={2} fontSize="20px" color="white">Movies</Link>
          <Link href="#contact" px={2} fontSize="20px" color="white">News&Popular</Link>
          <Link href="#contact" px={2} fontSize="20px" color="white">BrowseByLanguages</Link>
          <Link href="#contact" px={2} fontSize="20px" color="white">MyList</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;