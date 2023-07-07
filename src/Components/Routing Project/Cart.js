import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((res) => setCart(res.data));
  }, [cart]);
  // console.log(cart)
  const del = (id) => {
    // console.log(id)
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((response) => console.log(response))
      .catch(() => alert("failde delete"));
  };
  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return (
            <div
              style={{
                margin: "50px",
                border: "1px solid black",
                padding: "8px",
              }}
              key={item.id}
            >
              <img
                width="200px"
                height="200px"
                src={item.image}
                alt="product_image"
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p style={{ color: "blue" }}>$ {item.price}</p>
              <button
                style={{
                  backgroundColor: "Red",
                  width: "100px",
                  height: "30px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={() => del(item.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;