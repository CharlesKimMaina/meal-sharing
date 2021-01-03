import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {CreateMeal} from "./components/TestComponent/CreateMeal";
import {GetMeal} from "./components/TestComponent/GetMeal";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>test</p>
      </Route>
      <Route exact path="/getmeal">
      <p>kavya test</p><GetMeal/> 
      </Route>
      <Route exact path="/createmeal">
        <CreateMeal/>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
