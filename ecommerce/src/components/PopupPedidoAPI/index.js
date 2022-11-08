import React, { useState } from "react";
import { PopupStyle } from "./style";
import { Loader } from "../Loader";
import { api } from "../../Services/api/api"

export const PopupPedidoAPI = (props) => {
  
  const [isConfirmado, setConfirmado] = useState(false)
  const [statusAPI, setStatusAPI] = useState(0)
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function processarDelete() {
    setTimeout(function(){
        const deleteAPI = async () => {
            try {
              if(props.titulo === 'pedido') {
                let id = parseInt(props.id)
                const res = await api.delete('pedido', {params: {idPedido: id}});
                setStatusAPI(res.status);
              } 
            } catch (error) {
              console.log(error);
              setStatusAPI(e => error.response.data.status)
              setErrorMessageHead(e => error.response.data.message)
              setErrorMessage(e => error.response.data.details[0])
            }
          };
          deleteAPI();
    }, 800);
  }

  function handleConfirmar() {
    window.location.reload(true);
  }

  function handleConfirmarErro() {
    setTimeout(function() {
      window.location.reload(true);
    }, 100)
  }

  return (
    <>
      <PopupStyle>
       
          {props.titulo === 'pedido' && props.tipo === 'deletarLoad' && isConfirmado === false && statusAPI === 0 ? <><p>Você tem certeza que deseja deletar?</p>
            <div className="boxBotoes">
              <button className="botaoDeletar" onClick={props.click}>Cancelar</button>
              <button className="botaoDeletar" onClick={() => {setConfirmado(true); processarDelete()}}>Deletar</button>
            </div>
            </>:''
          }
          {props.titulo === 'pedido' && props.tipo === 'deletarLoad' && isConfirmado === true && statusAPI === 0 ? <><p>Deletando o/a {props.titulo}</p>
            <Loader/>
            </>:''
          }
          {props.titulo === 'pedido' && props.tipo === 'deletarLoad' && isConfirmado === true && statusAPI === 200 ? <><p>O {props.titulo} {props.id} foi deletado com sucesso!</p>
          <button className="botaoDeletar" onClick={() => handleConfirmar()}>OK</button>
          </> : ''
          }
          {props.titulo === 'pedido' && props.tipo === 'deletarLoad' && isConfirmado === true && statusAPI === 400 ? <><h1>{errorMessageHead}</h1>
          <p>{errorMessage}</p>
          <button className="botaoDeletar" onClick={() => handleConfirmarErro()}>OK</button>
          </> : ''
          }
        
      </PopupStyle>
    </>
  );
};
