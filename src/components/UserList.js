import React from "react";
import Card from '../components/Card';
import classes from '../components/UserList.module.css';

const UserList = (props) => {
    return (
    <Card className={classes.users}>
        <ul>
            {props.users.map((user) => ( 
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>
    );
};

export default UserList;