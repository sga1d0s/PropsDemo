import React from "react"

function Card({name, description, img, price, stock}) {

  return (
    <>
      <ul>
        <li>Nombre:</li>
        <li>Descripción:</li>
        <li>img</li>
        <li>Price</li>
        <li>Stock</li>
      </ul>
    </>
  )
}

export default Card