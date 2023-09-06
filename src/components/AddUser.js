import React from 'react';
import Card from '../components/Card';
import classes from '../components/AddUser.module.css';
import Button from '../components/Button';
import { useState } from 'react';


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {    //앞뒤 공백을 제거
        return;
        }
        if (+enteredAge < 1){       //위에 초기화는 문자열로 하고있지만 정수형태로 받아오는것으로 만들기 위해 +기호를 사용하여 정수로 바꾸는 안전한 작성법(기교임)
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor='age'>Age(Years)</label>
            <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
            <Button type='submit'>Add User</Button> 
        </form>
        </Card>
    );
};
export default AddUser; 