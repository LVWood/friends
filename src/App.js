import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FriendDetails from './components/FriendDetails';

import { Route, Link, NavLink } from 'react-router-dom';
import './App.css';

// const blankFriend = {
//   name: '',
//   age: '',
//   email: ''
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  getFriendById = id => {
    axios
      .get(`http://localhost:5000/friendById/${id}`)
      .then(res => this.setState({ activeItem: res.data }))
      .catch(err => console.log(err))
  }

  addFriend = (e, person) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", person)
      .then(res => this.setState({
      friends: res.data
    }))
      .catch(err => console.log(err))
  };

  // updateFriends = () => {
  //   axios
  //     .put(`http://localhost:5000/friends/${this.state.newId}`, this.state.name)
  //     .then(res => {
  //       this.setState({
  //         friends: res.data,
  //         newId: null,
  //         isAdding: false,
  //         friend: blankFriend
  //       });
  //     })
  //     .catch(err => console.log(err))
  // };

  render() {
    if (this.state.friends.length === 0) {
      return <h1>Loading...</h1>
  }

    return (
      <div className="App">
        
        <NavBar />
        {/* <div className="header">
          <Home />
        </div> */}

        <Route exact path="/" component={Home}/>
        <Route exact path="/friend-list" render={props => ( 
          <FriendsList {...props} friends={this.state.friends} getFriendById={this.getFriendById} /> )} 
        />
        <Route exact path="/friends-list/:id" render={props => ( 
          <FriendDetails {...props} friends={this.state.friends} /> )} 
        />
        <Route path="/friend-form" render={props => (
          <FriendForm 
            {...props} 
            activeFriend={this.state.activeFriend} 
            addFriend={this.addFriend} 
            updateFriends={this.updateFriends}
          /> )}
        />
        
        
      </div>
     );
  }
}

export default App;
