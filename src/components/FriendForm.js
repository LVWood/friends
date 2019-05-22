import React from 'react';
import { types } from '@babel/core';

const FriendForm = () => {
    return (
        <form className="friend-form">
            <h4>Add a friend</h4>
            <input type="text" placeholder="name"></input>
            <input type="text" placeholder="age"></input>
            <input type="text" placeholder="email"></input>
        </form>
    )
}

export default FriendForm;

