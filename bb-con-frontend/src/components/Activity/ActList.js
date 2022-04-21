import React from 'react';
import { StyledActList } from '../../Styles/activity/ActList.style';
import { NavLink } from 'react-router-dom';

export default function ActList(props) {
  return (
    <StyledActList>
      <NavLink className="link" to={{pathname:`/activity/item/${props.act.actId}`
                }}
                data-testid={`${props.act.actId}`}>
          <p className='title'>{props.act.title}</p>
          <p className='time'>{props.act.time}</p>
          <p className='adress'>{props.act.community}, {props.act.adress}</p>
      </NavLink>
    </StyledActList>
  )
}
