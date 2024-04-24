import React, {useEffect, useState} from "react";
import { getProductById, productos } from "../../data/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [ producto, setProducto ] = useState({})
    const {productId} = useParams()
  
    console.log(typeof productId)

    useEffect(() => {
        getProductById(producId)
           .then((prod) => setProducto(prod))
           .catch((error) => console.log(error))

    },[productId])

    
return (
    <div>
      <ItemDetail {...producto} />
    </div>
 )
}

export default ItemDetailContainer