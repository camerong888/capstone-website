import "./App.css";
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';

function App() {
  return (
    <ChakraProvider>
      <Header pageTitle="Home" />
      {/* other components or pages here */}
    </ChakraProvider>
  );
}

export default App;