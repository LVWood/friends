import React from 'react';
import './friendform.css';
import axios from 'axios';

class FriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend || {
            name: '',
            age: '',
            email: '',
        }
    };

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend, 
                [e.target.name]: e.target.value
            }
        }))
    }

    handleSubmit = e => {
        this.props.addFriend(e, this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }
    
    render() {
        return (
            <form className="friend-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="name" 
                    onChange={this.changeHandler}
                    value={this.state.friend.name} />
                <input 
                    type="number" 
                    name="age"
                    placeholder="age"
                    onChange={this.changeHandler}
                    value={this.state.friend.age} />
                <input 
                    type="text" 
                    name="email"
                    placeholder="email"
                    onChange={this.changeHandler} 
                    value={this.state.friend.email}/>
                <button onSubmit={this.props.addFriend}>Add Friend</button>
            </form>
        )
    }
    
}

export default FriendForm;

