import React from 'react';
import { Link } from 'react-router-dom';


function UsersPage(props) {
    
    return (
        <div>
            <h1>Users page</h1>
            <ul>
                <li>
                    <div>Steven Paul Jobs</div>
                    <Link to="/users/Steven">look information</Link>
                </li>
                <li>
                    <div>Bill Gates</div>
                    <Link to="/users/Bill">look information</Link>
                </li>
                <li>
                    <div>Michael Dell </div>
                    <Link to="/users/Michael">look information</Link>
                </li>
            </ul>
        </div>
    );
}

export default UsersPage;