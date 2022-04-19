import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledComHome } from '../../Styles/community/ComHome.style';
import PostList from './PostList';
import {FaArrowRight} from 'react-icons/fa';

export default function ComHome() {
  const [allPosts, setAllPosts] = useState([]);
  const [search, setSearch] = useState({});
  const [outPut, setOutput]= useState([]);

  const userName = localStorage.getItem("user")
  console.log(userName)

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

  //show all posts
  const myPost = () => {
    const result= allPosts.filter(allPost=>allPost.author===userName);
    console.log(result)
    setOutput(result)
}
  //show my posts

  const handleAllP = () => {
    setOutput(allPosts)
}
  return (
    <StyledComHome>
      <div>
        <h1>Community Home</h1> 
        <input type="text" placeholder='Search'
          onChange={(e)=>{setSearch({...search, searchWords: e.target.value})}}/> <br /><br />

        <button onClick={myPost} >My posts</button>
        <button onClick={createPost} >Share something</button>
        <div className='articleCards'>
          {
            outPut.map((post)=>(
              <PostList
                key={post.postId}
                post={post}/>
            ))
          }
          <div className='allPosts'> <a href="#" onClick={handleAllP}>All posts</a> <FaArrowRight/></div>
        </div> 
      </div>
    </StyledComHome>
  )
}
