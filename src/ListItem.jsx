import React from "react";

function ListItem({ id, image, name, description }) {

  return (
    <>
      <div className="listitem-container">
        <div className="listitem-image-container">
          <img
            src={image}
            alt={name}
            style={{
              maxHeight: '30px',
              marginRight: '5px'
            }}
          />
        </div>
        <div className="listitem-text-container" style={{marginRight: '5px'}}>
          <div>{name}</div>
          {/* <p>{description}</p> */}

        </div>
        <div 
          className="listitem-quantity-container"
        >
          {/* <p>{quantity}</p> */}
          <input type="number" id="tentacles" name="tentacles" min="0" max="100"
          style={{
            width:"2em",
            }} />

        </div>

      </div>
    </>
  )
}

export default ListItem