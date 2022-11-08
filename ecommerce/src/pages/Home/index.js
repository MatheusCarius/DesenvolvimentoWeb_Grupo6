
import { Container, ImageDesktop } from "./styled"
import { useNavigate } from "react-router-dom"
import FotoHomeDesk from "../../Sources/img/principal.png";


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
      <ImageDesktop
        src={FotoHomeDesk}
        alt="principal"
      />
      </Container>


     



    </>
  );
}
