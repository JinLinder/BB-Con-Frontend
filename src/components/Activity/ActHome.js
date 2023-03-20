import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ActList from './ActList';
import {FaArrowRight} from 'react-icons/fa';
import { StyledContainer } from '../../Styles/Home.style';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { IconButton } from '../../Styles/Global';
import { PlusLg} from "react-bootstrap-icons";
import CreateAct from './CreateAct';
export default function ActHome() {

  const [allActs, setAllActs] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([]);
  const [showCreate, setShowCreate] = useState(false)

  const userName = localStorage.getItem("user")


  //fetch all the activities
  useEffect(()=>{
    fetch('http://localhost:5000/activity')
          .then(res=>res.json())
          .then(data=>{setOutput(data);  setAllActs(data);})
    }, 
  [])
  
  // handle filter function
  useEffect(()=>{
    //search only by community
    if(search.community){
      const result = allActs.filter(act=>{return act.community.includes(search.community)})
      setOutput(result)
    }
    //search only by time
    if(search.time){
      const result= allActs.filter(act=>{return act.time.includes(search.time)})
      setOutput(result)
    }
    //search by both
    if(search.community && search.time){
      const result= allActs.filter(
        act=>{return act.community.includes(search.community) && act.time.includes(search.time)}
      )
      setOutput(result)
    }
    if( !search.community && !search.time){
      setOutput(allActs)
    }
    }
    , [search]
  )

   //handle create activity
   const navigate=useNavigate()

   const handleCreateA =()=>{
    setShowCreate(true);
   }

   const closeCreateModal = ()=>{
    setShowCreate(false)
  }

  //show new created activity
   const showNewAct = (newAct) =>{
      outPut.push(newAct)
    };

  //handle get all activities
   const handleAllA =()=>{
    setOutput(allActs)
   }

   //handle my activity
   const handleMyA =()=>{
    const result = allActs.filter(act=> act.username===userName);
    setOutput(result)  
   }
  return (
      <StyledContainer>
        <Container>
          <Row >
            <Col lg={3} md={4} style={{paddingTop:"20px"}}>
              <Form.Select name="location" onChange={(e)=>{setSearch({...search, community: e.target.value})}}>
                <option value =""  >Select location</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Malmö">Malmö</option>
              </Form.Select>
            </Col> 

            <Col lg={3} md={4} style={{paddingTop:"20px"}}>
              <Form.Group>
                <Form.Control type="date" onChange={(e)=>{setSearch({...search, time: e.target.value})}}/>
              </Form.Group>
            </Col>         
            <Col lg={6} md={4} style={{paddingTop:"20px", textAlign:"right"}} >
              <IconButton onClick={handleMyA}>My activities</IconButton>
              <IconButton onClick={handleCreateA}>Create<PlusLg/></IconButton>
            </Col>
          </Row>
          <Row>
            <div className='activityCards'>
              {outPut.map((act) => ( <ActList
                                      key={act.actId}
                                      act={act}
                                      />)
              )}
             <IconButton onClick={handleAllA}>All activities <FaArrowRight/></IconButton>
            </div>
          </Row>
        </Container>         
        <CreateAct showCreate={showCreate} closeCreateModal={closeCreateModal} showNewAct={showNewAct} handleCreateA={handleCreateA}/>
      </StyledContainer>
  )
}

