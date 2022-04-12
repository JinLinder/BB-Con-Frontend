import React from 'react';
import { Link } from 'react-router-dom';
import { StyledPostList } from '../../Styles/community/PostList.style';
import { NavLink } from 'react-router-dom';

export default function PostList(props) {
  return (
    <StyledPostList>
      <NavLink className="link" to={{pathname:`/community/post/${props.post.postId}`}}>
        <div>
            <p>post title: {props.post.title}</p>
        </div>
      </NavLink>
    </StyledPostList>
  )
}
