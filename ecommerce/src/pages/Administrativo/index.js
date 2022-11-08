import { useNavigate } from "react-router-dom";
import { Background, BotoesPainel } from "./styled";

function PainelAdministrativo(props) {
  const navigate = useNavigate();

  return (
    <>
    <Background> 
        
      <BotoesPainel>
        <button onClick={() => navigate("/painel_administrativo/pedido")}>Pedidos</button>
        <button onClick={() => navigate("/painel_administrativo/cliente")}>Clientes</button>
        <button onClick={() => navigate("/painel_administrativo/categoria")}>Categorias</button>
        <button onClick={() => navigate("/painel_administrativo/produto")}>Produtos</button>
      </BotoesPainel>
    </Background>
    </>
  );
}

export default PainelAdministrativo;
