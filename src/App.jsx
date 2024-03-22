import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

const App = () => {
  return (
  
    <ChakraProvider>
      <NavBar />
      <Contenedor mensaje="¡Bienvenido a nuestra tienda en línea!" />
      <ItemListContainer mensaje="Nuestro Catálogo de productos" />
      <CartWidget />
    </ChakraProvider>
  );
}

export default App;