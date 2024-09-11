import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import BuyList from './BuyList'

import './Card.css'
import './App.css'

function App() {

  const cardData = [
    {
      name: "Portatil",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/portatil2.png",
      price: 200,
      discount: 20,
      stock: 2,
    },
    {
      name: "Lavadora",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/lavadora.png",
      price: 62,
      discount: 0,
      stock: 14,
    },
    {
      name: "Television",
      description: "Cupidatat tempor ipsum veniam incididunt velit est.",
      image: "/television.png",
      price: 772,
      discount: 20,
      stock: 21,
    },
    {
      name: "Telefono",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/movil.png",
      price: 25,
      discount: 0,
      stock: 24,
    },
    {
      name: "Tablet",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/tablet.png",
      price: 300,
      discount: 20,
      stock: 12,
    }
  ]

  const buyData = []


  const [products, setProducts] = useState([]);
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    /* setea products con datos */
    setProducts(cardData);
  }, [])

  useEffect(() => {
    /* setea products con datos */
    setBuyList(buyData);
  }, [])


  return (
    <>
      <h1>Productos Stock</h1>
      <div className="card-container">
        {/* recorre products */}
        {products.map((product, index) => (
          <Card
            key={index}
            cardId={index}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
            stock={product.stock}
            discount={product.discount}
          />
        ))}
      </div>

      <div className="card-container">
        <BuyList />
      </div>
    </>

  )
}

export default App
