import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StyledActItem } from '../../Styles/activity/ActItem.style';
import JoinAct from './JoinAct';
import {FaTimes} from 'react-icons/fa';

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
    const navigate = useNavigate()
    const handleCancle=()=>{
      navigate("/activity")
    }
      return (
        <StyledActItem>
          <>
          
              {item.map((i)=>( <div key={i.actId}>
                <FaTimes 
                  style={{cursor: 'pointer', 
                  position:'relative', 
                  left:'360px',
                  top: '-60px',
                  color:'#F04141',
                  background:'grey',
                  
                }} onClick={handleCancle}/>
                <h2>{i.title}</h2>
                <div className='container'>
                  <div className='info'>
                    <h3>Details:</h3>
                    <p>{i.info}</p>
                  </div>
                  <div className='timeAdress'>
                    <p>{i.time}</p>
                    <p>Community:{i.community}</p>
                    <p>{i.adress}</p>
                  </div>
                </div>
                <h4>Organizer:{i.username}</h4>
                <JoinAct item={i}/>
              </div>  
              ))}
          </>
        </StyledActItem>
      )
}




















