import { useEffect, useState } from 'react'
import Card from './Card'

import './App.css'

function App() {

  const datos = [
    { name: "Portatil", description: "Descripción", image: "src", price: 200, stock: 10, },
    { name: "Lavadora", description: "Descripción", image: "src", price: 62, stock: 14, },
    { name: "Television", description: "Descripción", image: "src", price: 772, stock: 21, },
    { name: "Telefono", description: "Descripción", image: "src", price: 25, stock: 24, }
  ]

  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts(datos);

  }, [])

  console.log(object);

  return (
    <>

      <h1>Productos Stock</h1>
      <Card name={datos.name} />
    </>
  )
}

export default App
