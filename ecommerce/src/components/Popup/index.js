import React, { useState, useEffect } from "react";
import { PopupStyle } from "./styled";
import { api } from "../../Services/api/api";

export const Popup = (props) => {
  const [informacaoPost, setInformacaoPost] = useState({});

  useEffect(() => {
    if(props.titulo === 'categoria') {
        let info = props.informacoes
        setInformacaoPost({info});
    }
    // if(props.titulo === 'produto') {
    //     let info = props.informacoes
    //     setInformacaoPost({info})
    // }
  }, []);

  function enviarInformacoes() {
    if (props.titulo === "categoria") {
      const postCategoriaAPI = async () => {
        try {
            const res = await api.post("categoria", {
            nome: informacaoPost.info.nome,
            descricao: informacaoPost.info.descricao,
           
          });
          this.props.statusResponse = res.status
          console.log(res)
        } catch (error) {
          console.log(error);
        }
      };
      
      postCategoriaAPI();
    }
  }

  return (
    <>
      <PopupStyle>
        <div className="popup-tela">
          <p>Tem certeza que deseja criar uma uma {props.titulo}?</p>
                <div className="botoes">
                    <button className="close" onClick={props.clickFechar}>Cancelar</button>
                    <button className="confirm" onClick={() => {
                        enviarInformacoes();
                        props.clickConfirmar()}}>Confirmar</button>
                </div>
        </div>
      </PopupStyle>
    </>
  );
};
