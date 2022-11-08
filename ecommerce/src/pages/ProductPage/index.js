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
                <span>Serial: {product.id}</span><br></br>
                <span>Nome: {product.nome}</span><br></br>
                <span>Descrição: {product.descricao}</span><br></br>
                <span>QTD: {product.qtdEstoque}</span><br></br>
                <span>Valor: {product.valor}</span><br></br>
                <span>Categoria: {product.nomeCategoria}</span><br></br>
                <span>Funcionário: {product.nomeFuncionario}</span><br></br>
                <span>Data Fabricação: {product.dataFabricacao}</span><br></br>
                <img src={product.fotoLink} alt='Foto do produto' width="200px"/><br></br>
                <br></br>
              </div>
          
        </div>
      );

}