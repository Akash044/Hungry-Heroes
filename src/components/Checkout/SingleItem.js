import React from "react";

const SingleItem = (props) => {
    const { strMeal, strCategory, strArea, strMealThumb } = props.item;
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
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
