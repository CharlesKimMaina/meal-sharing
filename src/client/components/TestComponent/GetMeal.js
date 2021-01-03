import React, { useState, useEffect } from 'react';

export default function GetMeal(){
    const[title,setTitle] = useState();
    
    useEffect(()=>{
const onSubmit =()=>{
    (async () => {
       const mealResponse =  await fetch('http://localhost:5000/api/meals')
        const responsedata = await mealResponse.json() 
        console.log(responsedata);
        setTitle(responsedata);     
    })()
}
    }, [])

return(
       <div>
        {title}
       </div>
   )
}