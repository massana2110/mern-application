import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: response.data })
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({ username: '' })
        this.getUsers();
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id)
        this.getUsers()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create new user</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li 
                                    className="list-group-item 
                                    list-group-item-action" 
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default CreateUser;