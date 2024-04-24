import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const Item = ({ nombre, precio, img, stock, id }) => {
  return (
    <Card maxW="sm" m={2} w={'100%'} >
        <CardBody>
            <Image
            src={img}
            alt={nombre}
            borderRadius="lg"
            boxSize='100%'
            objectFit='cover' 
            w='400px'
            h='400px' 
            />
            <Stack mt="6" spacing="3">
            <Heading size="md" color="#608e8e" h={'4rem'}> {nombre}</Heading>
            <Text color="#c86f43" fontSize="2xl">
                ${precio}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing="2">
            <Button variant="ghost" color="#c86f43" >
                <Link to={`/producto/${id}`}>
                    Ver detalle
                </Link>
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  );
};

export default Item;