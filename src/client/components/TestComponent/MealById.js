import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealById (){
    const[meal, setMeal]= useState([]);
    const[id, setId]= useState('1');


    useEffect(() => {
        // IIFE
        (async () => {
          const mealWithId = await fetch(`/api/meals/${id}`);
          const responseText= await mealWithId.json();
          console.log(responseText);
             setMeal(responseText);
            })();
      }, [id]);
    return (
        <div>
<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
<div>
    {meal.map((m)=>{
        return (
            <ul key = {m.id}>
                <li>{m.title}</li>
                <li>{m.description}</li>
                <li>{m.location}</li>
                <li>{m.when}</li>
                <li>{m.price}</li>
            </ul>
        )
    })}      
            
</div>       
        </div>
    )
}

export default MealById 

/*
function MealById (){
    meal}
    {
        const [loadedMeal, setLoadedMeal] = useState('meal');
        const {mealId} = useParams();

        useEffect(() => {
            if (meal && mealId)
            return;
            fetch(`/api/meals/${id}`)
            .then(res => res.json())
            .then(m => setLoadedMeal(m))
            .catch(e => console.log('error fetching meal, e'));
        }, [meal, mealId]);
        if(!loadedMeal)
        return 'Loading ...';
        const {id, title} = loadedMeal;
        return <h3>{id}{title}</h3>
        }

        export default MealById

 */
