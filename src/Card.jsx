import React from "react"

function Card({ id, name, description, image, price, stock, discount, handleClick, }) {

  return (
    <>
      <div className="card">
        <div>
          <div className="cont-discount">
            <img
              src="/discount.png"
              alt="Discount"
              style={{
                display: discount < 1 ? 'none' : 'content',
                maxHeight: '25px'
              }}
            />
          </div>
          <img src={image} alt={name} className="card-image" />
        </div>

        <div className="card-text">
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <p>Precio: {price} €</p>
          <p style={{
            display: discount < 1 ? 'none' : 'content'
          }}
          >Precio descuento: {price - price * discount / 100} €</p>
          {/* ternario para mostrar el color */}
          <p style={{
            color: stock < 20 ? 'red' : 'black',
            display: stock < 3 ? 'none' : 'content',
          }}>
            Stock: {stock} unidades
          </p>
          <p style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: '150%',
            border: 'solid, 2px, red',
            display: stock > 3 ? 'none' : 'content',
            textAlign: 'center'
          }}>
            Quedan menos de 3 unidades
          </p>
        </div>
        <div className="cont-button">
          <button className="button" onClick={() => {
            handleClick(id)
          }}>Comprar</button>
        </div>
      </div>
    </>
  )
}

export default Card