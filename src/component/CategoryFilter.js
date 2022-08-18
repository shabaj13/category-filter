import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import "./categoryfilter.css";
import FoodList from "./FoodList";
import MenuData from "./MenuData";

const allCatValue = [...new Set(MenuData.map((cat) => {return cat.category})),'all'];

const CategoryFilter = () => {

  const [food, setFood] = useState(MenuData);
  const [catValue , setCatValue] = useState(allCatValue);

  const filterItem = (cate) => {

    if (cate === "all") {
      setFood(MenuData);
      return;
    }

    const updateItems = MenuData.filter((curElem) => {
      return cate === curElem.category;
    })
    setFood(updateItems);
  }

  return (
    <>
      <div className="container">
        <div className="headingDiv">
          <h1>Grand Canyon Food Category</h1>
        </div>

        <CategoryBtn filterItem={filterItem} catValue={ catValue} />
        <FoodList food={food} />
      </div>
    </>
  );
};

export default CategoryFilter;
