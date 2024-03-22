import React from 'react';
import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex p="4" bg="blue.500" color="white">
      <Box p="2">
      <img src="src/assets/img/logos/logo.png" height="40px" />
      </Box>
      <Spacer />
      <Box p="2">
        <Heading size="md">Inicio</Heading>
      </Box>
      <Box p="2">
        <Heading size="md">Productos</Heading>
      </Box>
      <Box p="2">
        <Heading size="md">Contacto</Heading>
      </Box>
      <Box p="2">
        <CartWidget />
      </Box>
    </Flex>
  );
}

export default NavBar; 