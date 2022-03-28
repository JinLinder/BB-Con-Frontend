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
  // useEffect(()=>{
  //   setOutput([])
  //   allActs.filter(act=>{
  //     if(act.community===search.community){
  //       setOutput(outPut=>[...outPut, act])
  //     }
  //   }
  //   )
  // }, [search])
  useEffect(()=>{
    setOutput([])
    if(search.community){
      allActs.filter(
        act=>{
              if(act.community===search.community){
                setOutput(outPut=>[...outPut, act])
              }
            }
      )
      console.log("search.community")
    }
    if(search.time){
      allActs.filter(
        act=>{
              if(act.time.includes(search.time)){
                setOutput(outPut=>[...outPut, act])
              }
            }
      )
      console.log(outPut)
      console.log(search.time)
    }

    if(search.time && search.time){
      allActs.filter(
        act=>{
              if(act.community===search.community && act.time.includes(search.time)){
                setOutput(outPut=>[...outPut, act])
              }
            }
      )
      console.log(outPut)
      console.log(search.time)
    }


    }, [search]
  )

   //handle crete activity
   const navigate=useNavigate()
   const handleCreateA =()=>{
     navigate("/activity/add")
   }
  // const handelFilter= ()=>{

  //     allActs.filter(act=>act.date===search.date)

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
        onChange={(e)=>{setSearch({...search, time: e.target.value})}}
        />
        {/* <button
         onClick={handleSearch}
         >Search</button> <br /> */}
        <button onClick={handleCreateA}>Create activity</button>
        {outPut.map((act) => ( <ActList
                                key={act.actId}
                                act={act}
                                />)

        )}
    </div>
  )
}

