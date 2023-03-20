import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StyledActItem } from '../../Styles/activity/ActItem.style';
import JoinAct from './JoinAct';
import { StyledHome } from '../../Styles/Home.style';
import { Container, Row, Col } from "react-bootstrap";
import { CloseIcon, HeadingL } from '../../Styles/Global';

export default function ActItem() {

    const [item, setItem] = useState([])
    const params = useParams();
    const url = `http://localhost:5000/activity/item/${params.actId}`

    //get the activity with activity Id
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>{setItem(data)}  )
    },
    [url])

    //handle cancle function
    const navigate = useNavigate()

    const handleCancle=()=>{
      navigate("/home/activity")
    }

      return (
        <StyledHome>
            {item.map((i)=>( 
                <Container key={i.actId} style={{ backgroundColor:"white"}}>            
                    <Row style={{padding:"40px 0"}}> 
                      <div><CloseIcon  onClick={handleCancle} style={{position:"relative", left:"40%", bottom:"15%"}}/></div>          
                      <HeadingL style={{padding:"0px"}}> {i.title}</HeadingL> 
                      
                      <p style={{padding:"0px"}}>Organizer: {i.username}</p>
                  </Row>              
                  <Row style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <Col lg={7} md={7}>
                    <div style={{padding:"20px 0", margin:"20px 0", backgroundColor:"#F5F4F4", borderRadius: "25px"}}>
                    <h3>Details:</h3>
                          <p style={{margin: "40px 0px", padding:"0px 20px", textAlign:"left"}}>{i.info}</p>                          
                          <JoinAct item={i}/>
                    </div>
                    </Col>
                    <Col lg={4}  md={4}>
                      <div style={{padding:"20px 0", backgroundColor:"#F5F4F4", borderRadius: "25px"}}>
                        <p><strong>Time: </strong>{i.time.substring(0, 10)}</p>
                        <p><strong>Adress:</strong> {i.community} {i.adress}</p>
                      </div>                      
                    </Col>
                  </Row>              
                </Container>
            ))}
        </StyledHome>
      )
}




















