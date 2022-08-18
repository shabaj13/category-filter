import React from 'react'
import './foodlist.css'
const FoodList = ({food}) => {
  return (
    <>
       <div className="itemsDiv">
          {food.map((elem) => {
            const { name, price, description, image,id } = elem;
            return (
              <div className="itemContent" key={id}>
            <div className="imgDiv">
              <img src={image} alt={name} />
            </div>
            <div className="itemDetailsDiv">
                  <h3>{name}</h3>
                  <p>{description}</p>
              <div className="priceDiv">
                <span>Price: {price}₹</span>
                <button>Order Now</button>
              </div>
            </div>
          </div>
           )
         }) }
        </div>
    </>
  )
}

export default FoodList
