import React, { Component } from 'react';
import Useritem from './Useritem';

class Users extends Component {
    State = {
        users: [
            {
                id: 1,
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: 2,
                login: 'defunkt',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: 3,
                login: 'pjhyett',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.State.users.map(user => (
                    <Useritem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
