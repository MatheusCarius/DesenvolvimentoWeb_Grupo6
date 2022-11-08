
import {Container, Button} from "./styled"
import {useNavigate} from "react-router-dom"




export function Home(){


  const navigate = useNavigate();

    function handleGoProducts() {
        navigate("/sobre", {state: {

        }});
    }

  
return (
    <> 
    <Container>
      <h1 className="title">Serra Shop</h1>    
    </Container>
    
    <Button>
    <button className="buttonHome"  style={{  width: 60, height: 30, marginTop: 10 }} onClick={handleGoProducts}>Sobre</button><br/>
    <button className="buttonHome" style={{  width: 60, height: 30, marginTop: 10 }} onClick={() => navigate("/pedido")}>Pedidos</button>
    </Button>

   
    
  
        </>
  );
}
