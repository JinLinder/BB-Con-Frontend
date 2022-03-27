import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ActList from './ActList'

export default function ActHome() {

  const [allActs, setAllActs] = useState([]);
  const [search, setSearch] = useState({})
  
 
  //fetch all the activities
  
  useEffect(()=>{
    fetch('http://localhost:5000/activity/')
          .then(res=>res.json())
          .then(data=>{console.log(data); setAllActs(data)})
  }, [])
    // const loadUserData = ()=>{

      // console.log(search.comminity)
      //     if (search.comminity!=null) {
      //       console.log(search.comminity)
      //       fetch('http://localhost:5000/activity/')
      //       .then(res=>res.json())
      //       .then(data=>{console.log(data); setAllActs(data)})
      //     }
                  // switch(search) {
        

      //   case "searchCom":
      //     console.log(search.comminity)
      //     if (search.comminity!=null) {
      //       console.log(search.comminity)
      //       fetch('http://localhost:5000/activity/')
      //       .then(res=>res.json())
      //       .then(data=>{console.log(data); setAllActs(data)})
      //     const searchFilter=allActs.filter(act=>act.community===search.community)
      //       console.log(searchFilter)}
      //       break;
      //       default: 
      //       fetch('http://localhost:5000/activity/')
      //       .then(res=>res.json())
      //       .then(data=>{console.log(data); setAllActs(data)});
            
      // }
    // }
    

   

 //handle crete activity
  const navigate=useNavigate()
  const handleCreateA =()=>{
    navigate("/activity/add")
  }

  //handle search function
  // const handleSearch= ()=>{
  //       if (search.community && search.date==null) {
  //         console.log(search.community)
  //         fetch('http://localhost:5000/activity/')
  //         .then(res=>res.json())
  //         .then(allActs=>{console.log(allActs); setAllActs(allActs)})
  //         const searchCom=allActs.filter(act=>act.community===search.community);
  //         console.log(searchCom);
  //         setAllActs(searchCom)
  //         console.log(allActs);
  //       } else if (search.community==null && search.date){
  //         console.log(search.date)
  //         fetch('http://localhost:5000/activity/')
  //         .then(res=>res.json())
  //         .then(allActs=>{console.log(allActs); setAllActs(allActs)})
  //         const searchDate=allActs.filter(act=>act.date===search.date);
  //         console.log(searchDate);
  //         setAllActs(searchDate)
  //         console.log(allActs);

  //       }

  // }

  return (  

    <div>
        <select name="location" id="" 
          onChange={(e)=>{setSearch({...search, community: e.target.value})}}
          >
            <option value="" disabled selected>Select a community</option>
            <option value="Täby">Täby</option>
            <option value="Sollentuna">Sollentuna</option>
            <option value="Solna">Solna</option>
        </select>
        <input type="date" 
        onChange={(e)=>{setSearch({...search, date: e.target.value})}} 
        />
        <button
        //  onClick={handleSearch}
         >Search</button> <br />
        <button onClick={handleCreateA}>Create activity</button>
        {allActs.map((act) => ( <ActList
                                key={act.actId}
                                act={act}
                                />)

        )}
    </div>
  )
}

