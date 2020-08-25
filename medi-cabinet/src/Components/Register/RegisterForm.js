import React, {useState} from 'react';
import { Form, Input } from 'reactstrap'; 

const initialFormValues = {
    name: '',
}

const inputTextFields = ["Name: ", "Password: ", "Email: ", "Age: ", "Test: "];

export default function RegisterForm(props){
    
    function updateValues(inputName, inputValue){
        setFormValues({...formValues, [inputName]: inputValue});
    }

    function onChange(event) {
        const {name, value} = event.target;
        updateValues(name, value);
    }


    const [formValues, setFormValues] = useState(initialFormValues);


    return (
        <Form>
            {inputTextFields.map((item, ind) => {
                return (
            <>
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
             <br></br>
            </>
                )
            })}

             
        </Form>
    )
}
