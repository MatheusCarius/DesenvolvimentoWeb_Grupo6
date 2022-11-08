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
        <button className="buttonHome"  style={{  width: 60, height: 30, marginTop: 10 }} onClick={handleGoProducts}>Home</button>
       

        <Container className='sobre'>
            <Titulo className='titulo'> Serra </Titulo>
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