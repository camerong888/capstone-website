import React from 'react';
import { Box, Text, Button, Flex, Spacer } from '@chakra-ui/react';

const Header = ({ pageTitle }) => {
  return (
    <Box bg="blue.500" w="100%" p={4} color="white">
      <Flex>
        <Box p="2">
          <Text fontSize="xl">{pageTitle}</Text>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Create Account
          </Button>
          <Button colorScheme="teal">
            Login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
