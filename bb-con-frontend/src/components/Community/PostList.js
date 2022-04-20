import React from 'react';
import { StyledPostList } from '../../Styles/community/PostList.style';
import { NavLink } from 'react-router-dom';

export default function PostList(props) {
  return (
    <StyledPostList>
      <NavLink className="link" to={{pathname:`/community/post/${props.post.postId}`}}>
        <div>
            <p className='title'>{props.post.title}</p>
            <p className='author'>Author: {props.post.author}</p>
        </div>
      </NavLink>
    </StyledPostList>
  )
}
