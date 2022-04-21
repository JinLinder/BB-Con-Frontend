import {render, screen} from '@testing-library/react';
import PostList from '../Community/PostList'


test('should render activity with specific actId', () => {
    const post = {author: "Gabriel",
                  title: "Tvätta håret på barn",
                  comments: [],
                  likes:['Jin', 'Sara'],
                  postId:"2cdfba36-f7e0-49c7-b3c4-81b12153ba26",
                  text:"",
                  _id: "625f0651a7307b9c5bddb718"
            };
    
    const actListElement = screen.getByTestId('2cdfba36-f7e0-49c7-b3c4-81b12153ba26');
   render(<PostList post={post}/>)
    expect(actListElement).toBeInTheDocument();
    expect(actListElement).toHaveTextContent('Tvätta håret på barn');

})