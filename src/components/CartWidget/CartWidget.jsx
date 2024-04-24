import { Box, Badge, Flex } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <Flex mr={4}>
      <MdOutlineShoppingCart className='cartIcon'/>
      <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'} >
        <Badge borderRadius={'50%'}  color={'#c86f43'} fontSize={'xl'}>3</Badge>
      </Flex>
    </Flex>
  )
}

export default CartWidget