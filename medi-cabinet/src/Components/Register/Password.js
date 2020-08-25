import React, {useState, useEffect} from 'react';

const inputTextFields = ["password", "confirm"];

function Password({onChange, formValues, setErrorValue, setSubmitDisabled}) {

    let [passwordsAreEqual, setPasswordsAreEqual] = useState(false);


    useEffect(() => {
        if (formValues.password !== formValues.confirm){
            setSubmitDisabled(true);
            setPasswordsAreEqual(false);
        }
        else {
            setSubmitDisabled(false);
        }
    })


    useEffect(() => {
        if (!passwordsAreEqual){
            setErrorValue('Passwords must match.')
            setSubmitDisabled(true);
        }
        else
        {
            console.log(passwordsAreEqual);
            setErrorValue('');
            setSubmitDisabled(false)
        }

    }, [passwordsAreEqual, setErrorValue, setSubmitDisabled])

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
            <>
            <label
                key={`${item}-${ind}`}
                htmlFor={item}
            > 
                {item[0].toUpperCase()+item.slice(1)}:
            </label>
                <input
                    id={item}
                    className={item}
                    type='text'
                    name={item}
                    value={inputTextFields[item]}
                    onChange={onChange}
                    placeholder={createPlaceholderText(item)}
                />
            </>
            
                )
            })}
        </>
    )
    
}
    


export default Password;