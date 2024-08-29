import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
      if (isAuthenticated) {
          navigate('/home');
      }
  }, [isAuthenticated, navigate]);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const handleSignIn = () => {
      loginWithRedirect({
          authorizationParams: {
              // Pass the email address to Auth0
              login_hint: email,
          }
      });
  };

  return (
      <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bgImg={"https://media.licdn.com/dms/image/D5612AQGy6sM0SJAdxg/article-cover_image-shrink_720_1280/0/1693150322893?e=2147483647&v=beta&t=tmyCkhGahTKcBOOftyXZLhkLjtUIkqio94iGE3Y670E"}
          bgSize="cover"
          bgPos="center"
          p={4}
      >
          <Stack
              align={'flex-start'}
              transform={
                  isMobile
                      ? 'translate(145%, -650%)'
                      : isTabletOrMobile
                      ? 'translate(0%, -850%)'
                      : 'translate(30%, -480%)'
              }
              spacing={4}
          >
              <Heading color={"red"} fontSize={{ base: '30px', md: '40px', lg: '50px' }}>MFLIX</Heading>
          </Stack>

          <Stack
              spacing={8}
              mx={'auto'}
              maxW={{ base: 'xs', md: 'md', lg: 'lg' }}
              py={12}
              px={6}
              transform={isMobile ? 'translate(-17%, 0%)' : 'translate(-17%, 0%)'}
          >
              <Stack align={'center'} textAlign={'center'}>
                  <Heading color="white" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                      Unlimited movies, <br />TV shows and more
                  </Heading>
              </Stack>

              <Box
                  rounded={'lg'}
                  bg={'black'}
                  boxShadow={'lg'}
                  p={8}
              >
                  <Stack spacing={4}>
                      <FormControl color={'white'} id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input 
                              type="email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                          />
                      </FormControl>

                      <Button
                          bg={'red'}
                          color={'white'}
                          _hover={{
                              bg: 'blue.500',
                          }}
                          size={{ base: 'sm', md: 'md', lg: 'lg' }}
                          onClick={handleSignIn}
                      >
                          Log In
                      </Button>
                  </Stack>

              </Box>
          </Stack>
      </Flex>
  );
}
