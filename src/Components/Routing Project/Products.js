import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/data")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(() => {
                alert(" Failed To Fetch Data")
            })
    }, [])

    const server = (newdata) => {
        return axios.post("http://localhost:3000/cart", newdata);
    };

    const userData = (ele) => {
        let newdata = {
            title: ele.title,
            image: ele.image,
           // description: ele.description,
            price: ele.price,
        };
        server(newdata)
            .then((response) => {
                // console.log(response.data);
                alert("Added to Cart Successfully");
                // Do something with the response data
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
                // Handle the error appropriately
            });
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginLeft: "55px" }}>
            {
                data.map((ele) => {
                    return (
                        <div style={{ boxShadow: "0 0 10px black", width: "400px", marginTop: "20px" }}>
                            <img src={ele.image} width={250} height={250} />
                            <h2>{ele.title}</h2>
                            <p>${ele.price}</p>
                            <button onClick={() => userData(ele)} on style={{ marginBottom: "10px" }}>Add Card</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Products