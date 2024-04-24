import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { 
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
    Box
 } from '@chakra-ui/react'
 import { FaAngleDown } from "react-icons/fa";
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex justify={'space-between'} align={'center'} className='navbar'>

      <Heading ml={4} color={'#c86f43'}>60745</Heading>
      <Menu>
        <MenuButton as={Button} color={'#c86f43'} rightIcon={<FaAngleDown />}>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem color={'#c86f43'}><Link to='/categoria/Remeras'>Remeras</Link> </MenuItem>
            <MenuItem color={'#c86f43'}><Link to='/categoria/Buzos'>Buzos</Link></MenuItem>
            <MenuItem color={'#c86f43'}><Link to='/categoria/Pijamas'>Pijamas</Link></MenuItem>
            <MenuItem color={'#c86f43'}><Link to='/categoria/Zapatillas'>Zapatillas</Link></MenuItem>
        </MenuList>
        </Menu>

      <CartWidget />
    </Flex>
  )
}

export default NavBar