import axios from 'axios'
import React, { Component } from 'react'

export default class ListUser extends Component {

    state = {
        users: [],
    }
    render() {
        return (
            <div className='list'>
                <h1>Nombre d'utilisateurs : {this.state.users.length}</h1>
                {
                    this.state.users.map(u => <div className='user'>
                        <h2>Nom : {u.name}</h2>
                        <p>Email : {u.email}</p>
                        <p>Ville : {u.address.city} - Rue : {u.address.street}</p>
                    </div>
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data
        }

        getData().then(users => this.setState({ users }));
    }
}
