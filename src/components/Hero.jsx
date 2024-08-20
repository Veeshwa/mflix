
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,

} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      bgImage="42d89958-179c-46a2-75c8-403205ba5141.jpg"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          align="center"
          justifyContent="space-between"
        >
          <Stack spacing={6} maxW="lg">
            <Heading
              as="h1"
              size="2xl"
              color="white"
              fontWeight="bold"
              lineHeight="short"
            >
              Welcome to Our Service
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.900">
              Empowering your business with our innovative solutions. 
               build the future together.
            </Text>
            <Button
              size="lg"
              colorScheme="teal"
              bg="teal.400"
              _hover={{ bg: "teal.500" }}
              width={{ base: "full", sm: "auto" }}
            >
              Get Started
            </Button>
          </Stack>
         
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
