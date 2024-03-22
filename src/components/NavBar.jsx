import React from 'react';
import { Flex, Box, Spacer, Heading } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex p="4" bg="blue.500" color="white">
      <Box p="2">
        Logo
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
        Carrito
      </Box>
    </Flex>
  );
}

export default NavBar;