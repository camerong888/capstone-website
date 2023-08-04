import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, Box, Text, Button, Flex, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Flex>
          <Box p="2">
            <Text fontSize="xl">SummitSignal</Text>
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
    </ChakraProvider>
  );
}

export default App;
