import { useEffect, useState } from "react";
import productService from "../../Services/requests/productService";
import { useLocation } from "react-router-dom";


export function ProductPage() {
    const getId  = useLocation();
    const [product, setProduct] = useState([]);

    useEffect(() => {
      productService
        .getProductsById(getId.state.id)
        .then((response) => {
          console.log(response);
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Produto</h1>

              <div key={product.id}>
                <img src={product.fotoLink} alt='Foto do produto' width="500px"/><br></br>
                <span>{product.nome}</span><br></br>
                <span>{product.nomeCategoria}</span><br></br>
                <span>Estoque: {product.qtdEstoque}</span><br></br>
                <span>Preço: R$ {product.valor},00</span><br></br>
                <span>Descrição: {product.descricao}</span><br></br>
                <br></br>
              </div>
          
        </div>
      );

}