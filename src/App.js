import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import RoutesProviders from "./routes/routes";


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <RoutesProviders />
      </ChakraProvider>
    </BrowserRouter>
  );
}


export default App;
