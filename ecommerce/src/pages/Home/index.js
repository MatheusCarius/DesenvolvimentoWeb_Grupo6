
import { Container, Button } from "./styled"
import { useNavigate } from "react-router-dom"
import { AdmPedido } from "../PedidoADM";


export function Home() {



  const navigate = useNavigate();

  function handleGoProducts() {
    navigate("/sobre", {
      state: {

      }
    });
  }


  return (
    <>
      <Container>
        <h1 className="title">Serra Shop</h1>
        <AdmPedido/>
      </Container>


     



    </>
  );
}
