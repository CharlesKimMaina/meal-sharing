import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";

function NavBar() {
    return (
        <div className = "links">        
          <Link to="/home"> home</Link><br/>
          <Link to="/getmeal"> GetMeal</Link><br/>
          <Link to="/reservemeal">ReserveMeal</Link><br/>
          <Link to="/mealbyid">MealById</Link><br/>
          <Link to="/mealimages">MealImages</Link><br/>
            </div>
    )
}

export default NavBar
