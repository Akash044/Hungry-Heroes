import React, { useEffect, useState } from 'react';
import SingleMeal from './SingleMeal';

const DisplayMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() =>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=m")
        .then(res => res.json())
        .then(meals =>{
            setMeals(meals.meals);
            console.log(meals.meals);
        })
    },[])
    return (
        <div className="flex overflow-hidden flex-wrap justify-around gap-2">
            {
                meals?.map(meals => <SingleMeal key={meals.idMeal} meals={meals}></SingleMeal>)
            }
        </div>
    );
};

export default DisplayMeals;