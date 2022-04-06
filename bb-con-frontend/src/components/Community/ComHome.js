import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostList from './PostList';

export default function ComHome() {
  const [allPosts, setAllPosts] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([]);

  //fetch all the posts

  useEffect(()=>{
    fetch('http://localhost:5000/community/')
      .then(res=>res.json())
      .then(data=>{console.log(data); setAllPosts(data); setOutput(data)})
    }, 
  []);
  // handle search
  useEffect(()=>{
    if(search.searchWords!=null){
      const result = allPosts.filter(post=>{
        return post.title.includes(search.searchWords) ||  post.text.includes(search.searchWords)})
        setOutput(result)
        console.log(outPut)
        console.log(search.searchWords)

    }
    }, [search]
  )

  //create new post
  const navigate=useNavigate()
  const createPost=()=>{
    navigate("/community/add")
  }
  return (
    <div>
      <h1>Community Home</h1>
      <input type="text" placeholder='search post'
        onChange={(e)=>{setSearch({...search, searchWords: e.target.value})}}/> <br /><br />

      <button onClick={createPost} >Share something</button>

      {
        outPut.map((post)=>(
          <PostList
            key={post.postId}
            post={post}/>
        ))
      }

    </div>
  )
}
