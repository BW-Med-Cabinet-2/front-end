import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Label, FormGroup} from 'reactstrap'; 
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';
import * as yup from 'yup';

import Password from './Password';

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

const inputTextFields = ["name", 'username', "email", "age"];



export default function RegisterForm(props){

    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValue, setErrorValue] = useState(initialErrorValue);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    
    const history = useHistory(); 

    useEffect(() => {

        registerFormSchema.isValid(formValues)
            .then(valid => {
                setSubmitDisabled(!valid);
     
            })
            .catch(error => {
                setSubmitDisabled(true);
            })
    }, [formValues, errorValue])



    function updateValues(inputName, inputValue){
        setFormValues({...formValues, [inputName]: inputValue});
    }
    
    function onChange(event) {
        const {name, value} = event.target;
        updateValues(name, value);
        validateInput(name, value);
    }
    
    function onCheckBoxChange(event){
        event.stopPropagation();
        const {name, checked} = event.target;
        updateValues(name, checked);
        validateInput(name, checked);
    }
    
  
    
    function validateInput(name, value){
        
        yup.reach(registerFormSchema, name)
        .validate(value)
        .then(() => {
            setErrorValue('');
        })
        .catch(error => {
            setSubmitDisabled(true);
            console.log(error);
            setErrorValue(error.errors[0]);
        })
    }

    const [user, setUser] = useState({});
    
    useEffect(() => {
        axiosWithAuth()
            .post("/api/users", user)
            .then(response => {
                console.log(response.data);
                let test = document.createElement('div');
                test.textContent = JSON.stringify(response.data);
                document.querySelector(".register-form").appendChild(test);
            })

            
    },[user])


    return (

        <Form className='register-form'>
            {inputTextFields.map((item, ind) => {
                return (
            <>
            <label
                key={`${item}-${ind}`}
                htmlFor={item}> {item[0].toUpperCase()+item.slice(1)}{': '}
                <Input
                    id={item}
                    className={item}
                    type='text'
                    name={item}
                    value={formValues[item]}
                    onChange={onChange}
                    placeholder={`Enter ${item[0].toUpperCase()+item.slice(1)}...`}
                />
             </label>
             <br></br>
            </>
                )
            })}
            <Password
                onChange={onChange}
                formValues={formValues}
                setErrorValue={setErrorValue}
                setSubmitDisabled={setSubmitDisabled}
            />
            <FormGroup check>
                
                    <Input
                        id='tos'
                        type='checkbox'
                        name='tos'
                        checked={formValues.tos}
                        onChange={onCheckBoxChange}
                    >
                    Terms of Service
                    </Input>
                    <Label htmlFor='tos'> Terms of Service</Label>
            </FormGroup>
            
                <Button
                    id='submit'
                    name='submit'
                    disabled={submitDisabled}
                >
                    Register an Account
                </Button>
                {errorValue && <div style= {{color: 'red'}}>{errorValue}</div>}

        </Form>
    )}