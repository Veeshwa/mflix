// src/components/Profile.js

import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Text, VStack } from '@chakra-ui/react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <VStack spacing={4} align="center" mt={10}>
        <Avatar name={user.name} src={user.picture} size="2xl" />
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">{user.name}</Text>
          <Text fontSize="lg" color="gray.600">{user.email}</Text>
        </Box>
      </VStack>
    )
  );
};

export default Profile;
