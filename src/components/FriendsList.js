import React from 'react';

const FriendsList=(props) => {
    return (
        <div className="friend-card">
            <h2>{props.person.name}</h2>
            <div className="card-details">
                <p>{props.person.name} is {props.person.age} years old.</p>
                <p>You can contact {props.person.name} at {props.person.email}.</p>
            </div>
        </div>
    )
}

export default FriendsList;