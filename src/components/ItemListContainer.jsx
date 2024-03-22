import React from 'react';
import { Box } from '@chakra-ui/react';

const ItemListContainer = ({ message }) => {
  return (
    <Box>
      <h2>{message}</h2>
      {/* Aquí estará el catálogo de productos*/}
    </Box>
  );
}

export default ItemListContainer;