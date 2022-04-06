import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import JoinAct from './JoinAct';


export default function ActItem() {

    const [item, setItem] = useState([])
    const params = useParams();
    console.log(params.actId);
    const url = `http://localhost:5000/activity/item/${params.actId}`

    //get the activity with activity Id
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>{setItem(data);console.log(data)}  )
    },
    [url])

    console.log(localStorage.getItem("user"))
    console.log(item)
    
      return (
        <div>
            <h3>Activity</h3>
            {item.map((i)=>( <div key={i.actId}>
                
              <p>Title:{i.title}</p>
              <p>time:{i.time}</p>
              <p>community:{i.community}</p>
              <p>adress:{i.adress}</p>
              <p>organizer:{i.username}</p>
              <p>info:{i.info}</p>
              <JoinAct item={i}/>
            </div>  
            ))}
        
        </div>
      )
}




















