import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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


  //Tipo GET
  useEffect(() => {
    async function fetchOrder() {
      const { data: allOrders } = await axios.get(
        "http://localhost:3005/order"
      );
      setPedidos(allOrders);
    }
    fetchOrder();
  }, []);

// Tipo DELETE
  const delOrder = async (orderid) => {
    await axios.delete(`http://localhost:3005/order/${orderid}`);
    const newOrder = pedidos.filter((order) => order.id !== orderid);
    setPedidos(newOrder);
  };
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

      <ul>
        {pedidos.map((order) => (
          <Order key={order.id}>
            <p>{order.clientName}</p>

            <p>
              {order.order}
              <br />
              {order.status}
              <br />
              {order.price}
            </p>

            <button onClick={() => delOrder(order.id)}>
              <img src={Trash} alt="Lata-de -lixo" />
            </button>
          </Order>
        ))}
      </ul>
    </Container>
  );
};

export default App;
