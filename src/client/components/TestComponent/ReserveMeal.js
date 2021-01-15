import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

 function ReserveMeal(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phonenumber,  setPhonenumber] = useState('');
    const [number_of_guests, setNumber_of_guests]= useState('');

    const {id} = useParams();
    
    const onSubmit =()=>{
    (async () => {
        await fetch('/api/reservations',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                number_of_guests:number_of_guests,
                meal_id: parseInt(id),
                name : name,
                phonenumber : phonenumber,
                email : email
                 
            })
        })
    })()
}
 
return(
       <><label>number_of_guest</label>
       <input type="text" value={number_of_guests} onChange={(e)=>setNumber_of_guests(e.target.value)}/><br/>
       <label>name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>phonenumber</label>
        <input type="text" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/><br/>
        <button onClick={onSubmit}>Book a meal</button><br/>
       </>
   )
}
export default ReserveMeal;
    