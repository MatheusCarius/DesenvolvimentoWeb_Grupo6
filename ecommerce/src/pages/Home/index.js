
import { Container, ImageDesktop } from "./styled"
import { useNavigate } from "react-router-dom"
import FotoHomeDesk from "../../Sources/img/principal.png";
import { ProductList } from "../ProductList";


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
        <ProductList/>
      </Container>


     



    </>
  );
}
