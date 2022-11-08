import { useEffect, useState } from "react";
import productService from "../../Services/requests/productService";
import { useNavigate, Link } from "react-router-dom";
import {ProdutoButton, ProdutoImg,ProdutoDescricao,ContainerProduto} from  "./style";
import { Container } from "../../styles/global";

export function ProductList() {
  
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  function handleSelectId(Id) {
    navigate("/produto-view", {state: {
        id: Id
    }});
}

  useEffect(() => {
    productService
      .getProducts()
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    
      {product.map((res) => {
        return (  
        <ContainerProduto>
          <div key={res.id}>
            <ProdutoImg img src={res.fotoLink} alt="Foto do produto" width="200px" />
            <br></br>
            <span>{res.nome}</span>
            <br></br>
            <span>{res.nomeCategoria}</span>
            <br></br>
            <span>R$ {res.valor},00</span>
            <br></br>
            <ProdutoButton button onClick={()=> handleSelectId(res.id)}>Ver Produto</ProdutoButton>
            <br></br>
          </div>
          </ContainerProduto>
        );
      })}
    </div>
  );
}