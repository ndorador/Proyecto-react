import React from 'react';
import { Box } from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';


const CartWidget = () => {
  return (
    <Box p="2">
      <RiShoppingCartLine size={24} />
    </Box>
  );
}

export default CartWidget;