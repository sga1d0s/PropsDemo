import React from "react"

function Card({ name, description, image, price, stock }) {

  return (
    <>
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-text">
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <p>Precio: {price} €</p>
          {/* ternario para mostrar el color */}
          <p style={{ color: stock < 20 ? 'red' : 'black' }}>
            Stock: {stock} units
          </p>
        </div>

      </div>
    </>
  )
}

export default Card