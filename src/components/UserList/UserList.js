import React from 'react';
import Card from '../Card/Card';

import classes from './UserList.module.css';

const UserList = props => {

    const users = props.savedUserData.map(user => (
        <li key = {user.id}> {user.userName} ({user.age} years old) </li>
    ));

    if (props.savedUserData.length === 0) {
        return (
            <Card className={classes.users}>
                <h2>No user data</h2>
            </Card>
            )
    } else {

        return (
            <Card className={classes.users}>
                <ul>{users}</ul>
            </Card>
        )
    }
}

export default UserList;