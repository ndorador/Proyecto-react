import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Contenedor = ({ mensaje }) => {
  return (
    <Box p="4">
      <Heading as="h1" size="lg" textAlign="center" mt="4">
        {mensaje}
      </Heading>
      {/* Aquí irá el catálogo de productos */}
    </Box>
  );
}

export default Contenedor;