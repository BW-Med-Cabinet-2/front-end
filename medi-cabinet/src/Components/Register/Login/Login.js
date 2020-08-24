import React, {useState} from 'react';
import axios from "axios";
import * as Yup from "yup";

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
        <form>
            {inputTextFields.map((item, ind) => {
                return (
            <label
                key={`${item}-${ind}`}
                htmlFor={item}> {item}
                <input
                    id={item}
                    type='text'
                    name={item}
                    value={formValues[item]}
                    onChange={onChange}
                />
             </label>
                )
            })}
        </form>
    )
}