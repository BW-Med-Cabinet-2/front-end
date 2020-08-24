import React, {useState} from 'react';

const initialFormValues = {
    name: '',
}

const inputTextFields = ["name", "password", "email", "age", "test"];

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
