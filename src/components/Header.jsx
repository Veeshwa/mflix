import { Box, Flex, Link as ChakraLink, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const {logout} =useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption,setSelectOption]=useState('home');

  // Media queries for responsiveness
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick=()=>{
    setIsOpen(false);
  }

  const handleSelectClick=(option)=>{
    setSelectOption(option);
  }
  // Auth0 hook to get user information
  const { user, isAuthenticated } = useAuth0();

  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box color="red" paddingEnd={4} fontSize="40px">MFLIX</Box>

          {isDesktop && (
            <Flex alignItems="center" px={5}>
              <ChakraLink as={Link} to="/" px={2} fontSize="20px"  bg={selectOption === 'home' ? 'silver' : 'transparent'}
              color={selectOption === 'home' ? 'black' : 'white'}
              onClick={() => handleSelectClick('home')}   _hover={{ bg:'silver', color:'black' }}>
                Home
              </ChakraLink>
              <ChakraLink as={Link} to="/movie" px={2} fontSize="20px" bg={selectOption === 'movie' ? 'silver' : 'transparent'}
              color={selectOption === 'movie' ? 'black' : 'white'}
              onClick={() => handleSelectClick('movie')}   _hover={{ bg:'silver', color:'black' }}>
                Movie
              </ChakraLink>
              <ChakraLink as={Link} to="/popular" px={2} fontSize="20px"  bg={selectOption === 'popular' ? 'silver' : 'transparent'}
              color={selectOption === 'popular' ? 'black' : 'white'}
              onClick={() => handleSelectClick('popular')}   _hover={{ bg:'silver', color:'black' }}>
                New & Popular
              </ChakraLink>
              <ChakraLink as={Link} to="/browse" px={2} fontSize="20px" bg={selectOption === 'lang' ? 'silver' : 'transparent'}
              color={selectOption === 'lang' ? 'black' : 'white'}
              onClick={() => handleSelectClick('lang')}   _hover={{ bg:'silver', color:'black' }}>
                Browse by Language
              </ChakraLink>
              <ChakraLink as={Link} to="/mylist" px={2} fontSize="20px"  bg={selectOption === 'list' ? 'silver' : 'transparent'}
              color={selectOption === 'list' ? 'black' : 'white'}
              onClick={() => handleSelectClick('list')}   _hover={{ bg:'silver', color:'black' }}>
                My List
              </ChakraLink>
            </Flex>
          )}
        </Flex>

        <Flex alignItems="center">
          {isAuthenticated && (
            <Menu>
              <MenuButton
                as={Avatar}
                name={user.name}
                src={user.picture}
                size="sm"
                cursor="pointer"
              />
              <MenuList>
                <MenuItem as={Link} to="/profile">Profile</MenuItem>
                <MenuItem onClick={()=> logout({logoutParams: {returnTo:window.location.origin}})}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}

          {!isDesktop && (
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="outline"
              colorScheme="red"
              onClick={toggleMenu}
              ml={2}
            />
          )}
        </Flex>
      </Flex>

      {isTabletOrMobile && isOpen && (
        <Box pb={4}>
          <Flex direction="column" alignItems="start">
            <ChakraLink as={Link} to="/"  onClick={handleOptionClick}  px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/movie" onClick={handleOptionClick} px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Movie
            </ChakraLink>
            <ChakraLink as={Link} to="/popular" onClick={handleOptionClick} px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              New & Popular
            </ChakraLink>
            <ChakraLink as={Link} to="/browse" onClick={handleOptionClick} px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              Browse by Language
            </ChakraLink>
            <ChakraLink as={Link} to="/mylist"  px={2} py={2} fontSize="20px" color="white" _hover={{ textDecoration: 'none' }}>
              My List
            </ChakraLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Header;
