import React from 'react';
import './friendslist.css'

const FriendDetails = props => {
    return (
        <div className="card-details">
            <p>{props.name} is {props.age} years old.</p>
            <p>You can contact {props.name} at {props.email}.</p> 
        </div>
    )
}

export default FriendDetails;