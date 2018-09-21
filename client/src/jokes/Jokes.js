import React, { Component } from 'react';
import axios from "axios";

class Jokes extends Component {
    state = { 
        users:[],
     };


    render() { 
        return (
            <div>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </div>
          );
    }


componentDidMount() {
const token = localStorage.getItem('jwt');
const reqOptions = {
    headers: {
        Authorization: token,
    },
};

axios
    .get('http://localhost:3000/api/users', reqOptions)
    .then(res => {
     console.log('Users Data:', res.data);
     this.setState({users: res.data});
    })
    .catch(err => {
     console.error('Axios error:', err)
     this.props.history.push('/signin')
    });
}
}
 
export default Jokes;