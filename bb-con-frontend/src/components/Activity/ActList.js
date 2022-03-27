import React from 'react';
import { Link } from 'react-router-dom';

export default function ActListjs(props) {
  return (
   <Link to={{pathname:`/activity/item/ ${props.act.actId}`, 
            // state:{actId:props.act.actId}
            }}>
      <div>
        <p>Title: {props.act.title}</p>
        <p>Time: {props.act.time}</p>
        <p>Community: {props.act.community}</p>
        <p>Adress: {props.act.adress}</p>
      </div>
    </Link>
  )
}
