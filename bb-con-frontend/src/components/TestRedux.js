import React, {useState}from 'react';
import { connect } from 'react-redux';


function TestRedux({posts}) {
   
  return (
    <div>
            {posts.map((posts)=>(
                <p>{posts.title}</p>
                ))}

    </div>
  )
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStatetoProps)(TestRedux)