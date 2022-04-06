import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <Link to={{pathname:`/community/post/${props.post.postId}`}}>
      <div>
          <p>post title: {props.post.title}</p>
      </div>
    </Link>
  )
}
