import React from 'react';
import './friendslist.css';
import FriendDetails from './FriendDetails';

const FriendsList=(props) => {
    return (
        <div className="friend-card">
            <h2>{props.person.name}</h2>
            <FriendDetails name={props.person.name} age={props.person.age} email={props.person.email}/>
        </div>
    )
}

export default FriendsList;