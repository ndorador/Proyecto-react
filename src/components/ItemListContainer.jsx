import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <Box p="4">
      <Heading as="h2" size="xl" textAlign="center" mt="4">
        {mensaje}
      </Heading>
      {/* Aquí irá el catálogo de productos */}
    </Box>
  );
}

export default ItemListContainer;