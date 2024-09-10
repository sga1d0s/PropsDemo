import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'

import './Card.css'
import './App.css'

function App() {

  const datos = [
    { name: "Portatil", description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.", image: "/public/portatil.jpeg", price: 200, stock: 10, },
    { name: "Lavadora", description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.", image: "/public/lavadora.jpeg", price: 62, stock: 14, },
    { name: "Television", description: "Cupidatat tempor ipsum veniam incididunt velit est.", image: "/public/television.jpeg", price: 772, stock: 21, },
    { name: "Telefono", description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.", image: "/public/movil.jpeg", price: 25, stock: 24, },
    { name: "Tablet", description: "Cupidatat tempor ipsum veniam incididunt velit est. Lorem occaecat ea ex exercitation consectetur esse laboris voluptate cillum minim nulla tempor incididunt irure.", image: "/public/tablet.jpeg", price: 300, stock: 12, }
  ]

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(datos);
  }, [])

  return (
    <>
      <h1>Productos Stock</h1>
      <div className="card-container">
        {datos.map((producto, index) => (
          <Card
            key={index}
            name={producto.name}
            description={producto.description}
            image={producto.image}
            price={producto.price}
            stock={producto.stock}
          />
        ))}
      </div>
    </>
  )
}

export default App
