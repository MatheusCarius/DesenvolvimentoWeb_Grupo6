import { useEffect, useState } from "react";
import productService from "../../Services/requests/productService";
import { useNavigate } from "react-router-dom";


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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Produtos</h1>

      {product.map((res) => {
        return (
          <div key={res.id}>
            <img src={res.fotoLink} alt="Foto do produto" width="200px" />
            <br></br>
            <span>{res.nome}</span>
            <br></br>
            <span>{res.nomeCategoria}</span>
            <br></br>
            <span>R$ {res.valor},00</span>
            <br></br>
            <button onClick={()=> handleSelectId(res.id)}>Ver Produto</button>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}