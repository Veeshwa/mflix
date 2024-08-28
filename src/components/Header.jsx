import { Box, Flex, Link as ChakraLink, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Media queries for responsiveness
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center"  justifyContent="flex-start">
        <Box color="red"paddingEnd={4} fontSize="40px">MFLIX</Box>

        {isDesktop ? (
          <Flex alignItems="center" px={5}>
            <ChakraLink as={Link} to="/" px={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/movie" px={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Movie
            </ChakraLink>
            <ChakraLink as={Link} to="/popular" px={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              New & Popular
            </ChakraLink>
            <ChakraLink as={Link} to="/browse" px={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Browse by Language
            </ChakraLink>
            <ChakraLink as={Link} to="/mylist" px={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              My List
            </ChakraLink>
          </Flex>
        ) : (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="outline"
            colorScheme="red"
            
            onClick={toggleMenu}
          />
        )}
      </Flex>

      {isTabletOrMobile && isOpen && (
        <Box pb={4}>
          <Flex direction="column" alignItems="start">
            <ChakraLink as={Link} to="/" px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/movie" px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Movie
            </ChakraLink>
            <ChakraLink as={Link} to="/popular" px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              New & Popular
            </ChakraLink>
            <ChakraLink as={Link} to="/browse" px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Browse by Language
            </ChakraLink>
            <ChakraLink as={Link} to="/mylist" px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              My List
            </ChakraLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Header;
