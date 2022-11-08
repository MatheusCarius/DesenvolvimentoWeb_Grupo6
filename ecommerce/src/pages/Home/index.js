
import {Container} from "./styled"
import { Categoria } from "../CategoryADM";
import { ListaCategorias } from "../TabelasCategory/styled";
import { TabelaPedidos } from "../../components/TabelasPedido";
import { AdmPedido } from "../PedidoADM";

export function Home(){
  
return (
    <> 
    <Container>
      <h1 className="title">Serra Shop</h1>
     
    <AdmPedido/>
    </Container>
        </>
  );
}
