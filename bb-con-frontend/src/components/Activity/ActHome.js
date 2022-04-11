import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledActHome } from '../../Styles/activity/ActHome.style';
import ActList from './ActList'

export default function ActHome() {

  const [allActs, setAllActs] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([]);


  //fetch all the activities
  useEffect(()=>{
    fetch('http://localhost:5000/activity/')
          .then(res=>res.json())
          .then(data=>{console.log(data); setAllActs(data);setOutput(data)})
    }, 
  [])
  
  // handle filter function
  useEffect(()=>{
    //search only by community
    if(search.community){
      const result = allActs.filter(act=>{return act.community===search.community})
      setOutput(result)
      console.log("search.community")
    }
    //search only by time
    if(search.time){
      const result= allActs.filter(act=>{return act.time.includes(search.time)})
      setOutput(result)
      console.log(outPut)
      console.log(search.time)
    }
    //search by both
    if(search.community && search.time){
      const result= allActs.filter(
        act=>{return act.community===search.community && act.time.includes(search.time)}
      )
      setOutput(result)
      console.log(result)
      console.log(search.time)
    }
    }
    , [search]
  )

   //handle crete activity
   const navigate=useNavigate()
   const handleCreateA =()=>{
     navigate("/activity/add")
   }
   //handle show my activity
   const showMyAct=()=>{
     
   }
  return (
    <StyledActHome>
      <div>
        <button onClick={showMyAct}>My activities</button>
        <h3>Search activities</h3>
          <select name="location" id=""
            onChange={(e)=>{setSearch({...search, community: e.target.value})}}
            >
              <option value="" disabled selected>Select a community</option>
              <option value="Täby">Täby</option>
              <option value="Sollentuna">Sollentuna</option>
              <option value="Solna">Solna</option>
          </select>
          <input type="datetime-local"
          onChange={(e)=>{setSearch({...search, time: e.target.value})}}
          />  <br />
          <br />
          <button onClick={handleCreateA}>Create activity</button>
          <div className='activityCards'>
            {outPut.map((act) => ( <ActList
                                    key={act.actId}
                                    act={act}
                                    />)
            )}
          </div>
      </div>
    </StyledActHome>
  )
}

