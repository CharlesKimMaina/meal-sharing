import React from 'react';
import GetMeal from './GetMeal';
import "./Home.css";
import "./MealImages";

function Home() {
    return (
        <div>
           <h1 className = "welcome">Checkpoint-Charlie's Restaurant!</h1> 
           <h4 className="meals-flavours">OUR MEALS here on the right,welcome!</h4><br/>
           <p className = "intro">We showcase our best meals offers for our larger Copenhagen customers. 
        Our services are very pocket friendly in terms of pricing, and we are within your reach, WELCOME!.</p>
        <GetMeal/>        
        <footer>All rights reserved @ Charles kim Maina, 2021.
        <div>
       <h2>Find Us Below</h2>
          <div><a className="about-link" href="https://github.com/CharlesKimMaina" target="_blank">Github</a></div>          
          <div><a className="about-link" href="https://www.linkedin.com/in/charles-kimani-maina-49913b59/" target="_blank">LinkedIn</a></div>
       </div></footer>  
        </div>
    )
}

export default Home

