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
            .then(data=>{console.log(data); setItem(data)}  )
    },
    [url])
  return (
    <div>
        <h3>Activity</h3>
        {item.map((i)=>( <div>
          <p>Title:{i.title}</p>
          <p>time:{i.time}</p>
          <p>community:{i.community}</p>
          <p>adress:{i.adress}</p>
          <p>info:{i.info}</p>
          <p>participants:{i.participants}</p>
          <button>Join</button>
        </div>
          
          
        ))}
    
    </div>
  )
}




















