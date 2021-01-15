import React from 'react'
import "./MealImages.css";
import "./Home.css";

function MealImages(){
    return (

<div className="meals-gallery">
<h4 className="meals-flavours">OUR MEALS here on the right,welcome!</h4><br/>
<div className="meal-offers">
<div className="meal-rows">
  <div className="col-1">
  {<img className ="meal1"src = "https://i.imgur.com/FFsAHlO.jpeg" alt="beef stew"/>}
  <p className = "meal-title">beef stew</p> 
    </div>

  <div className="col-1">
  {<img className ="meal2"src = "https://i.imgur.com/A2suaKR.jpg" alt="barflychikie stew"/>}
  <p className = "meal-title">barflychikie</p> 
    </div>

  
</div>
  <br/>

  <div className="meal-rows3">
  <div className="col-1">
  {<img className ="meal7"src = "https://i.imgur.com/MwGBT7s.jpg" alt="fish lasagne"/>}
  <p className = "meal-title">fish lasagne</p> 
  </div>

<div className="col-1">
{<img className ="meal8"src = "https://i.imgur.com/0XYC9J4.jpeg" alt="fish fly"/>}
<p className = "meal-title">fish fly</p> 
</div>


</div>
<br/>

<div className="meal-rows4">
<div className="col-1">
{<img className ="meal1"src = "https://i.imgur.com/0gGt9HM.jpg" alt="potatoes mix"/>}
<p className = "meal-title">potatoes mix</p> 
  </div>

  <div className="col-1">
  {<img className ="meal2"src = "https://i.imgur.com/IpX4wCe.jpg" alt="danskmel"/>}
  <p className = "meal-title">danskemel</p> 
    </div>

  
</div>

<div className="meal-rows5">
<div className="col-1">
{<img className ="meal1"src = "https://i.imgur.com/UztvRoG.jpg" alt="rice curry"/>}
<p className = "meal-title">rice curry</p> 
  </div>

  <div className="col-1">
  {<img className ="meal2"src = "https://i.imgur.com/c5EqfiI.jpg" alt="barflychikie stew"/>}
  <p className = "meal-title">barflychikie stew</p> 
  </div>

  
</div>

<div className="meal-rows6">
<div className="col-1">
{<img className ="meal1"src = "https://i.imgur.com/xzGKqSW.jpg" alt="beers and booze"/>}
<p className = "meal-title">beers and booze</p> 
</div>

  <div className="col-1">
  {<img className ="meal2"src = "https://i.imgur.com/O6YDzI3.jpeg" alt="whisky flavours"/>}
  <p className = "meal-title">whisky flavours</p> 
  </div>
  </div>

  <div className="meal-rows2">
  <div className="col-1">
  {<img className ="meal3"src = "https://i.imgur.com/asdBEJV.jpg" alt="veggies"/>}
  <p className = "meal-title">veggies</p>    
  </div>

  <div className="col-1">
{<img className ="meal9"src = "https://i.imgur.com/WlU3ug3.jpeg" alt="egg cookies"/>}
<p className = "meal-title">egg cookies</p> 
</div>
  </div>

  <div className="meal-rows7"> 
  <div className="col-1">
  {<img className ="meal3"src = "https://i.imgur.com/MdBRpKO.jpg" alt="wines"/>}
  <p className = "meal-title">wines</p> 
  </div>
  </div>
  </div>
  </div>
    )
}

export default MealImages;
