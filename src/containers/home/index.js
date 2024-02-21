import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  H1,
  Input,
  Button,
  Image,
  InputLabel,
  
} from "./styles";
import LogoBurger from "../../Assets/LogoBurger.png";


const App = () => {
  const [pedidos, setPedidos] = useState([]);
  const inputOrder = useRef();
  const inputClientName = useRef();



  // Tipp POST
  async function clickAddOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3005/order", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });

    setPedidos([...pedidos, newOrder]);
  }



  return (
    <Container>
      <Image alt="logo-burger" src={LogoBurger} />
      <H1>Faça seu Pedido</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} name="pedidos" placeholder="Pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input
        ref={inputClientName}
        name="nome do cliente"
        placeholder="Nome do Cliente"
      />

      <Button onClick={clickAddOrder}>Novo Pedido</Button>

      
    </Container>
  );
};

export default App;
