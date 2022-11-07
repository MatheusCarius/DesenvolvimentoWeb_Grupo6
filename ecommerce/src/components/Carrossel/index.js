import React, { useEffect, useState } from "react";
import { SobreDescricao } from "../../pages/sobre/style";
import { CarrosselStyle } from "./style";
import ImagemPedro from "../../Sources/img/identidadePedro.jpg";
import ImagemMatheus from "../../Sources/img/identidadeHector.jpg";
import ImagemPaulo from "../../Sources/img/Paulo.jpg";
import ImagemHector from "../../Sources/img/identidadeHector.jpg";
import ImagemMichael from "../../Sources/img/identidadeMichael.jpg";

import Seta1 from "../../Sources/icons/icons8-arrow-50.png";
import Seta2 from "../../Sources/icons/icons8-arrow-50.png";

function Carrossel(props) {
  const [itemAtivo, setItemAtivo] = useState(0);
  const [contador, setContador] = useState(4);
  const timer = () => setContador(contador - 1);

  useEffect(() => {
    if (contador <= 0) {
      setContador((e) => 4);
      setItemAtivo((e) => e + 1);
      if (itemAtivo >= 5) {
        setItemAtivo((e) => 0);
        return;
      }
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [contador]);

  function alterarImagem(id) {
    setItemAtivo((e) => id);
    setContador((e) => 4);
  }

  function voltarImagem() {
    if (itemAtivo === 0) {
      setItemAtivo((e) => 4);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e - 1);
      setContador((e) => 4);
    }
  }
  function avancarImagem() {
    if (itemAtivo === 4) {
      setItemAtivo((e) => 0);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e + 1);
      setContador((e) => 4);
    }
  }

  return (
    <>
      <CarrosselStyle>
        {itemAtivo === 0 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemPedro} alt="Pedro" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                            Pedro lacerda 
                            Idade: 19 anos
                            Estudante:   
                            Para mais projetos acesse:
                          <li><a href="https://github.com/pedrocarius7 " >GitHub</a></li> 
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 1 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemMatheus} alt="Matheus" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">

                            Matheus Carius
                            Idade: 26 anos
                            Estudante:   
                            Para mais projetos acesse:
                          <li><a href="https://github.com/MatheusCarius" >GitHub</a></li> 
                          
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 2 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemPaulo} alt="Paulo" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">

                            Paulo Henrique Mayworm
                            Idade: 33 anos
                            Estudante:  
                            Para mais projetos acesse:
                          <li><a href="http://github.com/PauloMayworm" >GitHub</a></li>                     
                                               
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 3 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemHector} alt="Hector" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">

                            Hector de Oliveira
                            Idade: 26 anos
                            Estudante 
                            Para mais projetos acesse:
                            <li><a href="http://github.com/HectorBonilhaa" >GitHub</a></li>  
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 4 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemMichael} alt="Michael" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
             
                            Michael Fernandes
                            Idade: 26 anos
                            Estudant
                            Para mais projetos acesse:
                            
                            <li><a class="git-link"  href="http://github.com/michaelfernan" >GitHub</a></li>                     
                          
                        
              </SobreDescricao>
            </div>
          </div>
        ) : null}
       
        <div className="navegacaoCarrosel">
          <div className="left" onClick={voltarImagem}>
            <img src={Seta2} alt="seta" />
          </div>
          <div className="middle">
            <span
              className={
                itemAtivo === 0 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(0)}
            ></span>
            <span
              className={
                itemAtivo === 1 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(1)}
            ></span>
            <span
              className={
                itemAtivo === 2 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(2)}
            ></span>
            <span
              className={
                itemAtivo === 3 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(3)}
            ></span>
            <span
              className={
                itemAtivo === 4 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(4)}
            ></span>
        
          </div>
          <div className="right" onClick={avancarImagem}>
            <img src={Seta1} alt="right" />
          </div>
        </div>
      </CarrosselStyle>
    </>
  );
}

export default Carrossel;
