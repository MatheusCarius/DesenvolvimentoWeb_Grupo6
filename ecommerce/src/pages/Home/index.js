
import {Container, Button} from "./styled"
import {useNavigate} from "react-router-dom"




import {Container} from "./styled"
import { Categoria } from "../CategoryADM";
import { ListaCategorias } from "../TabelasCategory/styled";
import { TabelaPedidos } from "../../components/TabelasPedido";
import { AdmPedido } from "../PedidoADM";

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
    <button className="buttonHome"  onClick={handleGoProducts}>Sobre</button><br/>
    <button className="buttonHome"  onClick={() => navigate("/pedido")}>Pedidos</button>
    </Button>

   
    
  
        </>
  );
}
