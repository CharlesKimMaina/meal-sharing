import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import GetMeal from "./components/TestComponent/GetMeal";
import ReserveMeal from "./components/TestComponent/ReserveMeal";
import Header from "./components/TestComponent/Header";
import Home from "./components/TestComponent/Home";
import NavBar from "./components/TestComponent/NavBar";
import MealById from "./components/TestComponent/MealById";
import MealImages from "./components/TestComponent/MealImages";



export default function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/home" component ={Home}/>     
       <Route exact path="/getmeal" component={GetMeal}/>
       <Route exact path="/reservemeal" component={ReserveMeal}/>  
       <Route exact path="/mealbyid" component={MealById}/> 
       <Route exact path="/mealimages" component={MealImages}/> 
    </Router>
  );
}


