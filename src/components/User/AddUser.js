import React, { useState } from 'react'
import Button from '../Button/Button';
import Card from '../Card/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import classes from './AddUser.module.css';

//Add User will be the form that had two inputs and two labels
//label and input one will take in the a username
//labal and input two will take in the a age in years
//last but not least it will have an add user button
//it will also have a error modal that pops if the user doesn't inputs no information and trys to add a user
//the input fields should clear when the user clicks add user

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const userNameHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorClickHandler = () =>{
        setError(null);
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        const userData = {
            id: Math.random().toString(),
            userName: enteredUserName,
            age: enteredAge,
        };

        if (userData.userName.trim().length === 0) {
            setError({
                title: 'Username Input Error',
                message: 'Please enter a valid username'
            });
            return;
        }

        if (+userData.age < 1) {
            setError({
                title: 'Age Input Error',
                message: 'Please enter a valid age greater then 0'
            });
            return;
        }

        props.onSaveUserData(userData);
        setEnteredUserName('');
        setEnteredAge('');
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorClickHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' value={enteredUserName} onChange={userNameHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' value={enteredAge} onChange={ageHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;