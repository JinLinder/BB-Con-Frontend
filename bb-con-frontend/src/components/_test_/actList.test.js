import {render, screen} from '@testing-library/react';
import ActList from '../Activity/ActList';


test('should render activity with specific actId', () => {
    const act = {_id: '625666f35b3e557175f921db', 
                username: 'Jin', 
                actId: '6be2006b-b82f-4c53-9f00-aa7ad62db45b', 
                title: 'Mamma Yoga', 
                community: 'Täby',
                info: "Let's do yoga together with our babies. We will train in a circle. The babies can play together in the center.",
                participants: ['Jin', 'Sara'],
                adress: "Tibble hallen",
                time: "2022-05-07T08:00:00.000Z"
            };
    
    const actListElement = screen.getByTestId('6be2006b-b82f-4c53-9f00-aa7ad62db45b');
   render(<ActList act={act}/>)
    expect(actListElement).toBeInTheDocument();
    expect(actListElement).toHaveTextContent('Mamma Yoga');

})