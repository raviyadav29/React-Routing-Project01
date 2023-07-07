import { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((rest) => {
        console.log(rest.data);
        setState(rest.data);
      })
  })
  return (
    <div  >
      <h2>Welcome To Home Component</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginLeft: "55px" }}>
        {state.map((elel) => {
          return (
            <div style={{ boxShadow: "0 0 10px black", width: "400px", marginTop: "20px" }}>
              <img src={elel.image} width={250} height={250} />
              <h2>{elel.title}</h2>
              <p>${elel.price}</p>
              <button on style={{ marginBottom: "10px" }}>Add Card</button>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Home