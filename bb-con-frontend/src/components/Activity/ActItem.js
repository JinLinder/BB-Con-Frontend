import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'

export default function ActItem() {

    const params = useParams();

    console.log(params.actId);
    useEffect(()=>{
        fetch('http://localhost:5000/activity/item/'+params.actId)
            .then(res=>res.json())
            .then(data=>{console.log(data); console.log("fetch works")} )
    }       
    )
  return (
    <div>
        <h3>Title:</h3>
    </div>
  )
}




















