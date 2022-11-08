import React from 'react';
import { useNavigate} from "react-router-dom"
import Carrossel from '../../components/Carrossel';
import Footer from '../../components/Footer';
import { Container, Titulo, SobreDescricao, SobreMain, } from '../../styles/global';






export const Sobre = (props) => {

    const navigate = useNavigate();

    function handleGoProducts() {
        navigate("/", {state: {

        }});
    }

    return (
        <>

        <SobreMain>
       

        <Container className='sobre'>
            <Titulo className='titulo'> Serratec 2022 </Titulo>
            <SobreDescricao>
                Trabalho Final desenvolvido como requisito para aprovação da
                disciplina desenvolvimento web!
            </SobreDescricao>
            <Titulo className='titulo'>Responsáveis pelo Trabalho</Titulo>
            <Carrossel/>
        </Container>
        <Footer/>
        </SobreMain>
        </>
    );
}