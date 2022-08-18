import React from 'react'
import './categorybtn.css'
const CategoryBtn = ({ filterItem , catValue}) => {
  return (
    <>
     <div className="categoryDiv">
        <div className="menuBtn">
          {catValue.map((Elem,index) => {
            console.log(Elem)
            return <button key={index} onClick={()=>{filterItem(Elem)}}>{Elem}</button>
          }) }
          </div>
        </div> 
    </>
  )
}

export default CategoryBtn;
