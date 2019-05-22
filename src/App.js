import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Friends</h1>
        </div>
        <FriendForm />
        {this.state.friends.map(friend => {
          return <FriendsList person={friend} />
        })}
        
      </div>
     );
  }
}

export default App;
