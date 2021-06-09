import React, { useContext, useState } from "react";

import {cartContext} from '../../App'

const SingleMeal = (props) => {
  const { strMeal, strCategory, strArea, strMealThumb } = props.meals;
  const [cart, setCart] = useContext(cartContext);
  const [isAdd, setIsAdd] = useState(false);
  const addCartBtn = () => {
    setCart([...cart,props.meals]);
    setIsAdd(!isAdd)
  }
  const removeCartBtn= () => {
    setCart(cart.filter(item => item.idMeal !== props.meals.idMeal));
    setIsAdd(!isAdd)
  }
  console.log(isAdd);
  return (
    <div className="shadow-lg rounded-lg h-48 w-80 p-4 bg-white">
      <div className="mx-auto flex gap-4">
        <div>
          <img src={strMealThumb} alt=" " className="h-40 w-44 rounded-md" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{strMeal}</h1>
          <h3>{strCategory}</h3>
          <h3>{strArea}</h3>
          <button className="bg-violet-600 text-white rounded-md p-1 shadow-xl hover:text-black" onClick={isAdd? removeCartBtn : addCartBtn}>
           {isAdd? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
