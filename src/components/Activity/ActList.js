import React, { useEffect } from 'react';
import { StyledActList } from '../../Styles/activity/ActList.style';
import { NavLink } from 'react-router-dom';

export default function ActList(props) {
 
  return (
    <StyledActList>
      <NavLink className="link" to={{pathname:`/activity/item/${props.act.actId}`
                }}
                data-testid={`${props.act.actId}`}
      >
          <p className='title'>{props.act.title}</p>
          <div className='timeAdress'>
            <p className='time'><strong>Adress: </strong> {props.act.community}, {props.act.adress};</p>
            <p className='adress'><strong>Time: </strong>{props.act.time.substring(0, 10)}</p>           
          </div>
          
          <p className='detail'>{props.act.info}</p>
      </NavLink>
    </StyledActList>
  )
}
