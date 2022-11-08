import React,{useState, useEffect} from "react"
import { api } from "../../Services/api/api";
import { Container, Titulo } from "../../styles/global";
import { Input, Form, ButtonContainer, RegistroButton } from "./styled";
import { Popup } from "../../components/Popup";
import { TabelaCategorias } from "../TabelasCategory";
import BadRequest from "../../components/BadRequest";
import { Loader } from "../../components/Loader";



export const Categoria = () =>{
    const [listaCategorias, setListaCategorias] = useState([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [statusAPI, setStatusAPI] = useState(0)
    const [isConfirmado, setConfirmado] = useState(false);
    const [requisitarGet, setRequisitarGet] = useState(false);

    useEffect(() =>{
        carregarAPI();

    }, [requisitarGet]);

    function carregarAPI () {
        const getCategoriaAPI = async () => {
            try{
                
                const res = await api.get("categoria");
                setStatusAPI(res.status);
                setListaCategorias(res.data);
            } catch(error) {
                console.log(error);
                if (error.code === "ERR_NETWORK"){
                    setStatusAPI((e) => 502);
                }
            }
        };
        getCategoriaAPI();
    }
     const handleFechar = () => {
      
        
        setConfirmado(!isConfirmado);
     };

     const handleConfirmar = () => {
       

        setConfirmado(!isConfirmado)
        setRequisitarGet(!requisitarGet)
     }

     const handleSubmit = (event) => {
        event.preventDefault();
        setNome("");
        setDescricao("");
        
      };
    

     const verificarResponse = () => {
        if(statusAPI === 0){
            return <></>
        }
        if(statusAPI === 200){
            return <><TabelaCategorias lista={listaCategorias}/></>
            
        } if(statusAPI === 502) {
            return <><BadRequest/></>
        } else {
            return <><BadRequest/></>
        }
     }

     return(
        
        <Container>
            <Titulo>Cadastrar Categoria</Titulo>
            <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nome da Categoria" onChange={(event) => setNome(event.target.value)} value={nome}/>
            <Input type="text" placeholder="Descrição da Categoria" onChange={(event) => setDescricao(event.target.value)} value={descricao}/>
            <ButtonContainer>
                <RegistroButton type="submit" value="Cadastrar" onClick={() => {
                   
                   
                         return setConfirmado(!isConfirmado);
                     }}/>
            </ButtonContainer>
            </Form>
            {isConfirmado ? <Popup titulo={"categoria"} informacoes={{
                nome: nome,
                descricao: descricao,
                }} clickFechar={handleFechar} clickConfirmar={handleConfirmar} /> :""}
            <Titulo>Listar Categorias</Titulo>
            {verificarResponse()}
        </Container>
     );
            };