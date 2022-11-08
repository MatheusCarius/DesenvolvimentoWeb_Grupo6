import React from 'react';
import { BoxBadStyle } from './styled';

function BadRequest(props) {
    return (
        <>
            <BoxBadStyle>
                <img src="https://i.imgur.com/FqnlYH5.png" alt='palhaço'></img> 
                <div className='mensagemErro'>
                    <h1>Ops... Alguma coisa deu errado</h1>
                    <p>Os desenvolves estão trabalhando duro para fazer tudo voltar ao normal</p> 
                </div>
                
            </BoxBadStyle>
           
        </>
    );
}

export default BadRequest;