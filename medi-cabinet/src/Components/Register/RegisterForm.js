import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

import registerFormSchema from '../../validation/registerFormSchema'

const initialFormValues = {
    name: '',
    username: '',
    password: '',
    confirm: '',
    email: '',
    age: '',
    tos: false,
}

let initialErrorValue;

const inputTextFields = ["name", "username", "password", "confirm", "email", "age"];

//ADD TOS CHECKBOX;

export default function RegisterForm(props){

    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValue, setErrorValue] = useState(initialErrorValue);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [user, setUser] = useState({});


    function updateValues(inputName, inputValue){
        setFormValues({...formValues, [inputName]: inputValue});
    }

    function onChange(event) {
        const {name, value} = event.target;
        updateValues(name, value);
        validateInput(name, value);
    }

    function onCheckBoxChange(event){
        const {name, checked} = event.target;
        updateValues(name, checked);
        validateInput(name, checked);
    }
    
    function onSubmit(event){
        event.preventDefault();
        setUser(formValues)
    }
    
    function validateInput(name, value){
        yup.reach(registerFormSchema, name)
            .validate(value)
            .then(() => {
                setErrorValue(initialErrorValue);
            })
            .catch(error => {
                setSubmitDisabled(true);
                setErrorValue(error.errors[0]);
            })
    }

    function createPlaceholderText(name){
        if (name === "confirm"){
            return "Please confirm password..."
        }
        else
        {
            return `Enter ${name[0].toUpperCase()+name.slice(1)}...`
        }
    }

    useEffect(() => {
        axios.post("https://reqres.in/api/users", user)
            .then(response => {
                console.log(response.data);
                let test = document.createElement('div');
                test.textContent = JSON.stringify(response.data);
                document.querySelector(".register-form").appendChild(test);
            })

            
    },[user])


    return (
        <form className="register-form" onSubmit={onSubmit}>
            {inputTextFields.map((item, ind) => {
                return (
            <label
                key={`${item}-${ind}`}
                htmlFor={item}
            > 
                {item[0].toUpperCase()+item.slice(1)}

                <input
                    id={item}
                    type='text'
                    name={item}
                    value={formValues[item]}
                    onChange={onChange}
                    placeholder={createPlaceholderText(item)}
                />
            </label>
             
                )
            })}
            <label htmlFor='tos'>Terms and Conditions:
                <input
                    id='tos'
                    type='checkbox'
                    name='tos'
                    checked={formValues.tos}
                    onChange={onCheckBoxChange}
                >
                
                </input>
            </label>

            <label htmlFor='submit'>
                <button
                    id='submit'
                    name='submit'
                >
                    Register an Account
                </button>
                {errorValue && <div style={{color: 'red'}}>{errorValue}</div>}
            </label>
        </form>
    )
}
