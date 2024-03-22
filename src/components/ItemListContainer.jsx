import React from 'react';
import { Box } from '@chakra-ui/react';

const ItemListContainer = ({ message }) => {
  return (
    <Box>
      <h2>{message}</h2>
      {/* Aquí mostrarás el catálogo de productos en futuras implementaciones */}
    </Box>
  );
}

export default ItemListContainer;