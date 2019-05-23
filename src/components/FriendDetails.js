import React from 'react';
import './friendslist.css'

// function friend({ item, deleteItem, history, updateItem }) {
//     const item = props.items.find(
//       thing => `${thing.id}` === props.match.params.id
//     );

const FriendDetails = ({match, history, friends}) => {
    const friend = friends.find(
        person => `${person.id}` === match.params.id 
    );
        console.log("here from FriendDetails");
    if (friends.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="card-details">
            <h2>{friend.name}</h2>
            <p>{friend.name} is {friend.age} years old.</p>
            <p>You can contact {friend.name} at {friend.email}.</p> 
        </div>
    )
}

export default FriendDetails;