import React, { useState } from "react";
import {
  Container,
  H1,
  Input,
  Button,
  Image,
  InputLabel,
  Order,
} from "./styles";
import LogoBurger from "./Assets/LogoBurger.png";
import Trash from "./Assets/trashOrders.png";

const App = () => {
  const [pedidos, setPedidos] = useState([]);
  const [takingOrder, setTakingOrder] = useState();
  const [takingName, setTakingName] = useState();

  const clickAddOrder = () => {
    setPedidos([{ id: Math.random(), takingOrder, takingName }])
  }

  const addOrders = (event) => {
    setTakingOrder(event.target.value);
  }
  const addName = (event) => {
    setTakingName(event.target.value);
  }

  return (
    <Container>
      <Image alt="logo-burger" src={LogoBurger} />
      <H1>Faça seu Pedido</H1>

      <InputLabel>Pedido</InputLabel>
      <Input onChange={addOrders} placeholder="Pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input onChange={addName} placeholder="Nome do Cliente" />

      <Button onClick={clickAddOrder}>Novo Pedido</Button>

      <ul>
        {pedidos.map((order) => (
          <Order key={order.id}>
            <p>
              {order.clienteName} <br />
              {order.order} <br />
              {order.price} <br />
              {order.status}
            </p>

            <button>
              <img src={Trash} alt="Lata-de -lixo" />
            </button>
          </Order>
        ))}
      </ul>
    </Container>
  );
};

export default App;
