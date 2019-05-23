import React from 'react';
import './friendslist.css';
import FriendDetails from './FriendDetails';
import { Link } from 'react-router-dom'


const FriendsList=(props) => {
    // function getFriend(e, friend) {
    //     e.preventDefault();
    //     props.history.push(`/friends-list/${friend.id}`);
    //     props.getFriendById(friend.id)
    // }
    console.log("FriendsList props:", props);
    return (
        <div>
            {props.friends.map(friend => {
    return (
        <Link to={`/friends-list/${friend.id}`}>
        <div className="friend-card" >
            <h2>{friend.name}</h2>
            {/* <FriendDetails name={friend.name} age={friend.age} email={friend.email}/> */}
        </div>
        </Link>
        )
    })}
        </div>
    )
}

export default FriendsList;