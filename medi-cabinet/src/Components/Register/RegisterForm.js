import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialFormValues = {
    name: '',
    username: '',
    password: '',
    email: '',
    age: '',
    tos: false,
}

const inputTextFields = ["name", "username", "password", "confirm password", "email", "age"];

//ADD TOS CHECKBOX;

export default function RegisterForm(props){

    const [formValues, setFormValues] = useState(initialFormValues);
    const [user, setUser] = useState({});


    function updateValues(inputName, inputValue){
        setFormValues({...formValues, [inputName]: inputValue});
    }

    function onChange(event) {
        const {name, value} = event.target;
        updateValues(name, value);
    }

    function onCheckBoxChange(event){
        const {name, checked} = event.target;
        updateValues(name, checked);
    }
    
    function onSubmit(event){
        event.preventDefault();
        setUser(formValues)
    }
    
    function createPlaceholderText(name){
        if (name === "confirm password"){
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
                    name={item.split}
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
            </label>
        </form>
    )
}
