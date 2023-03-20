import React from 'react';
import { StyledPostList } from '../../Styles/community/PostList.style';
import { NavLink } from 'react-router-dom';

export default function PostList(props) {
  return (
    <StyledPostList>
      <NavLink className="link" to={{pathname:`/community/post/${props.post.postId}`}}>
        <div data-testid={`${props.post.postId}`}>
            <p className='title'>{props.post.title}</p>
            <p className='author'><strong>Author: </strong>{props.post.author}</p>
            <p className='text'>{props.post.text}</p>
        </div>
      </NavLink>
    </StyledPostList>
  )
}
