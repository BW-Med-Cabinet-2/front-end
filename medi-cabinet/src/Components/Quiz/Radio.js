import React from 'react';
import {Input, Label, FormGroup} from 'reactstrap';

export default function Radio({onChange, item, value}){


    return (
        <FormGroup>
        
            <Label htmlFor={`${item.name}-${value}`}>
                <Input
                            id={`${item.name}-${value}`}
                            className={item.name}
                            type='radio'
                            name={item.name}
                            value={value}
                            onChange={onChange}
                            /> 
            {value}</Label>
        </FormGroup>
 
    )
}
