import React, { useState, useEffect } from 'react';
import "./Home.css";
import "./MealImages.css";


function GetMeal(){
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
        // IIFE
        (async () => {
          const mealResponse = await fetch('/api/meals/');
          const responsedata= await mealResponse.json();
          console.log(responsedata);
             setMeals(responsedata);
            })();
      }, []);        

return(
       <div className="meals-samples">           
        {meals.map((meal) => (           
            <li key={meal.id}>
            <li>{meal.title}</li>
            <li className="pris">{meal.price}</li>
            <li className="descri">{meal.description} {""}</li></li>
        ))}           
       </div>
   )
}
export default GetMeal;