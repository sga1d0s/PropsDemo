"use strict";

// estados
import { useEffect, useState } from 'react'

// componentes
import React from 'react'
import Card from './Card'
import ListItem from './ListItem'

// estilos
import './Card.css'
import './App.css'
import './ListItem.css'

function App() {

  const cardData = [
    {
      id: 1,
      name: "Portatil",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/portatil2.png",
      price: 200,
      discount: 20,
      stock: 2,
    },
    {
      id: 2,
      name: "Lavadora",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/lavadora.png",
      price: 62,
      discount: 0,
      stock: 14,
    },
    {
      id: 3,
      name: "Television",
      description: "Cupidatat tempor ipsum veniam incididunt velit est.",
      image: "/television.png",
      price: 772,
      discount: 20,
      stock: 21,
    },
    {
      id: 4,
      name: "Telefono",
      description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.",
      image: "/movil.png",
      price: 25,
      discount: 0,
      stock: 24,
    },
    {
      id: 5,
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

  function handleClick(id) {
    // filtra por id y guarda en 'filterData'
    const filterData = cardData.filter(data => data.id === id)

    // prevBuyList parametro usado para mantener los datos y añadir nuevos
    setBuyList(prevBuyList => [...prevBuyList, ...filterData]);
  }

  return (
    <>
      <div className='products-container'>
        <h1>Productos Stock</h1>
        <div className="card-container">
          {/* recorre products */}
          {products.map((product, index) => (
            <Card
              key={index}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              stock={product.stock}
              discount={product.discount}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>

      <div className="buylist-container">
        <h1>Buy List</h1>
        <div className='list-container'>
          {buyList.map((item, index) => (
            <ListItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />            
          ))}
        </div>
      </div>
    </>

  )
}

export default App
