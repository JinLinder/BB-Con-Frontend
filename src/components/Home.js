import {useState, useEffect} from 'react'; 
import { Link, useParams} from 'react-router-dom';
import { StyledHome, NavContainer} from '../Styles/Home.style';
import { Col, Row, Tab, Container, Nav } from "react-bootstrap";
import ActHome from './Activity/ActHome';
import ComHome from './Community/ComHome';

export default function Home() {

  const { tab } = useParams();
  const [lastTab, setLastTab] = useState("activity");

  useEffect(() => {
    if(tab){setLastTab(tab)} 
    else{ setLastTab("activity") }

  }, [tab]);

  return (
    <StyledHome>
      <Container>        
        <Tab.Container activeKey={lastTab}>
              <Row>
                <Col >
                  <NavContainer variant="tabs"
                  onSelect={(e)=>{
                    if(e) {setLastTab(e)}
                  }}
                  >
                    <Col className="col-auto">
                      <Nav.Item>
                        <Nav.Link className={"nav-link" + (lastTab==="activity" ? "active" : "")} as={Link} to={`/home/activity`}>Activity</Nav.Link>                        
                      </Nav.Item>
                    </Col>
                    <Col className="col-auto">
                      <Nav.Item>
                        <Nav.Link className={"nav-link" + (lastTab==="community" ? "active" : "")} as={Link} to={`/home/community`}>Community</Nav.Link>
                      </Nav.Item>
                    </Col>
                  </NavContainer>
                </Col>
                <Row>
                  <Tab.Content>
                    <Tab.Pane eventKey="activity">
                      <ActHome/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="community">
                      <ComHome/>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Row>
            </Tab.Container>        
      </Container>   
    </StyledHome>
  )
}