import React, {useState, useEffect} from 'react';

const inputTextFields = ["password", "confirm"];

function Password({onChange, formValues, setErrorValue, setSubmitDisabled}) {

    let [passwordsAreEqual, setPasswordsAreEqual] = useState(false);
    let [password, setPassword] = useState(formValues.password);
    let [confirm, setConfirm] = useState(formValues.confirm);

    useEffect(() => {
        if (password !== confirm){
            setSubmitDisabled(true);
        }
        else {
            setSubmitDisabled(false);
        }
    }, [password, confirm, setSubmitDisabled])

    useEffect(() => {
        if (formValues.confirm === formValues.password){
            setPasswordsAreEqual(true);
            setSubmitDisabled(false);
        }
    }, [formValues, setSubmitDisabled])

    useEffect(() => {
        if (!passwordsAreEqual){
            setErrorValue('Passwords must match.')
            setSubmitDisabled(true);
        }
        else
        {
            setErrorValue('');
            setSubmitDisabled(false)
        }

    }, [formValues, passwordsAreEqual, setErrorValue, setSubmitDisabled])

    function createPlaceholderText(name){
        if (name === "confirm"){
            return "Please confirm password..."
        }
        else
        {
            return `Enter ${name[0].toUpperCase()+name.slice(1)}...`
        }
    }

   
    return (
        <>
            {inputTextFields.map((item, ind) => {
                return (
            <label
                key={`${item}-${ind}`}
                htmlFor={item}
            > 
                {item[0].toUpperCase()+item.slice(1)}

                <input
                    id={item}
                    className={item}
                    type='text'
                    name={item}
                    value={inputTextFields[item]}
                    onChange={onChange}
                    placeholder={createPlaceholderText(item)}
                />
            </label>
            
                )
            })}
        </>
    )
    
}
    


export default Password;