import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'

export default function ActItem() {

    const params = useParams();

    console.log(params.actId);
    useEffect(()=>{
        fetch(`http://localhost:5000/activity/${params.actId}`)
            .then(res=>res.json())
            .then(data=>{console.log(data)})
    }
        
    )

  return (
    <div>
        <h3>Title:</h3>
    </div>
  )
}




















