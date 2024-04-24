import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { redirect, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const ItemListContainer = ({title}) => { 
  const [ products, setProducts ] = useState([])
  const { categoryId } = useParams()


  useEffect(() => { 
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
    .then((el) => setProducts(el))
    .catch((error) => console.log(error))
    .finally(() => setloading(false))
  }, {categoryId})

  return (
    <Box>
      <Heading textAlign={'center'} mt={4} color={'#416d6d'}>{title}</Heading>
      {
        loading ?
        <GridLoader color="#36d7b7" />
        :
        <ItemList products={products} />
      }
    </Box>
  )
};

export default ItemListContainer;