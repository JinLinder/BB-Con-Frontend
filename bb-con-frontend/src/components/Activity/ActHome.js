import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ActList from './ActList'

export default function ActHome() {

  const [allActs, setAllActs] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([])


  //fetch all the activities
  useEffect(()=>{
    fetch('http://localhost:5000/activity/')
          .then(res=>res.json())
          .then(data=>{console.log(data); setAllActs(data)})
  }, [])

  // handle filter function
  useEffect(()=>{
    // default value without search
    setOutput(allActs)

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

  return (

    <div>
      <p>Search activities</p>
        <select name="location" id=""
          onChange={(e)=>{setSearch({...search, community: e.target.value})}}
          >
            <option value="" disabled selected>Select a community</option>
            <option value="Täby">Täby</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
        </select>
        <input type="date"
        onChange={(e)=>{setSearch({...search, time: e.target.value})}}
        />  <br />
         <br />

        <button onClick={handleCreateA}>Create activity</button>
        {outPut.map((act) => ( <ActList
                                key={act.actId}
                                act={act}
                                />)

        )}
    </div>
  )
}

