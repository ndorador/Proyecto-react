import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Image
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, precio, stock, img }) => {
  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades`);
  };

  return (
    <Card maxW="sm" m={2} w={"100%"}>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius="lg"
          boxSize="100%"
          objectFit="cover"
          w="400px"
          h="400px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color="#608e8e" h={"4rem"}>
            {nombre}
          </Heading>
          <Text color="#c86f43" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
