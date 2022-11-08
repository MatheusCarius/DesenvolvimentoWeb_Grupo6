import { useEffect, useState } from "react";
import productService from "../../Services/requests/productService";
import { useNavigate, Link } from "react-router-dom";


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
            <span>Serial: {res.id}</span>
            <br></br>
            <span>Nome: {res.nome}</span>
            <br></br>
            <span>Descrição: {res.descricao}</span>
            <br></br>
            <span>QTD: {res.qtdEstoque}</span>
            <br></br>
            <span>Valor: {res.valor}</span>
            <br></br>
            <span>Categoria: {res.nomeCategoria}</span>
            <br></br>
            <span>Funcionário: {res.nomeFuncionario}</span>
            <br></br>
            <span>Data Fabricação: {res.dataFabricacao}</span>
            <br></br>
            <img src={res.fotoLink} alt="Foto do produto" width="200px" />
            <br></br>
            <button onClick={()=> handleSelectId(res.id)}>Ver Produto</button>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}