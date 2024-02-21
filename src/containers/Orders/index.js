import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, H1, Button, Image, Order } from "./styles";
import LogoBurger1 from "../../Assets/LogoBurger1.1.png";
import Trash from "../../Assets/trashOrders.png";

const Orders = () => {
  const [pedidos, setPedidos] = useState([]);
  

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
      <Image alt="logo-burger" src={LogoBurger1} />

      <H1>Pedidos</H1>

      <ul>
        {pedidos.map((order) => (
          <Order key={order.id}>

            <p className="pName">{order.clientName}</p>

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

      <Button>Voltar</Button>
    </Container>
  );
};

export default Orders;
