import React from 'react';
import { useParams } from 'react-router-dom';


function User(props) {

    const params = useParams();
    
    return (
        <div>
            <h1>User - {params.name}</h1>
            <p>world-famous name with a world famous fortune</p>
            
        </div>
    );
}

export default User;