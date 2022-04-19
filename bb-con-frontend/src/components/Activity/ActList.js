import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { format } from 'date-fns'
import { StyledActList } from '../../Styles/activity/ActList.style';
import { NavLink } from 'react-router-dom';

export default function ActList(props) {
  // const date = props.act.time.getDate();

  // const [time, setTime] = useState(props.act.time)
  //  console.log(time);

  // const date = format(new Date(), 'MM-dd-yyyy HH:mm')
  const date = new Date()
  console.log(date);
  // const [date, setDate] =

  return (
    <StyledActList>

      <NavLink className="link" to={{pathname:`/activity/item/${props.act.actId}`
                }}>

            <p className='title'>{props.act.title}</p>
            <p className='time'>{props.act.time}</p>
            <p className='adress'>{props.act.community}, {props.act.adress}</p>

        </NavLink>

    </StyledActList>
  )
}
