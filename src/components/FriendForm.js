import React from 'react';
import './friendform.css';

const FriendForm = () => {
    return (
        <form className="friend-form">
            <h4>ADD A FRIEND</h4>
            <input type="text" placeholder="name"></input>
            <input type="text" placeholder="age"></input>
            <input type="text" placeholder="email"></input>
            <button>Add Friend</button>
        </form>
    )
}

export default FriendForm;

