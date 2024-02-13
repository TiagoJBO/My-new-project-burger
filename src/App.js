import React from "react";
import { Container, H1, Input, Button, Image, InputLabel } from "./styles";
import LogoBurger from "./Assets/LogoBurger.png";

const App = () => {
  return (
    <Container>
      <Image alt="logo-burger" src={LogoBurger} />
      <H1>Faça seu Pedido</H1>
      <InputLabel>Pedido</InputLabel>
      <Input placeholder="Pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Nome do Cliente" />
      <Button>Novo Pedido</Button>
    </Container>
  );
};

export default App;
