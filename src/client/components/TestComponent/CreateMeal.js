import React, { useState } from 'react';

export default function CreateMeal(){
    const[title,setTitle] = useState('');
    
    const onSubmit =()=>{
    (async () => {
        await fetch('http://localhost:5000/api/meals',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title
            })
        })
    })()
}
return(
       <>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={onSubmit}>submit</button>
       </>
   )
}