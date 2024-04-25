import React, { useEffect, useState } from "react";
import { getProductById } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"; 

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((prod) => setProducto(prod))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
