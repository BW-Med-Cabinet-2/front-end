import React, {useState} from 'react';
import { Form, Input } from 'reactstrap'; 
import axios from "axios";
import * as Yup from "yup";


const initialFormValues = {}
export default function LoginForm(props){
    
    const inputTextFields = ["name", "password"];

    function updateValues(inputName, inputValue){
        setFormValues({...formValues, [inputName]: inputValue});
    }

    const [formValues, setFormValues] = useState(initialFormValues);


    function onChange(event) {
        const {name, value} = event.target;
        updateValues(name, value);
    }

    return (
        <Form inline> 
            {inputTextFields.map((item, ind) => {
                return (
            <label
                key={`${item}-${ind}`}
                htmlFor={item}> {item}
                <Input
                    id={item}
                    type='text'
                    name={item}
                    value={formValues[item]}
                    onChange={onChange}
                />
             </label>
                )
            })}
        </Form>
    )
}