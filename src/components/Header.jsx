import { Box, Flex,Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header () {
  return (
    
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="left">
        <Box color="red" fontSize="40px">MFLIX</Box>
        <Box px={5}></Box>
        <Flex alignItems="center">
         <ChakraLink as={Link} to="/" style={{ padding: '8px', fontSize: '20px', color: 'white' }}>Home</ChakraLink>
         <ChakraLink as={Link} to="/movie" px={2} fontSize="20px" color="white">Movie</ChakraLink>
         <ChakraLink as={Link} to="/popular" px={2} fontSize="20px" color="white">New&Popular</ChakraLink>
         <ChakraLink as={Link} to="/popular" px={2} fontSize="20px" color="white">BrowseByLanguage</ChakraLink>
         <ChakraLink as={Link} to="/popular" px={2} fontSize="20px" color="white">MyList</ChakraLink>
        </Flex>
      </Flex>
    </Box>
    
  );
}


export default Header;